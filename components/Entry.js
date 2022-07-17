import Link from "next/link";
import Image from "next/image";
import { dateFormat } from "../helpers/helper-functions";
import styles from "../styles/Entry.module.css";

const Entry = ({ entry }) => {
  const { id, url, title, resume, image, published_at } = entry;
  const urlImage = image[0].url;

  return (
    <article className={styles.article}>
      <div className={styles.card_img}>
        <Image
          priority="true"
          layout="responsive"
          width={150}
          height={90}
          src={urlImage}
          alt={`blog image ${title}`}
        />
      </div>

      <div className={styles.info}>
        <h1 className={styles.card_title}>{title}</h1>
        <p className={styles.card_date}>{dateFormat(published_at)}</p>
        <p className={styles.card_resume}>{resume}</p>
        <Link href={`/blog/${url}`}>
          <a className={styles.card_link}>View Article</a>
        </Link>
      </div>
    </article>
  );
};

export default Entry;
