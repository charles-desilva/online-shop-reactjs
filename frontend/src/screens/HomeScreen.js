import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../products";
import Product from "../components/Product";

const HomeScreen = () => {
  return (
    <>
      <h4 className="mt-5 font-weight-bold">Latest Products</h4>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
