import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Shopping.module.css";
import { useEffect, useState } from "react";

const ShoppingBag = ({ shoppingCart, updateAmountCart, deleteProduct }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const totalAmount = shoppingCart.reduce(
      (total, product) => total + product.amount * product.price,
      0
    );

    setTotal(totalAmount);
  }, [shoppingCart]);

  return (
    <Layout pageName={"My bag"}>
      <h1 className="page-name">Shopping Cart</h1>
      <main className={`container ${styles.content}`}>
        <div className={styles.shoppingCart}>
          <h2>Articles</h2>
          {shoppingCart.length === 0
            ? "No products on your cart"
            : shoppingCart.map((product) => (
                <div key={product.id} className={styles.product}>
                  <div className={styles.image}>
                    <Image
                      layout="responsive"
                      width={150}
                      height={100}
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  <div className={styles.product_info}>
                    <p className={styles.name}>{product.name}</p>

                    <div className={styles.price_amount}>
                      <p className={styles.price}>
                        ${product.price} <span>x</span>
                      </p>
                      <select
                        className={styles.select}
                        value={product.amount}
                        onChange={(event) =>
                          updateAmountCart({
                            amount: event.target.value,
                            id: product.id,
                          })
                        }
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <p className={styles.subtotal}>
                      $ {Math.round(product.price * product.amount * 100) / 100}
                    </p>
                  </div>
                  <button
                    className={styles.delete_button}
                    onClick={() => deleteProduct(product.id)}
                  >
                    x
                  </button>
                </div>
              ))}
        </div>
        <div className={styles.summary}>
          <h3>Order summary</h3>

          {total > 0 ? (
            <>
              <p>Total:</p>
              <p className={styles.summary_price}>
                $ {Math.round(total * 100) / 100}
              </p>
            </>
          ) : (
            <p>You dont't select any product</p>
          )}
        </div>
      </main>
    </Layout>
  );
};

export default ShoppingBag;
