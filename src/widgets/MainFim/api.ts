export const getFilmById = (id:string) => {
return fetch(`https://cinemaguide.skillbox.cc/movie/${id}`).then((response) => response.json())

}