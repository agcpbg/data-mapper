// action types

// action creators

// initial state
const vendorTable = [
  { column: 'VendorId', datatype: 'int' },
  { column: 'VendorName', datatype: 'varchar(50)' },
  { column: 'VendorAddress', datatype: 'varchar(50)' },
  { column: 'VendorContact', datatype: 'varchar(50)' },
];

// reducer
export default function (state = vendorTable, action) {
  return state;
}
