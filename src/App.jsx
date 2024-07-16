import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductProvider } from "./context/Productcontext";
import { AuthProvider } from "./context/Authcontext";


import HomePage from "./pages/HomePage";
import SingleProductPage from "./pages/product/SingleProduct";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import Navbar from "./components/organism/Navbar"

function App() {
  return (
    <Router>
      <AuthProvider>
        <ProductProvider>
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/product/:id" element={<SingleProductPage />} />
          </Routes>
        </ProductProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
