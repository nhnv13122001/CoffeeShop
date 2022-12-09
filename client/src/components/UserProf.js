import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const UserProf = ({src,name}) => {
  const {auth, setAuth} = useAuth()
  const navigate = useNavigate()

  const logout = () =>{
    setAuth({});
    navigate("/");
  }

  return (
      <Dropdown>
        <Dropdown.Toggle variant="light"  className='d-flex login-btn align-items-center'>
          <img src={src?src:"images/profile_pic.jpg"} alt="userprofile" className='user-nav me-2'/>
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ right: "0", left: "auto" }} className="absolute-center">
          <Dropdown.Header>Chào {name}</Dropdown.Header>
          <Dropdown.Divider/>
          {
            auth?.user?.type === String(3)? <Dropdown.Item>
              <Link to="/history"style={{ textDecoration: "none" , color: "black" }}>
                Lịch sử mua hàng
              </Link>
            </Dropdown.Item> : <></>
          }
          <Dropdown.Item>
            <Link to="/profile"style={{ textDecoration: "none" , color: "black" }}>
              Thông tin cá nhân 
            </Link>
          </Dropdown.Item>
          <Dropdown.Item onClick={logout}>Đăng xuất</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        
  )
}

export default UserProf