import React from "react";
import Cart from "./Cart";
import Header from "./../../components/Header";
import Footer from "../../components/Footer";
const MainCart = ({ products }) => {
  return (
    <section>
      <Header />
      <h1 className="d-flex text-neutral-700 text-4xl text-center px-4 py-2 ">
        Cart Task
      </h1>

      {products.map((product, id) => (
        <Cart key={id} product={product} />
      ))}
      <Footer />
    </section>
  );
};

export default MainCart;
