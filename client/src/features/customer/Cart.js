// import React, { useState } from 'react';
// import { useCart } from '../../context/CartContext';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from '../../services/firebaseConfig';
// import { placeOrder } from '../../services/orderService';
// import { Box, Card, CardContent, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Dialog, DialogTitle, DialogContent, DialogActions, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
// import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { ShoppingCart, Delete } from '@mui/icons-material';
// import { motion } from 'framer-motion';
// import './Cart.css';

// const Cart = () => {
//   const { cart, removeFromCart, clearCart } = useCart();
//   const [user] = useAuthState(auth);
//   const [openCart, setOpenCart] = useState(false);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [numberOfPersons, setNumberOfPersons] = useState('');
//   const [functionDate, setFunctionDate] = useState(null);
//   const [functionName, setFunctionName] = useState('');
//   const [mealType, setMealType] = useState('');

//   const handlePlaceOrder = () => {
//     if (!user) {
//       alert('Please log in to place an order.');
//       return;
//     }
//     if (cart.length === 0) {
//       alert('Your cart is empty.');
//       return;
//     }
//     setOpenDialog(true);
//   };

//   const handleSubmitOrder = async () => {
//     if (!numberOfPersons || !functionDate || !functionName || !mealType) {
//       alert('Please fill in all fields.');
//       return;
//     }
//     if (numberOfPersons <= 0) {
//       alert('Number of persons must be positive.');
//       return;
//     }
//     try {
//       console.log('Submitting order with:', { cart, numberOfPersons, functionDate, functionName, mealType });
//       await placeOrder(user.uid, cart, Number(numberOfPersons), functionDate, functionName, mealType);
//       alert('Order placed successfully!');
//       clearCart();
//       setOpenCart(false);
//       setOpenDialog(false);
//       setNumberOfPersons('');
//       setFunctionDate(null);
//       setFunctionName('');
//       setMealType('');
//     } catch (error) {
//       alert('Failed to place order: ' + error.message);
//     }
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <>
//         <motion.div
//           initial={{ y: 100 }}
//           animate={{ y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="sticky-cart"
//         >
//           <Card>
//             <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//               <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                 <ShoppingCart sx={{ mr: 1 }} />
//                 <Typography variant="h6">Cart ({cart.length})</Typography>
//               </Box>
//               <Button variant="contained" color="primary" onClick={() => setOpenCart(true)}>
//                 View Cart
//               </Button>
//             </CardContent>
//           </Card>
//         </motion.div>
//         <Drawer anchor="right" open={openCart} onClose={() => setOpenCart(false)}>
//           <Box sx={{ width: 350, p: 2 }}>
//             <Typography variant="h5" gutterBottom>
//               Your Cart
//             </Typography>
//             {cart.length === 0 ? (
//               <Typography>Your cart is empty.</Typography>
//             ) : (
//               <>
//                 <List>
//                   {cart.map(item => (
//                     <ListItem key={`${item.dishId}-${item.halwaiId}`}>
//                       <ListItemText
//                         primary={`${item.categoryName}: ${item.dishName} (${item.veg})`}
//                         secondary={`Ingredients: ${item.ingredients.map(ing => `${ing.name}: ${ing.quantity} ${ing.unit}`).join(', ')}`}
//                       />
//                       <IconButton color="error" onClick={() => removeFromCart(item.dishId, item.halwaiId)}>
//                         <Delete />
//                       </IconButton>
//                     </ListItem>
//                   ))}
//                 </List>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   fullWidth
//                   sx={{ mt: 2 }}
//                   onClick={handlePlaceOrder}
//                 >
//                   Place Order
//                 </Button>
//               </>
//             )}
//           </Box>
//         </Drawer>
//         <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
//           <DialogTitle>Order Details</DialogTitle>
//           <DialogContent>
//             <TextField
//               label="Number of Persons"
//               type="number"
//               fullWidth
//               margin="normal"
//               value={numberOfPersons}
//               onChange={(e) => setNumberOfPersons(e.target.value)}
//               inputProps={{ min: 1 }}
//             />
//             <DatePicker
//               label="Function Date"
//               value={functionDate}
//               onChange={setFunctionDate}
//               renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
//               minDate={new Date()}
//             />
//             <TextField
//               label="Function Name"
//               fullWidth
//               margin="normal"
//               value={functionName}
//               onChange={(e) => setFunctionName(e.target.value)}
//             />
//             <FormControl fullWidth margin="normal">
//               <InputLabel>Meal Type</InputLabel>
//               <Select value={mealType} onChange={(e) => setMealType(e.target.value)}>
//                 <MenuItem value="Breakfast">Breakfast</MenuItem>
//                 <MenuItem value="Lunch">Lunch</MenuItem>
//                 <MenuItem value="Dinner">Dinner</MenuItem>
//                 <MenuItem value="Snacks">Snacks</MenuItem>
//               </Select>
//             </FormControl>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={() => setOpenDialog(false)} color="secondary">
//               Cancel
//             </Button>
//             <Button onClick={handleSubmitOrder} color="primary">
//               Submit Order
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </>
//     </LocalizationProvider>
//   );
// };

// export default Cart;


// import React, { useState } from 'react';
// import { useCart } from '../../context/CartContext';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from '../../services/firebaseConfig';
// import { placeOrder } from '../../services/orderService';
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   ListItemAvatar,
//   Avatar,
// } from '@mui/material';
// import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { ShoppingCart, Delete } from '@mui/icons-material';
// import { motion } from 'framer-motion';
// import './Cart.css';

// const Cart = () => {
//   const { cart, removeFromCart, clearCart } = useCart();
//   const [user] = useAuthState(auth);
//   const [openCart, setOpenCart] = useState(false);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [numberOfPersons, setNumberOfPersons] = useState('');
//   const [functionDate, setFunctionDate] = useState(null);
//   const [functionName, setFunctionName] = useState('');
//   const [mealType, setMealType] = useState('');

//   const handlePlaceOrder = () => {
//     if (!user) {
//       alert('Please log in to place an order.');
//       return;
//     }
//     if (cart.length === 0) {
//       alert('Your cart is empty.');
//       return;
//     }
//     setOpenDialog(true);
//   };

//   const handleSubmitOrder = async () => {
//     if (!numberOfPersons || !functionDate || !functionName || !mealType) {
//       alert('Please fill in all fields.');
//       return;
//     }
//     if (numberOfPersons <= 0) {
//       alert('Number of persons must be positive.');
//       return;
//     }
//     try {
//       console.log('Submitting order with:', { cart, numberOfPersons, functionDate, functionName, mealType });
//       await placeOrder(user.uid, cart, Number(numberOfPersons), functionDate, functionName, mealType);
//       alert('Order placed successfully!');
//       clearCart();
//       setOpenCart(false);
//       setOpenDialog(false);
//       setNumberOfPersons('');
//       setFunctionDate(null);
//       setFunctionName('');
//       setMealType('');
//     } catch (error) {
//       alert('Failed to place order: ' + error.message);
//     }
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <>
//         <motion.div
//           initial={{ y: 100 }}
//           animate={{ y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="sticky-cart"
//         >
//           <Card>
//             <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//               <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                 <ShoppingCart sx={{ mr: 1 }} />
//                 <Typography variant="h6">Cart ({cart.length})</Typography>
//               </Box>
//               <Button variant="contained" color="primary" onClick={() => setOpenCart(true)}>
//                 View Cart
//               </Button>
//             </CardContent>
//           </Card>
//         </motion.div>
//         <Drawer anchor="right" open={openCart} onClose={() => setOpenCart(false)}>
//           <Box sx={{ width: 350, p: 2 }}>
//             <Typography variant="h5" gutterBottom>
//               Your Cart
//             </Typography>
//             {cart.length === 0 ? (
//               <Typography>Your cart is empty.</Typography>
//             ) : (
//               <>
//                 <List>
//                   {cart.map(item => (
//                     <ListItem key={`${item.itemId}-${item.halwaiId}-${item.type}`}>
//                       <ListItemAvatar>
//                         {item.imageUrl && (
//                           <Avatar src={item.imageUrl} alt={item.name} sx={{ width: 40, height: 40, mr: 2 }} />
//                         )}
//                       </ListItemAvatar>
//                       <ListItemText
//                         primary={`${item.categoryName}: ${item.name} (${item.type})`}
//                         secondary={
//                           <>
//                             {item.type === 'dish' && (
//                               <>
//                                 Veg: {item.veg}
//                                 <br />
//                                 Ingredients: {item.ingredients.map(ing => `${ing.name}: ${ing.quantity} ${ing.unit}`).join(', ')}
//                                 <br />
//                               </>
//                             )}
//                             {item.type === 'palace' && (
//                               <>
//                                 Address: {item.address}
//                                 <br />
//                                 Capacity: {item.capacity}
//                                 <br />
//                               </>
//                             )}
//                             {item.type === 'decor' && (
//                               <>
//                                 Description: {item.description}
//                                 <br />
//                               </>
//                             )}
//                             Quantity: {item.quantity}
//                           </>
//                         }
//                       />
//                       <IconButton
//                         color="error"
//                         onClick={() => removeFromCart(item.itemId, item.halwaiId, item.type)}
//                       >
//                         <Delete />
//                       </IconButton>
//                     </ListItem>
//                   ))}
//                 </List>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   fullWidth
//                   sx={{ mt: 2 }}
//                   onClick={handlePlaceOrder}
//                 >
//                   Place Order
//                 </Button>
//               </>
//             )}
//           </Box>
//         </Drawer>
//         <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
//           <DialogTitle>Order Details</DialogTitle>
//           <DialogContent>
//             <TextField
//               label="Number of Persons"
//               type="number"
//               fullWidth
//               margin="normal"
//               value={numberOfPersons}
//               onChange={(e) => setNumberOfPersons(e.target.value)}
//               inputProps={{ min: 1 }}
//             />
//             <DatePicker
//               label="Function Date"
//               value={functionDate}
//               onChange={setFunctionDate}
//               renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
//               minDate={new Date()}
//             />
//             <TextField
//               label="Function Name"
//               fullWidth
//               margin="normal"
//               value={functionName}
//               onChange={(e) => setFunctionName(e.target.value)}
//             />
//             <FormControl fullWidth margin="normal">
//               <InputLabel>Meal Type</InputLabel>
//               <Select value={mealType} onChange={(e) => setMealType(e.target.value)}>
//                 <MenuItem value="Breakfast">Breakfast</MenuItem>
//                 <MenuItem value="Lunch">Lunch</MenuItem>
//                 <MenuItem value="Dinner">Dinner</MenuItem>
//                 <MenuItem value="Snacks">Snacks</MenuItem>
//               </Select>
//             </FormControl>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={() => setOpenDialog(false)} color="secondary">
//               Cancel
//             </Button>
//             <Button onClick={handleSubmitOrder} color="primary">
//               Submit Order
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </>
//     </LocalizationProvider>
//   );
// };

// export default Cart;


import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig';
import { placeOrder } from '../../services/orderService';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListItemAvatar,
  Avatar,
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ShoppingCart, Delete } from '@mui/icons-material';
import { motion } from 'framer-motion';
import './Cart.css';

const SubCategoryTypography = ({ children }) => (
  <Typography
    variant="subtitle1"
    sx={{
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 500,
      color: '#000000',
      mt: 2,
      ml: 2,
      fontSize: { xs: '0.95rem', sm: '1rem' },
    }}
  >
    {children}
  </Typography>
);

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [user] = useAuthState(auth);
  const [openCart, setOpenCart] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [numberOfPersons, setNumberOfPersons] = useState('');
  const [functionDate, setFunctionDate] = useState(null);
  const [functionName, setFunctionName] = useState('');
  const [mealType, setMealType] = useState('');

  const handlePlaceOrder = () => {
    if (!user) {
      alert('Please log in to place an order.');
      return;
    }
    if (cart.length === 0) {
      alert('Your cart is empty.');
      return;
    }
    setOpenDialog(true);
  };

  const handleSubmitOrder = async () => {
    if (!numberOfPersons || !functionDate || !functionName || !mealType) {
      alert('Please fill in all fields.');
      return;
    }
    if (numberOfPersons <= 0) {
      alert('Number of persons must be positive.');
      return;
    }
    try {
      console.log('Submitting order with:', { cart, numberOfPersons, functionDate, functionName, mealType });
      await placeOrder(user.uid, cart, Number(numberOfPersons), functionDate, functionName, mealType);
      alert('Order placed successfully!');
      clearCart();
      setOpenCart(false);
      setOpenDialog(false);
      setNumberOfPersons('');
      setFunctionDate(null);
      setFunctionName('');
      setMealType('');
    } catch (error) {
      alert('Failed to place order: ' + error.message);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <>
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="sticky-cart"
        >
          <Card>
            <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ShoppingCart sx={{ mr: 1 }} />
                <Typography variant="h6">Cart ({cart.length})</Typography>
              </Box>
              <Button variant="contained" color="primary" onClick={() => setOpenCart(true)}>
                View Cart
              </Button>
            </CardContent>
          </Card>
        </motion.div>
        <Drawer anchor="right" open={openCart} onClose={() => setOpenCart(false)}>
          <Box sx={{ width: 350, p: 2 }}>
            <Typography variant="h5" gutterBottom>
              Your Cart
            </Typography>
            {cart.length === 0 ? (
              <Typography>Your cart is empty.</Typography>
            ) : (
              <>
                <List>
                  {
                    // Group items by category and subcategory
                    (() => {
                      const categories = {};
                      cart.forEach(item => {
                        const { categoryName, name, type, veg, subCategoryName } = item || {};
                        if (!categoryName || !name) return;
                        if (!categories[categoryName]) {
                          categories[categoryName] = {};
                        }
                        let displayName = name;
                        if (type === 'dish') {
                          displayName += veg === 'veg' ? ' (Veg)' : veg === 'non-veg' ? ' (Non-Veg)' : '';
                          const subCategory = subCategoryName || 'Other';
                          if (!categories[categoryName][subCategory]) {
                            categories[categoryName][subCategory] = [];
                          }
                          categories[categoryName][subCategory].push({ ...item, displayName });
                        } else {
                          if (!categories[categoryName]['Items']) {
                            categories[categoryName]['Items'] = [];
                          }
                          categories[categoryName]['Items'].push({ ...item, displayName });
                        }
                      });

                      // Render grouped items
                      return Object.entries(categories).map(([categoryName, subCategoryMap]) => (
                        <Box key={categoryName}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontFamily: 'Roboto, sans-serif',
                              fontWeight: 600,
                              color: '#000000',
                              mt: 1,
                              ml: 1,
                              fontSize: { xs: '1rem', sm: '1.1rem' },
                            }}
                          >
                            {categoryName}
                          </Typography>
                          {Object.entries(subCategoryMap).map(([subCategoryName, items]) => (
                            <Box key={subCategoryName}>
                              {categoryName === 'Khana Khazana' && subCategoryName !== 'Items' && (
                                <SubCategoryTypography>
                                  {subCategoryName}
                                </SubCategoryTypography>
                              )}
                              {items.map(item => (
                                <ListItem
                                  key={`${item.itemId}-${item.halwaiId}-${item.type}`}
                                  sx={{ pl: categoryName === 'Khana Khazana' && subCategoryName !== 'Items' ? 4 : 2 }}
                                >
                                  <ListItemAvatar>
                                    {item.imageUrl && (
                                      <Avatar src={item.imageUrl} alt={item.name} sx={{ width: 40, height: 40, mr: 2 }} />
                                    )}
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary={`${item.displayName} (${item.type})`}
                                    secondary={
                                      <>
                                        {item.type === 'dish' && (
                                          <>
                                            Veg: {item.veg}
                                            <br />
                                            Quantity: {item.quantity}
                                          </>
                                        )}
                                        {item.type === 'palace' && (
                                          <>
                                            Address: {item.address}
                                            <br />
                                            Capacity: {item.capacity}
                                            <br />
                                            Quantity: {item.quantity}
                                          </>
                                        )}
                                        {item.type === 'decor' && (
                                          <>
                                            Description: {item.description}
                                            <br />
                                            Quantity: {item.quantity}
                                          </>
                                        )}
                                      </>
                                    }
                                  />
                                  <IconButton
                                    color="error"
                                    onClick={() => removeFromCart(item.itemId, item.halwaiId, item.type)}
                                  >
                                    <Delete />
                                  </IconButton>
                                </ListItem>
                              ))}
                            </Box>
                          ))}
                        </Box>
                      ));
                    })()
                  }
                </List>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </Button>
              </>
            )}
          </Box>
        </Drawer>
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>Order Details</DialogTitle>
          <DialogContent>
            <TextField
              label="Number of Persons"
              type="number"
              fullWidth
              margin="normal"
              value={numberOfPersons}
              onChange={(e) => setNumberOfPersons(e.target.value)}
              inputProps={{ min: 1 }}
            />
            <DatePicker
              label="Function Date"
              value={functionDate}
              onChange={setFunctionDate}
              renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
              minDate={new Date()}
            />
            <TextField
              label="Function Name"
              fullWidth
              margin="normal"
              value={functionName}
              onChange={(e) => setFunctionName(e.target.value)}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Meal Type</InputLabel>
              <Select value={mealType} onChange={(e) => setMealType(e.target.value)}>
                <MenuItem value="Breakfast">Breakfast</MenuItem>
                <MenuItem value="Lunch">Lunch</MenuItem>
                <MenuItem value="Dinner">Dinner</MenuItem>
                <MenuItem value="Snacks">Snacks</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSubmitOrder} color="primary">
              Submit Order
            </Button>
          </DialogActions>
        </Dialog>
      </>
    </LocalizationProvider>
  );
};

export default Cart;