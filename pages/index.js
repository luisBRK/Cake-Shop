import Layout from "../components/Layout";
import CakeCarrousell from "../components/CakeCarrousell";
import BlogList from "../components/BlogList";
import Course from "../components/Course";

export default function Home({ cakes, course, entrys }) {
  return (
    <Layout pageName="Home">
      <main className="container">
        <h1 className="page-name">Home</h1>
        <CakeCarrousell cakes={cakes} />
      </main>

      <Course course={course} />

      <div className="container">
        <BlogList entrys={entrys} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  // const urlCakes = `${process.env.API_URL}/cakes`;
  // const answer = await fetch(urlCakes);
  // const cakes = await answer.json();

  const urlCakes = `${process.env.API_URL}/cakes?_limit=6&_sort=created_at:desc`;
  const urlCourse = `${process.env.API_URL}/courses`;
  const urlBlog = `${process.env.API_URL}/blogs?_limit=4&_sort=created_at:desc`;

  const [answerCakes, answerCourse, answerEntrys] = await Promise.all([
    fetch(urlCakes),
    fetch(urlCourse),
    fetch(urlBlog),
  ]);

  const [cakes, course, entrys] = await Promise.all([
    answerCakes.json(),
    answerCourse.json(),
    answerEntrys.json(),
  ]);

  return {
    props: {
      cakes,
      course,
      entrys,
    },
  };
}
