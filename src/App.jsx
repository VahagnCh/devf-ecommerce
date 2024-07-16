import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductProvider } from "./context/Productcontext";
import { AuthProvider } from "./context/Authcontext";
import Navbar from "./components/organism/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import SingleProductPage from "./pages/SingleProductPage";

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

            {/*             <Route path="/singleproduct" element={<SingleProductPage />} />
             */}
          </Routes>
        </ProductProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
