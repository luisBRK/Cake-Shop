import styles from "../styles/Blog.module.css";
import Entry from "./Entry";

const BlogList = ({ entrys }) => {
  return (
    <div className={styles.blog}>
      {entrys.map((entry) => (
        <Entry key={entry._id} entry={entry} />
      ))}
    </div>
  );
};

export default BlogList;
