import React, {useEffect  , useState} from 'react'

const CartPage = () => {
    const [cartItem, setcartItems] = useState([]);
    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setcartItems(storedCartItems);
    }, []);

    // calculate prices

const calculateTotalPrice = (item) => {
    return item.price * item. quantity;
};

const handleIncrease = (item) => {
    item.quantity += 1;
    setcartItems([...cartItem]);
};


  return (
    <div>
      
    </div>
  )
}

export default CartPage
