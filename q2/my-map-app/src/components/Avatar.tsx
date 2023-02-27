import styles from "../styles/avatar.module.css";

const Avatar = ({
  firstName = "",
  lastName = "",
}: {
  firstName: string;
  lastName: string;
}) => {
  return (
    <div className={styles.avatar}>
      {firstName?.[0].toUpperCase() + lastName?.[0]?.toUpperCase()}
    </div>
  );
};

export default Avatar;
