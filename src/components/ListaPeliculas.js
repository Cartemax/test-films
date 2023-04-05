import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";

export default function ListaPeliculas({ pelicula }) {
    const [checked, setChecked] = useState(true);

    return (
        <Grid item xs={6} sm={4} md={3}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} style={{ backgroundColor: "rgba(221, 221, 221, 0.5)" }}>
                <CardActionArea component={Link} to={`/pelicula/${pelicula.id}`} disableRipple>
                    <CardMedia
                        component="img"
                        image={`https://image.tmdb.org/t/p/original${pelicula.poster_path}`}
                        alt="random"
                    />
                </CardActionArea>
                <CardContent sx={{ flexGrow: 1 }} >
                    <Typography gutterBottom variant="h8" component="h4" style={{ color: "#FFFFFF" }}>
                        {pelicula.original_title}
                    </Typography>
                    <Typography gutterBottom variant="h8" component="h4" style={{ color: "#FFFFFF", borderRadius: "30px", backgroundColor: "rgba(255, 255, 255, 0.2)", maxWidth: "60px" }}>
                        <label style={{ color: "#FFCE31" }}>★</label> {pelicula.vote_average}
                    </Typography>
                    <Typography spacing={4} style={{ color: "#A5A5A5" }}>
                        <span>
                            {checked ? (
                                pelicula.overview.split(',')[0]
                            ) : (
                                pelicula.overview
                            )}
                        </span>
                        {/* Ver toda la información */}
                        <a href='#' style={{ display: checked ? "block" : "none" }} onClick={() => setChecked(false)}>...</a>
                        {/* Ver comprimida la información */}
                        <a href='#' style={{ display: checked ? "none" : "block" }} onClick={() => setChecked(true)}>ver menos</a>

                    </Typography>
                </CardContent>

            </Card>
        </Grid >
    )
}