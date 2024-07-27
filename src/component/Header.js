import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Header = () => {
  return (
        <Row>
            <Col sm="12">
                <h3 className='justify-content-center text-center title'>قائمة طعام</h3>
                <div className=' justify-content-center d-flex'>
                    <span className='underline'></span>
                </div>
            </Col>
        </Row>
  )
}

export default Header