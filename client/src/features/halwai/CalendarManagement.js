import React, { useState, useEffect, useMemo } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  Container, Typography, Box, Dialog, DialogTitle, DialogContent,
  DialogActions, Button, Select, MenuItem, FormControl, InputLabel,
  IconButton, Collapse, useMediaQuery
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { auth, db } from '../../services/firebaseConfig';
import { getHalwaiOrders } from '../../services/orderService';
import { doc, getDoc } from 'firebase/firestore';
import Navbar from '../shared/Navbar';
import { FilterList } from '@mui/icons-material';
import 'react-big-calendar/lib/css/react-big-calendar.css';

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

const StyledCalendar = styled(Calendar)(({ theme }) => ({
  '& .rbc-calendar': {
    backgroundColor: '#FFF8F0',
    borderRadius: theme.spacing(1.5),
    fontFamily: '"Montserrat", sans-serif',
    padding: theme.spacing(1),
    border: '1px solid #FF8C8C',
  },
  '& .rbc-event': {
    backgroundColor: '#FF8C8C',
    borderRadius: '6px',
    color: '#FFF8F0',
    padding: theme.spacing(0.5, 1),
    marginBottom: '3px',
    fontSize: theme.breakpoints.down('sm') ? '11px' : '13px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 4px 8px rgba(255, 140, 140, 0.2)',
    },
    '&[data-status="pending"]': {
      backgroundColor: '#FFC288',
      color: '#4B4B4B',
    },
    '&[data-status="completed"]': {
      backgroundColor: '#4B4B4B',
      color: '#FFF8F0',
    },
  },
  '& .rbc-month-view': {
    borderColor: '#FF8C8C',
  },
  '& .rbc-header': {
    color: '#4B4B4B',
    fontWeight: 700,
    fontFamily: '"Playfair Display", serif',
    padding: theme.spacing(1.5),
  },
  '& .rbc-day-bg': {
    backgroundColor: '#FFF8F0',
    '&:hover': {
      backgroundColor: '#FCECDD',
    },
  },
  '& .rbc-row-segment': {
    padding: '3px',
  },
  '& .rbc-event-content': {
    whiteSpace: 'normal',
    overflow: 'visible',
  },
  '& .rbc-today': {
    backgroundColor: '#FCECDD',
  },
  [theme.breakpoints.down('sm')]: {
    '& .rbc-toolbar': {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    '& .rbc-toolbar-label': {
      margin: theme.spacing(1, 0),
    },
  },
}));

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    background: '#FFF8F0',
    borderRadius: theme.spacing(1.5),
    padding: theme.spacing(2),
    border: '1px solid #FCECDD',
    boxShadow: '0 4px 12px rgba(75, 75, 75, 0.1)',
    backdropFilter: 'blur(6px)',
    maxWidth: '600px',
    width: '90%',
    maxHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1),
      padding: theme.spacing(2),
      maxWidth: '100%',
      maxHeight: '90vh',
    },
  },
  '& .MuiDialogContent-root': {
    overflowY: 'auto',
    maxHeight: '60vh',
    padding: theme.spacing(2),
    '-webkit-overflow-scrolling': 'touch',
    [theme.breakpoints.down('sm')]: {
      maxHeight: '70vh',
    },
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(2),
    borderTop: '1px solid #FCECDD',
  },
}));

const StyledCard = styled(Box)(({ theme }) => ({
  background: '#FFF8F0',
  borderRadius: theme.spacing(1),
  border: '1px solid #FCECDD',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  boxShadow: '0 2px 8px rgba(75, 75, 75, 0.05)',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5),
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

const FilterBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));

const localizer = momentLocalizer(moment);

const CalendarManagement = () => {
  const [user] = useAuthState(auth);
  const [events, setEvents] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dayOrders, setDayOrders] = useState([]);
  const [multiOrderDialogOpen, setMultiOrderDialogOpen] = useState(false);
  const [orderData, setOrderData] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterOpen, setFilterOpen] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (user) {
      fetchEvents();
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

  const fetchEvents = async () => {
    try {
      setLoading(true);
      setError(null);
      const orderData = await getHalwaiOrders(user.uid);
      setOrderData(orderData);
      const orderEvents = await Promise.all(
        orderData.map(async (order) => {
          const customerName = await fetchCustomerName(order.customerId);
          const functionDate = order.functionDate.toDate
            ? order.functionDate.toDate()
            : order.functionDate.seconds
            ? new Date(order.functionDate.seconds * 1000)
            : new Date(order.functionDate);
          return {
            id: order.orderId,
            title: `${customerName} - ${order.functionName || 'Order'}`,
            start: functionDate,
            end: functionDate,
            type: 'order',
            status: order.status || 'accepted',
            orderDetails: {
              customerName,
              functionDate: functionDate.toISOString(),
              functionName: order.functionName,
              numberOfPersons: order.numberOfPersons,
              mealType: order.mealType,
              status: order.status || 'accepted',
            },
          };
        })
      );
      setEvents(orderEvents);
    } catch (error) {
      console.error('Failed to fetch events:', error);
      setError(error.message);
      alert('Failed to fetch events: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredEvents = useMemo(() => {
    if (filterStatus === 'all') return events;
    return events.filter(event => event.status === filterStatus);
  }, [events, filterStatus]);

  const handleSelectEvent = (event) => {
    setSelectedOrder(event.orderDetails);
    setDialogOpen(true);
  };

  const handleSelectSlot = async (slotInfo) => {
    const selectedDate = slotInfo.start.toDateString();
    const ordersOnDate = orderData.filter(order => {
      const orderDate = new Date(
        order.functionDate.toDate
          ? order.functionDate.toDate()
          : order.functionDate.seconds
          ? new Date(order.functionDate.seconds * 1000)
          : order.functionDate
      ).toDateString();
      return orderDate === selectedDate;
    });
    if (ordersOnDate.length > 0) {
      const detailedOrders = await Promise.all(
        ordersOnDate.map(async (order) => ({
          customerName: await fetchCustomerName(order.customerId),
          functionDate: (order.functionDate.toDate
            ? order.functionDate.toDate()
            : order.functionDate.seconds
            ? new Date(order.functionDate.seconds * 1000)
            : new Date(order.functionDate)).toLocaleDateString('en-US', {
            weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'
          }),
          functionName: order.functionName || 'N/A',
          numberOfPersons: order.numberOfPersons || 'N/A',
          mealType: order.mealType || 'N/A',
          status: order.status || 'accepted',
        }))
      );
      setDayOrders(detailedOrders);
      setMultiOrderDialogOpen(true);
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedOrder(null);
  };

  const handleCloseMultiDialog = () => {
    setMultiOrderDialogOpen(false);
    setDayOrders([]);
  };

  const eventPropGetter = (event) => ({
    'data-status': event.status,
    style: {
      minHeight: isMobile ? '18px' : '22px',
      marginBottom: '3px',
      fontSize: isMobile ? '11px' : '13px',
      boxShadow: '0 2px 4px rgba(75, 75, 75, 0.1)',
    },
    'aria-label': `Order for ${event.orderDetails.customerName} on ${event.orderDetails.functionDate}`,
  });

  const components = {
    event: ({ event }) => (
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {event.title}
      </Box>
    ),
  };

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

  if (error) {
    return (
      <StyledBackgroundBox>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar user={user ? { name: user.displayName || 'Halwai' } : null} role="halwai" />
          <StyledContainer>
            <CenteredBox>
              <StyledCard>
                <HeaderTypography variant="h6" align="center">
                  Something went wrong
                </HeaderTypography>
                <BodyTypography align="center">{error}</BodyTypography>
              </StyledCard>
            </CenteredBox>
          </StyledContainer>
        </motion.div>
      </StyledBackgroundBox>
    );
  }

  return (
    <StyledBackgroundBox>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar user={user ? { name: user.displayName || 'Halwai' } : null} role="halwai" />
        <StyledContainer>
          <CenteredBox>
            <HeaderTypography variant="h4" align="center" sx={{ mb: 4 }}>
              Order Calendar
            </HeaderTypography>
            <FilterBox>
              <IconButton
                onClick={() => setFilterOpen(!filterOpen)}
                sx={{ color: '#FF8C8C', display: { sm: 'none' } }}
                aria-label="Toggle filters"
              >
                <FilterList />
              </IconButton>
              <Collapse in={filterOpen || !isMobile} sx={{ width: '100%' }}>
                <FormControl variant="outlined" size="small" sx={{ minWidth: 120, maxWidth: 300 }}>
                  <InputLabel sx={{ fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' }}>Status</InputLabel>
                  <Select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    label="Status"
                    sx={{
                      fontFamily: '"Montserrat", sans-serif',
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#FCECDD' },
                        '&:hover fieldset': { borderColor: '#FF8C8C' },
                        '&.Mui-focused fieldset': { borderColor: '#FF8C8C' },
                      },
                    }}
                  >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="accepted">Accepted</MenuItem>
                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="completed">Completed</MenuItem>
                  </Select>
                </FormControl>
              </Collapse>
            </FilterBox>
            <Box sx={{ height: { xs: 'calc(100vh - 300px)', sm: 'calc(100vh - 250px)', md: 'calc(100vh - 200px)' }, width: '100%', minHeight: 400 }}>
              <StyledCalendar
                localizer={localizer}
                events={filteredEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: '100%' }}
                views={['month', 'week', 'day']}
                defaultView={isMobile ? 'day' : 'month'}
                onSelectEvent={handleSelectEvent}
                onSelectSlot={handleSelectSlot}
                selectable
                eventPropGetter={eventPropGetter}
                components={components}
                slotPropGetter={() => ({
                  style: {
                    minHeight: isMobile ? '80px' : '120px',
                  },
                })}
                aria-label="Order calendar"
              />
            </Box>
            <StyledDialog
              open={dialogOpen}
              onClose={handleCloseDialog}
              TransitionComponent={motion.div}
              TransitionProps={{
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.3 },
              }}
              aria-labelledby="order-dialog-title"
            >
              <DialogTitle id="order-dialog-title">
                <HeaderTypography variant="h6" align="center">
                  Order Details
                </HeaderTypography>
              </DialogTitle>
              <DialogContent>
                {selectedOrder && (
                  <StyledCard>
                    <BodyTypography sx={{ mb: 1 }}>
                      <strong>Customer:</strong> {selectedOrder.customerName || 'N/A'}
                    </BodyTypography>
                    <BodyTypography sx={{ mb: 1 }}>
                      <strong>Function Date:</strong> {selectedOrder.functionDate ? new Date(selectedOrder.functionDate).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }) : 'N/A'}
                    </BodyTypography>
                    <BodyTypography sx={{ mb: 1 }}>
                      <strong>Function Name:</strong> {selectedOrder.functionName || 'N/A'}
                    </BodyTypography>
                    <BodyTypography sx={{ mb: 1 }}>
                      <strong>Number of Persons:</strong> {selectedOrder.numberOfPersons || 'N/A'}
                    </BodyTypography>
                    <BodyTypography sx={{ mb: 1 }}>
                      <strong>Meal Type:</strong> {selectedOrder.mealType || 'N/A'}
                    </BodyTypography>
                    <BodyTypography sx={{ mb: 1 }}>
                      <strong>Status:</strong> {selectedOrder.status || 'N/A'}
                    </BodyTypography>
                  </StyledCard>
                )}
              </DialogContent>
              <DialogActions>
                <StyledButton onClick={handleCloseDialog} aria-label="Close order dialog">
                  Close
                </StyledButton>
              </DialogActions>
            </StyledDialog>
            <StyledDialog
              open={multiOrderDialogOpen}
              onClose={handleCloseMultiDialog}
              TransitionComponent={motion.div}
              TransitionProps={{
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.3 },
              }}
              aria-labelledby="multi-order-dialog-title"
              scroll="paper"
            >
              <DialogTitle id="multi-order-dialog-title">
                <HeaderTypography variant="h6" align="center">
                  Orders for {dayOrders.length > 0 ? dayOrders[0].functionDate : 'Selected Date'}
                </HeaderTypography>
              </DialogTitle>
              <DialogContent>
                <StyledCard>
                  <HeaderTypography variant="subtitle1" sx={{ mb: 1 }}>
                    Summary
                  </HeaderTypography>
                  <BodyTypography>
                    Total Orders: {dayOrders.length}
                  </BodyTypography>
                  <BodyTypography>
                    Total Guests: {dayOrders.reduce((sum, order) => sum + (parseInt(order.numberOfPersons) || 0), 0)}
                  </BodyTypography>
                </StyledCard>
                {dayOrders.map((order, index) => (
                  <StyledCard key={index} role="region" aria-label={`Order ${index + 1}`}>
                    <BodyTypography sx={{ mb: 1 }}>
                      <strong>Customer:</strong> {order.customerName}
                    </BodyTypography>
                    <BodyTypography sx={{ mb: 1 }}>
                      <strong>Function Name:</strong> {order.functionName}
                    </BodyTypography>
                    <BodyTypography sx={{ mb: 1 }}>
                      <strong>Number of Persons:</strong> {order.numberOfPersons}
                    </BodyTypography>
                    <BodyTypography sx={{ mb: 1 }}>
                      <strong>Meal Type:</strong> {order.mealType}
                    </BodyTypography>
                    <BodyTypography sx={{ mb: 1 }}>
                      <strong>Status:</strong> {order.status}
                    </BodyTypography>
                    <StyledSecondaryButton
                      onClick={() => {
                        setSelectedOrder(order);
                        setDialogOpen(true);
                        setMultiOrderDialogOpen(false);
                      }}
                      size="small"
                      sx={{ mt: 1 }}
                      aria-label={`View order for ${order.customerName}`}
                    >
                      View Order
                    </StyledSecondaryButton>
                  </StyledCard>
                ))}
              </DialogContent>
              <DialogActions>
                <StyledButton onClick={handleCloseMultiDialog} aria-label="Close multi-order dialog">
                  Close
                </StyledButton>
              </DialogActions>
            </StyledDialog>
          </CenteredBox>
        </StyledContainer>
      </motion.div>
    </StyledBackgroundBox>
  );
};

export default CalendarManagement;