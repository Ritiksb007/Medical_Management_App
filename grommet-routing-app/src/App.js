import React from "react";
import { Grommet, Box } from "grommet";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import PatientRecords from "./pages/PatientRecords";
import Appointments from "./pages/Appointments";
import Reports from "./pages/Reports";
import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

const theme = {
  global: {
    colors: {
      brand: "#00739D",
      "accent-1": "#FFAA15",
      "accent-2": "#6FFFB0",
      "neutral-1": "#3D138D",
      background: "#f8f8f8",
      text: "#333333",
    },
    font: {
      family: "Arial",
      size: "16px",
      height: "24px",
    },
  },
  button: {
    primary: {
      color: "brand",
    },
    border: {
      radius: "5px",
    },
    extend: "box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);",
  },
};

const App = () => (
  <AuthProvider>
    <Grommet theme={theme} full>
      <Router>
        <Box fill>
          <Header />
          <Box flex>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/patient-records"
                element={
                  <ProtectedRoute>
                    <PatientRecords />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/appointments"
                element={
                  <ProtectedRoute>
                    <Appointments />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/reports"
                element={
                  <ProtectedRoute>
                    <Reports />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </Grommet>
  </AuthProvider>
);

export default App;
