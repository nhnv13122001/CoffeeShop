import React from 'react'
import DrinkTable from './DrinkTable'
import TopAppBar from './TopAppBar'


const ManageDrinkContainer = () => {
  return (
    <div>
      <TopAppBar title="Quản lý thức uống"/>
      <DrinkTable/>
    </div>
  )
}

export default ManageDrinkContainer