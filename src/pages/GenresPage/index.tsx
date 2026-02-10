import { useEffect, useState } from "react";
import { getGenres } from "./api/api";
import { Link } from "react-router-dom";

const GenresPage = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getGenres().then((data) => setGenres(data));
  }, []);

  console.log(genres);

  return (
    <div>
      {genres.map((genre) => (
        <Link to={`/movie?genre=${genre}`}>{genre}</Link>
      ))}
    </div>
  );
};

export default GenresPage;
