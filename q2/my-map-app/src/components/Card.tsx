import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import styles from "../styles/card.module.css";

interface ICardProps {
  id: string;
  firstName: string;
  lastName: string;
  picture?: string;
  isLink?: boolean;
  onClick?: () => void;
}

const Card = ({
  id,
  firstName,
  lastName,
  picture,
  onClick,
  isLink = true,
}: ICardProps) => {
  return (
    isLink ? 
    (<Link to={`friend/${id}`}>
      <div data-cy="card" className={styles.card} onClick={onClick}>
        <Avatar firstName={firstName} lastName={lastName} picture={picture} />
        <div>{`${firstName} ${lastName}`}</div>
      </div>
    </Link>)
    : 
      (<div data-cy="card" className={styles.card} onClick={onClick}>
        <Avatar firstName={firstName} lastName={lastName} picture={picture} />
        <div>{`${firstName} ${lastName}`}</div>
      </div>)
  );
};

export default Card;
