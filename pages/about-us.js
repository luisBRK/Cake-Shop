import Layout from "../components/Layout";
import TeamMember from "../components/Team-member";
import SwiperBlog from "../components/SwiperBlog";
import styles from "../styles/About-us.module.css";

const Aboutus = ({ entrys }) => {
  return (
    <Layout pageName="About us">
      <main className="container">
        <h2 className="page-name">About us</h2>

        <div className={styles.story}>
          <div className={styles.story_info}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Gravida neque convallis a cras semper auctor neque. Semper risus
              in hendrerit gravida. Nulla facilisi morbi tempus iaculis urna id
              volutpat.
            </p>
            <p>
              Elementum nibh tellus molestie nunc non blandit massa enim. Quis
              lectus nulla at volutpat diam. Porttitor rhoncus dolor purus non
              enim praesent elementum facilisis leo.
            </p>
          </div>

          <SwiperBlog />
        </div>

        <div className={styles.team}>
          <h3 className="page-name">Our Team</h3>

          <div className={styles.team_members}>
            {entrys.map((teamMember) => (
              <TeamMember key={teamMember.id} teamMember={teamMember} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/team-members`;
  const answer = await fetch(url);
  const entrys = await answer.json();

  return {
    props: {
      entrys,
    },
  };
}

export default Aboutus;
