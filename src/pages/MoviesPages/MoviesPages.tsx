import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getMovies } from "./api";

const MoviesPages = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("genre");

  useEffect(() => {
    getMovies(query || "").then((data) => console.log(data));
  }, [query]);

  return <div>MoviesPages</div>;
};

export default MoviesPages;
