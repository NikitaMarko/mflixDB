import * as mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


const AwardsSchema = new mongoose.Schema({
    wins: { type: Number },
    nominations: { type: Number },
    text: { type: String }
}, { _id: false });

const ImdbSchema = new mongoose.Schema({
    rating: { type: Number },
    votes: { type: Number },
    id: { type: Number }
}, { _id: false });

const TomatoesViewerSchema = new mongoose.Schema({
    rating: { type: Number },
    numReviews: { type: Number },
    meter: { type: Number }
}, { _id: false });

const TomatoesCriticSchema = new mongoose.Schema({
    rating: { type: Number },
    numReviews: { type: Number },
    meter: { type: Number }
}, { _id: false });

const TomatoesSchema = new mongoose.Schema({
    viewer: { type: TomatoesViewerSchema },
    critic: { type: TomatoesCriticSchema },
    dvd: { type: Date },
    fresh: { type: Number },
    rotten: { type: Number },
    consensus: { type: String },
    lastUpdated: { type: Date },
    production: { type: String }
}, { _id: false });

export const MovieMongooseSchema = new mongoose.Schema({
    _id:{type:String, default:()=> uuidv4()},
    title: { type: String, required: true },
    plot: { type: String },
    fullplot: { type: String },
    genres: { type: [String], default: [] },
    runtime: { type: Number },
    cast: { type: [String], default: [] },
    num_mflix_comments: { type: Number },
    languages: { type: [String], default: [] },
    released: { type: Date },
    directors: { type: [String], default: [] },
    writers: { type: [String], default: [] },
    rated: { type: String },
    lastupdated: { type: String },
    year: { type: Number },

    awards: { type: AwardsSchema },
    imdb: { type: ImdbSchema },
    countries: { type: [String], default: [] },
    type: { type: String },

    tomatoes: { type: TomatoesSchema },
    poster: { type: String }
});

export const MovieMongooseModel = mongoose.model('Movie', MovieMongooseSchema, 'movies')
