import { Route, Routes } from "react-router-dom";
import { OnboardingPage } from "../Pages/OnboardingPage";

export function OnboardingRouter() {
    return(
        <Routes>
            <Route
            path="/"
            element={<OnboardingPage/>}
            />
        </Routes>
    )
}