// action types

// action creators

// initial state
const productTable = [
  { column: 'ProductId', datatype: 'int' },
  { column: 'ProductName', datatype: 'varchar(50)' },
  { column: 'ProductNo', datatype: 'varchar(25)' },
  { column: 'ProductCost', datatype: 'decimal' },
];

// reducer
export default function (state = productTable, action) {
  return state;
}
