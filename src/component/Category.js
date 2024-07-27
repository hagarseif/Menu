import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Roll from 'react-reveal/Roll';

const Category = ({handelFilter,category}) => {



  return (
    <Row>
        <Col sm="12">
            <div className='d-flex justify-content-center m-4'>
              <Roll>
              {
                category.map(c=><button key={Math.random()} onClick={()=>handelFilter(c)} className='btn'>{c}</button>)
              }
              </Roll>
            </div>
        </Col>
    </Row>
  )
}

export default Category