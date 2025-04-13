import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/orders" element={<OrderPage />} />
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
