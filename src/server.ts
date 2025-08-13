import express from 'express'
import morgan from "morgan";
import {PORT} from "./config/movieConfig.js";
import {errorHandler} from "./errorHandler/errorHandler.js";
import {movRouter} from "./routes/movRouter.js";

export const launchServer = () => {

    const app = express();

    //===================Middleware================
    app.use(express.json());
    app.use(morgan("dev"));

    //===================Router==========================
    app.use('/api', movRouter);
    app.use((req,res)=>{
        res.status(404).send('Page Not Found');
    })

    //====================Error Handler=====================
    app.use(errorHandler)

    app.listen(PORT, () => console.log(`Server runs at http://localhost:${PORT}`));


}