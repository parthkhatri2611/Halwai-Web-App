// import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (dish, halwaiId, categoryId, categoryName) => {
//     setCart(prevCart => {
//       const existingItem = prevCart.find(item => item.dishId === dish.id && item.halwaiId === halwaiId);
//       if (existingItem) {
//         return prevCart;
//       }
//       return [
//         ...prevCart,
//         {
//           dishId: dish.id,
//           dishName: dish.name,
//           ingredients: dish.ingredients,
//           veg: dish.veg,
//           imageUrl: dish.imageUrl,
//           halwaiId,
//           categoryId,
//           categoryName,
//         },
//       ];
//     });
//   };

//   const removeFromCart = (dishId, halwaiId) => {
//     setCart(prevCart => prevCart.filter(item => !(item.dishId === dishId && item.halwaiId === halwaiId)));
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, halwaiId, categoryId, categoryName) => {
    setCart(prevCart => {
      const itemType = categoryId === 'khana_khazana' ? 'dish' : 
                       categoryId === 'palace' ? 'palace' : 'decor';
      const itemId = item.id;
      const existingItem = prevCart.find(
        cartItem => cartItem.itemId === itemId && cartItem.halwaiId === halwaiId && cartItem.type === itemType
      );

      let cartItem;
      if (itemType === 'dish') {
        cartItem = {
          itemId: item.id,
          name: item.name,
          ingredients: item.ingredients || [],
          veg: item.veg || 'N/A',
          imageUrl: item.imageUrl || '',
          halwaiId,
          categoryId,
          categoryName,
          type: 'dish',
          quantity: 50, // Default for dishes
        };
      } else if (itemType === 'palace') {
        cartItem = {
          itemId: item.id,
          name: item.name,
          address: item.address || 'N/A',
          contact: item.contact || 'N/A',
          capacity: item.capacity || 'N/A',
          imageUrl: item.imageUrl || '',
          halwaiId,
          categoryId,
          categoryName,
          type: 'palace',
          quantity: 1, // Single booking
        };
      } else if (itemType === 'decor') {
        cartItem = {
          itemId: item.id,
          name: item.name,
          description: item.description || 'No description available',
          imageUrl: item.imageUrl || '',
          halwaiId,
          categoryId,
          categoryName,
          type: 'decor',
          quantity: 1, // Single item
        };
      }

      console.log('Adding to cart:', cartItem); // Debug log

      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.itemId === itemId && cartItem.halwaiId === halwaiId && cartItem.type === itemType
            ? { ...cartItem, quantity: cartItem.quantity + (itemType === 'dish' ? 50 : 1) }
            : cartItem
        );
      }
      return [...prevCart, cartItem];
    });
  };

  const removeFromCart = (itemId, halwaiId, type) => {
    setCart(prevCart =>
      prevCart.filter(
        item => !(item.itemId === itemId && item.halwaiId === halwaiId && item.type === type)
      )
    );
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