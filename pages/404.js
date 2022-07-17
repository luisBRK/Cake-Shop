import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Error.module.css";

const Error404 = () => {
  return (
    <div className={`container ${styles.error}`}>
      <div className={styles.error_text}>
        <p>Error</p>
        <p>We have an internal error</p>
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

export default Error404;
