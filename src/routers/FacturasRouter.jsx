import { Route, Routes } from "react-router-dom";
import { FacturasPage } from "../Pages/FacturasPage";

export function FacturasRouter() {
    return(
        <Routes>
            <Route
            path="/"
            element={<FacturasPage/>}
            />
        </Routes>
    )
}