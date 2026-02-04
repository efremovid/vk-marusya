import { Button } from "../../shared/ui/Button/index";
import Rating from "../../shared/ui/rating";
import styles from "./styles.module.scss";
import iconHeart from "../../shared/icons/iconHeart.svg";
import iconChange from "../../shared/icons/iconChange.svg";
import imageNone from "../../../public/imageNone.jpg";

interface FilmInfoProps {
  rating?: number;
  year?: number;
  genre: string;
  runTime: number;
  title: string;
  subTitle: string;
  imgUrl: string;
  handleChangeClick?: () => void;
}

const FilmInfo = ({
  rating,
  year,
  genre,
  runTime,
  title,
  subTitle,
  imgUrl,
  handleChangeClick,
}: FilmInfoProps) => {
  const handleTrailerClick = () => {
    console.log("Трейлер");
  };

  const handleAboutClick = () => {
    console.log("О фильме");
  };

  const handleFavoriteClick = () => {
    console.log("Избранное");
  };

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.filmInfo}>
          {rating && <Rating rating={rating} />}
          <p>{year}</p>
          <p>{genre}</p>
          <p>{runTime} min</p>
        </div>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subTitle}>{subTitle}</h3>
        <div className={styles.buttons}>
          <Button
            onClick={handleTrailerClick}
            theme="primary"
            widthVariant="full"
          >
            Трейлер
          </Button>
          <Button
            onClick={handleAboutClick}
            theme="primary"
            widthVariant="full"
          >
            О фильме
          </Button>
          <Button
            onClick={handleFavoriteClick}
            theme="primary"
            widthVariant="icon"
          >
            <img className={styles.icon} src={iconHeart} alt="" />
          </Button>

          {handleChangeClick && (
            <Button
              onClick={handleChangeClick}
              theme="primary"
              widthVariant="icon"
            >
              <img className={styles.icon} src={iconChange} alt="" />
            </Button>
          )}
        </div>
      </div>
      <img className={styles.image} src={imgUrl || imageNone} alt={title} />
    </div>
  );
};

export default FilmInfo;
