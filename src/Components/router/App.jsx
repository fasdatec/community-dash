import React, { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "../auth/AuthProvider";
import LazyCharge from '../Lazy/LazyCharge'
const AppRouter = lazy(() => import("./AppRouter"));
const App = () => {
  return (
    <>
    <BrowserRouter>
      <AuthProvider>
        <Suspense fallback={<LazyCharge />}>
          <AppRouter />
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
    </>
  )
}

export default App