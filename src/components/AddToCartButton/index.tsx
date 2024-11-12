// components/AddToCartButton.tsx
"use client";

import React from 'react';
import useCartStore from '@/store/cart';

interface AddToCartButtonProps {
  id: number;
  name: string;
  price: number;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ id, name, price }) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({ id, name, price });
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-folki-purple p-3 pl-10 pr-10 rounded-[40px] text-xl"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
