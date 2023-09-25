import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList.js";
import React, { useState } from "react";
import Footer from "./components/Footer.js";
import AddItem from "./components/AddItem";

const initialProduct = [
  {
    price: 99999,
    name: "Iphone 10S Max",
    quantity: 0,
  },
  {
    price: 9999,
    name: "Redmi Note 10S Max",
    quantity: 0,
  },
];

function App() {
  let [product, setProduct] = useState(initialProduct);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProduct = [...product];
    let newTotalAmount = totalAmount;
    newProduct[index].quantity++;
    newTotalAmount += newProduct[index].price;
    setTotalAmount(newTotalAmount);
    setProduct(newProduct);
  };
  const decrementQuantity = (index) => {
    let newProduct = [...product];
    let newTotalAmount = totalAmount;
    if (newProduct[index].quantity > 0) {
      newProduct[index].quantity--;
      newTotalAmount -= newProduct[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProduct(newProduct);
  };
  const resetQuantity = () => {
    let newProduct = [...product];
    newProduct.map((product) => {
      product.quantity = 0;
    });
    setProduct(newProduct);
    setTotalAmount(0);
  };
  const removeItem = (index) => {
    let newProduct = [...product];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProduct[index].quantity * newProduct[index].price;
    newProduct.splice(index, 1);
    setProduct(newProduct);
    setTotalAmount(newTotalAmount);
  };
  const addItem = (name, price) => {
    let newProduct = [...product];
    newProduct.push({ 
      price: price, 
      name: name,
      quantity: 0 });
      setProduct(newProduct);
  };
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem  addItem={addItem} />
        <ProductList
          product={product}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
