export const getGenres = () => {
  return fetch("https://cinemaguide.skillbox.cc/movie/genres").then(
    (response) => response.json(),
  );
};
