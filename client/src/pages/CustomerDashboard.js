import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  Grid,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { auth } from '../services/firebaseConfig';
import Navbar from '../features/shared/Navbar';

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
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  minHeight: 'calc(100vh - 80px)', 
  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(4),
    minHeight: 'calc(100vh - 64px)',
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  background: '#FFF8F0',
  backdropFilter: 'blur(6px)', 
  borderRadius: theme.spacing(1.5),
  boxShadow: '0 4px 12px rgba(75, 75, 75, 0.1)',
  border: '1px solid #FCECDD', 
  padding: theme.spacing(4),
  maxWidth: 600,
  width: '100%',
  zIndex: 1,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 16px rgba(255, 140, 140, 0.2)', 
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    maxWidth: '90%',
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

const CustomerDashboard = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  return (
    <div>
      <Navbar user={user ? { name: user.displayName || 'Customer' } : null} role="customer" />
      <StyledBackgroundBox>
        <StyledContainer>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <StyledCard>
              <CardContent>
                <HeaderTypography variant="h4" align="center" sx={{ mb: 4 }}>
                  Customer Dashboard
                </HeaderTypography>
                <BodyTypography variant="h6" sx={{ mb: 3 }}>
                  Explore Your Options
                </BodyTypography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <StyledButton
                      fullWidth
                      onClick={() => navigate('/customer/categories')}
                    >
                      Browse Categories
                    </StyledButton>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <StyledButton
                      fullWidth
                      onClick={() => navigate('/customer/orders')}
                    >
                      View Orders
                    </StyledButton>
                  </Grid>
                </Grid>
              </CardContent>
            </StyledCard>
          </motion.div>
        </StyledContainer>
      </StyledBackgroundBox>
    </div>
  );
};

export default CustomerDashboard;