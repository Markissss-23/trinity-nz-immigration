import { Route, Routes } from "react-router-dom";
import EvaluationPage from "./pages/EvaluationPage";
import FaqPage from "./pages/FaqPage";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/evaluation" element={<EvaluationPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
