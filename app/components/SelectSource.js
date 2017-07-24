import React from 'react'
import { connect } from 'react-redux';


class SelectSource extends React.Component {
  constructor(props) {
    super(props)


    this.state = {
      localSourceTable: 'product'
    }

    this.sourceTableChange = this.sourceTableChange.bind(this)
  }

  sourceTableChange (event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {

    let targetFieldObj = this.props.targetFields.length > 0 ? this.props.targetFields.filter(field => field.name === this.props.selectedTargetField)[0] : null

    return(
      <div className="selectSource-container">
        {
          targetFieldObj ?
          <div>
            <p>{`1. Select the source data for the ${this.props.selectedTargetField} field:`}</p>
            <div className="selectSource-menus">
              <div className="select-table-horizontal">
                <span>Select Source Table: </span>
                <select name="localSourceTable" onChange={this.sourceTableChange}>
                  <option value="product">Product</option>
                  <option value="vendor">Vendor</option>
                  <option value="invoice">Invoice</option>
                </select>
              </div>
              <div>
                <span>Select Source Field: </span>
                <select>
                  {
                    this.props[`${this.state.localSourceTable}Table`].map(field => {
                      return <option key={field.column} value={field.column}>{field.column}</option>
                    })
                  }
                </select>
              </div>
            </div>
          </div>
          :
          null
        }
      </div>
    )
  }
}

// container

const mapState = ({ invoiceTable, productTable, vendorTable, selectedTargetField, targetFields }) => ({
  invoiceTable,
  productTable,
  vendorTable,
  selectedTargetField,
  targetFields,
});

const mapDispatch = dispatch => ({
});

export default connect(mapState, mapDispatch)(SelectSource);
