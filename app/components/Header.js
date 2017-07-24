import React from 'react'
import { connect } from 'react-redux';
import TableName from './TableName'
import AddField from './AddField'

const Header = ({ tableName }) => {
  return (
    <div>
      {
        tableName ?
        <AddField /> :
        <TableName />
      }
    </div>
  )
}

// container

const mapState = ({ tableName }) => ({
  tableName
});

const mapDispatch = dispatch => ({

});

export default connect(mapState, mapDispatch)(Header);
