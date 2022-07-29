import React from "react";
import classes from "./ProductList.module.css";
import Product from "./Product.js";

function ProductList({ data }) {
  return (
    <div className={classes["grid-container"]}>
      {data.map((product) => {
        return (
          <Product
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
