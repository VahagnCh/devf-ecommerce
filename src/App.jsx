import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductProvider } from "./context/Productcontext";
import Navbar from "./components/organism/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/Authcontext";
import DashboardPage from "./pages/DashboardPage";


function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </Router>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
