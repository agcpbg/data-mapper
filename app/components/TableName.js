import React from 'react'
import { connect } from 'react-redux';
import { setTableName } from '../reducer/tableName'


class TableName extends React.Component {
  constructor(props) {
    super(props)


    this.state = {
      localTableName: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.sendOnSubmit(this.state.localTableName)
  }

  render() {
    return(
      <div className='tableName-container'>
        <span className="create-table-title">CREATE TARGET TABLE: </span>
        <div id="tableName-form" className="form-group">
          <input className="form-control tableName-form-item" type="text" name="localTableName" placeholder="What is the target table's name?" value={this.state.localTableName} onChange={this.handleChange} />
        </div>
        <button className="btn btn-primary" type="submit" onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

// container

const mapState = () => ({

});

const mapDispatch = dispatch => ({
  sendOnSubmit: (name) => {
    dispatch(setTableName(name));
  }
});

export default connect(mapState, mapDispatch)(TableName);
