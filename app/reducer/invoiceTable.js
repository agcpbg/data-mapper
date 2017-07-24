// action types

// action creators

// initial state
const invoiceTable = [
  { column: 'InvoiceId', datatype: 'int' },
  { column: 'InvoiceDate', datatype: 'date' },
  { column: 'InvoiceAmount', datatype: 'decimal' },
];

// reducer
export default function (state = invoiceTable, action) {
  return state;
}
