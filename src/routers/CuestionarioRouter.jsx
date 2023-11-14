import { Route, Routes } from "react-router-dom";
import { CuestionarioPage } from "../Pages/CuestionarioPage";
import { Pregunta1, Pregunta2, Pregunta3, Pregunta4 } from "../Pages/Preguntas-Cuestionario";

export function CuestionarioRouter() {
    return (
        <Routes>
            <Route
                path="/"
                element={<CuestionarioPage />}
            />
            <Route
                path="/pregunta-1"
                element={<Pregunta1 />}
            />
            <Route
                path="/pregunta-2"
                element={<Pregunta2 />}
            />
            <Route
                path="/pregunta-3"
                element={<Pregunta3 />}
            />
            <Route
                path="/pregunta-4"
                element={<Pregunta4 />}
            />
        </Routes>
    )
}