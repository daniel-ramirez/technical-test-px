/*
    Daniel Ramirez
*/
import { FAVORITE_FOOD, FAVORITE_MOVIE, NAME, STATUS } from "./favorite.constant";
import { danielObj, donnyObj, mattObj, miroslavObj, rockyObj } from "./favorite.dataraw";
import { FavoriteDataRawDto } from "./favorite.dataraw.dto";
import { FavoriteDto } from "./favorite.dto";

class FavoriteDao {
    favorites: Array<FavoriteDto> = [];

    constructor() {
        const convertToFavoriteDto = (data: FavoriteDataRawDto): FavoriteDto => {
            let favorite: FavoriteDto = {
                name: data[NAME],
                favoriteFood: data[FAVORITE_FOOD],
                favoriteMovie: data[FAVORITE_MOVIE],
                status: data[STATUS],
            };
            return favorite;
        }

        this.favorites.push(convertToFavoriteDto(rockyObj));
        this.favorites.push(convertToFavoriteDto(miroslavObj));
        this.favorites.push(convertToFavoriteDto(donnyObj));
        this.favorites.push(convertToFavoriteDto(mattObj));
        this.favorites.push(convertToFavoriteDto(danielObj));
    }

    async getFavorites(orderBy?: string) {
        this.favorites.map(f => {
            f.date = new Date();
        });

        if (orderBy) {
            function dynamicSort(property: string) {
                var sortOrder = 1;
                if(property[0] === "-") {
                    sortOrder = -1;
                    property = property.replace("-", "");
                }

                return function (a: FavoriteDto, b: FavoriteDto) {
                    let pk = property as keyof FavoriteDto;
                    var result = (a[pk]! < b[pk]!) ? -1 : (a[pk]! > b[pk]!) ? 1 : 0;
                    return result * sortOrder;
                }
            }

            this.favorites = this.favorites.sort(dynamicSort(orderBy))
        }
        return this.favorites;
    }
}

export default new FavoriteDao();