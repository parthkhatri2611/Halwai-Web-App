import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Grid,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import CategoryIcon from '@mui/icons-material/Category';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
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
  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(4),
  },
}));

const CenteredBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 'calc(100vh - 80px)', 
  [theme.breakpoints.down('sm')]: {
    minHeight: 'calc(100vh - 64px)',
    padding: theme.spacing(0, 2),
  },
}));

const StyledMainCard = styled(Card)(({ theme }) => ({
  background: '#FFF8F0', 
  backdropFilter: 'blur(16px)', 
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 24px rgba(75, 75, 75, 0.1)', 
  border: '1px solid #FCECDD', 
  padding: theme.spacing(4),
  position: 'relative',
  zIndex: 1,
  width: '100%',
  maxWidth: '900px', 
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: '0 6px 16px rgba(255, 140, 140, 0.2)', 
    borderColor: '#FF8C8C', 
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    maxWidth: '90%', 
  },
}));

const StyledCardAction = styled(Card)(({ theme }) => ({
  background: '#FFF8F0', 
  borderRadius: theme.spacing(1.5),
  border: '1px solid #FF8C8C', 
  padding: theme.spacing(2.5),
  color: '#4B4B4B', 
  position: 'relative',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: '#FCECDD', 
    transform: 'scale(1.05)',
    boxShadow: '0 4px 10px rgba(255, 194, 136, 0.3)', 
  },
  '&:active': {
    transform: 'scale(0.95)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  fontSize: '2rem',
  color: '#FF8C8C', 
  marginBottom: theme.spacing(1.5),
  animation: 'bounce 2s infinite',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.8rem',
  },
  '@keyframes bounce': {
    '0%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-3px)' },
    '100%': { transform: 'translateY(0)' },
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

const DescriptionTypography = styled(Typography)(({ theme }) => ({
  fontFamily: '"Montserrat", sans-serif',
  fontWeight: 400,
  fontSize: '0.85rem',
  color: '#4B4B4B', 
  opacity: 0.7,
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
  },
}));

const HalwaiDashboard = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const cardVariants = {
    hidden: { opacity: 0, rotateX: -90 },
    visible: (i) => ({
      opacity: 1,
      rotateX: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
          <StyledBackgroundBox>
      <Navbar user={user ? { name: user.displayName || 'Halwai' } : null} role="halwai" />
      <StyledContainer>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <HeaderTypography variant="h4" align="center" sx={{ mb: 2 }}>
            Halwai Dashboard
          </HeaderTypography>
          <Divider
            sx={{
              background: 'linear-gradient(to right, transparent, #FFC288, transparent)', 
              height: '2px',
              width: '80px',
              mx: 'auto',
              mb: -10,
              animation: 'sparkle 2s infinite',
              '@keyframes sparkle': {
                '0%': { opacity: 0.6 },
                '50%': { opacity: 1 },
                '100%': { opacity: 0.6 },
              },
            }}
          />
          <CenteredBox>
            <StyledMainCard>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={4}>
                    <motion.div
                      custom={0}
                      initial="hidden"
                      animate="visible"
                      variants={cardVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <StyledCardAction onClick={() => navigate('/halwai/categories')}>
                        <IconWrapper>
                          <CategoryIcon sx={{ fontSize: 'inherit' }} />
                        </IconWrapper>
                        <CardTypography variant="h6">
                          Manage Categories
                        </CardTypography>
                        <DescriptionTypography>
                          Organize your dishes and menus
                        </DescriptionTypography>
                      </StyledCardAction>
                    </motion.div>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <motion.div
                      custom={1}
                      initial="hidden"
                      animate="visible"
                      variants={cardVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <StyledCardAction onClick={() => navigate('/halwai/orders')}>
                        <IconWrapper>
                          <ListAltIcon sx={{ fontSize: 'inherit' }} />
                        </IconWrapper>
                        <CardTypography variant="h6">
                          View Orders
                        </CardTypography>
                        <DescriptionTypography>
                          Track and manage customer orders
                        </DescriptionTypography>
                      </StyledCardAction>
                    </motion.div>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <motion.div
                      custom={2}
                      initial="hidden"
                      animate="visible"
                      variants={cardVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <StyledCardAction onClick={() => navigate('/halwai/calendar')}>
                        <IconWrapper>
                          <CalendarTodayIcon sx={{ fontSize: 'inherit' }} />
                        </IconWrapper>
                        <CardTypography variant="h6">
                          Order Calendar
                        </CardTypography>
                        <DescriptionTypography>
                          Schedule and plan your events
                        </DescriptionTypography>
                      </StyledCardAction>
                    </motion.div>
                  </Grid>
                </Grid>
              </CardContent>
            </StyledMainCard>
          </CenteredBox>
        </motion.div>

      </StyledContainer>
                </StyledBackgroundBox>

  );
};

export default HalwaiDashboard;