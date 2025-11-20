// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Login from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import Counter from "./Pages/Counter";
import DigitalWatch from "./Pages/DigitalWatch";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") == "true";
  });

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Login onLogin={handleLogin} isAuthenticated={isAuthenticated} />
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route path="counter" element={<Counter />} />
            <Route path="digitalWatch" element={<DigitalWatch />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
