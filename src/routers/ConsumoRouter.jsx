import { Route, Routes } from "react-router-dom";
import { ConsumoPage } from "../Pages/ConsumoPage";
import { ConsumoDetail } from "../Pages/Consumo-Flow/ConsumoDetail";

export function ConsumoRouter() {
    return (
        <Routes>
            <Route
                path="/"
                element={<ConsumoPage />}
            />
            <Route
                path="/detalle-consumo"
                element={<ConsumoDetail />}
            />
        </Routes>
    )
}