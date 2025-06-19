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
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Chip,
  Grid,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { auth , db} from '../../services/firebaseConfig';
import { getHalwaiOrders, acceptOrder, rejectOrder } from '../../services/orderService';
import { generatePDF } from '../../services/pdfService';
import { doc, getDoc } from 'firebase/firestore';
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

const StyledCard = styled(Card)(({ theme }) => ({
  background: '#FFF8F0',
  backdropFilter: 'blur(6px)',
  borderRadius: theme.spacing(1.5),
  boxShadow: '0 4px 12px rgba(75, 75, 75, 0.1)',
  border: '1px solid #FF8C8C',
  marginBottom: theme.spacing(2),
  transition: 'all 0.3s ease',
  overflow: 'hidden',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 16px rgba(255, 140, 140, 0.2)',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

const StyledImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderTopLeftRadius: theme.spacing(1.5),
  borderTopRightRadius: theme.spacing(1.5),
  margin: 0,
  padding: 0,
  display: 'block',
  [theme.breakpoints.down('sm')]: {
    height: '150px',
  },
}));

const StyledChip = styled(Chip)(({ theme, status }) => ({
  backgroundColor: 
    status === 'pending' ? '#FF8C8C' :
    status === 'accepted' ? '#FFC288' :
    '#4B4B4B',
  color: '#FFF8F0',
  fontFamily: '"Montserrat", sans-serif',
  fontWeight: 600,
  fontSize: '0.8rem',
  height: '24px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem',
    height: '22px',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FF8C8C',
  color: '#FFF8F0',
  fontFamily: '"Montserrat", sans-serif',
  fontWeight: 600,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1, 2),
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
    padding: theme.spacing(0.8, 1.5),
    fontSize: '0.9rem',
  },
}));

const StyledSecondaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FFC288',
  color: '#FFF8F0',
  fontFamily: '"Montserrat", sans-serif',
  fontWeight: 600,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1, 2),
  textTransform: 'none',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: '#FCECDD',
    color: '#FFC288',
    boxShadow: '0 0 8px rgba(255, 194, 136, 0.3)',
    transform: 'scale(1.05)',
  },
  '&:active': {
    transform: 'scale(0.95)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0.8, 1.5),
    fontSize: '0.9rem',
  },
}));

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    background: '#FFF8F0',
    borderRadius: theme.spacing(1.5),
    padding: theme.spacing(2),
    border: '1px solid #FCECDD',
    boxShadow: '0 4px 12px rgba(75, 75, 75, 0.1)',
    width: '100%',
    maxWidth: '100%',
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2),
      maxWidth: 'calc(100%)',
    },
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

const CardTypography = styled(Typography)(({ theme }) => ({
  fontFamily: '"Montserrat", sans-serif',
  fontWeight: 600,
  color: '#4B4B4B',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
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

const LoadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 'calc(100vh - 80px)',
  [theme.breakpoints.down('sm')]: {
    minHeight: 'calc(100vh - 64px)',
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

const HalwaiOrderManagement = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const [statusFilter, setStatusFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  const fetchCustomerName = async (customerId) => {
    try {
      const customerDoc = await getDoc(doc(db, `customers/${customerId}`));
      if (customerDoc.exists()) {
        const customerData = customerDoc.data();
        return customerData.name || customerData.displayName || `Customer ${customerId}`;
      }
      return `Customer ${customerId}`;
    } catch (error) {
      console.error('Failed to fetch customer name:', error);
      return `Customer ${customerId}`;
    }
  };

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const orderData = await getHalwaiOrders(user.uid);
      const ordersWithCustomerNames = await Promise.all(
        orderData.map(async (order) => {
          const customerName = await fetchCustomerName(order.customerId);
          return { ...order, customerName };
        })
      );
      const sortedOrders = ordersWithCustomerNames.sort((a, b) => {
        const dateA = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(a.createdAt || 0);
        const dateB = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(b.createdAt || 0);
        return dateB - dateA;
      });
      setOrders(sortedOrders || []);
    } catch (error) {
      console.error('Failed to fetch orders:', error);
      alert('Failed to fetch orders: ' + error.message);
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  const handleAccept = async (order) => {
    try {
      await acceptOrder(user.uid, order.orderId, order.customerId, order.functionName, order.functionDate);
      alert('Order accepted successfully!');
      fetchOrders();
    } catch (error) {
      console.error('Failed to accept order:', error);
      alert('Failed to accept order: ' + error.message);
    }
  };

  const handleReject = async (order) => {
    try {
      await rejectOrder(user.uid, order.orderId, order.customerId, order.functionName, order.functionDate);
      alert('Order rejected successfully!');
      fetchOrders();
    } catch (error) {
      console.error('Failed to reject order:', error);
      alert('Failed to reject order: ' + error.message);
    }
  };

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedOrder(null);
  };

  const handleDownloadPDF = async (order, withIngredients) => {
    try {
      await generatePDF(order, withIngredients);
      alert('PDF downloaded successfully!');
    } catch (error) {
      console.error('Failed to download PDF:', error);
      alert(`Failed to download PDF: ${error.response?.data?.error || error.message}`);
    }
  };

  const filteredOrders = statusFilter === 'all' ? orders : orders.filter(order => order.status === statusFilter);

  if (loading) {
    return (
      <StyledBackgroundBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Navbar user={user ? { name: user.displayName || 'Halwai' } : null} role="halwai" />
          <StyledContainer>
            <LoadingContainer>
              <JalebiSpinner viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="jalebiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#FF8C8C', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#FFC288', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path d="M50 10 C30 10 10 30 10 50 C10 70 30 90 50 90 C70 90 90 70 90 50 C90 30 70 10 50 10 M50 20 C35 20 20 35 20 50 C20 65 35 80 50 80 C65 80 80 65 80 50 C80 35 65 20 50 20" />
              </JalebiSpinner>
            </LoadingContainer>
          </StyledContainer>
        </motion.div>
      </StyledBackgroundBox>
    );
  }

  return (
    <StyledBackgroundBox>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Navbar user={user ? { name: user.displayName || 'Halwai' } : null} role="halwai" />
        <StyledContainer>
          <CenteredBox>
            <HeaderTypography variant="h4" align="center" sx={{ mb: 4 }}>
              Manage Orders
            </HeaderTypography>
            <FormControl sx={{ width: { xs: '100%', sm: '300px' }, mb: 3 }}>
              <InputLabel sx={{ fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' }}>
                Filter by Status
              </InputLabel>
              <Select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                sx={{
                  fontFamily: '"Montserrat", sans-serif',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#FCECDD' },
                    '&:hover fieldset': { borderColor: '#FF8C8C' },
                    '&.Mui-focused fieldset': { borderColor: '#FF8C00' },
                  },
                }}
              >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="accepted">Accepted</MenuItem>
                <MenuItem value="rejected">Rejected</MenuItem>
              </Select>
            </FormControl>
            {filteredOrders.length === 0 ? (
              <BodyTypography variant="body1" align="center">
                No orders found.
              </BodyTypography>
            ) : (
              <Grid container spacing={3}>
                {filteredOrders.map((order) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={order.id || order.orderId}>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <StyledCard>
                        {order.imageUrl && <StyledImage src={order.imageUrl} alt={order.functionName || 'Order'} />}
                        <CardHeader
                          title={
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <CardTypography variant="h6">
                                {order.functionName || 'Unknown Function'}
                              </CardTypography>
                              <StyledChip
                                label={order.status || 'N/A'}
                                status={order.status}
                              />
                            </Box>
                          }
                          subheader={
                            <BodyTypography variant="body2">
                              Customer: {order.customerName || order.customerId || 'N/A'} <br />
                              Date: {order.functionDate ? new Date(order.functionDate.toDate ? order.functionDate.toDate() : order.functionDate).toDateString() : 'N/A'} <br />
                              Persons: {order.numberOfPersons || 'N/A'}
                            </BodyTypography>
                          }
                          sx={{ paddingBottom: order.imageUrl ? 0 : undefined }}
                        />
                        <Divider sx={{ borderColor: '#FCECDD' }} />
                        <CardContent sx={{ pt: order.imageUrl ? 0 : undefined }}>
                          <CardTypography variant="h6" sx={{ mb: 1 }}>
                            Items
                          </CardTypography>
                          <List dense>
                            {(order.items && Array.isArray(order.items) ? order.items : []).map((item, index) => (
                              <ListItem key={index} sx={{ py: 0.5 }}>
                                <ListItemText
                                  primary={
                                    <CardTypography variant="body1">
                                      {item.categoryName || 'Unknown Category'}: {item.dishName || 'Unknown Dish'} ({item.veg || 'N/A'})
                                    </CardTypography>
                                  }
                                  secondary={
                                    <BodyTypography variant="body2">
                                      Ingredients: {(item.ingredients && Array.isArray(item.ingredients) ? item.ingredients : []).map(ing => `${ing.name || 'Unknown'}: ${ing.quantity || 0} ${ing.unit || ''}`).join(', ') || 'None'}
                                    </BodyTypography>
                                  }
                                />
                              </ListItem>
                            ))}
                          </List>
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'center', flexWrap: 'wrap', gap: 1, p: 2 }}>
                          {order.status === 'pending' && (
                            <>
                              <StyledButton
                                size="small"
                                onClick={() => handleAccept(order)}
                              >
                                Accept
                              </StyledButton>
                              <StyledSecondaryButton
                                size="small"
                                onClick={() => handleReject(order)}
                              >
                                Reject
                              </StyledSecondaryButton>
                            </>
                          )}
                          <StyledSecondaryButton
                            size="small"
                            onClick={() => handleViewOrder(order)}
                          >
                            View Order
                          </StyledSecondaryButton>
                          {order.status === 'accepted' && (
                            <>
                              <StyledButton
                                size="small"
                                onClick={() => handleDownloadPDF(order, true)}
                              >
                                PDF with Ingredients
                              </StyledButton>
                              <StyledSecondaryButton
                                size="small"
                                onClick={() => handleDownloadPDF(order, false)}
                              >
                                PDF without Ingredients
                              </StyledSecondaryButton>
                            </>
                          )}
                        </CardActions>
                      </StyledCard>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            )}
            <StyledDialog open={dialogOpen} onClose={handleCloseDialog}>
              <DialogTitle>
                <HeaderTypography variant="h6">
                  Order Details
                </HeaderTypography>
              </DialogTitle>
              <DialogContent>
                {selectedOrder && (
                  <>
                    <DialogContentText sx={{ fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B', mb: 1 }}>
                      <strong>Customer:</strong> {selectedOrder.customerName || selectedOrder.customerId || 'N/A'}
                    </DialogContentText>
                    <DialogContentText sx={{ fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B', mb: 1 }}>
                      <strong>Function Date:</strong> {selectedOrder.functionDate ? new Date(selectedOrder.functionDate.toDate ? selectedOrder.functionDate.toDate() : selectedOrder.functionDate).toDateString() : 'N/A'}
                    </DialogContentText>
                    <DialogContentText sx={{ fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B', mb: 1 }}>
                      <strong>Function Name:</strong> {selectedOrder.functionName || 'N/A'}
                    </DialogContentText>
                    <DialogContentText sx={{ fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B', mb: 1 }}>
                      <strong>Number of Persons:</strong> {selectedOrder.numberOfPersons || 'N/A'}
                    </DialogContentText>
                    <DialogContentText sx={{ fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B', mb: 2 }}>
                      <strong>Meal Type:</strong> {selectedOrder.mealType || 'N/A'}
                    </DialogContentText>
                    <CardTypography variant="h6" sx={{ mb: 1 }}>
                      Items
                    </CardTypography>
                    <List dense>
                      {(selectedOrder.items && Array.isArray(selectedOrder.items) ? selectedOrder.items : []).map((item, index) => (
                        <ListItem key={index} sx={{ py: 0.5 }}>
                          <ListItemText
                            primary={
                              <CardTypography variant="body1">
                                {item.categoryName || 'Unknown Category'}: {item.dishName || 'Unknown Dish'} ({item.veg || 'N/A'})
                              </CardTypography>
                            }
                            secondary={
                              <BodyTypography variant="body2">
                                Ingredients: {(item.ingredients && Array.isArray(item.ingredients) ? item.ingredients : []).map(ing => `${ing.name || 'Unknown'}: ${ing.quantity || 0} ${ing.unit || ''}`).join(', ') || 'N/A'}
                              </BodyTypography>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  </>
                )}
              </DialogContent>
              <DialogActions>
                <StyledSecondaryButton onClick={handleCloseDialog}>
                  Close
                </StyledSecondaryButton>
              </DialogActions>
            </StyledDialog>
          </CenteredBox>
        </StyledContainer>
      </motion.div>
    </StyledBackgroundBox>
  );
};

export default HalwaiOrderManagement;