// import { useRouter } from "next/router";
import styles from "../../styles/Entry.module.css";
import Layout from "../../components/Layout";
import Image from "next/image";
import { dateFormat } from "../../helpers/helper-functions";

const EntryBlog = ({ entry }) => {
  // const router = useRouter();

  const { title, content, published_at, image } = entry;
  // console.log(image);

  return (
    <Layout pageName={title}>
      <main className="container">
        <h1 className="page-name">{title}</h1>

        <article className={`container-m ${styles.entry_body}`}>
          <div className="entry_body_img">
            <Image
              priority="true"
              layout="responsive"
              width={150}
              height={90}
              src={image[0].url}
              alt={`blog image ${title}`}
            />
          </div>

          <p className={styles.entry_body_date}>{dateFormat(published_at)}</p>

          <p className={styles.entry_body_text}>{content}</p>
        </article>
      </main>
    </Layout>
  );
};

// identifica las entradas
// export async function getStaticPaths() {
//   const url = `${process.env.API_URL}/blogs`;
//   const answer = await fetch(url);
//   const entrys = await answer.json();
//   const paths = entrys.map((entry) => ({
//     params: { url: entry.url },
//   }));
//   console.log(paths);
//   console.log(paths);
//   return {
//     paths,
//     fallback: false,
//   };
// }

// identifica cata entrada
// export async function getStaticProps({ params: { url } }) {
//   const urlBlog = `${process.env.API_URL}/blogs?url=${url}`;
//   // console.log(urlBlog);
//   const answer = await fetch(urlBlog);
//   const entry = await answer.json();
//   console.log(entry);

//   return {
//     props: {
//       entry: entry[0],
//     },
//   };
// }

export async function getServerSideProps({ query: { url } }) {
  const urlBlog = `${process.env.API_URL}/blogs?url=${url}`;
  const answer = await fetch(urlBlog);
  const entry = await answer.json();

  return {
    props: {
      entry: entry[0],
    },
  };
}

export default EntryBlog;
