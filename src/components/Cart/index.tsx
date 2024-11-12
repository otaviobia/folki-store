// components/Cart.tsx
"use client";

import React from 'react';
import useCartStore from '@/store/cart';

const Cart: React.FC = () => {
  const cart = useCartStore((state) => state.cart);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <div className="cart">
      <h2>Seu Carrinho</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              {item.name} - ${item.price} x {item.quantity}
              <button onClick={() => removeItem(item.id)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <button onClick={clearCart} className="clear-cart">
          Limpar Carrinho
        </button>
      )}
    </div>
  );
};

export default Cart;