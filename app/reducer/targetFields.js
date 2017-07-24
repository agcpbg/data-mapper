// action types
const ADD_TARGET_FIELD = 'ADD_TARGET_FIELD';
const DELETE_TARGET_FIELD = 'DELETE_TARGET_FIELD'
const ADD_TRANSFORM_REQUEST = 'ADD_TRANSFORM_REQUEST'
const ADD_CRITERIA_TYPE = 'ADD_CRITERIA_TYPE'

// action creators
export const addTargetField = fieldName => ({ type: ADD_TARGET_FIELD, fieldName });
export const deleteTargetField = fieldName => ({ type: DELETE_TARGET_FIELD, fieldName });
export const addTransformRequest = (fieldName, yaynay) => ({ type: ADD_TRANSFORM_REQUEST, fieldName, yaynay });
export const addCriteriaType = (fieldName, criteriaType) => ({ type: ADD_CRITERIA_TYPE, fieldName, criteriaType });

// initial state
const targetFields = [];

// reducer
export default function (state = targetFields, action) {
  switch (action.type) {
    case ADD_TARGET_FIELD:
      return [...state, { name: action.fieldName }];

    case DELETE_TARGET_FIELD:
      let newStateArr1 = state.filter(field => field.name !== action.fieldName)
      return [...newStateArr1]

    case ADD_TRANSFORM_REQUEST:
      let newStateArr2 = state.map(field => {
        if(field.name === action.fieldName) {
          return { ...field, transform: action.yaynay }
        } else {
          return field
        }
      })
      return newStateArr2

    case ADD_CRITERIA_TYPE:
      let newStateArr3 = state.map(field => {
        if(field.name === action.fieldName) {
          return { ...field, criteria: action.criteriaType }
        } else {
          return field
        }
      })
      return newStateArr3

    default:
      return state;
  }
}
