export const getRandomFilm = () => {
  return fetch("https://cinemaguide.skillbox.cc/movie/random").then(
    (response) => response.json(),
  );
};
