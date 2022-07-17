import Layout from "../components/Layout";
import CakesList from "../components/CakesList";

const Store = ({ cakes }) => {
  return (
    <Layout pageName="Store">
      <main className="container">
        <h2 className="page-name">Our products</h2>
        <CakesList cakes={cakes} />
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/cakes`;
  const answer = await fetch(url);
  const cakes = await answer.json();

  return {
    props: {
      cakes,
    },
  };
}

export default Store;
