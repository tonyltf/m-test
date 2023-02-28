import Avatar from "./Avatar";
import styles from "../styles/card.module.css";

interface ICardProps {
  firstName: string;
  lastName: string;
  picture?: string;
}

const Card = ({ firstName, lastName, picture }: ICardProps) => {
  return (
    <div data-cy="card" className={styles.card}>
      <Avatar firstName={firstName} lastName={lastName} picture={picture} />
      <div>{`${firstName} ${lastName}`}</div>
    </div>
  );
};

export default Card;
