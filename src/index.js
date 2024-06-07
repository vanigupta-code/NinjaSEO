import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Testimonials from "./pages/Testimonials";
import Services from "./pages/Services";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Blogs" element={<Blogs />} />
        <Route path="Testimonials" element={<Testimonials />} />
        <Route path="Services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
