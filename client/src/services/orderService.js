// import { db } from './firebaseConfig';
// import { collection, addDoc, getDocs, doc, updateDoc, getDoc } from 'firebase/firestore';

// // const placeOrder = async (customerId, cartItems, numberOfPersons, functionDate, functionName, mealType) => {
// //   try {
// //     console.log('Cart Items:', JSON.stringify(cartItems, null, 2));
// //     console.log('Order Details:', { numberOfPersons, functionDate, functionName, mealType });

// //     if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
// //       throw new Error('Invalid or empty cart items');
// //     }
// //     if (!numberOfPersons || numberOfPersons <= 0) {
// //       throw new Error('Invalid number of persons');
// //     }
// //     if (!functionDate) {
// //       throw new Error('Function date is required');
// //     }
// //     if (!functionName) {
// //       throw new Error('Function name is required');
// //     }
// //     if (!mealType) {
// //       throw new Error('Meal type is required');
// //     }

// //     let customerName = `Customer ${customerId}`;
// //     try {
// //       const customerDoc = await getDoc(doc(db, `customers/${customerId}`));
// //       if (customerDoc.exists()) {
// //         const customerData = customerDoc.data();
// //         customerName = customerData.name || customerData.displayName || customerName;
// //         console.log(`Fetched customer name: ${customerName} for ID: ${customerId}`);
// //       } else {
// //         console.warn(`Customer document not found for ID: ${customerId}`);
// //       }
// //     } catch (error) {
// //       console.error('Error fetching customer name:', error);
// //     }

// //     const ordersByHalwai = cartItems.reduce((acc, item) => {
// //       if (!item.halwaiId) {
// //         console.error('Item missing halwaiId:', item);
// //         return acc;
// //       }
// //       if (!acc[item.halwaiId]) {
// //         acc[item.halwaiId] = [];
// //       }
// //       const sanitizedItem = {
// //         dishId: item.dishId || '',
// //         dishName: item.dishName || 'Unknown Dish',
// //         categoryId: item.categoryId || '',
// //         categoryName: item.categoryName || 'Unknown Category',
// //         ingredients: item.ingredients || [],
// //         veg: item.veg || 'unknown',
// //         imageUrl: item.imageUrl || '',
// //       };


      
// //       acc[item.halwaiId].push(sanitizedItem);
// //       return acc;
// //     }, {});

// //     if (Object.keys(ordersByHalwai).length === 0) {
// //       throw new Error('No valid orders to place');
// //     }

// //     for (const halwaiId of Object.keys(ordersByHalwai)) {
// //       const items = ordersByHalwai[halwaiId];

// //       const customerOrderRef = await addDoc(collection(db, `customers/${customerId}/orders`), {
// //         halwaiId,
// //         customerId,
// //         customerName, 
// //         items,
// //         numberOfPersons,
// //         functionDate,
// //         functionName,
// //         mealType,
// //         status: 'pending',
// //         createdAt: new Date(),
// //       });

// //       await addDoc(collection(db, `halwais/${halwaiId}/orders`), {
// //         customerId,
// //         customerName, 
// //         orderId: customerOrderRef.id,
// //         items,
// //         numberOfPersons,
// //         functionDate,
// //         functionName,
// //         mealType,
// //         status: 'pending',
// //         createdAt: new Date(),
// //       });
// //     }
// //   } catch (error) {
// //     console.error('Error placing order:', error);
// //     throw error;
// //   }
// // };

// const placeOrder = async (customerId, cartItems, numberOfPersons, functionDate, functionName, mealType) => {
//   try {
//     console.log('Cart Items:', JSON.stringify(cartItems, null, 2));
//     console.log('Order Details:', { numberOfPersons, functionDate, functionName, mealType });

//     if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
//       throw new Error('Invalid or empty cart items');
//     }
//     if (!numberOfPersons || numberOfPersons <= 0) {
//       throw new Error('Invalid number of persons');
//     }
//     if (!functionDate) {
//       throw new Error('Function date is required');
//     }
//     if (!functionName) {
//       throw new Error('Function name is required');
//     }
//     if (!mealType) {
//       throw new Error('Meal type is required');
//     }

//     let customerName = `Customer ${customerId}`;
//     try {
//       const customerDoc = await getDoc(doc(db, `customers/${customerId}`));
//       if (customerDoc.exists()) {
//         const customerData = customerDoc.data();
//         customerName = customerData.name || customerData.displayName || customerName;
//         console.log(`Fetched customer name: ${customerName} for ID: ${customerId}`);
//       } else {
//         console.warn(`Customer document not found for ID: ${customerId}`);
//       }
//     } catch (error) {
//       console.error('Error fetching customer name:', error);
//     }

//     const ordersByHalwai = cartItems.reduce((acc, item) => {
//       if (!item.halwaiId) {
//         console.error('Item missing halwaiId:', item);
//         return acc;
//       }
//       if (!acc[item.halwaiId]) {
//         acc[item.halwaiId] = [];
//       }
//       let sanitizedItem;
//       if (item.type === 'dish') {
//         sanitizedItem = {
//           itemId: item.itemId || '',
//           name: item.name || 'Unknown Dish',
//           categoryId: item.categoryId || '',
//           categoryName: item.categoryName || 'Unknown Category',
//           ingredients: item.ingredients || [],
//           veg: item.veg || 'N/A',
//           imageUrl: item.imageUrl || '',
//           type: 'dish',
//           quantity: item.quantity || 50,
//         };
//       } else if (item.type === 'palace') {
//         sanitizedItem = {
//           itemId: item.itemId || '',
//           name: item.name || 'Unknown Palace',
//           categoryId: item.categoryId || '',
//           categoryName: item.categoryName || 'Unknown Category',
//           address: item.address || 'N/A',
//           contact: item.contact || 'N/A',
//           capacity: item.capacity || 'N/A',
//           imageUrl: item.imageUrl || '',
//           type: 'palace',
//           quantity: item.quantity || 1,
//         };
//       } else if (item.type === 'decor') {
//         sanitizedItem = {
//           itemId: item.itemId || '',
//           name: item.name || 'Unknown Decor',
//           categoryId: item.categoryId || '',
//           categoryName: item.categoryName || 'Unknown Category',
//           description: item.description || 'No description available',
//           imageUrl: item.imageUrl || '',
//           type: 'decor',
//           quantity: item.quantity || 1,
//         };
//       } else {
//         console.error('Unknown item type:', item);
//         return acc;
//       }

//       acc[item.halwaiId].push(sanitizedItem);
//       return acc;
//     }, {});

//     if (Object.keys(ordersByHalwai).length === 0) {
//       throw new Error('No valid orders to place');
//     }

//     for (const halwaiId of Object.keys(ordersByHalwai)) {
//       const items = ordersByHalwai[halwaiId];

//       const customerOrderRef = await addDoc(collection(db, `customers/${customerId}/orders`), {
//         halwaiId,
//         customerId,
//         customerName,
//         items,
//         numberOfPersons,
//         functionDate,
//         functionName,
//         mealType,
//         status: 'pending',
//         createdAt: new Date(),
//       });

//       await addDoc(collection(db, `halwais/${halwaiId}/orders`), {
//         customerId,
//         customerName,
//         orderId: customerOrderRef.id,
//         items,
//         numberOfPersons,
//         functionDate,
//         functionName,
//         mealType,
//         status: 'pending',
//         createdAt: new Date(),
//       });
//     }
//   } catch (error) {
//     console.error('Error placing order:', error);
//     throw error;
//   }
// };

// const acceptOrder = async (halwaiId, orderId, customerId, functionName, functionDate) => {
//   try {
//     let customerName = `Customer ${customerId}`;
//     try {
//       const customerDoc = await getDoc(doc(db, `customers/${customerId}`));
//       if (customerDoc.exists()) {
//         const customerData = customerDoc.data();
//         customerName = customerData.name || customerData.displayName || customerName;
//       }
//     } catch (error) {
//       console.error('Error fetching customer name for notification:', error);
//     }

//     const halwaiOrderRef = collection(db, `halwais/${halwaiId}/orders`);
//     const querySnapshot = await getDocs(halwaiOrderRef);
//     const orderDoc = querySnapshot.docs.find(doc => doc.data().orderId === orderId);
//     if (!orderDoc) {
//       throw new Error('Order not found');
//     }
//     await updateDoc(doc(db, `halwais/${halwaiId}/orders`, orderDoc.id), {
//       status: 'accepted',
//     });

//     const customerOrderRef = doc(db, `customers/${customerId}/orders`, orderId);
//     await updateDoc(customerOrderRef, {
//       status: 'accepted',
//     });

//     const date = functionDate && functionDate.toDate ? functionDate.toDate() : new Date(functionDate || Date.now());
    
//     await addDoc(collection(db, `customers/${customerId}/notifications`), {
//       orderId,
//       message: `Your order for ${functionName} on ${date.toDateString()} was accepted.`,
//       status: 'accepted',
//       createdAt: new Date(),
//       read: false,
//     });
//   } catch (error) {
//     console.error('Error accepting order:', error);
//     throw error;
//   }
// };

// const rejectOrder = async (halwaiId, orderId, customerId, functionName, functionDate) => {
//   try {
//     let customerName = `Customer ${customerId}`;
//     try {
//       const customerDoc = await getDoc(doc(db, `customers/${customerId}`));
//       if (customerDoc.exists()) {
//         const customerData = customerDoc.data();
//         customerName = customerData.name || customerData.displayName || customerName;
//       }
//     } catch (error) {
//       console.error('Error fetching customer name for notification:', error);
//     }

//     const halwaiOrderRef = collection(db, `halwais/${halwaiId}/orders`);
//     const querySnapshot = await getDocs(halwaiOrderRef);
//     const orderDoc = querySnapshot.docs.find(doc => doc.data().orderId === orderId);
//     if (!orderDoc) {
//       throw new Error('Order not found');
//     }
//     await updateDoc(doc(db, `halwais/${halwaiId}/orders`, orderDoc.id), {
//       status: 'rejected',
//     });

//     const customerOrderRef = doc(db, `customers/${customerId}/orders`, orderId);
//     await updateDoc(customerOrderRef, {
//       status: 'rejected',
//     });

//     const date = functionDate && functionDate.toDate ? functionDate.toDate() : new Date(functionDate || Date.now());
    
//     await addDoc(collection(db, `customers/${customerId}/notifications`), {
//       orderId,
//       message: `Your order for ${functionName} on ${date.toDateString()} was rejected.`,
//       status: 'rejected',
//       createdAt: new Date(),
//       read: false,
//     });
//   } catch (error) {
//     console.error('Error rejecting order:', error);
//     throw error;
//   }
// };

// const getCustomerOrders = async (customerId) => {
//   try {
//     const querySnapshot = await getDocs(collection(db, `customers/${customerId}/orders`));
//     return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//   } catch (error) {
//     console.error('Error fetching customer orders:', error);
//     throw error;
//   }
// };

// const getHalwaiOrders = async (halwaiId) => {
//   try {
//     const querySnapshot = await getDocs(collection(db, `halwais/${halwaiId}/orders`));
//     return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//   } catch (error) {
//     console.error('Error fetching halwai orders:', error);
//     throw error;
//   }
// };

// export { placeOrder, acceptOrder, rejectOrder, getCustomerOrders, getHalwaiOrders };


import { db } from './firebaseConfig';
import { collection, addDoc, getDocs, doc, updateDoc, getDoc } from 'firebase/firestore';

const placeOrder = async (customerId, cartItems, numberOfPersons, functionDate, functionName, mealType) => {
  try {
    console.log('Cart Items:', JSON.stringify(cartItems, null, 2));
    console.log('Order Details:', { numberOfPersons, functionDate, functionName, mealType });

    if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
      throw new Error('Invalid or empty cart items');
    }
    if (!numberOfPersons || numberOfPersons <= 0) {
      throw new Error('Invalid number of persons');
    }
    if (!functionDate) {
      throw new Error('Function date is required');
    }
    if (!functionName) {
      throw new Error('Function name is required');
    }
    if (!mealType) {
      throw new Error('Meal type is required');
    }

    let customerName = `Customer ${customerId}`;
    try {
      const customerDoc = await getDoc(doc(db, `customers/${customerId}`));
      if (customerDoc.exists()) {
        const customerData = customerDoc.data();
        customerName = customerData.name || customerData.displayName || customerName;
        console.log(`Fetched customer name: ${customerName} for ID: ${customerId}`);
      } else {
        console.warn(`Customer document not found for ID: ${customerId}`);
      }
    } catch (error) {
      console.error('Error fetching customer name:', error);
    }

    const ordersByHalwai = cartItems.reduce((acc, item) => {
      if (!item.halwaiId) {
        console.error('Item missing halwaiId:', item);
        return acc;
      }
      if (!acc[item.halwaiId]) {
        acc[item.halwaiId] = [];
      }
      let sanitizedItem;
      if (item.type === 'dish') {
        sanitizedItem = {
          itemId: item.itemId || '',
          name: item.name || 'Unknown Dish',
          categoryId: item.categoryId || '',
          categoryName: item.categoryName || 'Unknown Category',
          subCategoryId: item.subCategoryId || '', // Add subCategoryId
          ingredients: item.ingredients || [],
          veg: item.veg || 'N/A',
          imageUrl: item.imageUrl || '',
          type: 'dish',
          quantity: item.quantity || 50,
        };
      } else if (item.type === 'palace') {
        sanitizedItem = {
          itemId: item.itemId || '',
          name: item.name || 'Unknown Palace',
          categoryId: item.categoryId || '',
          categoryName: item.categoryName || 'Unknown Category',
          address: item.address || 'N/A',
          contact: item.contact || 'N/A',
          capacity: item.capacity || 'N/A',
          imageUrl: item.imageUrl || '',
          type: 'palace',
          quantity: item.quantity || 1,
        };
      } else if (item.type === 'decor') {
        sanitizedItem = {
          itemId: item.itemId || '',
          name: item.name || 'Unknown Decor',
          categoryId: item.categoryId || '',
          categoryName: item.categoryName || 'Unknown Category',
          description: item.description || 'No description available',
          imageUrl: item.imageUrl || '',
          type: 'decor',
          quantity: item.quantity || 1,
        };
      } else {
        console.error('Unknown item type:', item);
        return acc;
      }

      acc[item.halwaiId].push(sanitizedItem);
      return acc;
    }, {});

    if (Object.keys(ordersByHalwai).length === 0) {
      throw new Error('No valid orders to place');
    }

    for (const halwaiId of Object.keys(ordersByHalwai)) {
      const items = ordersByHalwai[halwaiId];

      const customerOrderRef = await addDoc(collection(db, `customers/${customerId}/orders`), {
        halwaiId,
        customerId,
        customerName,
        items,
        numberOfPersons,
        functionDate,
        functionName,
        mealType,
        status: 'pending',
        createdAt: new Date(),
      });

      await addDoc(collection(db, `halwais/${halwaiId}/orders`), {
        customerId,
        customerName,
        orderId: customerOrderRef.id,
        items,
        numberOfPersons,
        functionDate,
        functionName,
        mealType,
        status: 'pending',
        createdAt: new Date(),
      });
    }
  } catch (error) {
    console.error('Error placing order:', error);
    throw error;
  }
};

const acceptOrder = async (halwaiId, orderId, customerId, functionName, functionDate) => {
  try {
    let customerName = `Customer ${customerId}`;
    try {
      const customerDoc = await getDoc(doc(db, `customers/${customerId}`));
      if (customerDoc.exists()) {
        const customerData = customerDoc.data();
        customerName = customerData.name || customerData.displayName || customerName;
      }
    } catch (error) {
      console.error('Error fetching customer name for notification:', error);
    }

    const halwaiOrderRef = collection(db, `halwais/${halwaiId}/orders`);
    const querySnapshot = await getDocs(halwaiOrderRef);
    const orderDoc = querySnapshot.docs.find(doc => doc.data().orderId === orderId);
    if (!orderDoc) {
      throw new Error('Order not found');
    }
    await updateDoc(doc(db, `halwais/${halwaiId}/orders`, orderDoc.id), {
      status: 'accepted',
    });

    const customerOrderRef = doc(db, `customers/${customerId}/orders`, orderId);
    await updateDoc(customerOrderRef, {
      status: 'accepted',
    });

    const date = functionDate && functionDate.toDate ? functionDate.toDate() : new Date(functionDate || Date.now());
    
    await addDoc(collection(db, `customers/${customerId}/notifications`), {
      orderId,
      message: `Your order for ${functionName} on ${date.toDateString()} was accepted.`,
      status: 'accepted',
      createdAt: new Date(),
      read: false,
    });
  } catch (error) {
    console.error('Error accepting order:', error);
    throw error;
  }
};

const rejectOrder = async (halwaiId, orderId, customerId, functionName, functionDate) => {
  try {
    let customerName = `Customer ${customerId}`;
    try {
      const customerDoc = await getDoc(doc(db, `customers/${customerId}`));
      if (customerDoc.exists()) {
        const customerData = customerDoc.data();
        customerName = customerData.name || customerData.displayName || customerName;
      }
    } catch (error) {
      console.error('Error fetching customer name for notification:', error);
    }

    const halwaiOrderRef = collection(db, `halwais/${halwaiId}/orders`);
    const querySnapshot = await getDocs(halwaiOrderRef);
    const orderDoc = querySnapshot.docs.find(doc => doc.data().orderId === orderId);
    if (!orderDoc) {
      throw new Error('Order not found');
    }
    await updateDoc(doc(db, `halwais/${halwaiId}/orders`, orderDoc.id), {
      status: 'rejected',
    });

    const customerOrderRef = doc(db, `customers/${customerId}/orders`, orderId);
    await updateDoc(customerOrderRef, {
      status: 'rejected',
    });

    const date = functionDate && functionDate.toDate ? functionDate.toDate() : new Date(functionDate || Date.now());
    
    await addDoc(collection(db, `customers/${customerId}/notifications`), {
      orderId,
      message: `Your order for ${functionName} on ${date.toDateString()} was rejected.`,
      status: 'rejected',
      createdAt: new Date(),
      read: false,
    });
  } catch (error) {
    console.error('Error rejecting order:', error);
    throw error;
  }
};

const getCustomerOrders = async (customerId) => {
  try {
    const querySnapshot = await getDocs(collection(db, `customers/${customerId}/orders`));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching customer orders:', error);
    throw error;
  }
};

const getHalwaiOrders = async (halwaiId) => {
  try {
    const querySnapshot = await getDocs(collection(db, `halwais/${halwaiId}/orders`));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching halwai orders:', error);
    throw error;
  }
};

export { placeOrder, acceptOrder, rejectOrder, getCustomerOrders, getHalwaiOrders };