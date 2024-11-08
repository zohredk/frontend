import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import { productDetailAction } from "../action/productAction";

const Product = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const productDetails = useSelector((state) => state.productDetails); // Ensure it matches the combined reducer key
  const { loading, product, error } = productDetails;

  useEffect(() => {
    console.log("Fetching product details for id:", id);
    dispatch(productDetailAction(id));
  }, [dispatch, id]);

  useEffect(() => {
    console.log("Product details updated:", product);
  }, [product]);

  const addToCartHandler = () => {
    navigate(`/cart/${id}`);
  };

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Go to HomePage
      </Link>
      {loading ? (
        <h2>Loading the product...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <h6>${product.price}</h6>
              </ListGroup.Item>
              <ListGroup.Item>
                <h6>{product.description}</h6>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Button
                  onClick={addToCartHandler}
                  className="btn-block"
                  type="button"
                >
                  Add to list
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default Product;
