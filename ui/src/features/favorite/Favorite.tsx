import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { CssBaseline, Container, Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, SelectChangeEvent, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchFavorites, selectFavorites } from "./favorite.slice";
import { RequestParam } from "../../api/api.d";
import { FavoriteDto } from "./favorite.d";
import TableSortCell from "../../common/TableSortCell";

const Favorite: React.FC = () => {
    const favorites = useAppSelector(selectFavorites);
    const dispatch = useAppDispatch();
    const [requestParam, setRequestParam] = useState<RequestParam>(
        {
            orderBy: "name",
            direction: "asc",
            status: "Active"
        }
    )

    useEffect(() => {
        dispatch(fetchFavorites(requestParam));
    }, [requestParam]);

    const handleChange = (event: SelectChangeEvent) => {
        setRequestParam({
            ...requestParam,
            status: event.target.value as string,
        });
    };

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof FavoriteDto,
    ) => {
        const isAsc = requestParam.orderBy === property && requestParam.direction === 'asc';
        setRequestParam({
            ...requestParam,
            orderBy: property,
            direction: isAsc ? 'desc' : 'asc'
        });
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box sx={{ height: '100vh' }} style={{ padding: "20px" }}>
                    <Typography variant="h1" style={{ padding: "20px", fontSize: "28px" }} gutterBottom>
                        Favorites
                    </Typography>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center" padding="normal" colSpan={5}>
                                        <FormControl size="small" sx={{ m: 1, minWidth: 120 }}>
                                            <InputLabel id="status">Show status</InputLabel>
                                            <Select
                                                labelId="status-select-label"
                                                id="status-select"
                                                value={requestParam.status}
                                                label="Show status"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value="All">All</MenuItem>
                                                <MenuItem value="Active">Active</MenuItem>
                                                <MenuItem value="Inactive">Inactive</MenuItem>
                                            </Select>
                                        </FormControl></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableSortCell
                                        id="name"
                                        label="Name"
                                        onRequestSort={handleRequestSort}
                                        order={requestParam.direction}
                                        orderBy={requestParam.orderBy}
                                    />
                                    <TableSortCell
                                        id="favoriteFood"
                                        label="Favorite Food"
                                        onRequestSort={handleRequestSort}
                                        order={requestParam.direction}
                                        orderBy={requestParam.orderBy}
                                    />
                                    <TableSortCell
                                        id="favoriteMovie"
                                        label="Favorite Movie"
                                        onRequestSort={handleRequestSort}
                                        order={requestParam.direction}
                                        orderBy={requestParam.orderBy}
                                    />
                                    <TableCell>Status</TableCell>
                                    <TableCell>Daate</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {favorites.map(row => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell>{row.favoriteFood}</TableCell>
                                        <TableCell>{row.favoriteMovie}</TableCell>
                                        <TableCell>{row.status}</TableCell>
                                        <TableCell>{format(row.date!, 'yyyy-MM-dd')}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Favorite;