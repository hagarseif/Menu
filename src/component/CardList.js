import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

const CardList = ({ item }) => {
  return (
    <Row className="mb-5">
      {item ? (
        item.map((i) => {
          return (
            <Zoom>
              <Col sm="12" key={i.id}>
                <Card className="d-flex flex-row card">
                  <Card.Img variant="top" src={i.imgUrl} className="img-food" />
                  <Card.Body>
                    <Card.Title>
                      <div className="d-flex justify-content-between txt">
                        <span className="title-f"> {i.name}</span>
                        <span className="price">{i.price}</span>
                      </div>
                    </Card.Title>
                    <Card.Text>
                      <p className="desc">{i.desc}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              </Zoom>
           
          );
        })
      ) : (
        <h3 className="text-center">لا يوجد طعام</h3>
      )}
    </Row>
  );
};

export default CardList;
