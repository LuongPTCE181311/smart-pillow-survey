import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import SurveyPage from "../pages/SurveyPage";
import ThankYouPage from "../pages/ThankYouPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/survey" element={<SurveyPage />} />
      <Route path="/thank-you" element={<ThankYouPage />} />
    </Routes>
  );
}