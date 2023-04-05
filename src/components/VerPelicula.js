import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Divider } from '@mui/material';

const theme = createTheme();

export default function VerPelicula() {
    const { id } = useParams();
    const baseUrl = "https://api.themoviedb.org/3";
    const key = "a6b491542360d29787ae51c77b776b59";
    const [infoPelicula, setInfoPelicula] = useState(null);

    const traerPeliculas = async () => {
        if (id) {
            await axios.get(`${baseUrl}/movie/${id}?api_key=${key}`).then(response => {
                setInfoPelicula(response.data);
            }).catch(error => {
                console.log(error);
            })
        }
    }

    useEffect(() => {
        traerPeliculas()
    }, [])

    return (
        infoPelicula &&
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main style={{ backgroundColor: "#1F1C2C" }}>
                <Container sx={{ py: 8 }} >
                    {/* Hero unit */}
                    <Box>
                        <Card sx={{ backgroundColor: "#1f1c2c" }}>
                            <CardMedia
                                component="img"
                                image={`https://image.tmdb.org/t/p/original${infoPelicula.backdrop_path}`}
                                alt="random"
                            />
                            <CardContent sx={{ flexGrow: 1 }} align="center" style={{ backgroundColor: "#1F1C2C" }}>
                                <Typography gutterBottom variant="h5" component="h2" style={{ color: "#FFFFFF" }}>
                                    {infoPelicula.title}
                                </Typography>
                                <Typography style={{ color: "#A5A5A5" }} >
                                    {infoPelicula.original_language} | {infoPelicula.genres.map((element, index) =>
                                        element.name
                                    ).join(" | ")}
                                </Typography>
                                <Typography style={{ color: "#A5A5A5" }} >
                                    Popularity: {infoPelicula.popularity}
                                </Typography>
                                <Typography style={{ color: "#A5A5A5" }} >
                                    Release date: {infoPelicula.release_date}
                                </Typography>
                                <Typography style={{ color: "#A5A5A5" }} >
                                    Vote average: {infoPelicula.vote_average}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                    <Divider spacing={2} style={{ backgroundColor: "#4F4F4F" }} />
                    <Box sx={{ p: 6 }} style={{ backgroundColor: "#1F1C2C" }}>
                        <Grid container >
                            <p style={{ color: "#FFFFFF" }}>Store line:</p>
                            <Typography style={{ color: "#A5A5A5" }}>
                                {infoPelicula.overview}
                            </Typography>
                        </Grid>
                    </Box>
                </Container>
            </main>
        </ThemeProvider>
    )
}