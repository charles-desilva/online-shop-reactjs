import React from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { product } = props;
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>
      <Card.Body>
        <Link to={`product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div" className="my-3">
          <Rating
            rating={product.rating}
            numRating={product.numReviews}
            color={product.rating === 5 ? "red" : undefined}
          ></Rating>
        </Card.Text>
        <Card.Text as="h3">{product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
