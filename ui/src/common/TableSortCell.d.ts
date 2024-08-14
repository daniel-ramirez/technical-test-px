import React from "react";
import { FavoriteDto } from "../features/favorite/favorite.d"

export type Order = 'asc' | 'desc';

 export interface TableSortCellProps {
    id: keyof FavoriteDto;
    label: string;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof FavoriteDto) => void;
    order: Order;
    orderBy: keyof FavoriteDto;
}