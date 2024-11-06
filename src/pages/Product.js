import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  ListGroupItem,
} from "react-bootstrap";

import products from "../products";

const Product = () => {
  const { id } = useParams();
  const product = products.find((item) => {
    return item._id === id;
  });

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Go to HomePage
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>{product.price}</h6>
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>{product.description}</h6>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Button className="btn-block" type="button">
                Add to list
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Product;
