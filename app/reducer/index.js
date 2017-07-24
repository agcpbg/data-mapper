import { combineReducers } from 'redux';
import tableName from './tableName'
import productTable from './productTable'
import vendorTable from './vendorTable'
import invoiceTable from './invoiceTable'
import targetFields from './targetFields'
import selectedTargetField from './selectedTargetField'

export default combineReducers({
  tableName,
  productTable,
  vendorTable,
  invoiceTable,
  targetFields,
  selectedTargetField,
});
