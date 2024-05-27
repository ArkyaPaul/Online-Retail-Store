import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItemsSelector,addItem, removeItem, clearCart } from "../redux/slices/cartSlice";

export default function Carts() {
  const dispatch = useDispatch();
  const items = useSelector(getItemsSelector);

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const incrementItem = (index) => {
    const item = items[index];
    dispatch(addItem(item));
  };

  const decrementItem = (index) => {
    const item = items[index];
    dispatch(removeItem(item.id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}><b>Your Cart:</b></h2>
      <table border={1} style={{ marginLeft: '150px' }}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map((val, index) => (
              <tr key={index}>
                <td><img src={val.image} alt="" width={'20%'} height={'10%'} /></td>
                <td>{val.title}</td>
                <td>
                  <button onClick={() => incrementItem(index)}>+</button>
                  {val.quantity}
                  <button onClick={() => decrementItem(index)}>-</button>
                </td>
                <td>₹{val.price * val.quantity}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <h3>Total: ₹{total.toFixed(2)}</h3>
      <button onClick={handleClearCart} style={{ marginLeft: '150px', marginTop: '20px', padding: '10px 20px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px' }}>
        Clear Cart
      </button>
    </div>
  );
}
