import { FaShoppingCart } from "react-icons/fa";
import React from "react";
import { Link, useOutletContext } from "react-router-dom";

export default function CartIcon(props) {
  const { storeProducts, savedProducts } = props;
  console.log(savedProducts);
  const [cartCount, setCartCount] = React.useState(
    JSON.parse(localStorage.getItem("savedProducts")),
  );
  return (
    <div className="cart-icon">
      <FaShoppingCart className="cart-icon" />
      <span className="cart-count">{savedProducts.length}</span>
    </div>
  );
}
