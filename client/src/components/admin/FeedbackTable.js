import React, { useMemo, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import useDatabase from '../../hooks/useDatabase'
import AdminPagination from './AdminPagination'
import FeedbackItem from './FeedbackItem'

let PageSize = 10;


const FeedbackTable = () => {
  const {feedbacks} = useDatabase()

  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return feedbacks.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);


  return (
    <Container className='mt-5 d-flex flex-column' fluid>
      <Table responsive="lg" className='mt-3'>
      <thead>
        <tr style={{ verticalAlign:"middle" }}>
          <th>Tên</th>
          <th>Sản phẩm</th>
          <th>Bình luận</th>
          <th>Đánh giá</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        {
          feedbacks.length > 0 ? 
            currentTableData.map((fb)=><FeedbackItem key={fb.id} feedback={fb}/>)
            :
            <h4>No Feedback to show</h4>
        }
      </tbody>
    </Table>
    <AdminPagination className="d-flex ms-auto me-2  mt-5"
              currentPage={currentPage}
              totalCount={feedbacks.length}
              pageSize={PageSize}
              onPageChange={page=>setCurrentPage(page)}/>
    </Container>
  )
}

export default FeedbackTable