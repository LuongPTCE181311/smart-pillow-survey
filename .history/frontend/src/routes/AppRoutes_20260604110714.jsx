import { Routes, Route } from "react-router-dom";
import ThankYouPage from "../pages/ThankYouPage";
import LandingPage from "../pages/LandingPage";
import SurveyPage from "../pages/SurveyPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/survey" element={<SurveyPage />} />
    </Routes>
  );
}
