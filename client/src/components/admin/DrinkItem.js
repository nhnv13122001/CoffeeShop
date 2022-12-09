import React, { useState } from "react";
import useDatabase from "../../hooks/useDatabase";
import DeleteButton from "./DeleteButton";
import DeleteDrinkModal from "./DeleteDrinkModal";
import EditButton from "./EditButton";
import EditDrinkModal from "./EditDrinkModal";
import SmallImage from "./SmallImage";

const DrinkItem = ({ drink, editDrink, deleteDrink }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { categories } = useDatabase();

  const openEditModal = () => {
    setShowEditModal(true);
  };

  const openDeleteModal = () => {
    setShowDeleteModal(true);
  };

  return (
    <>
      <tr style={{ verticalAlign: "middle", backgroundColor: "white" }}>
        <td>{drink.name}</td>
        <td>
          <SmallImage src={drink.photo} />
        </td>
        <td>{drink.description}</td>
        <td>
          {categories.map((cate) =>
            cate.id === drink.category ? (
              <div key={cate.id}>{cate.name}</div>
            ) : (
              <div key={cate.id}></div>
            )
          )}
        </td>
        <td>{drink.price.toLocaleString()}</td>
        <td>
          <EditButton openEditModal={openEditModal} />
          <DeleteButton openDeleteModal={openDeleteModal} />
        </td>
      </tr>
      <EditDrinkModal
        drink={drink}
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        editDrink={editDrink}
      />
      <DeleteDrinkModal
        drink={drink}
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        deleteDrink={deleteDrink}
      />
    </>
  );
};

export default DrinkItem;
