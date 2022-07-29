import React from "react";

import classes from "./Product.module.css";

function Product({ title, price, image }) {
  return (
    <div className={classes["product-card"]}>
      <figure>
        <img className={classes["image"]} src={image} alt={title} />
      </figure>
      <div className={classes["product-details"]}>
        <h4>{title}</h4>
        <span>
          <b>Price:</b>
          {price} $
        </span>
      </div>
    </div>
  );
}

export default Product;
