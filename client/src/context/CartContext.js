// import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (item, halwaiId, categoryId, categoryName) => {
//     setCart(prevCart => {
//       const itemType = categoryId === 'khana_khazana' ? 'dish' : 
//                        categoryId === 'palace' ? 'palace' : 'decor';
//       const itemId = item.id;
//       const existingItem = prevCart.find(
//         cartItem => cartItem.itemId === itemId && cartItem.halwaiId === halwaiId && cartItem.type === itemType
//       );

//       let cartItem;
//       if (itemType === 'dish') {
//         cartItem = {
//           itemId: item.id,
//           name: item.name,
//           ingredients: item.ingredients || [],
//           veg: item.veg || 'N/A',
//           imageUrl: item.imageUrl || '',
//           halwaiId,
//           categoryId,
//           categoryName,
//           type: 'dish',
//           quantity: 50, // Default for dishes
//         };
//       } else if (itemType === 'palace') {
//         cartItem = {
//           itemId: item.id,
//           name: item.name,
//           address: item.address || 'N/A',
//           contact: item.contact || 'N/A',
//           capacity: item.capacity || 'N/A',
//           imageUrl: item.imageUrl || '',
//           halwaiId,
//           categoryId,
//           categoryName,
//           type: 'palace',
//           quantity: 1, // Single booking
//         };
//       } else if (itemType === 'decor') {
//         cartItem = {
//           itemId: item.id,
//           name: item.name,
//           description: item.description || 'No description available',
//           imageUrl: item.imageUrl || '',
//           halwaiId,
//           categoryId,
//           categoryName,
//           type: 'decor',
//           quantity: 1, // Single item
//         };
//       }

//       console.log('Adding to cart:', cartItem); // Debug log

//       if (existingItem) {
//         return prevCart.map(cartItem =>
//           cartItem.itemId === itemId && cartItem.halwaiId === halwaiId && cartItem.type === itemType
//             ? { ...cartItem, quantity: cartItem.quantity + (itemType === 'dish' ? 50 : 1) }
//             : cartItem
//         );
//       }
//       return [...prevCart, cartItem];
//     });
//   };

//   const removeFromCart = (itemId, halwaiId, type) => {
//     setCart(prevCart =>
//       prevCart.filter(
//         item => !(item.itemId === itemId && item.halwaiId === halwaiId && item.type === type)
//       )
//     );
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


// import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (item, halwaiId, categoryId, categoryName, subCategoryId) => {
//     setCart(prevCart => {
//       const itemType = categoryId === 'khana_khazana' ? 'dish' : 
//                        categoryId === 'palace' ? 'palace' : 'decor';
//       const itemId = item.id;
//       const existingItem = prevCart.find(
//         cartItem => cartItem.itemId === itemId && cartItem.halwaiId === halwaiId && cartItem.type === itemType
//       );

//       let cartItem;
//       if (itemType === 'dish') {
//         cartItem = {
//           itemId: item.id,
//           name: item.name,
//           ingredients: item.ingredients || [],
//           veg: item.veg || 'N/A',
//           imageUrl: item.imageUrl || '',
//           halwaiId,
//           categoryId,
//           categoryName,
//           subCategoryId: subCategoryId || '', // Add subCategoryId
//           type: 'dish',
//           quantity: 50, // Default for dishes
//         };
//       } else if (itemType === 'palace') {
//         cartItem = {
//           itemId: item.id,
//           name: item.name,
//           address: item.address || 'N/A',
//           contact: item.contact || 'N/A',
//           capacity: item.capacity || 'N/A',
//           imageUrl: item.imageUrl || '',
//           halwaiId,
//           categoryId,
//           categoryName,
//           type: 'palace',
//           quantity: 1, // Single booking
//         };
//       } else if (itemType === 'decor') {
//         cartItem = {
//           itemId: item.id,
//           name: item.name,
//           description: item.description || 'No description available',
//           imageUrl: item.imageUrl || '',
//           halwaiId,
//           categoryId,
//           categoryName,
//           type: 'decor',
//           quantity: 1, // Single item
//         };
//       }

//       console.log('Adding to cart:', cartItem); // Debug log

//       if (existingItem) {
//         return prevCart.map(cartItem =>
//           cartItem.itemId === itemId && cartItem.halwaiId === halwaiId && cartItem.type === itemType
//             ? { ...cartItem, quantity: cartItem.quantity + (itemType === 'dish' ? 50 : 1) }
//             : cartItem
//         );
//       }
//       return [...prevCart, cartItem];
//     });
//   };

//   const removeFromCart = (itemId, halwaiId, type) => {
//     setCart(prevCart =>
//       prevCart.filter(
//         item => !(item.itemId === itemId && item.halwaiId === halwaiId && item.type === type)
//       )
//     );
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

// import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (item, halwaiId, categoryId, categoryName, subCategoryId, subCategoryName) => {
//     setCart(prevCart => {
//       const itemType = categoryId === 'khana_khazana' ? 'dish' : 
//                        categoryId === 'palace' ? 'palace' : 'decor';
//       const itemId = item.id;
//       const existingItem = prevCart.find(
//         cartItem => cartItem.itemId === itemId && cartItem.halwaiId === halwaiId && cartItem.type === itemType
//       );

//       let cartItem;
//       if (itemType === 'dish') {
//         cartItem = {
//           itemId: item.id,
//           name: item.name,
//           ingredients: item.ingredients || [],
//           veg: item.veg || 'N/A',
//           imageUrl: item.imageUrl || '',
//           halwaiId,
//           categoryId,
//           categoryName,
//           subCategoryId: subCategoryId || '',
//           subCategoryName: subCategoryName || '', // Add subCategoryName
//           type: 'dish',
//           quantity: 50, // Default for dishes
//         };
//       } else if (itemType === 'palace') {
//         cartItem = {
//           itemId: item.id,
//           name: item.name,
//           address: item.address || 'N/A',
//           contact: item.contact || 'N/A',
//           capacity: item.capacity || 'N/A',
//           imageUrl: item.imageUrl || '',
//           halwaiId,
//           categoryId,
//           categoryName,
//           type: 'palace',
//           quantity: 1, // Single booking
//         };
//       } else if (itemType === 'decor') {
//         cartItem = {
//           itemId: item.id,
//           name: item.name,
//           description: item.description || 'No description available',
//           imageUrl: item.imageUrl || '',
//           halwaiId,
//           categoryId,
//           categoryName,
//           type: 'decor',
//           quantity: 1, // Single item
//         };
//       }

//       console.log('Adding to cart:', cartItem); // Debug log

//       if (existingItem) {
//         return prevCart.map(cartItem =>
//           cartItem.itemId === itemId && cartItem.halwaiId === halwaiId && cartItem.type === itemType
//             ? { ...cartItem, quantity: cartItem.quantity + (itemType === 'dish' ? 50 : 1) }
//             : cartItem
//         );
//       }
//       return [...prevCart, cartItem];
//     });
//   };

//   const removeFromCart = (itemId, halwaiId, type) => {
//     setCart(prevCart =>
//       prevCart.filter(
//         item => !(item.itemId === itemId && item.halwaiId === halwaiId && item.type === type)
//       )
//     );
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


import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../services/firebaseConfig';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [user, loading] = useAuthState(auth);

  // Load cart from Firestore when user logs in
  useEffect(() => {
    const loadCart = async () => {
      if (user) {
        try {
          const customerRef = doc(db, 'customers', user.uid);
          const customerSnap = await getDoc(customerRef);
          if (customerSnap.exists() && customerSnap.data().cart) {
            setCart(customerSnap.data().cart);
          } else {
            setCart([]); // Ensure cart is empty if no cart data exists
          }
        } catch (error) {
          console.error('Error loading cart from Firestore:', error);
        }
      } else {
        setCart([]); // Clear cart if user is not logged in
      }
    };
    loadCart();
  }, [user]);

  // Save cart to Firestore
  const saveCartToFirestore = async (updatedCart) => {
    if (user) {
      try {
        const customerRef = doc(db, 'customers', user.uid);
        await updateDoc(customerRef, { cart: updatedCart });
      } catch (error) {
        console.error('Error saving cart to Firestore:', error);
      }
    }
  };

  const addToCart = (item, halwaiId, categoryId, categoryName, subCategoryId, subCategoryName) => {
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
          subCategoryId: subCategoryId || '',
          subCategoryName: subCategoryName || '',
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

      let updatedCart;
      if (existingItem) {
        updatedCart = prevCart.map(cartItem =>
          cartItem.itemId === itemId && cartItem.halwaiId === halwaiId && cartItem.type === itemType
            ? { ...cartItem, quantity: cartItem.quantity + (itemType === 'dish' ? 50 : 1) }
            : cartItem
        );
      } else {
        updatedCart = [...prevCart, cartItem];
      }

      // Save updated cart to Firestore
      saveCartToFirestore(updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (itemId, halwaiId, type) => {
    setCart(prevCart => {
      const updatedCart = prevCart.filter(
        item => !(item.itemId === itemId && item.halwaiId === halwaiId && item.type === type)
      );
      // Save updated cart to Firestore
      saveCartToFirestore(updatedCart);
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    // Clear cart in Firestore
    if (user) {
      try {
        const customerRef = doc(db, 'customers', user.uid);
        updateDoc(customerRef, { cart: [] });
      } catch (error) {
        console.error('Error clearing cart in Firestore:', error);
      }
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);