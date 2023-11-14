import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./Pages/LoginPage";
import { OnboardingPage } from "./Pages/OnboardingPage";
import { FacturasPage } from "./Pages/FacturasPage";
import { ConsumoPage } from "./Pages/ConsumoPage";
import { AjustesPage } from "./Pages/AjustesPage";
import { CuestionarioPage } from "./Pages/CuestionarioPage";
import { Pregunta1 } from "./Pages/Preguntas-Cuestionario/Pregunta1";

export function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={<LoginPage />}
      />
      <Route
        path="/cuestionario"
        element={<CuestionarioPage />}
      />
      <Route
        path="/pregunta-1"
        element={<Pregunta1 />}
      />
      <Route
        path="/onboarding"
        element={<OnboardingPage />}
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