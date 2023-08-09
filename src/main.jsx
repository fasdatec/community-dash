import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import LazyCharge from "./Components/Lazy/LazyCharge";
import "./index.css";
const App = lazy(() => import("./App"));
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Suspense fallback={<LazyCharge />}>
      <App />
    </Suspense>
  </BrowserRouter>
);