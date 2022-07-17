import { useState, useEffect } from "react";

import "../styles/normalize.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    const shoppCartLS = JSON.parse(localStorage.getItem("shoppingCart")) ?? [];
    if (shoppCartLS.length !== 0) {
      setShoppingCart(shoppCartLS);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  const addToCart = (product) => {
    if (shoppingCart.some((cakeProduct) => cakeProduct._id === product._id)) {
      // Exists | update amount
      const updateCart = shoppingCart.map((cakeProduct) => {
        if (cakeProduct._id === product._id) {
          cakeProduct.amount = product.amount;
        }

        return cakeProduct;
      });

      setShoppingCart(updateCart);
    } else {
      // New
      setShoppingCart([...shoppingCart, product]);
    }
  };

  const updateAmountCart = (product) => {
    const updateCart = shoppingCart.map((cakeProduct) => {
      if (cakeProduct._id === product._id) {
        cakeProduct.amount = product.amount;
      }

      return cakeProduct;
    });

    setShoppingCart(updateCart);
  };

  const deleteProduct = (id) => {
    const updateCart = shoppingCart.filter(
      (cakeProduct) => cakeProduct._id !== id
    );
    setShoppingCart(updateCart);
  };

  return (
    <Component
      {...pageProps}
      shoppingCart={shoppingCart}
      addToCart={addToCart}
      updateAmountCart={updateAmountCart}
      deleteProduct={deleteProduct}
    />
  );
}

export default MyApp;
