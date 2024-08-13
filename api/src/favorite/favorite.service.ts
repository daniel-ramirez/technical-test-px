import favoriteDao from "./favorite.dao";

class FavoriteService {
    async list(orderBy?: string) {
        return favoriteDao.getFavorites(orderBy);
    }
}

export default new FavoriteService();