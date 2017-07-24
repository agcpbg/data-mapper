import React from 'react'
import { connect } from 'react-redux';
import { deleteTargetField, addTransformRequest } from '../reducer/targetFields'
import { setSelectedTargetField } from '../reducer/selectedTargetField'

const Sidebar = ({ targetFields, sendOnSubmit, selectedTargetField, userFieldSelect }) => {
  return (
    <div className="sidebarContainer">
      <p id="sidebar-header">Target Fields:</p>
      <div>
        {
          targetFields.map(field => {
            return (
              <div key={field.name} className="sidebarFields-container" style={field.name === selectedTargetField ? {'backgroundColor': 'white'} : null}>
                <div className="sidebarFields" onClick={() => userFieldSelect(field.name, field.transform)} style={field.name === selectedTargetField ? {'backgroundColor': 'white'} : null}>
                  {field.name}
                </div>
                <button id="remove-field-btn" className="btn btn-danger btn-xs" type="button" onClick={()=> sendOnSubmit(field.name)} >X</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

// container

const mapState = ({ targetFields, selectedTargetField }) => ({
  targetFields,
  selectedTargetField
});

const mapDispatch = dispatch => ({
  sendOnSubmit (fieldName) {
    dispatch(deleteTargetField(fieldName))
    dispatch(setSelectedTargetField(''))
  },
  userFieldSelect (fieldName, yaynay) {
    dispatch(setSelectedTargetField(fieldName))
    dispatch(addTransformRequest(fieldName, yaynay))
  }
});

export default connect(mapState, mapDispatch)(Sidebar);
