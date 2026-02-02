import styles from "./styles.module.scss";
import iconStar from "../../icons/IconStar.svg";

interface RatingProps {
  rating?: number;
}

const Rating = ({ rating }: RatingProps) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={iconStar} alt="" />
      {rating && <p>{rating}</p>}
    </div>
  );
};

export default Rating;
