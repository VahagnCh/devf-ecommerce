import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductProvider } from "./context/Productcontext";
import Navbar from "./components/organism/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/Authcontext";

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Router>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
