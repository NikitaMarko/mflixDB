import express from "express";
import * as controller from "../controllers/movieController.js";

export const movieRouter = express.Router();



movieRouter.get('/by-genres/:genres', controller.getMoviesByGenres);
movieRouter.get('/lower-imdb-than-tomatoes', controller.getMoviesWithLowerImdbThanTomatoes);
movieRouter.get('/top-awarded', controller.getTopAwardedMovies);
movieRouter.get('/group-by-imdb-2010',controller.groupMoviesByImdbRatingFrom2010)
movieRouter.get('/movie-languages/:lang',controller.getMoviesInLanguage)

