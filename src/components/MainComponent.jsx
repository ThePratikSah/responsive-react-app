import React from "react";
import Product from "./Product";
import productsData from "../Model";

function MainComponent() {
  const productsArray = productsData.map(item => (
    <Product key={item.id} product={item} />
  ));
  return <div className="content">{productsArray}</div>;
}

export default MainComponent;
