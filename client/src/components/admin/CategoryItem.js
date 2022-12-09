import React, { useState } from "react";
import DeleteButton from "./DeleteButton";
import DeleteCategoryModal from "./DeleteCategoryModal";
import EditButton from "./EditButton";
import EditCategoryModal from "./EditCategoryModal";
import SmallImage from "./SmallImage";

const CategoryItem = ({ category, editCategory, deleteCategory }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const openEditModal = () => {
    setShowEditModal(true);
  };

  const openDeleteModal = () => {
    setShowDeleteModal(true);
  };

  return (
    <>
      <tr style={{ verticalAlign: "middle", backgroundColor: "white" }}>
        <td>{category.name}</td>
        <td>
          <SmallImage src={category.photo} />
        </td>
        <td>{category.quantity || 0}</td>
        <td>
          <EditButton openEditModal={openEditModal} />
          <DeleteButton openDeleteModal={openDeleteModal} />
        </td>
      </tr>
      <EditCategoryModal
        category={category}
        editCategory={editCategory}
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
      />
      <DeleteCategoryModal
        category={category}
        deleteCategory={deleteCategory}
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
      />
    </>
  );
};

export default CategoryItem;
