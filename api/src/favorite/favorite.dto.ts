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
