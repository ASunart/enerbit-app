import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./Pages/LoginPage";
import { FacturasPage } from "./Pages/FacturasPage";
import { ConsumoPage } from "./Pages/ConsumoPage";
import { AjustesPage } from "./Pages/AjustesPage";
import { CuestionarioRouter } from "./routers/CuestionarioRouter";
import { OnboardingRouter } from "./routers/OnboardingRouter";

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
        path="/facturas"
        element={<FacturasPage />}
      />
      <Route
        path="/consumo"
        element={<ConsumoPage />}
      />
      <Route
        path="/ajustes"
        element={<AjustesPage />}
      />
    </Routes>
  )
}