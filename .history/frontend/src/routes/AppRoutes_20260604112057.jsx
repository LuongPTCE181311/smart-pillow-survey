import { Routes, Route } from "react-router-dom";
import ThankYouPage from "../pages/ThankYouPage";
import LandingPage from "../pages/LandingPage";
import SurveyPage from "../pages/SurveyPage";
import AdminLoginPage from "../pages/AdminLoginPage";
import AdminDashboardPage from "../pages/AdminDashboardPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/survey" element={<SurveyPage />} />

      <Route path="/thank-you" element={<ThankYouPage />} />

      <Route path="/admin" element={<AdminLoginPage />} />

      <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
    </Routes>
  );
}
