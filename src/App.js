import { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import { Navbar, Footer, Loader } from "./components";
import { LandingPage, SuccessPage } from './pages'

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
