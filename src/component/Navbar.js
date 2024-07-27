import React, { useState } from 'react'
import { Button, Container, Form, Nav,NavDropdown,Navbar } from 'react-bootstrap'

const Navbarr = ({handelSearch}) => {

    const [val,setVal]=useState('')

    const onSearch=(value)=>{
       
        handelSearch(value)
        setVal('')
    }

  return (
    <Navbar expand="lg" className="bg-dark" variant="dark">
    <Container >
      <Navbar.Brand href="#"><div className='brand-name'>مطعم جديد</div></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
        </Nav>
        <Form className="d-flex"  onSubmit={(e)=>e.preventDefault()}>
           
          <Form.Control
            type="search"
            placeholder="ابحث.."
            className="me-2"
            aria-label="Search"
            onChange={(e)=>setVal(e.target.value)}
            value={val}
          />
          <button onClick={()=>onSearch(val)} className='btn-search'>بحث</button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbarr