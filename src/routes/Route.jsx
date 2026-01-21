import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import HowItWorks from "../pages/HowItWorks";
import Feature from "../pages/Feature";
import Tool from "../pages/Tool";
import ResumeBuilder from "../pages/ResumeBuilder";
import PdfToolkit from "../pages/PdfToolKit";
import ColorPicker from "../pages/ColorPicker";
import TailwindUIPlayground from "../pages/TailwindUiPlayground";
import TaskPlanner from "../pages/TaskPlanner";
import PasswordStrengthChecker from "../pages/PasswordStrengthChecker";
import TextAnalyzer from "../pages/TextAnalyzer";
import JSONFormatter from "../pages/JsonFormatter";
import RegexTexter from "../pages/RegexTester";
import APITester from "../pages/ApiTester";
import CSVViewer from "../pages/CsvViewer";
const RouteConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tools" element={<Tool />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/features" element={<Feature />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume-builder" element={<ResumeBuilder />} />
      <Route path="/pdf-toolkit" element={<PdfToolkit />} />
      <Route path="/color-palette" element={<ColorPicker />} />
      <Route path="/tailwind-playground" element={<TailwindUIPlayground />} />
      <Route path="/task-planner" element={<TaskPlanner />} />
      <Route path="/password-strength" element={<PasswordStrengthChecker />} />
      <Route path="/text-analyzer" element={<TextAnalyzer />} />
      <Route path="/json-formatter" element={<JSONFormatter />} />
      <Route path="/regex-tester" element={<RegexTexter />} />
      <Route path="/api-request-builder" element={<APITester />} />
      <Route path="/csv-viewer" element={<CSVViewer />} />
    </Routes>
  );
};

export default RouteConfig;
