import { Outlet } from "react-router-dom";
import React from "react";
import Header from "./Header";
export default function RootLayout() {
  const [savedProducts, setSavedProducts] = React.useState([]);
  function storeProducts(product, id) {
    const foundElement = savedProducts.find(
      (savedProduct) => savedProduct.id === id,
    );
    if (!foundElement) {
      const newSavedProducts = [...savedProducts, product];
      localStorage.setItem("savedProducts", JSON.stringify(newSavedProducts));

      setSavedProducts((prevSavedProducts) => [...prevSavedProducts, product]);
    }
  }
  React.useEffect(() => {
    const storedProducts = localStorage.getItem("savedProducts");
    if (storedProducts) {
      setSavedProducts(JSON.parse(storedProducts));
    }
  }, []);

  return (
    <>
      <Header savedProducts={savedProducts} storeProducts={storeProducts} />
      <main>
        <Outlet context={{ storeProducts, savedProducts }} />
      </main>
    </>
  );
}
