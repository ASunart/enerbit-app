import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./Pages/LoginPage";
import { CuestionarioRouter } from "./routers/CuestionarioRouter";
import { OnboardingRouter } from "./routers/OnboardingRouter";
import { FacturasRouter } from "./routers/FacturasRouter";
import { ConsumoRouter } from "./routers/ConsumoRouter";
import { AjustesRouter } from "./routers/AjustesRouter";
import { AsistenciaPage } from "./Pages/AsistenciaPage";

export function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={<LoginPage />}
      />
      <Route
        path="/cuestionario/*"
        element={<CuestionarioRouter />}
      />
      <Route
        path="/onboarding/*"
        element={<OnboardingRouter />}
      />
      <Route
        path="/facturas/*"
        element={<FacturasRouter />}
      />
      <Route
        path="/consumo/*"
        element={<ConsumoRouter />}
      />
      <Route
        path="/ajustes/*"
        element={<AjustesRouter />}
      />
      <Route
        path="/asistencia"
        element={<AsistenciaPage />}
      />
    </Routes>
  )
}