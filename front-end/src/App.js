import logo from "./logo.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Product } from "./pages/Product";
import { Register } from "./pages/Register";
import { Signin } from "./pages/Signin";
import { Navbar } from "./components/Navbar";
import { SinglePro } from "./pages/SinglePro";
import { AuthWrapper } from "./components/AuthWrapper";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />

        <Route path="product" element={<Product />} />
        <Route path="products/:_id" element={<SinglePro />} />
        <Route path="register" element={<Register />} />
        <Route path="signin" element={<Signin />} />

        <Route
          path="/cart"
          element={
            <AuthWrapper>
              <Cart />
            </AuthWrapper>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
