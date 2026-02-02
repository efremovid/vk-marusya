export const getTopFilms = () => {
  return fetch("https://cinemaguide.skillbox.cc/movie/top10").then((response) =>
    response.json(),
  );
};
