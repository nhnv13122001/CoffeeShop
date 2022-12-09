import { Pagination } from "react-bootstrap";
import { DOTS, usePagination } from "./usePagination";

const AdminPagination = ({
  className,
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return <></>;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <Pagination className={className}>
      <Pagination.Item onClick={onPrevious} disabled={currentPage === 1}>
        Previous
      </Pagination.Item>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <Pagination.Item key={pageNumber}>&#8230</Pagination.Item>;
        }
        return (
          <Pagination.Item
            key={pageNumber}
            active={pageNumber === currentPage}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </Pagination.Item>
        );
      })}
      <Pagination.Item onClick={onNext} disabled={currentPage === lastPage}>
        Next
      </Pagination.Item>
    </Pagination>
  );
};

export default AdminPagination;
