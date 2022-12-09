import React from 'react'
import FeedbackTable from './FeedbackTable'
import TopAppBar from './TopAppBar'

const CustomerFeedbacks = () => {
  return (
    <div>
      <TopAppBar title="Feedback của khách hàng"/>
      <FeedbackTable/>
    </div>
  )
}

export default CustomerFeedbacks