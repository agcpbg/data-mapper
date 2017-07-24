import React from 'react'
import { connect } from 'react-redux';

class PerformCalc extends React.Component {
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
          <p>{`4. Perform calculation:`}</p>
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
              <option value="add">+</option>
              <option value="subtract">-</option>
              <option value="multiply">*</option>
              <option value="divide">/</option>
            </select>
          </div>
          <form>
            Operand:<br />
            <input className="input-shrink" type="text" name="value" /><br />
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

export default connect(mapState, mapDispatch)(PerformCalc);
