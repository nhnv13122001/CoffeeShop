import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const SidebarItem = ({ title, icon, active, href }) => {
  return (
    <li className="nav-item">
      <NavLink
        to={href}
        end
        className={`d-flex flex-row nav-link py-3 px-2 border-bottom align-items-center`}
        style={{ color: "black", padding: "1.5rem" }}
      >
        <div className="bi ms-2">{icon}</div>
        <span className="ms-3">{title}</span>
      </NavLink>
    </li>
  );
};

SidebarItem.contextTypes = {
  router: PropTypes.object,
};

export default SidebarItem;
