import styles from "./styles.module.scss";
import posterNone from "../../../public/posterNone.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface CardProps {
  id: number;
  imgLink: string;
  index?: number;
  alt?: string;
  size?: "md" | "lg";
  genre?: string;
}

const Card = ({ imgLink, index, alt, id }: CardProps) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <div
      className={styles.container}
      onClick={handleClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {index && <div className={styles.top}>{index}</div>}
      <img
        className={styles.image}
        src={imgLink === null ? posterNone : imgLink}
        alt={alt}
      />
      {hover && <p className={styles.name}>{alt}</p>}
    </div>
  );
};

export default Card;
