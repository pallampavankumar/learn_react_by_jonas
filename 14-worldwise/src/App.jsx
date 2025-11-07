
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "././pages/Product";
import Pricing from "././pages/Pricing";
import HomePage from "././pages/HomePage";
import PageNotFound from "././pages/PageNotFound";
import AppLayout from "././pages/AppLayout";
import Login from "./pages/Login";
function App() {
  return <BrowserRouter>
    <Routes>
     <Route path="product" element={<Product/>} />
     <Route path="pricing" element={<Pricing/>} />
     <Route path="app" element={<AppLayout />} />
     <Route path="/" element={<HomePage/>} />
     <Route path="*" element={<PageNotFound />} />
     <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
}

export default App
