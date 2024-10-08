/*
    Daniel Ramirez

    Server app cofig
*/
import express from "express";
import * as dotevnv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import { CommonRoutesConfig } from "./common/common.routes.config";
import { FavoritesRoutes } from "./favorite/favorite.routes.config";

dotevnv.config();

var PORT = 7000;
if (!process.env.PORT) {
    console.log(`No port value specified... Using default port: 7000`);
} else {
    PORT = parseInt(process.env.PORT as string, 10);
}

const routes: Array<CommonRoutesConfig> = [];

const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());
app.use(helmet());

routes.push(new FavoritesRoutes(app));

app.listen(PORT, () => {
    routes.forEach((route: CommonRoutesConfig) => {
        console.log(`Routes configured for ${route.getName()}`);
    });
    console.log(`Server is listening on port ${PORT}`);
})
