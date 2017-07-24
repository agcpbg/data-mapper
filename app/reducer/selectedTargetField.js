// action types
const SET_SELECTED_TARGET_FIELD = 'SET_SELECTED_TARGET_FIELD';

// action creators
export const setSelectedTargetField = fieldName => ({ type: SET_SELECTED_TARGET_FIELD, fieldName });

// initial state
const selectedTargetField = '';

// reducer
export default function (state = selectedTargetField, action) {
  switch (action.type) {
    case SET_SELECTED_TARGET_FIELD:
      return action.fieldName;
    default:
      return state;
  }
}
