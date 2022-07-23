import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart"
import { Product } from "./pages/Product"
import { Register } from "./pages/Register"
import {Signin} from "./pages/Signin"

function App() {
  return (
    <div className="App">
     
        <Routes>
        <Route path="/" element={<Home/>} />
        
          <Route path="/product" element={<Product />} />
         <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Signin />} />
       
        <Route path="/cart" element={<Cart />} /> 
      </Routes>  
    </div>
  );
}

export default App;
