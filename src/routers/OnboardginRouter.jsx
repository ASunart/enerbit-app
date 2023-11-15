import { Route, Routes } from "react-router-dom";
import { OnboardingPage } from "../Pages/OnboardingPage";
import { OnBoardingAsistencia, OnboardingAjustes, OnboardingConsumo, OnboardingMetodo, OnboardingPagos, OnboardingVista } from "../Pages/Onboarding-steps";

export function OnboardingRouter() {
    return (
        <Routes>
            <Route
                path="/"
                element={<OnboardingPage />}
            />
            <Route
                path="/pagos"
                element={<OnboardingPagos />}
            />
            <Route
                path="/consumo"
                element={<OnboardingConsumo />}
            />
            <Route
                path="/ajustes"
                element={<OnboardingAjustes />}
            />
            <Route
                path="/metodo-de-pago"
                element={<OnboardingMetodo />}
            />
            <Route
                path="/visualizacion"
                element={<OnboardingVista />}
            />
            <Route
                path="/asistencia"
                element={<OnBoardingAsistencia />}
            />
        </Routes>
    )
}