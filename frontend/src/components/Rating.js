import React from "react";
import PropTypes from "prop-types";

const Rating = ({ rating, numRating, color }) => {
  return (
    <div>
      <i
        style={{ color: color }}
        className={
          rating >= 1
            ? "fa fa-star"
            : rating >= 0.5
            ? "fa fa-star-half-o"
            : "fa fa-star-o"
        }
      ></i>
      <i
        style={{ color }}
        className={
          rating >= 2
            ? "fa fa-star"
            : rating >= 1.5
            ? "fa fa-star-half-o"
            : "fa fa-star-o"
        }
      ></i>
      <i
        style={{ color }}
        className={
          rating >= 3
            ? "fa fa-star"
            : rating >= 2.5
            ? "fa fa-star-half-o"
            : "fa fa-star-o"
        }
      ></i>
      <i
        style={{ color }}
        className={
          rating >= 4
            ? "fa fa-star"
            : rating >= 3.5
            ? "fa fa-star-half-o"
            : "fa fa-star-o"
        }
      ></i>
      <i
        style={{ color }}
        className={
          rating >= 5
            ? "fa fa-star"
            : rating >= 4.5
            ? "fa fa-star-half-o"
            : "fa fa-star-o"
        }
      ></i>
      <span className="ml-2">({numRating} reviews)</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#8E8C84",
};

Rating.propTypes = {
  rating: PropTypes.number,
  numRating: PropTypes.number,
  color: PropTypes.string,
};

export default Rating;
