import React from 'react'
import { connect } from 'react-redux';
import { addCriteriaType } from '../reducer/targetFields'

class Criteria extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      conditionalBool: false,
      calcBool: false,
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    if (event.target.value === 'conditional') {
      this.setState({ conditionalBool: true, calcBool: false })
      this.props.sendOnChange(this.props.selectedTargetField, 'conditional')
    }
    if (event.target.value === 'calc') {
      this.setState({ calcBool: true, conditionalBool: false })
      this.props.sendOnChange(this.props.selectedTargetField, 'calc')
    }
  }

  render() {
    return(
      <div className="buildRules-body">
        <div>
          <p>{`3. Criteria for mapping this field:`}</p>
        </div>
        <form action="">
          <input type="radio" name="criteria" value="conditional" checked={this.state.conditionalBool} onChange={this.handleChange} /> Conditions are met<br />
          <input type="radio" name="criteria" value="calc" checked={this.state.calcBool} onChange={this.handleChange} /> Perform a calculation<br />
        </form>
      </div>
    )
  }
}

// container

const mapState = ({ selectedTargetField }) => ({
  selectedTargetField
});

const mapDispatch = dispatch => ({
  sendOnChange (fieldName, criteriaType) {
    dispatch(addCriteriaType(fieldName, criteriaType))
  }
});

export default connect(mapState, mapDispatch)(Criteria);
