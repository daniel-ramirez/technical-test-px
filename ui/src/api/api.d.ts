import { Order } from "../common/TableSortCell.d";
import { FavoriteDto } from "../features/favorite/favorite.d";

export interface RequestParam {
    orderBy: keyof FavoriteDto;
    direction: Order;
    status: string;
}