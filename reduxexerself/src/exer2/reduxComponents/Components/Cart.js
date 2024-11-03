import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, addItem, updateQuantity } from "../cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price}</p>
          <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
          <button onClick={() => dispatch(addItem({ id: item.id, name: item.name, price: item.price }))}>Add</button>
          <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>
            Increase Quantity
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
