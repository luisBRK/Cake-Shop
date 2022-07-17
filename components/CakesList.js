import Cake from "./Cake";
import styles from "../styles/Cakes.module.css";

const CakesList = ({ cakes }) => {
  return (
    <div className={styles.cakeGrid}>
      {cakes.map((cake) => (
        <Cake key={cake._id} cake={cake} />
      ))}
    </div>
  );
};

export default CakesList;
