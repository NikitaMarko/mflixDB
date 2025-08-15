import {MovieService} from "./MovieService.js";
import {Movie} from "../model/Movie.js";
import {MovieMongooseModel} from "../model/MovieMongooseModel.js";

export class MovieServiceImplEmbedded implements MovieService {

    async getMoviesByGenres(genres: string[]): Promise<Movie[]> {
        if (
            genres.length !== 2 ||
            !genres.includes("Action") ||
            !genres.includes("Comedy")
        ) {
            throw new Error("Must search exactly for genres 'Action' and 'Comedy'");
        }

        const result = await MovieMongooseModel
            .find({ genres: { $all: genres } })
            .lean();

        return result as Movie[];
    }

    async getMoviesInLanguage(lang:string): Promise<Movie[]> {
        const movies = await MovieMongooseModel
            .find({languages:lang})
            .lean()
        return movies as Movie[];
    }

    async getMoviesWithLowerImdbThanTomatoes(): Promise<Movie[]> {
        const result = await MovieMongooseModel.aggregate([
            {
                $match: {
                    "imdb.rating": { $exists: true },
                    "tomatoes.viewer.rating": { $exists: true },
                    $expr: {
                        $lt: ["$imdb.rating", "$tomatoes.viewer.rating"]
                    }
                }
            }
        ]);

        return result as Movie[];
    }

    async getTopAwardedMovies(): Promise<Movie[]> {
        const topAwardedMovies = await MovieMongooseModel
            .find({})
            .sort({'awards.wins':-1})
            .limit(2)

        // aggregate([
        //     {
        //         $match: {
        //             "awards.wins": { $ne: null }
        //         }
        //     },
        //     {
        //         $sort: {
        //             "awards.wins": -1
        //         }
        //     },
        //     {
        //         $limit: 2
        //     }
        // ]);

        return topAwardedMovies as Movie[];
    }

    async groupMoviesByImdbRatingFrom2010(): Promise<Movie[]> {
        const moviesByImdbRating = await MovieMongooseModel.aggregate([
            {
                $match: {
                    year: 2010
                    // "imdb.rating": { $exists: true },
                    // title: { $exists: true }
                }
            },
            {
                $group: {
                    _id: "$imdb.rating",
                    titles: { $push: "$title" }
                }},
            {
                $sort:{
                    _id:-1}
            }
        ]);

        return moviesByImdbRating as Movie[];
        //     .reduce((acc, group) => {
        //     acc[group._id] = group.titles;
        //     return acc;
        // }, {} as Record<number, string[]>);
    }

}
export const movService = new MovieServiceImplEmbedded();