
export type Movie = {
    _id: string,
    plot?: string;
    fullplot?: string;
    genres?: string[];
    runtime?: number;
    cast?: string[];
    num_mflix_comments?: number;
    title?: string;
    languages?: string[];
    released?: Date;
    directors?: string[];
    writers?: string[];
    rated?: string;

    awards?: {
        wins?: number;
        nominations?: number;
        text?: string;
    };

    lastupdated?: string;
    year?: number;

    imdb?: {
        rating?: number;
        votes?: number;
        id?: number;
    };

    countries?: string[];
    type?: string;

    tomatoes?: {
        viewer?: {
            rating?: number;
            numReviews?: number;
            meter?: number;
        };
        critic?: {
            rating?: number;
            numReviews?: number;
            meter?: number;
        };
        dvd?: Date;
        fresh?: number;
        rotten?: number;
        consensus?: string;
        lastUpdated?: Date;
        production?: string;
    };

    poster?: string;

}