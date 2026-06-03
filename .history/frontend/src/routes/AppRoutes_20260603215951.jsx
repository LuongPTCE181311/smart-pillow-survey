import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SurveyPage from "../pages/SurveyPage";

export default function AppRoutes({ theme, toggleTheme }) {
  return (
    <Routes>
      <Route
        path="/"
        element={<LandingPage theme={theme} toggleTheme={toggleTheme} />}
      />
      <Route path="/survey" element={<SurveyPage />} />
    </Routes>
  );
}