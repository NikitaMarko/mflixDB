import {Request,Response} from 'express'
import {HttpError} from "../errorHandler/HttpError.js";
import {Movie} from "../model/Movie.js";
import {movService} from "../services/MovieServiceImplEmbedded.js";
import asyncHandler from 'express-async-handler'

export const getMoviesByGenres = asyncHandler(async (req: Request, res: Response) => {
    const genresParam = req.params.genres;

    if (!genresParam) {
        throw new HttpError(400, "Genres parameter is missing");
    }

    const genres = genresParam.split(",");

    const movies: Movie[] = await movService.getMoviesByGenres(genres);

    if (movies.length === 0) {
        throw new HttpError(404, "No movies found with these genres");
    }

    res.status(200).json(movies);
});

export const getMoviesWithLowerImdbThanTomatoes = asyncHandler(async (req: Request, res: Response) => {
    const movies = await movService.getMoviesWithLowerImdbThanTomatoes();
    res.status(200).json(movies);
})

export const getTopAwardedMovies = asyncHandler(async (req: Request, res: Response) => {
    const movies = await movService.getTopAwardedMovies();
    res.status(200).json(movies);
})

export const groupMoviesByImdbRatingFrom2010 = asyncHandler(async (req: Request, res: Response) => {
    const grouped = await movService.groupMoviesByImdbRatingFrom2010();
    res.status(200).json(grouped);
})

export const getMoviesInLanguage = asyncHandler(async (req: Request, res: Response) => {
    const lang = req.params.lang;

    if (!lang) {
        throw new HttpError(400, "Language parameter is missing");
    }

    const movies: Movie[] = await movService.getMoviesInLanguage(lang);

    if (movies.length === 0) {
        throw new HttpError(404, `No movies found with language: ${lang}`);
    }

    res.status(200).json(movies);
});