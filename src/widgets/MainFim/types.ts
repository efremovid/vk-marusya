
export interface Movie {
  id: number;
  title: string;
  originalTitle: string;
  language: string;
  releaseYear: number;
  releaseDate: string;
  genres: string[];
  plot: string;
  runtime: number; // в минутах
  budget?: number | null; // бюджет, может быть null
  revenue: string; // выручка (строка, т. к. может содержать форматирование)
  homepage: string;
  status: string;
  posterUrl: string; // URL постера
  backdropUrl: string; // URL фонового изображения
  trailerUrl: string; // URL трейлера
  trailerYouTubeId: string; // ID трейлера на YouTube
  tmdbRating: number; // рейтинг на TMDB
  searchL: string; // поисковый запрос/метка
  keywords: string[]; // ключевые слова (сейчас пуст)
  countriesOfOrigin: string[]; // страны происхождения (сейчас пуст)
  languages: string[]; // языки (сейчас пуст)
  cast: string[]; // актёрский состав (сейчас пуст)
  director: string; // режиссёр
  production: string; // продакшн-компания
  awardsSummary: string; // сводка наград
}