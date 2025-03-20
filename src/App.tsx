import { BrowserRouter, Routes, Route, Router } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Checkout from "./pages/Checkout"
import Product from "./pages/Product"
import Orders from "./pages/Orders"
import Cart from "./pages/Cart"
import Layout from "./components/Layout"

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/product/:id" element={<Product/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
