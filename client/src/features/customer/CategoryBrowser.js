// // import React, { useState, useEffect } from 'react';
// // import { useAuthState } from 'react-firebase-hooks/auth';
// // import { useCart } from '../../context/CartContext';
// // import {
// //   Container,
// //   Typography,
// //   Button,
// //   Box,
// //   FormControl,
// //   InputLabel,
// //   Select,
// //   MenuItem,
// //   Card,
// //   CardMedia,
// //   CardContent,
// //   CardActions,
// //   Grid,
// //   List,
// //   ListItem,
// //   ListItemText,
// // } from '@mui/material';
// // import { styled } from '@mui/material/styles';
// // import { motion } from 'framer-motion';
// // import { AddShoppingCart } from '@mui/icons-material';
// // import Navbar from '../shared/Navbar';
// // import { auth } from '../../services/firebaseConfig';
// // import {
// //   getHalwais,
// //   getCategories,
// //   getSubCategories,
// //   getDishes,
// //   getPalaces,
// //   getDecorItems,
// // } from '../../services/customerService';
// // import Cart from './Cart';

// // const StyledBackgroundBox = styled(Box)(({ theme }) => ({
// //   background: 'linear-gradient(180deg, #FCECDD 0%, #FFF8F0 100%)',
// //   minHeight: '100vh',
// //   position: 'relative',
// //   overflow: 'hidden',
// //   '&::before': {
// //     content: '""',
// //     position: 'absolute',
// //     top: 0,
// //     left: 0,
// //     width: '100%',
// //     height: '100%',
// //     background: 'url("data:image/svg+xml,%3Csvg opacity=\'0.03\' width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M50 20c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30zm0 50c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z\' fill=\'%23FF8C8C\'/%3E%3C/svg%3E") repeat',
// //     zIndex: 0,
// //   },
// // }));

// // const StyledContainer = styled(Container)(({ theme }) => ({
// //   paddingTop: theme.spacing(12),
// //   paddingBottom: theme.spacing(6),
// //   position: 'relative',
// //   zIndex: 1,
// //   [theme.breakpoints.down('sm')]: {
// //     paddingTop: theme.spacing(10),
// //     paddingBottom: theme.spacing(4),
// //   },
// // }));

// // const CenteredBox = styled(Box)(({ theme }) => ({
// //   display: 'flex',
// //   flexDirection: 'column',
// //   justifyContent: 'center',
// //   alignItems: 'center',
// //   minHeight: 'calc(100vh - 80px)',
// //   [theme.breakpoints.down('sm')]: {
// //     minHeight: 'calc(100vh - 64px)',
// //     padding: theme.spacing(0, 2),
// //   },
// // }));

// // const StyledCard = styled(Card)(({ theme }) => ({
// //   background: '#FFF8F0',
// //   backdropFilter: 'blur(6px)',
// //   borderRadius: theme.spacing(1.5),
// //   boxShadow: '0 4px 12px rgba(75, 75, 75, 0.1)',
// //   border: '1px solid #FCECDD',
// //   zIndex: 1,
// //   transition: 'all 0.3s ease',
// //   '&:hover': {
// //     transform: 'scale(1.05)',
// //     boxShadow: '0 6px 16px rgba(255, 140, 140, 0.2)',
// //   },
// //   [theme.breakpoints.down('sm')]: {
// //     maxWidth: '100%',
// //   },
// // }));

// // const StyledButton = styled(Button)(({ theme }) => ({
// //   backgroundColor: '#FF8C8C',
// //   color: '#FFF8F0',
// //   fontFamily: '"Montserrat", sans-serif',
// //   fontWeight: 600,
// //   borderRadius: theme.spacing(1),
// //   padding: theme.spacing(1.5, 3),
// //   textTransform: 'none',
// //   transition: 'all 0.2s ease',
// //   '&:hover': {
// //     backgroundColor: '#FCECDD',
// //     color: '#FF8C8C',
// //     boxShadow: '0 0 8px rgba(255, 194, 136, 0.3)',
// //     transform: 'scale(1.05)',
// //   },
// //   '&:active': {
// //     transform: 'scale(0.95)',
// //   },
// //   [theme.breakpoints.down('sm')]: {
// //     padding: theme.spacing(1, 2),
// //     fontSize: '0.9rem',
// //   },
// // }));

// // const StyledListItem = styled(ListItem)(({ theme }) => ({
// //   borderRadius: theme.spacing(1),
// //   marginBottom: theme.spacing(1),
// //   backgroundColor: '#FFF8F0',
// //   zIndex: 1,
// //   transition: 'all 0.3s ease',
// //   '&.Mui-selected': {
// //     backgroundColor: '#FCECDD',
// //     '&:hover': {
// //       backgroundColor: '#FFC288',
// //     },
// //   },
// //   '&:hover': {
// //     backgroundColor: '#FCECDD',
// //     transform: 'scale(1.02)',
// //   },
// //   [theme.breakpoints.down('sm')]: {
// //     padding: theme.spacing(1),
// //   },
// // }));

// // const StyledSelect = styled(Select)(({ theme }) => ({
// //   fontFamily: '"Montserrat", sans-serif',
// //   color: '#4B4B4B',
// //   '& .MuiOutlinedInput-notchedOutline': {
// //     borderColor: '#FCECDD',
// //   },
// //   '&:hover .MuiOutlinedInput-notchedOutline': {
// //     borderColor: '#FF8C8C',
// //   },
// //   '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
// //     borderColor: '#FF8C8C',
// //   },
// //   backgroundColor: '#FFF8F0',
// //   [theme.breakpoints.down('sm')]: {
// //     fontSize: '0.85rem',
// //   },
// // }));

// // const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
// //   fontFamily: '"Montserrat", sans-serif',
// //   color: '#4B4B4B',
// //   '&:hover': {
// //     backgroundColor: '#FCECDD',
// //   },
// //   '&.Mui-selected': {
// //     backgroundColor: '#FF8C8C',
// //     color: '#FFF8F0',
// //     '&:hover': {
// //       backgroundColor: '#FFC288',
// //     },
// //   },
// //   [theme.breakpoints.down('sm')]: {
// //     fontSize: '0.85rem',
// //   },
// // }));

// // const HeaderTypography = styled(Typography)(({ theme }) => ({
// //   fontFamily: '"Playfair Display", serif',
// //   fontWeight: 700,
// //   color: '#4B4B4B',
// //   position: 'relative',
// //   '&::after': {
// //     content: '""',
// //     position: 'absolute',
// //     bottom: '-8px',
// //     left: '50%',
// //     width: '0',
// //     height: '2px',
// //     background: '#FF8C8C',
// //     transition: 'width 0.3s ease, left 0.3s ease',
// //   },
// //   '&:hover::after': {
// //     width: '50%',
// //     left: '25%',
// //   },
// //   [theme.breakpoints.down('sm')]: {
// //     fontSize: '1.8rem',
// //     '&:where([variant="h5"], [variant="h6"])': {
// //       fontSize: '1.2rem',
// //     },
// //   },
// // }));

// // const BodyTypography = styled(Typography)(({ theme }) => ({
// //   fontFamily: '"Montserrat", sans-serif',
// //   fontWeight: 400,
// //   color: '#4B4B4B',
// //   fontSize: '0.9rem',
// //   opacity: 0.7,
// //   [theme.breakpoints.down('sm')]: {
// //     fontSize: '0.85rem',
// //   },
// // }));

// // const JalebiSpinner = styled('svg')(({ theme }) => ({
// //   width: '100px',
// //   height: '100px',
// //   animation: 'spin 2s linear infinite',
// //   '@keyframes spin': {
// //     '0%': { transform: 'rotate(0deg)' },
// //     '100%': { transform: 'rotate(360deg)' },
// //   },
// //   '& path': {
// //     fill: 'url(#jalebiGradient)',
// //     filter: 'drop-shadow(0 0 8px rgba(255, 140, 140, 0.3))',
// //   },
// //   [theme.breakpoints.down('sm')]: {
// //     width: '80px',
// //     height: '80px',
// //   },
// // }));

// // const CategoryBrowser = () => {
// //   const [user] = useAuthState(auth);
// //   const { addToCart } = useCart();
// //   const [halwais, setHalwais] = useState([]);
// //   const [selectedHalwai, setSelectedHalwai] = useState(null);
// //   const [categories, setCategories] = useState([]);
// //   const [subCategories, setSubCategories] = useState([]);
// //   const [selectedSubCategory, setSelectedSubCategory] = useState(null);
// //   const [dishes, setDishes] = useState([]);
// //   const [palaces, setPalaces] = useState([]);
// //   const [decorItems, setDecorItems] = useState([]);
// //   const [filter, setFilter] = useState('all');
// //   const [selectedCategory, setSelectedCategory] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   useEffect(() => {
// //     fetchHalwais();
// //   }, []);

// //   const fetchHalwais = async () => {
// //     try {
// //       setLoading(true);
// //       const halwaiData = await getHalwais();
// //       setHalwais(halwaiData);
// //     } catch (error) {
// //       alert('Failed to fetch halwais: ' + error.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const fetchCategories = async (halwaiId) => {
// //     try {
// //       setLoading(true);
// //       const categoryData = await getCategories(halwaiId);
// //       setCategories(categoryData);
// //       setSubCategories([]);
// //       setDishes([]);
// //       setPalaces([]);
// //       setDecorItems([]);
// //       setSelectedCategory(null);
// //       setSelectedSubCategory(null);
// //     } catch (error) {
// //       alert('Error fetching categories: ' + error.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const fetchSubCategories = async (halwaiId) => {
// //     try {
// //       setLoading(true);
// //       const subCategoryData = await getSubCategories(halwaiId);
// //       setSubCategories(subCategoryData);
// //       setDishes([]);
// //       setSelectedSubCategory(null);
// //     } catch (error) {
// //       alert('Error fetching sub-categories: ' + error.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const fetchDishes = async (halwaiId, subCategoryId) => {
// //     try {
// //       setLoading(true);
// //       const dishData = await getDishes(halwaiId, subCategoryId);
// //       setDishes(dishData);
// //       const subCategory = subCategories.find(sub => sub.id === subCategoryId);
// //       setSelectedSubCategory(subCategory);
// //     } catch (error) {
// //       alert('Error fetching dishes: ' + error.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const fetchPalaces = async (halwaiId) => {
// //     try {
// //       setLoading(true);
// //       const palaceData = await getPalaces(halwaiId);
// //       setPalaces(palaceData);
// //     } catch (error) {
// //       alert('Error fetching palaces: ' + error.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const fetchDecorItems = async (halwaiId) => {
// //     try {
// //       setLoading(true);
// //       const decorData = await getDecorItems(halwaiId);
// //       setDecorItems(decorData);
// //     } catch (error) {
// //       alert('Error fetching decor items: ' + error.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleHalwaiSelect = (halwai) => {
// //     setSelectedHalwai(halwai);
// //     fetchCategories(halwai.id);
// //   };

// //   const handleCategorySelect = (category) => {
// //     setSelectedCategory(category);
// //     setDishes([]);
// //     setPalaces([]);
// //     setDecorItems([]);
// //     setSelectedSubCategory(null);
// //     if (category.id === 'khana_khazana') {
// //       fetchSubCategories(selectedHalwai.id);
// //     } else if (category.id === 'palace') {
// //       fetchPalaces(selectedHalwai.id);
// //     } else if (category.id === 'tent_light_decor') {
// //       fetchDecorItems(selectedHalwai.id);
// //     }
// //   };

// //   const handleSubCategorySelect = (subCategoryId) => {
// //     fetchDishes(selectedHalwai.id, subCategoryId);
// //   };

// //   const filteredDishes = filter === 'all' ? dishes : dishes.filter(dish => dish.veg === filter);

// //   if (loading) {
// //     return (
// //       <motion.div
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ duration: 0.6, ease: 'easeOut' }}
// //       >
// //         <StyledBackgroundBox>
// //         <Navbar user={user ? { name: user.displayName || 'Customer' } : null} role="customer" />
// //         <StyledContainer>
// //           <CenteredBox>
// //             <JalebiSpinner viewBox="0 0 100 100">
// //               <defs>
// //                 <linearGradient id="jalebiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
// //                   <stop offset="0%" style={{ stopColor: '#FF8C8C', stopOpacity: 1 }} />
// //                   <stop offset="100%" style={{ stopColor: '#FFC288', stopOpacity: 1 }} />
// //                 </linearGradient>
// //               </defs>
// //               <path d="M50 10 C30 10 10 30 10 50 C10 70 30 90 50 90 C70 90 90 70 90 50 C90 30 70 10 50 10 M50 20 C35 20 20 35 20 50 C20 65 35 80 50 80 C65 80 80 65 80 50 C80 35 65 20 50 20" />
// //             </JalebiSpinner>
// //           </CenteredBox>
// //         </StyledContainer>
// //         </StyledBackgroundBox>
// //       </motion.div>
// //     );
// //   }

// //   return (
// //           <StyledBackgroundBox>

// //     <motion.div
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //       transition={{ duration: 0.6, ease: 'easeOut' }}
// //     >
// //       <Navbar user={user ? { name: user.displayName || 'Customer' } : null} role="customer" />
// //       <StyledContainer>
// //         <HeaderTypography variant="h4" sx={{ mb: 4 }}>
// //           Browse Halwais & Services
// //         </HeaderTypography>
// //         <FormControl fullWidth sx={{ mb: 4, maxWidth: 300 }}>
// //           <InputLabel sx={{ fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' }}>Filter</InputLabel>
// //           <StyledSelect
// //             value={filter}
// //             onChange={(e) => setFilter(e.target.value)}
// //           >
// //             <StyledMenuItem value="all">All</StyledMenuItem>
// //             <StyledMenuItem value="veg">Veg</StyledMenuItem>
// //             <StyledMenuItem value="non-veg">Non-Veg</StyledMenuItem>
// //           </StyledSelect>
// //         </FormControl>
// //         <HeaderTypography variant="h5" sx={{ mt: 4, mb: 2 }}>
// //           Halwais
// //         </HeaderTypography>
// //         <List>
// //           {halwais.map(halwai => (
// //             <StyledListItem
// //               key={halwai.id}
// //               button
// //               onClick={() => handleHalwaiSelect(halwai)}
// //               selected={selectedHalwai?.id === halwai.id}
// //             >
// //               <ListItemText
// //                 primary={halwai.name}
// //                 primaryTypographyProps={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 600, color: '#4B4B4B' }}
// //               />
// //             </StyledListItem>
// //           ))}
// //         </List>
// //         {selectedHalwai && (
// //           <>
// //             <HeaderTypography variant="h5" sx={{ mt: 4, mb: 2 }}>
// //               Categories for {selectedHalwai.name}
// //             </HeaderTypography>
// //             <List>
// //               {categories.map(category => (
// //                 <StyledListItem
// //                   key={category.id}
// //                   button
// //                   onClick={() => handleCategorySelect(category)}
// //                   selected={selectedCategory?.id === category.id}
// //                 >
// //                   <ListItemText
// //                     primary={category.name}
// //                     secondary={category.type}
// //                     primaryTypographyProps={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 600, color: '#4B4B4B' }}
// //                     secondaryTypographyProps={{ fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B', opacity: 0.7 }}
// //                   />
// //                 </StyledListItem>
// //               ))}
// //             </List>
// //           </>
// //         )}
// //         {selectedCategory?.id === 'khana_khazana' && subCategories.length > 0 && (
// //           <>
// //             <HeaderTypography variant="h5" sx={{ mt: 4, mb: 2 }}>
// //               Sub-Categories
// //             </HeaderTypography>
// //             <List>
// //               {subCategories.map(subCategory => (
// //                 <StyledListItem
// //                   key={subCategory.id}
// //                   button
// //                   onClick={() => handleSubCategorySelect(subCategory.id)}
// //                   selected={selectedSubCategory?.id === subCategory.id}
// //                 >
// //                   <ListItemText
// //                     primary={subCategory.name}
// //                     primaryTypographyProps={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 600, color: '#4B4B4B' }}
// //                   />
// //                 </StyledListItem>
// //               ))}
// //             </List>
// //           </>
// //         )}
// //         {filteredDishes.length > 0 && (
// //           <>
// //             <HeaderTypography variant="h5" sx={{ mt: 4, mb: 2 }}>
// //               Dishes
// //             </HeaderTypography>
// //             <Grid container spacing={3}>
// //               {filteredDishes.map(dish => (
// //                 <Grid item xs={12} sm={6} md={4} key={dish.id}>
// //                   <StyledCard>
// //                     {dish.imageUrl && (
// //                       <CardMedia
// //                         component="img"
// //                         height="140"
// //                         image={dish.imageUrl}
// //                         alt={dish.name}
// //                         sx={{ borderRadius: '8px 8px 0 0' }}
// //                       />
// //                     )}
// //                     <CardContent>
// //                       <HeaderTypography variant="h6">
// //                         {dish.name} ({dish.veg})
// //                       </HeaderTypography>
// //                       <BodyTypography variant="body2">
// //                         Ingredients: {dish.ingredients.map(ing => `${ing.name}: ${ing.quantity} ${ing.unit}`).join(', ')}
// //                       </BodyTypography>
// //                     </CardContent>
// //                     <CardActions>
// //                       <StyledButton
// //                         startIcon={<AddShoppingCart />}
// //                         onClick={() => addToCart(dish, selectedHalwai.id, selectedSubCategory?.id, selectedSubCategory?.name)}
// //                       >
// //                         Add to Cart
// //                       </StyledButton>
// //                     </CardActions>
// //                   </StyledCard>
// //                 </Grid>
// //               ))}
// //             </Grid>
// //           </>
// //         )}
// //         {palaces.length > 0 && (
// //           <>
// //             <HeaderTypography variant="h5" sx={{ mt: 4, mb: 2 }}>
// //               Palaces
// //             </HeaderTypography>
// //             <Grid container spacing={3}>
// //               {palaces.map(palace => (
// //                 <Grid item xs={12} sm={6} md={4} key={palace.id}>
// //                   <StyledCard>
// //                     {palace.imageUrl && (
// //                       <CardMedia
// //                         component="img"
// //                         height="140"
// //                         image={palace.imageUrl}
// //                         alt={palace.name}
// //                         sx={{ borderRadius: '8px 8px 0 0' }}
// //                       />
// //                     )}
// //                     <CardContent>
// //                       <HeaderTypography variant="h6">
// //                         {palace.name}
// //                       </HeaderTypography>
// //                       <BodyTypography variant="body2">
// //                         Address: {palace.address}
// //                       </BodyTypography>
// //                       <BodyTypography variant="body2">
// //                         Contact: {palace.contact}
// //                       </BodyTypography>
// //                       <BodyTypography variant="body2">
// //                         Capacity: {palace.capacity}
// //                       </BodyTypography>
// //                     </CardContent>
// //                     <CardActions>
// //                       <StyledButton
// //                         startIcon={<AddShoppingCart />}
// //                         onClick={() => addToCart(palace, selectedHalwai.id, selectedCategory?.id, selectedCategory?.name)}
// //                       >
// //                         Add to Cart
// //                       </StyledButton>
// //                     </CardActions>
// //                   </StyledCard>
// //                 </Grid>
// //               ))}
// //             </Grid>
// //           </>
// //         )}
// //         {decorItems.length > 0 && (
// //           <>
// //             <HeaderTypography variant="h5" sx={{ mt: 4, mb: 2 }}>
// //               Decor Items
// //             </HeaderTypography>
// //             <Grid container spacing={3}>
// //               {decorItems.map(item => (
// //                 <Grid item xs={12} sm={6} md={4} key={item.id}>
// //                   <StyledCard>
// //                     {item.imageUrl && (
// //                       <CardMedia
// //                         component="img"
// //                         height="140"
// //                         image={item.imageUrl}
// //                         alt={item.name}
// //                         sx={{ borderRadius: '8px 8px 0 0' }}
// //                       />
// //                     )}
// //                     <CardContent>
// //                       <HeaderTypography variant="h6">
// //                         {item.name}
// //                       </HeaderTypography>
// //                       <BodyTypography variant="body2">
// //                         Description: {item.description}
// //                       </BodyTypography>
// //                     </CardContent>
// //                     <CardActions>
// //                       <StyledButton
// //                         startIcon={<AddShoppingCart />}
// //                         onClick={() => addToCart(item, selectedHalwai.id, selectedCategory?.id, selectedCategory?.name)}
// //                       >
// //                         Add to Cart
// //                       </StyledButton>
// //                     </CardActions>
// //                   </StyledCard>
// //                 </Grid>
// //               ))}
// //             </Grid>
// //           </>
// //         )}
// //         <Cart />
// //       </StyledContainer>
// //     </motion.div>
// //           </StyledBackgroundBox>

// //   );
// // };

// // export default CategoryBrowser;





// import React, { useState, useEffect } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCart } from '../../context/CartContext';
// import {
//   Container,
//   Typography,
//   Button,
//   Box,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Card,
//   CardMedia,
//   CardContent,
//   CardActions,
//   Grid,
//   List,
//   ListItem,
//   ListItemText,
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { motion } from 'framer-motion';
// import { AddShoppingCart } from '@mui/icons-material';
// import Navbar from '../shared/Navbar';
// import { auth } from '../../services/firebaseConfig';
// import {
//   getHalwais,
//   getCategories,
//   getSubCategories,
//   getDishes,
//   getPalaces,
//   getDecorItems,
// } from '../../services/customerService';
// import Cart from './Cart';

// const StyledBackgroundBox = styled(Box)(({ theme }) => ({
//   background: 'linear-gradient(180deg, #FCECDD 0%, #FFF8F0 100%)',
//   minHeight: '100vh',
//   position: 'relative',
//   overflow: 'hidden',
//   '&::before': {
//     content: '""',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     background: 'url("data:image/svg+xml,%3Csvg opacity=\'0.03\' width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M50 20c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30zm0 50c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z\' fill=\'%23FF8C8C\'/%3E%3C/svg%3E") repeat',
//     zIndex: 0,
//   },
// }));

// const StyledContainer = styled(Container)(({ theme }) => ({
//   paddingTop: theme.spacing(12),
//   paddingBottom: theme.spacing(6),
//   position: 'relative',
//   zIndex: 1,
//   [theme.breakpoints.down('sm')]: {
//     paddingTop: theme.spacing(10),
//     paddingBottom: theme.spacing(4),
//   },
// }));

// const CenteredBox = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
//   minHeight: 'calc(100vh - 80px)',
//   [theme.breakpoints.down('sm')]: {
//     minHeight: 'calc(100vh - 64px)',
//     padding: theme.spacing(0, 2),
//   },
// }));

// const StyledCard = styled(Card)(({ theme }) => ({
//   background: '#FFF8F0',
//   backdropFilter: 'blur(6px)',
//   borderRadius: theme.spacing(1.5),
//   boxShadow: '0 4px 12px rgba(75, 75, 75, 0.1)',
//   border: '1px solid #FCECDD',
//   zIndex: 1,
//   transition: 'all 0.3s ease',
//   '&:hover': {
//     transform: 'scale(1.05)',
//     boxShadow: '0 6px 16px rgba(255, 140, 140, 0.2)',
//   },
//   [theme.breakpoints.down('sm')]: {
//     maxWidth: '100%',
//   },
// }));

// const StyledButton = styled(Button)(({ theme }) => ({
//   backgroundColor: '#FF8C8C',
//   color: '#FFF8F0',
//   fontFamily: '"Montserrat", sans-serif',
//   fontWeight: 600,
//   borderRadius: theme.spacing(1),
//   padding: theme.spacing(1.5, 3),
//   textTransform: 'none',
//   transition: 'all 0.2s ease',
//   '&:hover': {
//     backgroundColor: '#FCECDD',
//     color: '#FF8C8C',
//     boxShadow: '0 0 8px rgba(255, 194, 136, 0.3)',
//     transform: 'scale(1.05)',
//   },
//   '&:active': {
//     transform: 'scale(0.95)',
//   },
//   [theme.breakpoints.down('sm')]: {
//     padding: theme.spacing(1, 2),
//     fontSize: '0.9rem',
//   },
// }));

// const StyledListItem = styled(ListItem)(({ theme }) => ({
//   borderRadius: theme.spacing(1),
//   marginBottom: theme.spacing(1),
//   backgroundColor: '#FFF8F0',
//   zIndex: 1,
//   transition: 'all 0.3s ease',
//   '&.Mui-selected': {
//     backgroundColor: '#FCECDD',
//     '&:hover': {
//       backgroundColor: '#FFC288',
//     },
//   },
//   '&:hover': {
//     backgroundColor: '#FCECDD',
//     transform: 'scale(1.02)',
//   },
//   [theme.breakpoints.down('sm')]: {
//     padding: theme.spacing(1),
//   },
// }));

// const StyledSelect = styled(Select)(({ theme }) => ({
//   fontFamily: '"Montserrat", sans-serif',
//   color: '#4B4B4B',
//   '& .MuiOutlinedInput-notchedOutline': {
//     borderColor: '#FCECDD',
//   },
//   '&:hover .MuiOutlinedInput-notchedOutline': {
//     borderColor: '#FF8C8C',
//   },
//   '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
//     borderColor: '#FF8C8C',
//   },
//   backgroundColor: '#FFF8F0',
//   [theme.breakpoints.down('sm')]: {
//     fontSize: '0.85rem',
//   },
// }));

// const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
//   fontFamily: '"Montserrat", sans-serif',
//   color: '#4B4B4B',
//   '&:hover': {
//     backgroundColor: '#FCECDD',
//   },
//   '&.Mui-selected': {
//     backgroundColor: '#FF8C8C',
//     color: '#FFF8F0',
//     '&:hover': {
//       backgroundColor: '#FFC288',
//     },
//   },
//   [theme.breakpoints.down('sm')]: {
//     fontSize: '0.85rem',
//   },
// }));

// const HeaderTypography = styled(Typography)(({ theme }) => ({
//   fontFamily: '"Playfair Display", serif',
//   fontWeight: 700,
//   color: '#4B4B4B',
//   position: 'relative',
//   '&::after': {
//     content: '""',
//     position: 'absolute',
//     bottom: '-8px',
//     left: '50%',
//     width: '0',
//     height: '2px',
//     background: '#FF8C8C',
//     transition: 'width 0.3s ease, left 0.3s ease',
//   },
//   '&:hover::after': {
//     width: '50%',
//     left: '25%',
//   },
//   [theme.breakpoints.down('sm')]: {
//     fontSize: '1.8rem',
//     '&:where([variant="h5"], [variant="h6"])': {
//       fontSize: '1.2rem',
//     },
//   },
// }));

// const BodyTypography = styled(Typography)(({ theme }) => ({
//   fontFamily: '"Montserrat", sans-serif',
//   fontWeight: 400,
//   color: '#4B4B4B',
//   fontSize: '0.9rem',
//   opacity: 0.7,
//   [theme.breakpoints.down('sm')]: {
//     fontSize: '0.85rem',
//   },
// }));

// const JalebiSpinner = styled('svg')(({ theme }) => ({
//   width: '100px',
//   height: '100px',
//   animation: 'spin 2s linear infinite',
//   '@keyframes spin': {
//     '0%': { transform: 'rotate(0deg)' },
//     '100%': { transform: 'rotate(360deg)' },
//   },
//   '& path': {
//     fill: 'url(#jalebiGradient)',
//     filter: 'drop-shadow(0 0 8px rgba(255, 140, 140, 0.3))',
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: '80px',
//     height: '80px',
//   },
// }));

// const CategoryBrowser = () => {
//   const [user] = useAuthState(auth);
//   const { addToCart } = useCart();
//   const [halwais, setHalwais] = useState([]);
//   const [selectedHalwai, setSelectedHalwai] = useState(null);
//   const [categories, setCategories] = useState([]);
//   const [subCategories, setSubCategories] = useState([]);
//   const [selectedSubCategory, setSelectedSubCategory] = useState(null);
//   const [dishes, setDishes] = useState([]);
//   const [palaces, setPalaces] = useState([]);
//   const [decorItems, setDecorItems] = useState([]);
//   const [filter, setFilter] = useState('all');
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchHalwais();
//   }, []);

//   const fetchHalwais = async () => {
//     try {
//       setLoading(true);
//       const halwaiData = await getHalwais();
//       setHalwais(halwaiData);
//     } catch (error) {
//       alert('Failed to fetch halwais: ' + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchCategories = async (halwaiId) => {
//     try {
//       setLoading(true);
//       const categoryData = await getCategories(halwaiId);
//       setCategories(categoryData);
//       setSubCategories([]);
//       setDishes([]);
//       setPalaces([]);
//       setDecorItems([]);
//       setSelectedCategory(null);
//       setSelectedSubCategory(null);
//     } catch (error) {
//       alert('Error fetching categories: ' + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchSubCategories = async (halwaiId) => {
//     try {
//       setLoading(true);
//       const subCategoryData = await getSubCategories(halwaiId);
//       setSubCategories(subCategoryData);
//       setDishes([]);
//       setSelectedSubCategory(null);
//     } catch (error) {
//       alert('Error fetching sub-categories: ' + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchDishes = async (halwaiId, subCategoryId) => {
//     try {
//       setLoading(true);
//       const dishData = await getDishes(halwaiId, subCategoryId);
//       setDishes(dishData);
//       const subCategory = subCategories.find(sub => sub.id === subCategoryId);
//       setSelectedSubCategory(subCategory);
//     } catch (error) {
//       alert('Error fetching dishes: ' + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchPalaces = async (halwaiId) => {
//     try {
//       setLoading(true);
//       const palaceData = await getPalaces(halwaiId);
//       setPalaces(palaceData);
//     } catch (error) {
//       alert('Error fetching palaces: ' + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchDecorItems = async (halwaiId) => {
//     try {
//       setLoading(true);
//       const decorData = await getDecorItems(halwaiId);
//       setDecorItems(decorData);
//     } catch (error) {
//       alert('Error fetching decor items: ' + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleHalwaiSelect = (halwai) => {
//     setSelectedHalwai(halwai);
//     fetchCategories(halwai.id);
//   };

//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category);
//     setDishes([]);
//     setPalaces([]);
//     setDecorItems([]);
//     setSelectedSubCategory(null);
//     if (category.id === 'khana_khazana') {
//       fetchSubCategories(selectedHalwai.id);
//     } else if (category.id === 'palace') {
//       fetchPalaces(selectedHalwai.id);
//     } else if (category.id === 'tent_light_decor') {
//       fetchDecorItems(selectedHalwai.id);
//     }
//   };

//   const handleSubCategorySelect = (subCategoryId) => {
//     fetchDishes(selectedHalwai.id, subCategoryId);
//   };

//   const filteredDishes = filter === 'all' ? dishes : dishes.filter(dish => dish.veg === filter);

//   if (loading) {
//     return (
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.6, ease: 'easeOut' }}
//       >
//         <StyledBackgroundBox>
//         <Navbar user={user ? { name: user.displayName || 'Customer' } : null} role="customer" />
//         <StyledContainer>
//           <CenteredBox>
//             <JalebiSpinner viewBox="0 0 100 100">
//               <defs>
//                 <linearGradient id="jalebiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" style={{ stopColor: '#FF8C8C', stopOpacity: 1 }} />
//                   <stop offset="100%" style={{ stopColor: '#FFC288', stopOpacity: 1 }} />
//                 </linearGradient>
//               </defs>
//               <path d="M50 10 C30 10 10 30 10 50 C10 70 30 90 50 90 C70 90 90 70 90 50 C90 30 70 10 50 10 M50 20 C35 20 20 35 20 50 C20 65 35 80 50 80 C65 80 80 65 80 50 C80 35 65 20 50 20" />
//             </JalebiSpinner>
//           </CenteredBox>
//         </StyledContainer>
//         </StyledBackgroundBox>
//       </motion.div>
//     );
//   }

//   return (
//           <StyledBackgroundBox>

//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.6, ease: 'easeOut' }}
//     >
//       <Navbar user={user ? { name: user.displayName || 'Customer' } : null} role="customer" />
//       <StyledContainer>
//         <HeaderTypography variant="h4" sx={{ mb: 4 }}>
//           Browse Halwais & Services
//         </HeaderTypography>
//         <FormControl fullWidth sx={{ mb: 4, maxWidth: 300 }}>
//           <InputLabel sx={{ fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' }}>Filter</InputLabel>
//           <StyledSelect
//             value={filter}
//             onChange={(e) => setFilter(e.target.value)}
//           >
//             <StyledMenuItem value="all">All</StyledMenuItem>
//             <StyledMenuItem value="veg">Veg</StyledMenuItem>
//             <StyledMenuItem value="non-veg">Non-Veg</StyledMenuItem>
//           </StyledSelect>
//         </FormControl>
//         <HeaderTypography variant="h5" sx={{ mt: 4, mb: 2 }}>
//           Halwais
//         </HeaderTypography>
//         <List>
//           {halwais.map(halwai => (
//             <StyledListItem
//               key={halwai.id}
//               button
//               onClick={() => handleHalwaiSelect(halwai)}
//               selected={selectedHalwai?.id === halwai.id}
//             >
//               <ListItemText
//                 primary={halwai.name}
//                 primaryTypographyProps={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 600, color: '#4B4B4B' }}
//               />
//             </StyledListItem>
//           ))}
//         </List>
//         {selectedHalwai && (
//           <>
//             <HeaderTypography variant="h5" sx={{ mt: 4, mb: 2 }}>
//               Categories for {selectedHalwai.name}
//             </HeaderTypography>
//             <List>
//               {categories.map(category => (
//                 <StyledListItem
//                   key={category.id}
//                   button
//                   onClick={() => handleCategorySelect(category)}
//                   selected={selectedCategory?.id === category.id}
//                 >
//                   <ListItemText
//                     primary={category.name}
//                     secondary={category.type}
//                     primaryTypographyProps={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 600, color: '#4B4B4B' }}
//                     secondaryTypographyProps={{ fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B', opacity: 0.7 }}
//                   />
//                 </StyledListItem>
//               ))}
//             </List>
//           </>
//         )}
//         {selectedCategory?.id === 'khana_khazana' && subCategories.length > 0 && (
//           <>
//             <HeaderTypography variant="h5" sx={{ mt: 4, mb: 2 }}>
//               Sub-Categories
//             </HeaderTypography>
//             <List>
//               {subCategories.map(subCategory => (
//                 <StyledListItem
//                   key={subCategory.id}
//                   button
//                   onClick={() => handleSubCategorySelect(subCategory.id)}
//                   selected={selectedSubCategory?.id === subCategory.id}
//                 >
//                   <ListItemText
//                     primary={subCategory.name}
//                     primaryTypographyProps={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 600, color: '#4B4B4B' }}
//                   />
//                 </StyledListItem>
//               ))}
//             </List>
//           </>
//         )}
//         {filteredDishes.length > 0 && (
//           <>
//             <HeaderTypography variant="h5" sx={{ mt: 4, mb: 2 }}>
//               Dishes
//             </HeaderTypography>
//             <Grid container spacing={3}>
//               {filteredDishes.map(dish => (
//                 <Grid item xs={12} sm={6} md={4} key={dish.id}>
//                   <StyledCard>
//                     {dish.imageUrl && (
//                       <CardMedia
//                         component="img"
//                         height="140"
//                         image={dish.imageUrl}
//                         alt={dish.name}
//                         sx={{ borderRadius: '8px 8px 0 0' }}
//                       />
//                     )}
//                     <CardContent>
//                       <HeaderTypography variant="h6">
//                         {dish.name} ({dish.veg})
//                       </HeaderTypography>
//                       <BodyTypography variant="body2">
//                         Ingredients: {dish.ingredients.map(ing => `${ing.name}: ${ing.quantity} ${ing.unit}`).join(', ')}
//                       </BodyTypography>
//                     </CardContent>
//                     <CardActions>
//                       <StyledButton
//                           startIcon={<AddShoppingCart />}
//                           onClick={() => addToCart(dish, selectedHalwai.id, 'khana_khazana', 'Khana Khazana')}
//                         >
//                         Add to Cart
//                       </StyledButton>
//                     </CardActions>
//                   </StyledCard>
//                 </Grid>
//               ))}
//             </Grid>
//           </>
//         )}
//         {palaces.length > 0 && (
//           <>
//             <HeaderTypography variant="h5" sx={{ mt: 4, mb: 2 }}>
//               Palaces
//             </HeaderTypography>
//             <Grid container spacing={3}>
//               {palaces.map(palace => (
//                 <Grid item xs={12} sm={6} md={4} key={palace.id}>
//                   <StyledCard>
//                     {palace.imageUrl && (
//                       <CardMedia
//                         component="img"
//                         height="140"
//                         image={palace.imageUrl}
//                         alt={palace.name}
//                         sx={{ borderRadius: '8px 8px 0 0' }}
//                       />
//                     )}
//                     <CardContent>
//                       <HeaderTypography variant="h6">
//                         {palace.name}
//                       </HeaderTypography>
//                       <BodyTypography variant="body2">
//                         Address: {palace.address}
//                       </BodyTypography>
//                       <BodyTypography variant="body2">
//                         Contact: {palace.contact}
//                       </BodyTypography>
//                       <BodyTypography variant="body2">
//                         Capacity: {palace.capacity}
//                       </BodyTypography>
//                     </CardContent>
//                     <CardActions>
//                       <StyledButton
//   startIcon={<AddShoppingCart />}
//   onClick={() => addToCart(palace, selectedHalwai.id, 'palace', 'Palace')}
// >
//                         Add to Cart
//                       </StyledButton>
//                     </CardActions>
//                   </StyledCard>
//                 </Grid>
//               ))}
//             </Grid>
//           </>
//         )}
//         {decorItems.length > 0 && (
//           <>
//             <HeaderTypography variant="h5" sx={{ mt: 4, mb: 2 }}>
//               Decor Items
//             </HeaderTypography>
//             <Grid container spacing={3}>
//               {decorItems.map(item => (
//                 <Grid item xs={12} sm={6} md={4} key={item.id}>
//                   <StyledCard>
//                     {item.imageUrl && (
//                       <CardMedia
//                         component="img"
//                         height="140"
//                         image={item.imageUrl}
//                         alt={item.name}
//                         sx={{ borderRadius: '8px 8px 0 0' }}
//                       />
//                     )}
//                     <CardContent>
//                       <HeaderTypography variant="h6">
//                         {item.name}
//                       </HeaderTypography>
//                       <BodyTypography variant="body2">
//                         Description: {item.description}
//                       </BodyTypography>
//                     </CardContent>
//                     <CardActions>
//                       <StyledButton
//   startIcon={<AddShoppingCart />}
//   onClick={() => addToCart(item, selectedHalwai.id, 'tent_light_decor', 'Tent & Light Decor')}
// >
//                         Add to Cart
//                       </StyledButton>
//                     </CardActions>
//                   </StyledCard>
//                 </Grid>
//               ))}
//             </Grid>
//           </>
//         )}
//         <Cart />
//       </StyledContainer>
//     </motion.div>
//           </StyledBackgroundBox>

//   );
// };

// export default CategoryBrowser;


import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCart } from '../../context/CartContext';
import {
  Container,
  Typography,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { AddShoppingCart } from '@mui/icons-material';
import Navbar from '../shared/Navbar';
import { auth } from '../../services/firebaseConfig';
import {
  getHalwais,
  getCategories,
  getSubCategories,
  getDishes,
  getPalaces,
  getDecorItems,
} from '../../services/customerService';
import Cart from './Cart';

const StyledBackgroundBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(180deg, #FCECDD 0%, #FFF8F0 100%)',
  minHeight: '100vh',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'url("data:image/svg+xml,%3Csvg opacity=\'0.03\' width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M50 20c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30zm0 50c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z\' fill=\'%23FF8C8C\'/%3E%3C/svg%3E") repeat',
    zIndex: 0,
  },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(6),
  position: 'relative',
  zIndex: 1,
  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(4),
  },
}));

const CenteredBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 'calc(100vh - 80px)',
  [theme.breakpoints.down('sm')]: {
    minHeight: 'calc(100vh - 64px)',
    padding: theme.spacing(0, 2),
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  background: '#FFF8F0',
  backdropFilter: 'blur(6px)',
  borderRadius: theme.spacing(1.5),
  boxShadow: '0 4px 12px rgba(75, 75, 75, 0.1)',
  border: '1px solid #FCECDD',
  zIndex: 1,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 16px rgba(255, 140, 140, 0.2)',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FF8C8C',
  color: '#FFF8F0',
  fontFamily: '"Montserrat", sans-serif',
  fontWeight: 600,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1.5, 3),
  textTransform: 'none',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: '#FCECDD',
    color: '#FF8C8C',
    boxShadow: '0 0 8px rgba(255, 194, 136, 0.3)',
    transform: 'scale(1.05)',
  },
  '&:active': {
    transform: 'scale(0.95)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1, 2),
    fontSize: '0.9rem',
  },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(1),
  backgroundColor: '#FFF8F0',
  zIndex: 1,
  transition: 'all 0.3s ease',
  '&.Mui-selected': {
    backgroundColor: '#FCECDD',
    '&:hover': {
      backgroundColor: '#FFC288',
    },
  },
  '&:hover': {
    backgroundColor: '#FCECDD',
    transform: 'scale(1.02)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
  },
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  fontFamily: '"Montserrat", sans-serif',
  color: '#4B4B4B',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#FCECDD',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#FF8C8C',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#FF8C8C',
  },
  backgroundColor: '#FFF8F0',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.85rem',
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontFamily: '"Montserrat", sans-serif',
  color: '#4B4B4B',
  '&:hover': {
    backgroundColor: '#FCECDD',
  },
  '&.Mui-selected': {
    backgroundColor: '#FF8C8C',
    color: '#FFF8F0',
    '&:hover': {
      backgroundColor: '#FFC288',
    },
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.85rem',
  },
}));

const HeaderTypography = styled(Typography)(({ theme }) => ({
  fontFamily: '"Playfair Display", serif',
  fontWeight: 700,
  color: '#4B4B4B',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-8px',
    left: '50%',
    width: '0',
    height: '2px',
    background: '#FF8C8C',
    transition: 'width 0.3s ease, left 0.3s ease',
  },
  '&:hover::after': {
    width: '50%',
    left: '25%',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.8rem',
    '&:where([variant="h5"], [variant="h6"])': {
      fontSize: '1.2rem',
    },
  },
}));

const BodyTypography = styled(Typography)(({ theme }) => ({
  fontFamily: '"Montserrat", sans-serif',
  fontWeight: 400,
  color: '#4B4B4B',
  fontSize: '0.9rem',
  opacity: 0.7,
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.85rem',
  },
}));

const JalebiSpinner = styled('svg')(({ theme }) => ({
  width: '100px',
  height: '100px',
  animation: 'spin 2s linear infinite',
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
  '& path': {
    fill: 'url(#jalebiGradient)',
    filter: 'drop-shadow(0 0 8px rgba(255, 140, 140, 0.3))',
  },
  [theme.breakpoints.down('sm')]: {
    width: '80px',
    height: '80px',
  },
}));

const CategoryBrowser = () => {
  const [user] = useAuthState(auth);
  const { addToCart } = useCart();
  const [halwais, setHalwais] = useState([]);
  const [selectedHalwai, setSelectedHalwai] = useState(null);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [dishes, setDishes] = useState([]);
  const [palaces, setPalaces] = useState([]);
  const [decorItems, setDecorItems] = useState([]);
  const [filter, setFilter] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchHalwais();
  }, []);

  const fetchHalwais = async () => {
    try {
      setLoading(true);
      const halwaiData = await getHalwais();
      setHalwais(halwaiData);
    } catch (error) {
      alert('Failed to fetch halwais: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async (halwaiId) => {
    try {
      setLoading(true);
      const categoryData = await getCategories(halwaiId);
      setCategories(categoryData);
      setSubCategories([]);
      setDishes([]);
      setPalaces([]);
      setDecorItems([]);
      setSelectedCategory(null);
      setSelectedSubCategory(null);
    } catch (error) {
      alert('Error fetching categories: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchSubCategories = async (halwaiId) => {
    try {
      setLoading(true);
      const subCategoryData = await getSubCategories(halwaiId);
      setSubCategories(subCategoryData);
      setDishes([]);
      setSelectedSubCategory(null);
    } catch (error) {
      alert('Error fetching sub-categories: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchDishes = async (halwaiId, subCategoryId) => {
    try {
      setLoading(true);
      const dishData = await getDishes(halwaiId, subCategoryId);
      setDishes(dishData);
      const subCategory = subCategories.find(sub => sub.id === subCategoryId);
      setSelectedSubCategory(subCategory);
    } catch (error) {
      alert('Error fetching dishes: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchPalaces = async (halwaiId) => {
    try {
      setLoading(true);
      const palaceData = await getPalaces(halwaiId);
      setPalaces(palaceData);
    } catch (error) {
      alert('Error fetching palaces: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchDecorItems = async (halwaiId) => {
    try {
      setLoading(true);
      const decorData = await getDecorItems(halwaiId);
      setDecorItems(decorData);
    } catch (error) {
      alert('Error fetching decor items: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleHalwaiSelect = (halwai) => {
    setSelectedHalwai(halwai);
    fetchCategories(halwai.id);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setDishes([]);
    setPalaces([]);
    setDecorItems([]);
    setSelectedSubCategory(null);
    if (category.id === 'khana_khazana') {
      fetchSubCategories(selectedHalwai.id);
    } else if (category.id === 'palace') {
      fetchPalaces(selectedHalwai.id);
    } else if (category.id === 'tent_light_decor') {
      fetchDecorItems(selectedHalwai.id);
    }
  };

  const handleSubCategorySelect = (subCategoryId) => {
    fetchDishes(selectedHalwai.id, subCategoryId);
  };

  const filteredDishes = filter === 'all' ? dishes : dishes.filter(dish => dish.veg === filter);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <StyledBackgroundBox>
        <Navbar user={user ? { name: user.displayName || 'Customer' } : null} role="customer" />
        <StyledContainer>
          <CenteredBox>
            <JalebiSpinner viewBox="0 0 100 100">
              <defs>
                <linearGradient id="jalebiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#FF8C8C', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#FFC288', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path d="M50 10 C30 10 10 30 10 50 C10 70 30 90 50 90 C70 90 90 70 90 50 C90 30 70 10 50 10 M50 20 C35 20 20 35 20 50 C20 65 35 80 50 80 C65 80 80 65 80 50 C80 35 65 20 50 20" />
            </JalebiSpinner>
          </CenteredBox>
        </StyledContainer>
        </StyledBackgroundBox>
      </motion.div>
    );
  }

  return (
          <StyledBackgroundBox>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Navbar user={user ? { name: user.displayName || 'Customer' } : null} role="customer" />
      <StyledContainer>
        <HeaderTypography variant="h4" sx={{ mb: 4 }}>
          Browse Halwais & Services
        </HeaderTypography>
        <FormControl fullWidth sx={{ mb: 4, maxWidth: 300 }}>
          <InputLabel sx={{ fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' }}>Filter</InputLabel>
          <StyledSelect
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <StyledMenuItem value="all">All</StyledMenuItem>
            <StyledMenuItem value="veg">Veg</StyledMenuItem>
            <StyledMenuItem value="non-veg">Non-Veg</StyledMenuItem>
          </StyledSelect>
        </FormControl>
        <HeaderTypography variant="h5" sx={{ mt: 4, mb: 2 }}>
        Halwais
        </HeaderTypography>
        <List>
          {halwais.map(halwai => (
            <StyledListItem
              key={halwai.id}
              button
              onClick={() => handleHalwaiSelect(halwai)}
              selected={selectedHalwai?.id === halwai.id}
            >
              <ListItemText
                primary={halwai.name}
                primaryTypographyProps={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 600, color: '#4B4B4B' }}
              />
            </StyledListItem>
          ))}
        </List>
        {selectedHalwai && (
          <>
            <HeaderTypography variant="h5" sx={{ mt: 4, mb: 2 }}>
              Categories for {selectedHalwai.name}
            </HeaderTypography>
            <List>
              {categories.map(category => (
                <StyledListItem
                  key={category.id}
                  button
                  onClick={() => handleCategorySelect(category)}
                  selected={selectedCategory?.id === category.id}
                >
                  <ListItemText
                    primary={category.name}
                    secondary={category.type}
                    primaryTypographyProps={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 600, color: '#4B4B4B' }}
                    secondaryTypographyProps={{ fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B', opacity: 0.7 }}
                  />
                </StyledListItem>
              ))}
            </List>
          </>
        )}
        {selectedCategory?.id === 'khana_khazana' && subCategories.length > 0 && (
          <>
            <HeaderTypography variant="h5" sx={{ mt: 4, mb: 2 }}>
              Sub-Categories
            </HeaderTypography>
            <List>
              {subCategories.map(subCategory => (
                <StyledListItem
                  key={subCategory.id}
                  button
                  onClick={() => handleSubCategorySelect(subCategory.id)}
                  selected={selectedSubCategory?.id === subCategory.id}
                >
                  <ListItemText
                    primary={subCategory.name}
                    primaryTypographyProps={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 600, color: '#4B4B4B' }}
                  />
                </StyledListItem>
              ))}
            </List>
          </>
        )}
        {filteredDishes.length > 0 && (
          <>
            <HeaderTypography variant="h5" sx={{ mt: 4, mb: 2 }}>
              Dishes
            </HeaderTypography>
            <Grid container spacing={3}>
              {filteredDishes.map(dish => (
                <Grid item xs={12} sm={6} md={4} key={dish.id}>
                  <StyledCard>
                    {dish.imageUrl && (
                      <CardMedia
                        component="img"
                        height="140"
                        image={dish.imageUrl}
                        alt={dish.name}
                        sx={{ borderRadius: '8px 8px 0 0' }}
                      />
                    )}
                    <CardContent>
                      <HeaderTypography variant="h6">
                        {dish.name} ({dish.veg})
                      </HeaderTypography>
                      <BodyTypography variant="body2">
                        Ingredients: {dish.ingredients.map(ing => `${ing.name}: ${ing.quantity} ${ing.unit}`).join(', ')}
                      </BodyTypography>
                    </CardContent>
                    <CardActions>
                      <StyledButton
                        startIcon={<AddShoppingCart />}
                        onClick={() => addToCart(dish, selectedHalwai.id, 'khana_khazana', 'Khana Khazana', selectedSubCategory?.id)}
                      >
                        Add to Cart
                      </StyledButton>
                    </CardActions>
                  </StyledCard>
                </Grid>
              ))}
            </Grid>
          </>
        )}
        {palaces.length > 0 && (
          <>
            <HeaderTypography variant="h5" sx={{ mt: 4, mb: 2 }}>
              Palaces
            </HeaderTypography>
            <Grid container spacing={3}>
              {palaces.map(palace => (
                <Grid item xs={12} sm={6} md={4} key={palace.id}>
                  <StyledCard>
                    {palace.imageUrl && (
                      <CardMedia
                        component="img"
                        height="140"
                        image={palace.imageUrl}
                        alt={palace.name}
                        sx={{ borderRadius: '8px 8px 0 0' }}
                      />
                    )}
                    <CardContent>
                      <HeaderTypography variant="h6">
                        {palace.name}
                      </HeaderTypography>
                      <BodyTypography variant="body2">
                        Address: {palace.address}
                      </BodyTypography>
                      <BodyTypography variant="body2">
                        Contact: {palace.contact}
                      </BodyTypography>
                      <BodyTypography variant="body2">
                        Capacity: {palace.capacity}
                      </BodyTypography>
                    </CardContent>
                    <CardActions>
                      <StyledButton
                        startIcon={<AddShoppingCart />}
                        onClick={() => addToCart(palace, selectedHalwai.id, 'palace', 'Palace')}
                      >
                        Add to Cart
                      </StyledButton>
                    </CardActions>
                  </StyledCard>
                </Grid>
              ))}
            </Grid>
          </>
        )}
        {decorItems.length > 0 && (
          <>
            <HeaderTypography variant="h5" sx={{ mt: 4, mb: 2 }}>
              Decor Items
            </HeaderTypography>
            <Grid container spacing={3}>
              {decorItems.map(item => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <StyledCard>
                    {item.imageUrl && (
                      <CardMedia
                        component="img"
                        height="140"
                        image={item.imageUrl}
                        alt={item.name}
                        sx={{ borderRadius: '8px 8px 0 0' }}
                      />
                    )}
                    <CardContent>
                      <HeaderTypography variant="h6">
                        {item.name}
                      </HeaderTypography>
                      <BodyTypography variant="body2">
                        Description: {item.description}
                      </BodyTypography>
                    </CardContent>
                    <CardActions>
                      <StyledButton
                        startIcon={<AddShoppingCart />}
                        onClick={() => addToCart(item, selectedHalwai.id, 'tent_light_decor', 'Tent & Light Decor')}
                      >
                        Add to Cart
                      </StyledButton>
                    </CardActions>
                  </StyledCard>
                </Grid>
              ))}
            </Grid>
          </>
        )}
        <Cart />
      </StyledContainer>
    </motion.div>
          </StyledBackgroundBox>

  );
};

export default CategoryBrowser;