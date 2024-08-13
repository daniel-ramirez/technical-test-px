/*
    Daniel Ramirez
*/
import express from 'express';
import { CommonRoutesConfig } from "../common/common.routes.config";
import favoriteController from './favorite.controller';

export class FavoritesRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'FavoritesRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/favorites`)
            .get(favoriteController.listFavorites);
        return this.app;
    }
}