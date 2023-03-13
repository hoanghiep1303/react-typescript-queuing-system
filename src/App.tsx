import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
// import { initializeApp } from "firebase/app";
// import { config } from "./config/config";
import AuthRoute from "./components/AuthRoute";
import Forgot from "./components/Forgot";

// initializeApp(config);

export interface IApplicationProps {}

const App: React.FC = (props) => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AuthRoute>
              <Home />
            </AuthRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgot />} />
      </Routes>
    </Router>
  );
};

export default App;
