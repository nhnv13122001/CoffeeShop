import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import DetailButton from './admin/DetailButton'
import FeedbackModal from './FeedbackModal'


const OrderHistoryItem = () => {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false)

  return (
    <>
      <tr style={{ verticalAlign:"middle" }}>
              <td>1</td>
              <td>3</td>
              <td>Đã giao hàng</td>
              <td>30/11/2022</td>
              <td>69.000đ</td>
              <td>
                <DetailButton/>
                <Button className="ms-2" variant='secondary' onClick={()=>setShowFeedbackModal(true)}>Đánh giá</Button>
              </td>
      </tr>
      <FeedbackModal show={showFeedbackModal} onHide={()=>setShowFeedbackModal(false)}/>
    </>
  )
}

export default OrderHistoryItem