import Avatar from "./Avatar";
import styles from "../styles/card.module.css"

const Card = (info) => {
  const { firstName, lastName } = info;
  return <div className={styles.card}>
    <Avatar firstName={firstName} lastName={lastName} />
    <div>{`${firstName} ${lastName}`}</div>
  </div>;
};

export default Card;
