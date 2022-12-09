import React, { useState } from "react";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import EditAccountModal from "./EditAccountModal";
import DeleteModal from "./DeleteModal";

const AccountItem = ({ account, editAccount, deleteAccount }) => {
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
        <td>{account.name}</td>
        <td>{account.email}</td>
        <td>{account.address}</td>
        <td>{account.type === String(2) ? "Nhân viên" : "Quản lý"}</td>
        <td>{account.phone}</td>
        <td>
          <EditButton openEditModal={openEditModal} />
          <DeleteButton openDeleteModal={openDeleteModal} />
        </td>
      </tr>
      <EditAccountModal
        account={account}
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        editAccount={editAccount}
      />
      <DeleteModal
        account={account}
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        deleteAccount={deleteAccount}
      />
    </>
  );
};

export default AccountItem;
