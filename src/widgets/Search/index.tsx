import { useEffect, useMemo, useState } from "react";
import debounce from "debounce";
import { BaseInput } from "../../shared/ui/BaseInput/BaseInput";
import { Button } from "../../shared/ui/Button";
import styles from "./styles.module.scss";
import type { FilmData } from "../../shared/types/filmData";

const Search = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [data, setData] = useState<FilmData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchFilm = useMemo(
    () =>
      debounce(async (queryTitle: string) => {
        if (!queryTitle.trim()) {
          setData([]);
          return;
        }

        setIsLoading(true);

        try {
          const response = await fetch(
            `https://cinemaguide.skillbox.cc/movie?title=${queryTitle}&count=5`,
          );
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }, 300),
    [],
  );

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTitle(value);
    handleSearchFilm(value);
  };

  useEffect(() => {
    return () => {
      handleSearchFilm.clear();
    };
  }, [handleSearchFilm]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className={styles.container}>
      <BaseInput
        value={searchTitle}
        onChange={onChangeHandler}
        placeholder="Введите запрос"
      />

      <Button theme="primary" disabled={isLoading}>
        {isLoading ? "Поиск..." : "Поиск"}
      </Button>
    </div>
  );
};

export default Search;
