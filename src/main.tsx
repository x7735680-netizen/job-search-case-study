import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/globals.css";
import JobSearchOSPage from "../page/job-search-os-page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <JobSearchOSPage />
  </StrictMode>
);
