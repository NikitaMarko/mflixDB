import {Movie} from "../model/Movie.js";


export interface MovieService {
    getMoviesWithLowerImdbThanTomatoes: () => Promise<Movie[]>;

    getMoviesInLanguage: (lang:string) => Promise<Movie[]>;

    getMoviesByGenres: (genres: string[]) => Promise<Movie[]>;

    getTopAwardedMovies: () => Promise<Movie[]>;

    groupMoviesByImdbRatingFrom2010: () => Promise<Record<number, string[]>>;
}
