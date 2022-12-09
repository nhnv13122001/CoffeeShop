import React, { useState } from 'react'
import { Card, Form, Row, Container } from 'react-bootstrap'
import RevenueChart from './RevenueChart'
import TopAppBar from './TopAppBar'

const Revenue = () => {
  const [filter, setFilter] = useState("week")

  return (
    <div>
      <TopAppBar title="Thông tin doanh thu"/>
      <Card className='filter-picker ms-auto me-auto mt-2'>
        <Card.Header style={{ backgroundColor: "#7d6e83", textAlign:"center" }}>
          Thống kê
        </Card.Header>
        <Card.Body>
          <Form.Group className="mb-3" controlId="formBasicCategory">
            <Form.Label>Thống kê theo</Form.Label>
            <Form.Select aria-label="Default select example" value={filter} onChange={(e)=>setFilter(e.target.value)}>
              <option value="week">Tuần</option>
              <option value="month">Tháng</option>
              <option value="year">Năm</option>
            </Form.Select>
          </Form.Group>
        </Card.Body>
      </Card>
      <RevenueChart type={filter}/>
    </div>
  )
}

export default Revenue