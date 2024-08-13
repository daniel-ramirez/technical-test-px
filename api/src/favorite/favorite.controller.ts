import express from 'express';
import favoriteService from './favorite.service';

class FavoriteController {
    async listFavorites(req: express.Request, res: express.Response) {
        const orderBy: string | undefined = req.query.orderBy?.toString();
        const favorites = await favoriteService.list(orderBy);
        res.status(200).send(favorites);
    }
}

export default new FavoriteController();