import Image from "next/image";
import styles from "../styles/Error.module.css";

const Error500 = () => {
  return (
    <div className={`container ${styles.error}`}>
      <div className={styles.error_text}>
        <p>Error</p>
        <p>We can find this page</p>
        <Link href="/">Return home</Link>
      </div>

      <div>
        <Image
          priority="true"
          layout="responsive"
          width={150}
          height={150}
          src="/img/error.svg"
          alt="error image"
        />
      </div>
    </div>
  );
};

export default Error500;
