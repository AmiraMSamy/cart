import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import MainCart from "./pages/carts/MainCart";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  const [products, setProducts] = useState([
    { id: 0, name: "Milk", price: 60, items: 10 },
    { id: 1, name: "Choclate", price: 50, items: 5 },
    { id: 2, name: "Candy", price: 20, items: 20 },
    { id: 3, name: "Coco", price: 200, items: 40 },
    { id: 4, name: "Mug", price: 70, items: 6 },
    { id: 5, name: "Macaroni", price: 30, items: 12 },
    { id: 6, name: "Molto", price: 10, items: 25 },
  ]);

  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/cart" element={<MainCart products={products} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </section>
  );
};

export default App;
