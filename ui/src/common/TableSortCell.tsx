import { Box, TableCell, TableSortLabel } from "@mui/material"
import { visuallyHidden } from "@mui/utils";
import { TableSortCellProps } from "./TableSortCell.d";
import { FavoriteDto } from "../features/favorite/favorite.d";

const TableSortCell = (props: TableSortCellProps) => {

    const createSortHandler =
    (property: keyof FavoriteDto) => (event: React.MouseEvent<unknown>) => {
        props.onRequestSort(event, property);
    };

    return (
        <TableCell
            key={props.id}
            sortDirection={props.orderBy === props.id ? props.order : false}
            style={{ fontWeight: "bold" }}
        >
            <TableSortLabel
                active={props.orderBy === props.id}
                direction={props.orderBy === props.id ? props.order : 'asc'}
                onClick={createSortHandler(props.id)}
            >
                {props.label}
                {props.orderBy === props.id ? (
                    <Box component="span" sx={visuallyHidden}>
                        {props.order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                    </Box>
                ) : null}
            </TableSortLabel>
        </TableCell>
    )
}

export default TableSortCell;