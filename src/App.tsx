import { Route, Routes } from "react-router-dom";
import EvaluationPage from "./pages/EvaluationPage";
import HomePage from "./pages/HomePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/evaluation" element={<EvaluationPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
    </Routes>
  );
}
