import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
//import products from "../products";
import Product from "../components/Product";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProdcuts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get("/api/products");
      //console.log(data);
      setProdcuts(data);
    };
    getProducts();
  }, []);
  return (
    <>
      <h4 className="font-weight-bold">Latest Products</h4>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
