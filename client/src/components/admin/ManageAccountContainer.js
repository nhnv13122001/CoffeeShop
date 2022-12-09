import React from 'react'
import TopAppBar from './TopAppBar'
import AccountTable from './AccountTable'

const ManageAccountContainer = () => {
  return (
    <div>
      <TopAppBar title="Quản lý tài khoản"/>
      <AccountTable/>
    </div>
  )
}

export default ManageAccountContainer