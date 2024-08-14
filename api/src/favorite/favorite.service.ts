import favoriteDao from "./favorite.dao";

class FavoriteService {
    async list(status?: string, orderBy?: string) {
        return favoriteDao.getFavorites(status, orderBy);
    }
}

export default new FavoriteService();