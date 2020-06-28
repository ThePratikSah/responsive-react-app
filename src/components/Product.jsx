import React from "react";

function Product(props) {
  return (
    <div className="card">
      <h3>{props.product.name}</h3>
      <p>
        ₹ {props.product.price} - {props.product.description}
      </p>
    </div>
  );
}

export default Product;
