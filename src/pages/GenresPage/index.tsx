import { useEffect, useState } from "react";
import { getGenres } from "./api/api";

const GenresPage = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getGenres().then((data) => setGenres(data));
  }, []);

  console.log(genres);

  return (
    <div>
      {genres.map((genre) => (
        <p>{genre}</p>
      ))}
    </div>
  );
};

export default GenresPage;
