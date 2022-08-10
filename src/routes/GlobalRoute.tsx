import React from "react"
import { Routes, Route } from "react-router-dom"
import CartIndex from "../pages/cart/CartIndex"
import Error from "../pages/error/Error"
import Index from "../pages/Index"
import PaymentIndex from "../pages/payment/PaymentIndex"
import ProductsIndex from "../pages/products/ProductsIndex"
import ProductsDetail from "../components/products/ProductsDetail"

const GlobalRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cart" element={<CartIndex />} />
        <Route path="/payment" element={<PaymentIndex />} />
        <Route path="/products" element={<ProductsIndex />} />
        <Route path="/products/:id" element={<ProductsDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default GlobalRoute
