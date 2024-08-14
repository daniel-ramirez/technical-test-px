/*
    Daniel Ramirez
*/
export interface FavoriteDto {
    name : string;
    favoriteFood : string;
    favoriteMovie : string;
    status: "Inactive" | "Active" | string;
    date?: Date;
}

export interface FavoriteState {
    favorites: Array<FavoriteDto>;
    status: 'idle' | 'loading' | 'failed';
}
