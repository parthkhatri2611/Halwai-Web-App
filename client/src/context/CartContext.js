import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (dish, halwaiId, categoryId, categoryName) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.dishId === dish.id && item.halwaiId === halwaiId);
      if (existingItem) {
        return prevCart;
      }
      return [
        ...prevCart,
        {
          dishId: dish.id,
          dishName: dish.name,
          ingredients: dish.ingredients,
          veg: dish.veg,
          imageUrl: dish.imageUrl,
          halwaiId,
          categoryId,
          categoryName,
        },
      ];
    });
  };

  const removeFromCart = (dishId, halwaiId) => {
    setCart(prevCart => prevCart.filter(item => !(item.dishId === dishId && item.halwaiId === halwaiId)));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

