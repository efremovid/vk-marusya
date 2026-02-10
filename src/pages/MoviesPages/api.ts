export const getMovies = (genre?: string) => {
  let url = `https://cinemaguide.skillbox.cc/movie`;

  if (genre) {
    url = url + `?genre=${genre}`;
  }

  return fetch(url).then((response) => response.json());
};
