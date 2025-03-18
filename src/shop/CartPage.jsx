import React, { useEffect, useState } from "react";

const CartPage = () => {
  const [cartItem, setcartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setcartItems(storedCartItems);
  }, []);

  const calculateTotalPrice = (item) => {
    return item.price * item.quantity; // ✅ حذف المسافة قبل quantity
  };

  const handleIncrease = (item) => {
    item.quantity += 1;
    setcartItems([...cartItem]);
  };

  return (
    <div>
      {cartItem.map((item, index) => (
        <div key={index}>
          <h4>{item.name}</h4>
          <p>Price: {item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total: {calculateTotalPrice(item)}</p> 
          <button onClick={() => handleIncrease(item)}>+</button> 
        </div>
      ))}
    </div>
  );
};

export default CartPage;
