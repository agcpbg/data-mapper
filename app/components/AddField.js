import React from 'react'
import { connect } from 'react-redux';
import { addTargetField, addTransformRequest } from '../reducer/targetFields'
import { setSelectedTargetField } from '../reducer/selectedTargetField'

class AddField extends React.Component {
  constructor(props) {
    super(props)


    this.state = {
      localFieldName: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.sendOnSubmit(this.state.localFieldName)
    this.props.sendTransform(this.state.localFieldName, 'no')
    this.setState({ localFieldName: '' })
  }

  render() {
    return(
      <div className="tableName-container">
        <span className="create-table-title">{`TARGET TABLE: ${this.props.tableName}`}</span>
        <div id="tableName-form" className="form-group">
          <input className="form-control tableName-form-item" type="text" name="localFieldName" value={this.state.localFieldName} placeholder="What is the target field's name?" onChange={this.handleChange} />
        </div>
        <button className="btn btn-primary" type="button" onClick={this.handleSubmit}>Add Field</button>
      </div>
    )
  }
}

// container

const mapState = ({ tableName }) => ({
  tableName
});

const mapDispatch = dispatch => ({
  sendOnSubmit: (fieldName) => {
    dispatch(addTargetField(fieldName))
    dispatch(setSelectedTargetField(fieldName))
  },
  sendTransform: (fieldName) => {
    dispatch(addTransformRequest(fieldName, 'no'))
  }
});

export default connect(mapState, mapDispatch)(AddField);
