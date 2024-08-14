import express from 'express';
import favoriteService from './favorite.service';

class FavoriteController {
    async listFavorites(req: express.Request, res: express.Response) {
        const status = req.query.status?.toString();
        const orderBy = req.query.orderBy?.toString();
        const favorites = await favoriteService.list(status, orderBy);
        res.status(200).send(favorites);
    }
}

export default new FavoriteController();