import { useState } from "react";
import Image from "next/image";
import Layout from "../../components/Layout";
import styles from "../../styles/Cakes.module.css";

const CakeStore = ({ cakeData, addToCart }) => {
  const [amount, setAmount] = useState(1);

  const { id, image, name, price, description } = cakeData[0];
  const urlImage = image[0].url;

  // funtcion
  const handleSubmit = (event) => {
    event.preventDefault();

    if (amount < 1 && amount > 9) {
      alert("unvalid amount");
      return;
    }

    const selectedProduct = {
      id: id,
      image: urlImage,
      name: name,
      price: price,
      amount: amount,
    };

    addToCart(selectedProduct);
  };

  return (
    <Layout pageName={name}>
      <h2 className="page-name">{name}</h2>

      <div className={`container ${styles.container_cake}`}>
        <div className={styles.page_cake_img}>
          <Image
            priority="true"
            layout="responsive"
            height={100}
            width={150}
            src={urlImage}
            alt={`picture ${name}`}
          />
        </div>

        <div className={styles.page_cake_info}>
          <p className={styles.page_cake_price}>$ {price}</p>
          <p className={styles.page_cake_description}>{description}</p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.form_selection}>
              <label className={styles.form_label}>Amount:</label>

              <select
                className={styles.form_select}
                value={amount}
                onChange={(event) => setAmount(parseInt(event.target.value))}
              >
                <option value="">-- select --</option>
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

            <input
              className={styles.form_input}
              type="submit"
              value="Add to cart"
            />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query: { url } }) {
  const cakeUrl = `${process.env.API_URL}/cakes?url=${url}`;
  const answer = await fetch(cakeUrl);
  const cakeData = await answer.json();
  return {
    props: {
      cakeData,
    },
  };
}

export default CakeStore;
