import BlogList from "../components/BlogList";
import Layout from "../components/Layout";
import styles from "../styles/Blog.module.css";

const Blog = ({ entrys }) => {
  return (
    <Layout pageName="Blog">
      <main className="container">
        <h2 className={`page-name ${styles.page_name}`}>Blog</h2>

        <BlogList entrys={entrys} />
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/blogs`;
  const answer = await fetch(url);
  const entrys = await answer.json();

  return {
    props: {
      entrys,
    },
  };
}

export default Blog;
