import type { FilmData } from "../../shared/types/filmData";
import FilmInfo from "../../shared/ui/Film";
import styles from "./styles.module.scss";

interface SearchResultProps {
  data: FilmData[];
  isLoading: boolean;
}

const SearchResult = ({ data, isLoading }: SearchResultProps) => {
  return (
    <ul className={styles.container}>
      {data.map((film) => (
        <FilmInfo key={film.title} film={film} />
      ))}
    </ul>
  );
};

export default SearchResult;
