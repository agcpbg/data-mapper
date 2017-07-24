import React from 'react'
import { connect } from 'react-redux';
import { addTransformRequest } from '../reducer/targetFields'

class BuildRulesBody extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      noCheckedBool: true,
      yesCheckedBool: false,
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    let targetFieldObj = this.props.targetFields.length > 0 ? this.props.targetFields.filter(field => field.name === this.props.selectedTargetField)[0] : null
    let transformVal = targetFieldObj.transform
    transformVal === 'no' ? this.setState({ noCheckedBool: true, yesCheckedBool: false}) : this.setState({ noCheckedBool: false, yesCheckedBool: true})
  }

  handleChange(event) {
    if (event.target.value === 'no') {
      this.setState({ noCheckedBool: true, yesCheckedBool: false })
      this.props.sendOnChange(this.props.selectedTargetField, 'no')
    }
    if (event.target.value === 'yes') {
      this.setState({ yesCheckedBool: true, noCheckedBool: false })
      this.props.sendOnChange(this.props.selectedTargetField, 'yes')
    }
  }

  render() {
    return(
      <div className="buildRules-body">
        <div>
          <p>{`2. Does the data being sent to the ${this.props.selectedTargetField} target field need to be transformed?`}</p>
        </div>
        <form action="">
          <input type="radio" name="noYes" value="no" checked={this.state.noCheckedBool} onChange={this.handleChange} /> No - straight mapping<br />
          <input type="radio" name="noYes" value="yes" checked={this.state.yesCheckedBool} onChange={this.handleChange} /> Yes<br />
        </form>
      </div>
    )
  }
}

// container

const mapState = ({ selectedTargetField, targetFields }) => ({
  selectedTargetField,
  targetFields
});

const mapDispatch = dispatch => ({
  sendOnChange (fieldName, yaynay) {
    dispatch(addTransformRequest(fieldName, yaynay))
  }
});

export default connect(mapState, mapDispatch)(BuildRulesBody);
