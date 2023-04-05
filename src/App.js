import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Peliculas from "./components/Peliculas";
import VerPelicula from "./components/VerPelicula";

export default function App() {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Peliculas />} />
                <Route path="/pelicula/:id" element={<VerPelicula />} />
                {/* No existe la ruta */}
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>Solicitud incorrecta</h2>
            <p>
                <Link to="/">Volver a la pagina de inicio</Link>
            </p>
        </div>
    );
}