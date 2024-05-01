import { Outlet } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import React from "react";
import { Link, useOutletContext } from "react-router-dom";

export default function Collections() {
  const [productsRange, setProductsRange] = React.useState({
    start: 1,
    end: 10,
  });

  const { savedProducts, storeProducts } = useOutletContext();

  const products = JSON.parse(localStorage.getItem("data"));

  const pagesNum = Math.ceil(products?.length / 10);

  const displayedProducts = products?.slice(
    productsRange.start - 1,
    productsRange.end,
  );

  /**
   * Function to display the next set of products.
   *
   */
  function displaySetOfProducts(event, page) {
    const lastPost = page * 10;

    const firstPost = lastPost - 10 + 1;
    console.log("last", lastPost);
    console.log(firstPost);
    console.log(productsRange.start);
    setProductsRange({
      start: firstPost,
      end: lastPost,
    });
    console.log(productsRange);
  }

  return (
    <section id="collections" className="collections">
      <h2 className="collections-title">Collections</h2>
      {displayedProducts?.map((product) => (
        <div className="product" key={product.id}>
          <Link to={product.id}>
            <div className="prodect-info">
              <img
                src={product.image}
                alt={product.title}
                className="product-img"
              />
              <h4 className="product-name">{product.title}</h4>
              <div className="product-price-colors">
                <p className="product-price">${product.price}</p>
                <div className="product-colors">
                  {product.colors?.map((color) => (
                    <span
                      key={color}
                      className="color"
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
          <button
            className="add-to-cart"
            onClick={() => storeProducts(product, product.id)}
          >
            Add to cart
          </button>
        </div>
      ))}
      <Pagination
        count={pagesNum}
        onChange={(e, p) => displaySetOfProducts(e, p)}
      />
    </section>
  );
}
