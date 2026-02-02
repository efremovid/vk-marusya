export const getRandomFilm = () => {
  fetch("https://cinemaguide.skillbox.cc/movie/random").then((response) =>
    response.json(),
  );
};
