import styles from "./styles.module.scss";
import posterNone from "../../../public/posterNone.jpg";

interface CardProps {
  typeOfCard: "film" | "genre";
  imgLink: string;
  index?: number;
  alt?: string;
  genre?: string;
}

const Card = ({ typeOfCard, imgLink, index, alt }: CardProps) => {
  if (typeOfCard === "film") {
    return (
      <div className={styles.container}>
        {index && <div className={styles.top}>{index}</div>}
        <img
          className={styles.image}
          src={imgLink === null ? posterNone : imgLink}
          alt={alt}
        />
      </div>
    );
  }

  if (typeOfCard === "genre") {
    return (
      <div className={styles.container}>
        <img
          className={styles.image}
          src={imgLink === null ? posterNone : imgLink}
          alt={alt}
        />
      </div>
    );
  }
};

export default Card;
