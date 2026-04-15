import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../features/cart/CartSlice';

const CartItem = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '15px' }}>
          <img src={item.image} alt={item.name} width="80" />
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <input
            type="number"
            value={item.quantity}
            min="1"
            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
            style={{ width: '60px' }}
          />
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default CartItem;
