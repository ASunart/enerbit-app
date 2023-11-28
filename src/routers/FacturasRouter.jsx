import { Route, Routes } from "react-router-dom";
import { FacturasPage } from "../Pages/FacturasPage";
import { DetalleFactura } from "../Pages/Facturas-Flow/DetalleFactura";
import { RefPagoPage } from "../Pages/Facturas-Flow/RefPagoPage";
import { PagoPendiente } from "../Pages/Facturas-Flow/PagoPendiente";
import { PagadaPage } from "../Pages/Facturas-Flow/PagadaPage";

export function FacturasRouter() {
    return (
        <Routes>
            <Route
                path="/"
                element={<FacturasPage />}
            />
            <Route
                path="/pago-pendiente"
                element={<PagoPendiente />}
            />
            <Route
                path="/pagada-page"
                element={<PagadaPage />}
            />
            <Route
                path="/detalle-factura"
                element={<DetalleFactura />}
            />
            <Route
                path="/referencia-pago"
                element={<RefPagoPage />}
            />
        </Routes>
    )
}