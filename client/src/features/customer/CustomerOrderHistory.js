import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { auth } from '../../services/firebaseConfig';
import { getCustomerOrders } from '../../services/orderService';
import Navbar from '../shared/Navbar';

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

const StyledBox = styled(Box)(({ theme }) => ({
  background: '#FFF8F0',
  backdropFilter: 'blur(6px)',
  borderRadius: theme.spacing(1.5),
  boxShadow: '0 4px 12px rgba(75, 75, 75, 0.1)',
  border: '1px solid #FCECDD',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  zIndex: 1,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 6px 16px rgba(255, 140, 140, 0.2)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5),
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

const CustomerOrderHistory = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const orderData = await getCustomerOrders(user.uid);
      console.log('Fetched orders:', orderData);
      setOrders(orderData || []);
    } catch (error) {
      console.error('Failed to fetch orders:', error);
      alert('Failed to fetch orders: ' + error.message);
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >`
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <StyledBackgroundBox>
      <Navbar user={user ? { name: user.displayName || 'Customer' } : null} role="customer" />
      <StyledContainer>
        <CenteredBox>
          <HeaderTypography variant="h4" sx={{ mb: 4 }}>
            Your Orders
          </HeaderTypography>
          {orders.length === 0 ? (
            <BodyTypography>No orders found.</BodyTypography>
          ) : (
            <List sx={{ width: '100%', maxWidth: 800 }}>
              {orders.map(order => (
                <StyledBox key={order.id}>
                  <ListItem>
                    <ListItemText
                      primary={`${order.functionName || 'Unknown Function'} (${order.mealType || 'Unknown Meal'})`}
                      secondary={`Date: ${order.functionDate ? new Date(order.functionDate).toDateString() : 'N/A'} | Persons: ${order.numberOfPersons || 'N/A'} | Status: ${order.status || 'N/A'}`}
                      primaryTypographyProps={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 600, color: '#4B4B4B' }}
                      secondaryTypographyProps={{ fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B', opacity: 0.7 }}
                    />
                  </ListItem>
                  <Divider sx={{ borderColor: '#FCECDD' }} />
                  <BodyTypography variant="h6" sx={{ p: 2 }}>
                    Items:
                  </BodyTypography>
                  {/* <List>
                    {(order.items && Array.isArray(order.items) ? order.items : []).map((item, index) => (
                      <ListItem key={index}>
                        <ListItemText
                          primary={`${item.categoryName || 'Unknown Category'}: ${item.dishName || 'Unknown Dish'} (${item.veg || 'Unknown'})`}
                          secondary={`Ingredients: ${(item.ingredients && Array.isArray(item.ingredients) ? item.ingredients : []).map(ing => `${ing.name || 'Unknown'}: ${ing.quantity || 0} ${ing.unit || ''}`).join(', ') || 'None'}`}
                          primaryTypographyProps={{ fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' }}
                          secondaryTypographyProps={{ fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B', opacity: 0.7 }}
                        />
                      </ListItem>
                    ))}
                  </List> */}
                  <List>
  {(order.items && Array.isArray(order.items) ? order.items : []).map((item, index) => (
    <ListItem key={`${item.itemId}-${item.type}-${index}`}>
      <ListItemText
        primary={`${item.categoryName || 'Unknown Category'}: ${item.name || 'Unknown Item'} (${item.type || 'Unknown'})`}
        secondary={
          <>
            {item.type === 'dish' && (
              <>
                Veg: {item.veg || 'N/A'}
                <br />
                Ingredients:{' '}
                {(item.ingredients && Array.isArray(item.ingredients)
                  ? item.ingredients
                  : []
                ).map(ing => `${ing.name || 'Unknown'}: ${ing.quantity || 0} ${ing.unit || ''}`).join(', ') || 'None'}
              </>
            )}
            {item.type === 'palace' && (
              <>
                Address: {item.address || 'N/A'}
                <br />
                Capacity: {item.capacity || 'N/A'}
              </>
            )}
            {item.type === 'decor' && (
              <>
                Description: {item.description || 'No description available'}
              </>
            )}
            <br />
            Quantity: {item.quantity || 1}
          </>
        }
        primaryTypographyProps={{ fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' }}
        secondaryTypographyProps={{ fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B', opacity: 0.7 }}
      />
    </ListItem>
  ))}
</List>
                </StyledBox>
              ))}
            </List>
          )}
        </CenteredBox>
      </StyledContainer>
      </StyledBackgroundBox>  
    </motion.div>
  );
};

export default CustomerOrderHistory;