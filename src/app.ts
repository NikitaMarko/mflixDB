import {launchServer} from "./server.ts";
import * as mongoose from "mongoose";

import {db} from "./config/movieConfig.ts";

mongoose.connect(db).then(() => {
    console.log("MongoDB Connected")
        launchServer();
}).catch(() => {console.log("Something went wrong")});

