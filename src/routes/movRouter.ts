import express from "express";
import {movieRouter} from "./movieRouter.js";

export const movRouter = express.Router();
movRouter.use('/movie', movieRouter);
