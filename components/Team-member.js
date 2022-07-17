import styles from "../styles/Team-member.module.css";
import Image from "next/image";

const TeamMember = ({ teamMember }) => {
  const { id, name, role, picture } = teamMember;
  const urlPicture = picture[0].formats.medium.url;
  return (
    <div className={styles.team_member}>
      <Image
        priority="true"
        layout="responsive"
        width={150}
        height={200}
        src={urlPicture}
        alt={`member ${name} image`}
      />
      <div className={styles.info}>
        <p className={styles.role}>{role}</p>
        <p className={styles.name}>{name}</p>
      </div>
    </div>
  );
};

export default TeamMember;
