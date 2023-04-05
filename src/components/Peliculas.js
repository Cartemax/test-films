import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ListaPeliculas from './ListaPeliculas';

const theme = createTheme();
export default function Peliculas() {
    const baseUrl = "https://api.themoviedb.org/3";
    const key = "a6b491542360d29787ae51c77b776b59";
    const [infoPeliculas, setInfoPeliculas] = useState({});

    const traerPeliculas = async () => {
        await axios.get(`${baseUrl}/discover/movie?sort_by=popularity.desc&api_key=${key}`).then(response => {
            setInfoPeliculas(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        traerPeliculas()
    }, [])
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main style={{ backgroundColor: "#1F1C2C" }}>
                <Container sx={{ py: 8 }}>
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {infoPeliculas && infoPeliculas.hasOwnProperty("results") && infoPeliculas.results.map((pelicula, indice) => {
                            return (
                                <ListaPeliculas pelicula={pelicula} key={indice} />
                            )
                        })}
                    </Grid>
                </Container>
            </main>
        </ThemeProvider >
    )
}