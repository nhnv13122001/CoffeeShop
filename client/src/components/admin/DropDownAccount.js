import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import { MdOutlineAccountCircle } from 'react-icons/md'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const DropDownAccount = () => {
  const {auth, setAuth} = useAuth();
  const navigate = useNavigate();

  const onClick = () =>{
    setAuth({});
    navigate("/");
  }

  return (
    <div  className='ms-auto d-flex flex-row align-items-center dropdown-account'>
      <MdOutlineAccountCircle className='me-2' style={{ width: "20px", height:"20px" }}/>
      <NavDropdown title={auth?.user?.email}  id="collapsible-nav-dropdown">
          <NavDropdown.ItemText>Chào Admin</NavDropdown.ItemText>
          <NavDropdown.Divider />
          <NavDropdown.Item >
            <Link to="/profile"style={{ textDecoration: "none" , color: "black" }}>
              Thông tin cá nhân 
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item onClick={onClick}>Đăng xuất</NavDropdown.Item>
      </NavDropdown>
    </div>
    
  )
}

export default DropDownAccount