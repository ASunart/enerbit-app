import { Route, Routes } from "react-router-dom";
import { AjustesPage } from "../Pages/AjustesPage";
import { CambiarVisualizacion } from "../Pages/Ajustes-Flow/CambiarVista";

export function AjustesRouter() {
    return (
        <Routes>
            <Route
                path="/"
                element={<AjustesPage />}
            />
            <Route
                path="/cambiar-visualizacion"
                element={<CambiarVisualizacion/>}
            />
        </Routes>
    )
}