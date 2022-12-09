import React, { useMemo, useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import useDatabase from "../../hooks/useDatabase";
import AddButton from "./AddButton";
import AddCategoryModal from "./AddCategoryModal";
import AdminPagination from "./AdminPagination";
import CategoryItem from "./CategoryItem";
import $ from "jquery";

let PageSize = 5;

const CategoryTable = () => {
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const { drinks, categories, setCategories, getCategories } = useDatabase();

  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return categories.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, categories]);

  const openCategoryModal = () => {
    setShowCategoryModal(true);
  };

  const handleAddCategory = (category) => {
    $.ajax({
      method: "POST",
      url: "http://localhost/CoffeeShop/server/crud/categories.php",
      data: JSON.stringify(category),
      success(response) {
        const realrespone = JSON.parse(response);
        if (realrespone.result.status === 1) {
          alert(realrespone.result.message);
        } else {
          alert(realrespone.result.message);
        }
      },
    });
  };

  const handleEditCategory = (newCategory) => {
    $.ajax({
      method: "POST",
      url: "http://localhost/CoffeeShop/server/crud/categories.php/edit",
      data: JSON.stringify(newCategory),
      success(response) {
        const realrespone = JSON.parse(response);
        alert(realrespone.result.message);
      },
    });
  };

  const handleDeleteCategory = (id) => {
    $.ajax({
      type: "GET",
      url: `http://localhost/CoffeeShop/server/crud/categories.php/${id}/delete`,
      success(response) {
        const realrespone = JSON.parse(response);
        alert(realrespone.message);
      },
    });
  };

  useEffect(() => {
    getCategories();
    categories.map((cate) => (cate.quantity = 0));
    drinks.map((drink) =>
      categories.map((cate) =>
        cate.id === drink.category ? cate.quantity++ : <></>
      )
    );
  }, []);

  return (
    <Container className="mt-5 d-flex flex-column" fluid>
      <AddButton
        onClick={openCategoryModal}
        text="Thêm danh mục"
        className="d-flex ms-auto me-2"
        showDropdown={false}
      />
      <Table responsive="lg" className="mt-3">
        <thead>
          <tr style={{ verticalAlign: "middle" }}>
            <th>Tên</th>
            <th>Hình ảnh</th>
            <th>Số lượng</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 ? (
            currentTableData.map((category) => (
              <CategoryItem
                key={category.id}
                category={category}
                editCategory={handleEditCategory}
                deleteCategory={handleDeleteCategory}
              />
            ))
          ) : (
            <h4>No Category to show</h4>
          )}
        </tbody>
      </Table>
      <AdminPagination
        className="d-flex ms-auto me-2 mt-5"
        currentPage={currentPage}
        totalCount={categories.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
      <AddCategoryModal
        addCategory={handleAddCategory}
        show={showCategoryModal}
        onHide={() => setShowCategoryModal(false)}
      />
    </Container>
  );
};

export default CategoryTable;
