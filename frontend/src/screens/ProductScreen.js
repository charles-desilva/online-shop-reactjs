import React, { useState, useEffect } from "react";
//import products from "../products";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import axios from "axios";

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);
      //const { data } = await axios.get("api/products/1");
      //console.log(data);
      setProduct(data);
    };
    getProduct();
  }, []);

  //const product = products.find((p) => p._id === match.params.id);
  return (
    <div>
      <Link to="/" className="btn btn-outline-secondary mb-3">
        <i className="fa fa-chevron-left" aria-hidden="true"></i> Back to
        Product List
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} rounded fluid></Image>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={product.rating}
                numRating={product.numReviews}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>${product.price}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item
              className={product.countInStock === 0 ? "bg-warning" : "bg-light"}
            >
              <Row>
                <Col>Stocks:</Col>
                <Col>
                  {product.countInStock > 0 ? (
                    <span>In Stock</span>
                  ) : (
                    <span>Out of Stock</span>
                  )}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                className="btn-block"
                disabled={product.countInStock === 0}
              >
                Add to Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
