import React from 'react'
import CategoryTable from './CategoryTable'
import TopAppBar from './TopAppBar'

const ManageCategoryContainer = () => {
  return (
    <div>
      <TopAppBar title="Quản lý danh mục"/>
      <CategoryTable/>
    </div>
  )
}

export default ManageCategoryContainer