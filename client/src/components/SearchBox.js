import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import '../index.css';

const SearchBox = ({prevSearch, className}) => {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()
  const onSubmit = (e) =>{
    e.preventDefault()
    
    navigate(`/menu?q=${search}`)
    setSearch("")
  }

  useEffect(()=>{
    setSearch(prevSearch)
  }, [prevSearch])

  return (
    <Form className="d-flex search-box " onSubmit={onSubmit}>
      <InputGroup className="input-group">
      <Form.Control
              type="search"
              placeholder="Tìm kiếm..."
              aria-label="Search"
              variant="dark"
              className='search-bar'
              value={search}
              required
              onChange={(e)=>setSearch(e.target.value)}
          />
        <Button variant='primary' type='submit'>
          <FaSearch color='white'/>
        </Button>
      </InputGroup>
    </Form>
  )
}

export default SearchBox