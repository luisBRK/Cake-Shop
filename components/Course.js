import styles from "../styles/Course.module.css";

const Course = ({ course }) => {
  const { title, content, img } = course;
  return (
    <section>
      <div className={styles.course_section}>
        <div className={styles.course_section_data}>
          <h2>{title}</h2>
          <p>{content}</p>

          <a className={styles.course_section_button} href="#">
            More ifo
          </a>
        </div>
      </div>

      <style jsx>{`
        section {
          padding: 5rem 0;
          margin-top: 7rem;
          background-image: linear-gradient(
              to right,
              rgb(0 0 0 / 0.8),
              rgb(0 0 0 / 0.6)
            ),
            url(${img.url});
          background-size: cover;
          background-position: center;
        }
      `}</style>
    </section>
  );
};

export default Course;
