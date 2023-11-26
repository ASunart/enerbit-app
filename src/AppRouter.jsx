import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./Pages/LoginPage";
import { AjustesPage } from "./Pages/AjustesPage";
import { CuestionarioRouter } from "./routers/CuestionarioRouter";
import { OnboardingRouter } from "./routers/OnboardingRouter";
import { FacturasRouter } from "./routers/FacturasRouter";
import { ConsumoRouter } from "./routers/ConsumoRouter";

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
        path="/ajustes"
        element={<AjustesPage />}
      />
    </Routes>
  )
}