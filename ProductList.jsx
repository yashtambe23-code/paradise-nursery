import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/CartSlice';

const products = [
  { id: 1, name: 'Monstera', price: 25, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Snake Plant', price: 18, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Fiddle Leaf Fig', price: 45, image: 'https://via.placeholder.com/150' },
];

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      {products.map(product => (
        <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
          <img src={product.image} alt={product.name} width="150" />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
