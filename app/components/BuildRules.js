import React from 'react'
import { connect } from 'react-redux';
import BuildRulesBody from './BuildRulesBody'
import SelectSource from './SelectSource'
import Criteria from './Criteria'
import SetConditions from './SetConditions'
import PerformCalc from './PerformCalc'

const BuildRules = ({ targetFields, selectedTargetField }) => {

  let targetFieldObj = targetFields.length > 0 ? targetFields.filter(field => field.name === selectedTargetField)[0] : null

  return (
    <div className="buildRules-container">
      <div className="buildRules-header">
        <p id="buildRules-title">Build Rules For Data Transformation</p>
      </div>
      <SelectSource />
      {targetFields.length > 0 && selectedTargetField ? <BuildRulesBody /> : null}
      {targetFieldObj && targetFieldObj.transform === 'no' ? <button id="save-rules-btn" className="btn btn-primary" type="button">Save Rules</button> : null}
      {targetFieldObj && targetFieldObj.transform === 'yes' ? <Criteria /> : null}
      {targetFieldObj && targetFieldObj.transform === 'yes' && targetFieldObj.criteria === 'conditional' ? <SetConditions /> : null}
      {targetFieldObj && targetFieldObj.transform === 'yes' && targetFieldObj.criteria === 'conditional' ? <button id="save-rules-btn" className="btn btn-primary" type="button">Save Rules</button> : null}
      {targetFieldObj && targetFieldObj.transform === 'yes' && targetFieldObj.criteria === 'calc' ? <PerformCalc /> : null}
      {targetFieldObj && targetFieldObj.transform === 'yes' && targetFieldObj.criteria === 'calc' ? <button id="save-rules-btn" className="btn btn-primary" type="button">Save Rules</button> : null}
    </div>
  )
}

// container

const mapState = ({ targetFields, selectedTargetField }) => ({
  targetFields,
  selectedTargetField
});

const mapDispatch = dispatch => ({

});

export default connect(mapState, mapDispatch)(BuildRules);
