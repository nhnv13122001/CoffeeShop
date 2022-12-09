import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { MdOutlineAccountCircle } from 'react-icons/md'
import { useNavigate, useParams } from 'react-router-dom'
import useDatabase from '../../hooks/useDatabase'
import RatingStar from './RatingStar'
import TopAppBar from './TopAppBar'


const FeedbackDetail = () => {
  const params = useParams()
  const {feedbacks} = useDatabase()
  const [feedback, setFeedback] = useState({})
  const [reply, setReply] = useState("")
  const navigate = useNavigate();


  useEffect(()=>{
    if(params && params.id){
      feedbacks.map((fb)=> fb.id === +params.id ? 
        setFeedback(fb)
      : {})
    }

  }, [])  

  const onSubmit = (e) =>{
    e.preventDefault()

    if(!reply){
      alert("Vui lòng điền câu trả lời")
      return
    }

    setReply("")

    navigate("/admin/feedbacks")
  }

  return (
    <div style={{ height:"100vh" }}>
      <TopAppBar title="Phản hồi feedback"/>
      <Container fluid className="px-4 d-flex align-items-center w-100 h-75" >
        <Row className='w-100'>
          <Col>
            <MdOutlineAccountCircle className='me-2' style={{ width:"50px", height:"50px" }}/>
            <span>{feedback.userName}</span>
          </Col>
          <RatingStar rating={feedback.rating} disabled/>
          <span className="mt-2">{feedback.comment}</span>
          <hr className='w-100 mt-2'/>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Phản hồi</Form.Label>
              <Form.Control as="textarea" rows={5} value={reply} onChange={(e)=>{setReply(e.target.value)}}/>
            </Form.Group>
            <Col className='float-end'>
              <Button className='px-4 me-2' onClick={()=>navigate("/admin/feedbacks")} variant="outline-primary">Trở về</Button>
              <Button className='px-4' type="submit" variant="primary">Gửi</Button>
            </Col>
          </Form>
        </Row>
      </Container>
    </div>
  )
}

export default FeedbackDetail