// action types
const SET_TABLE_NAME = 'SET_TABLE_NAME';

// action creators
export const setTableName = name => ({ type: SET_TABLE_NAME, name });

// initial state
const tableName = '';

// reducer
export default function (state = tableName, action) {
  switch (action.type) {
    case SET_TABLE_NAME:
      return action.name;
    default:
      return state;
  }
}
