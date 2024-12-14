import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product/Product";
import { productListAction } from "../action/productAction";

const Home = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch]);

  return (
    <div>
      <h1>Products</h1>
      {loading ? (
        <h2>Loading products...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <Row>
          {products && products.length > 0 ? (
            products.map((item) => (
              <Col key={item._id} sm={12} md={6} lg={4}>
                <Product product={item} />
              </Col>
            ))
          ) : (
            <h2>No products found</h2>
          )}
        </Row>
      )}
    </div>
  );
};

export default Home;
