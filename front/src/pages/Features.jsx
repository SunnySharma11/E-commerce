import React, { useState } from "react";
import Navbar from "../components/Navbar";

const initialCartItems = [
  {
    id: 1,
    name: "Esprit Ruffle Shirt",
    price: 16.64,
    imgSrc: "../images/product-01.jpg",
  },
  {
    id: 2,
    name: "Classic Polo Shirt",
    price: 18.99,
    imgSrc: "../images/product-02.jpg",
  },
  {
    id: 3,
    name: "Casual Denim Jacket",
    price: 25.50,
    imgSrc: "../images/product-03.jpg",
  },
  {
    id: 4,
    name: "Formal Blazer",
    price: 45.99,
    imgSrc: "../images/product-04.jpg",
  },
  {
    id: 5,
    name: "Slim Fit Jeans",
    price: 22.30,
    imgSrc: "../images/product-05.jpg",
  },
  {
    id: 6,
    name: "Sneakers Shoes",
    price: 35.00,
    imgSrc: "../images/product-05.jpg",
  },
];

const Features = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [quantities, setQuantities] = useState(
    initialCartItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    setQuantities(prev => {
      const newQuantities = { ...prev };
      delete newQuantities[id];
      return newQuantities;
    });
  };

  const handleQuantityChange = (id, value) => {
    setQuantities({ ...quantities, [id]: Math.max(1, value) });
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * quantities[item.id], 0).toFixed(2);

  return (
    <div>
      <div className="tw:pl-43 tw:pr-45 tw:border">
        <Navbar />
      </div>
      <div className="tw:pl-43 tw:pr-45">
        <h5>Cart</h5>
        <table className="table">
          <thead>
            <tr>
              <th className="tw:px-6" scope="col">Product</th>
              <th className="tw:px-6" scope="col">Price</th>
              <th className="tw:px-6" scope="col">Quantity</th>
              <th className="tw:px-6" scope="col">Subtotal</th>
              <th className="tw:px-6 tw:text-right" scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="tw:align-middle">
                <td className="tw:px-6">
                  <div className="tw:flex tw:items-center">
                    <div className="tw:w-16 tw:h-16 tw:flex tw:justify-center tw:items-center tw:border">
                      <img src={item.imgSrc} alt={item.name} className="tw:max-h-full tw:max-w-full" />
                    </div>
                    <span className="tw:ml-2">{item.name}</span>
                  </div>
                </td>
                <td className="tw:align-middle tw:px-6">${item.price.toFixed(2)}</td>
                <td className="tw:align-middle tw:px-6">
                  <input 
                    type="number" 
                    min="1" 
                    value={quantities[item.id]} 
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))} 
                    className="tw:border tw:p-1 tw:w-16" 
                  />
                </td>
                <td className="tw:align-middle tw:px-6">${(item.price * quantities[item.id]).toFixed(2)}</td>
                <td className="tw:align-middle tw:px-6">
                  <button onClick={() => removeItem(item.id)} className="tw:bg-red-500 tw:text-white tw:px-2 tw:py-1 tw:rounded">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="tw:mt-4 tw:flex tw:justify-between tw:items-center">
          <h5 className="tw:text-lg">Total: ${totalPrice}</h5>
          <button className="tw:bg-blue-500 tw:text-white tw:px-4 tw:py-2 tw:rounded">Click to Pay</button>
        </div>
      </div>
    </div>
  );
};

export default Features;
