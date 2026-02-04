import styles from "./styles.module.scss";
import iconStar from "../../icons/IconStar.svg";

interface RatingProps {
  rating: number;
}

const Rating = ({ rating }: RatingProps) => {
  return (
    <div
      style={{
        backgroundColor:
          rating >= 8 && rating <= 10
            ? "gold"
            : rating >= 6.5 && rating < 8
              ? "green"
              : rating >= 4 && rating < 6.5
                ? "gray"
                : "red",
      }}
      className={styles.container}
    >
      <img className={styles.img} src={iconStar} alt="" />
      {rating && <p>{rating}</p>}
    </div>
  );
};

export default Rating;
