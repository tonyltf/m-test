import styles from "../styles/avatar.module.css";

const Avatar = ({
  firstName = "",
  lastName = "",
  picture = "",
}: {
  firstName: string;
  lastName: string;
  picture?: string;
}) => {
  return (
    <div data-cy="avatar" className={styles.avatar}>
      {picture && <img src={picture} className={styles.avatarImg} />}
      {!picture && (
        <div className={styles.avatarText}>
          {firstName?.[0].toUpperCase() + lastName?.[0]?.toUpperCase()}
        </div>
      )}
    </div>
  );
};

export default Avatar;
