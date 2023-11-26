import { Route, Routes } from "react-router-dom";
import { FacturasPage } from "../Pages/FacturasPage";
import { DetalleFactura } from "../Pages/Facturas-Flow/DetalleFactura";

export function FacturasRouter() {
    return (
        <Routes>
            <Route
                path="/"
                element={<FacturasPage />}
            />
            <Route
                path="/detalle-factura"
                element={<DetalleFactura />}
            />
        </Routes>
    )
}