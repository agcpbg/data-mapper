import React from 'react'
import { connect } from 'react-redux';

class SetConditions extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      localSourceTable: 'product',
      conditionalBool: false,
      calcBool: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.sourceTableChange = this.sourceTableChange.bind(this)
  }

  sourceTableChange (event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleChange(event) {
    if (event.target.value === 'conditional') {
      this.setState({ conditionalBool: true, calcBool: false })
      this.props.sendOnChange(this.props.selectedTargetField, 'conditional')
    }
    if (event.target.value === 'calc') {
      this.setState({ calcBool: true, conditionalBool: false })
      this.props.sendOnChange(this.props.selectedTargetField, 'calc')
    }
  }

  render() {
    return(
      <div className="setConditions-container">
        <div>
          <p>{`4. Set conditions:`}</p>
        </div>
        <div className="selectSource-menus">
          <div className="select-table">
            <span>Table: </span>
            <select name="localSourceTable" onChange={this.sourceTableChange}>
              <option value="product">Product</option>
              <option value="vendor">Vendor</option>
              <option value="invoice">Invoice</option>
            </select>
          </div>
          <div className="select-table">
            <span>Field: </span>
            <select>
              {
                this.props[`${this.state.localSourceTable}Table`].map(field => {
                  return <option key={field.column} value={field.column}>{field.column}</option>
                })
              }
            </select>
          </div>
          <div className="select-table">
            <span>Operator: </span>
            <select name="" >
              <option value="equals">Equals</option>
              <option value="doesNotEqual">Does not equal</option>
              <option value="greaterThan">Greater than</option>
              <option value="greaterThanEqual">Greater than or equal</option>
              <option value="lessThan">Less than</option>
              <option value="lessThanEqual">Less than or equal</option>
              <option value="isNull">Is null</option>
              <option value="isChanged">Is changed</option>
            </select>
          </div>
          <div className="select-table">
            <span>Type: </span>
            <select name="" >
              <option value="integer">Integer</option>
              <option value="decimal">Decimal</option>
              <option value="currency">Currency</option>
              <option value="string">String</option>
              <option value="boolean">Boolean</option>
            </select>
          </div>
          <form>
            Value:<br />
            <input className="input-shrink" type="text" name="value" /><br />
          </form>
        </div>
        <div className="and-or">
          <form action="">
            <input type="radio" name="criteria" value="conditional" checked={this.state.conditionalBool} onChange={this.handleChange} /> All of the conditions are met (AND)<br />
            <input type="radio" name="criteria" value="calc" checked={this.state.calcBool} onChange={this.handleChange} /> Any of the conditions are met (OR)<br />
          </form>
        </div>
      </div>
    )
  }
}

// container

const mapState = ({ selectedTargetField, invoiceTable, productTable, vendorTable }) => ({
  invoiceTable,
  productTable,
  vendorTable,
  selectedTargetField
});

const mapDispatch = dispatch => ({
  sendOnChange (fieldName, criteriaType) {
    dispatch(addCriteriaType(fieldName, criteriaType))
  }
});

export default connect(mapState, mapDispatch)(SetConditions);
