import React, { useMemo, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useDatabase from '../../hooks/useDatabase';
import AdminPagination from '../admin/AdminPagination';
import OrderItem from './OrderItem';

let PageSize = 10;

const OrderTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { orders } = useDatabase();

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return orders.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, orders]);


  return (
    <Container className='mt-5 d-flex flex-column' fluid>
      <Table responsive="lg" className='mt-3'>
      <thead>
        <tr style={{ verticalAlign:"middle" }}>
            <th>#</th>
            <th>Tên</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th>Trạng thái</th>
            <th>Tổng đơn</th>
            <th>Thao tác</th>
        </tr>
      </thead>
      {orders.length > 0 ?

      <tbody>
        <>
          {orders.map((order) => (
            <OrderItem key={order.id_order} order={order}/>
          ))}
        </>
      </tbody> : <h2>No Account to show</h2>
    } 
    </Table>
      <AdminPagination className="d-flex ms-auto me-2 mt-5"
        currentPage={currentPage}
        totalCount={orders.length}
        pageSize={PageSize}
        onPageChange={page=>setCurrentPage(page)}/>
    </Container>
  )
}

export default OrderTable