import Image from "next/image";
import styles from "../styles/Cakes.module.css";
import Link from "next/link";

const Cake = ({ cake }) => {
  const { id, url, image, name, price, description } = cake;
  const urlImage = image[0].formats.medium.url;
  return (
    <div className={styles.cake_target}>
      <div className={styles.cake_target_img}>
        <Image
          priority="true"
          layout="responsive"
          height={100}
          width={150}
          src={urlImage}
          alt={`picture ${name}`}
        />
      </div>
      <div className={styles.cake_target_body}>
        <h3 className={styles.cake_target_name}>{name}</h3>

        <div className={styles.cake_target_soil}>
          <p className={styles.cake_target_price}>$ {price}</p>
          <Link href={`/cakes/${url}`}>
            <a className={styles.cake_target_link}>View</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cake;
