import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";
import { useHelper } from "../helper/Help";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});

  const {handlePaymentAndRedirect} = useHelper();
   

   useEffect(() => {
    const loadItems = async () => {
      try {
        const response = await fetch("http://localhost:5000/cart", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setCartItems(data);
          setQuantities(
            data.reduce((acc, item) => ({ ...acc, [item._id]: 1 }), {})
          );
        } else {
          toast.error("Failed to fetch cart");
        }
      } catch (error) {
        toast.error("Error during cart fetch");
      }
    };
    loadItems();
  }, []);

  const removeItem = async (_id) => {
  
    try {
      const response = await fetch(`http://localhost:5000/cart/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const data = await response.json(); 
    
  
      if (response.ok) {
        setCartItems(cartItems.filter((item) => item._id !== _id));
        setQuantities((prev) => {
          const newQuantities = { ...prev };
          delete newQuantities[_id];
          return newQuantities;
        });
        toast.success("Item removed");
      } else {
        toast.error(data.error || "Failed to remove item");
      }
    } catch (error) {
      
      toast.error("Error removing item");
    }
  };
  
  

  const handleQuantityChange = (id, value) => {
    setQuantities({ ...quantities, [id]: Math.max(1, value) });
  };
  
  const totalPrice = cartItems
    .reduce((total, item) => total + item.price * quantities[item._id], 0)
    .toFixed(2);

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
              <th className="tw:px-6">Product</th>
              <th className="tw:px-6">Color</th>
              <th className="tw:px-6">Size</th>
              <th className="tw:px-6">Price</th>
              <th className="tw:px-6">Quantity</th>
              <th className="tw:px-6">Subtotal</th>
              <th className="tw:px-6 tw:text-right">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item._id} className="tw:align-middle">
                <td className="tw:px-6">
                  <div className="tw:flex tw:items-center">
                    <div className="tw:w-16 tw:h-16 tw:border tw:flex tw:justify-center tw:items-center">
                      <img
                        src={item.imgSrc}
                        alt={item.name}
                        className="tw:max-h-full tw:max-w-full"
                      />
                    </div>
                    <span className="tw:ml-2">{item.name}</span>
                  </div>
                </td>
                <td className="tw:px-6">{item.color}</td>
                <td className="tw:px-6">{item.size}</td>
                <td className="tw:px-6">${item.price.toFixed(2)}</td>
                <td className="tw:px-6">
                  <input
                    type="number"
                    min="1"
                    value={quantities[item._id] || 1}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                    className="tw:border tw:p-1 tw:w-16"
                  />
                </td>
                <td className="tw:px-6">
                  ${(item.price * (quantities[item._id] || 1)).toFixed(2)}
                </td>
                <td className="tw:px-6">
                  <button
                    onClick={() => removeItem(item._id)}
                    className="tw:bg-red-500 tw:text-white tw:px-2 tw:py-1 tw:rounded"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="tw:mt-4 tw:flex tw:justify-between tw:items-center">
          <h5 className="tw:text-lg">Total: ${totalPrice}</h5>
          <button className="tw:bg-blue-500 tw:text-white tw:px-4 tw:py-2 tw:rounded" onClick={() => handlePaymentAndRedirect(totalPrice)}>
            Click to Pay this is a btn
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Cart;
