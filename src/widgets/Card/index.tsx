import styles from "./styles.module.scss";
import posterNone from "../../../public/posterNone.jpg";

interface CardProps {

  imgLink: string;
  index?: number;
  alt?: string;
  size?: 'md' | 'lg'
  genre?: string;
}

const Card = ({  imgLink, index, alt }: CardProps) => {

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
};

export default Card;
