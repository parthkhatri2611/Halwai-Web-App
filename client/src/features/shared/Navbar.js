import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LogoutIcon from '@mui/icons-material/Logout';
import { auth } from '../../services/firebaseConfig';
import { signOut } from 'firebase/auth';
import NotificationBar from './NotificationBar';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1200,
  background: 'linear-gradient(135deg, #FCECDD 0%, #FFF8F0 100%)',
  backdropFilter: 'blur(10px)',
  backgroundColor: 'rgba(252, 236, 221, 0.9)',
  boxShadow: '0 8px 24px rgba(75, 75, 75, 0.1)',
  borderBottom: '2px solid #FF8C8C',
  padding: theme.spacing(1, 3),
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'url("data:image/svg+xml,%3Csvg opacity=\"0.03\" width=\"100\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M50 20c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30zm0 50c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z\" fill=\"%23FF8C8C\"/%3E%3C/svg%3E") repeat',
    zIndex: 0,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #FFC288, transparent)',
    animation: 'glow 3s infinite ease-in-out',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0.5, 2),
  },
  '@keyframes glow': {
    '0%': { transform: 'translateX(-100%)' },
    '50%': { transform: 'translateX(100%)' },
    '100%': { transform: 'translateX(-100%)' },
  },
}));

const StyledNavButton = styled(Button)(({ theme }) => ({
  color: '#4B4B4B',
  backgroundColor: '#FFF8F0',
  fontFamily: '"Montserrat", sans-serif',
  fontWeight: 600,
  fontSize: '0.9rem',
  margin: theme.spacing(0, 0.5),
  padding: theme.spacing(0.8, 1.5),
  borderRadius: '8px',
  textTransform: 'none',
  transition: 'all 0.2s ease',
  border: '1px solid transparent',
  '&:hover': {
    backgroundColor: '#FCECDD',
    borderColor: '#FF8C8C',
    boxShadow: '0 0 8px rgba(255, 194, 136, 0.3)',
    transform: 'scale(1.05)',
  },
  '&:active': {
    transform: 'scale(0.95)',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '0.85rem',
    padding: theme.spacing(0.6, 1.2),
    margin: theme.spacing(0, 0.3),
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
    padding: theme.spacing(0.5, 1),
  },
}));

const StyledLogoutButton = styled(Button)(({ theme }) => ({
  color: '#FFF8F0',
  backgroundColor: '#FF8C8C',
  fontFamily: '"Montserrat", sans-serif',
  fontWeight: 600,
  fontSize: '0.9rem',
  margin: theme.spacing(0, 0.5),
  padding: theme.spacing(0.8, 1.5),
  borderRadius: '8px',
  textTransform: 'none',
  transition: 'all 0.2s ease',
  border: '1px solid transparent',
  '&:hover': {
    backgroundColor: '#FCECDD',
    color: '#FF8C8C',
    borderColor: '#FF8C8C',
    boxShadow: '0 0 8px rgba(255, 194, 136, 0.3)',
    transform: 'scale(1.05)',
  },
  '&:active': {
    transform: 'scale(0.95)',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '0.85rem',
    padding: theme.spacing(0.6, 1.2),
    margin: theme.spacing(0, 0.3),
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
    padding: theme.spacing(0.5, 1),
  },
}));

const StyledDrawer = styled(Drawer)(({ theme, anchor }) => ({
  '& .MuiDrawer-paper': {
    background: 'linear-gradient(180deg, #FCECDD 0%, #FFF8F0 100%)',
    color: '#4B4B4B',
    width: '250px',
    padding: theme.spacing(3),
    ...(anchor === 'right'
      ? {
          borderRight: '3px solid #FF8C8C',
          borderTopRightRadius: '20px',
          borderBottomRightRadius: '20px',
          boxShadow: '6px 0 20px rgba(75, 75, 75, 0.15)',
        }
      : {
          borderLeft: '3px solid #FF8C8C',
          borderTopLeftRadius: '20px',
          borderBottomLeftRadius: '20px',
          boxShadow: '-6px 0 20px rgba(75, 75, 75, 0.15)',
        }),
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'url("data:image/svg+xml,%3Csvg opacity=\\"0.03\\" width=\\"100\\" height=\\"100\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cpath d=\\"M50 20c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30zm0 50c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z\\" fill=\\"%23FFC288\\"/%3E%3C/svg%3E") repeat',
      zIndex: 0,
    },
    [theme.breakpoints.down('sm')]: {
      width: '220px',
      padding: theme.spacing(2),
    },
  },
}));


const StyledListItem = styled(ListItem)(({ theme }) => ({
  borderRadius: '12px',
  margin: theme.spacing(0.5, 0),
  padding: theme.spacing(1.5, 2.5),
  transition: 'all 0.3s ease',
  position: 'relative',
  zIndex: 1,
  '&:hover': {
    background: 'rgba(255, 248, 240, 0.3)',
    color: '#FF8C8C',
    transform: 'translateX(8px)',
    boxShadow: '0 0 10px rgba(255, 140, 140, 0.3)',
  },
  '&:active': {
    background: 'rgba(255, 140, 140, 0.2)',
    transform: 'scale(0.98)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1, 2),
  },
}));

const LogoTypography = styled(Typography)(({ theme }) => ({
  fontFamily: '"Playfair Display", serif',
  fontWeight: 700,
  fontSize: '2rem',
  color: '#4B4B4B',
  textShadow: '1px 1px 3px rgba(255, 140, 140, 0.2)',
  cursor: 'pointer',
  position: 'relative',
  zIndex: 1,
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-4px',
    left: '50%',
    width: '0',
    height: '2px',
    background: '#FF8C8C',
    transition: 'width 0.3s ease, left 0.3s ease',
  },
  '&:hover::after': {
    width: '100%',
    left: '0',
  },
  '&:hover': {
    color: '#FF8C8C',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

const WelcomeTypography = styled(Typography)(({ theme }) => ({
  color: '#4B4B4B',
  fontFamily: '"Montserrat", sans-serif',
  fontSize: '0.9rem',
  fontWeight: 500,
  backgroundColor: '#FCECDD',
  padding: theme.spacing(0.5, 1.5),
  borderRadius: '6px',
  transition: 'all 0.2s ease',
  '&:hover': {
    color: '#FF8C8C',
    boxShadow: '0 0 6px rgba(255, 140, 140, 0.2)',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(1),
  color: '#FF8C8C',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'rotate(15deg)',
  },
  animation: 'bounce 2s infinite',
  '@keyframes bounce': {
    '0%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-3px)' },
    '100%': { transform: 'translateY(0)' },
  },
}));

const Navbar = ({ user, role }) => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleNavigate = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box sx={{ p: 2, position: 'relative', zIndex: 1 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <LogoTypography variant="h6" onClick={() => handleNavigate('/')}>
          HalwaiConnect
        </LogoTypography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: '#FF8C8C', zIndex: 1 }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider sx={{ background: 'linear-gradient(to right, transparent, #FFC288, transparent)', height: '2px', mb: 2, animation: 'sparkle 2s infinite', '@keyframes sparkle': { '0%': { opacity: 0.6 }, '50%': { opacity: 1 }, '100%': { opacity: 0.6 } } }} />
      <List>
        {user && (
          <>
            <StyledListItem button onClick={() => handleNavigate(`/${role}/dashboard`)}>
              <IconWrapper><DashboardIcon /></IconWrapper>
              <ListItemText primary="Dashboard" primaryTypographyProps={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 600 }} />
            </StyledListItem>
            {role === 'customer' && (
              <StyledListItem button onClick={() => handleNavigate('/customer/orders')}>
                <IconWrapper><ListAltIcon /></IconWrapper>
                <ListItemText primary="Orders" primaryTypographyProps={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 600 }} />
              </StyledListItem>
            )}
            {role === 'halwai' && (
              <>
                <StyledListItem button onClick={() => handleNavigate('/halwai/orders')}>
                  <IconWrapper><ListAltIcon /></IconWrapper>
                  <ListItemText primary="Orders" primaryTypographyProps={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 600 }} />
                </StyledListItem>
                <StyledListItem button onClick={() => handleNavigate('/halwai/calendar')}>
                  <IconWrapper><CalendarTodayIcon /></IconWrapper>
                  <ListItemText primary="Calendar" primaryTypographyProps={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 600 }} />
                </StyledListItem>
              </>
            )}
            <Divider sx={{ background: 'linear-gradient(to right, transparent, #FFC288, transparent)', height: '2px', my: 1, animation: 'sparkle 2s infinite' }} />
            <StyledListItem button onClick={handleLogout}>
              <IconWrapper><LogoutIcon /></IconWrapper>
              <ListItemText primary="Logout" primaryTypographyProps={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 600 }} />
            </StyledListItem>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <StyledAppBar position="fixed">
        <Toolbar>
          <LogoTypography onClick={() => navigate('/')}>
            HalwaiConnect
          </LogoTypography>
          {user && (
            <>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
                {role === 'customer' && <NotificationBar />}
                {role === 'customer' && (
                  <>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <StyledNavButton onClick={() => handleNavigate('/customer/dashboard')}>
                        <IconWrapper><DashboardIcon sx={{ fontSize: '1rem' }} /></IconWrapper>
                        Dashboard
                      </StyledNavButton>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <StyledNavButton onClick={() => handleNavigate('/customer/orders')}>
                        <IconWrapper><ListAltIcon sx={{ fontSize: '1rem' }} /></IconWrapper>
                        Orders
                      </StyledNavButton>
                    </motion.div>
                  </>
                )}
                {role === 'halwai' && (
                  <>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <StyledNavButton onClick={() => handleNavigate('/halwai/dashboard')}>
                        <IconWrapper><DashboardIcon sx={{ fontSize: '1rem' }} /></IconWrapper>
                        Dashboard
                      </StyledNavButton>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <StyledNavButton onClick={() => handleNavigate('/halwai/orders')}>
                        <IconWrapper><ListAltIcon sx={{ fontSize: '1rem' }} /></IconWrapper>
                        Orders
                      </StyledNavButton>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <StyledNavButton onClick={() => handleNavigate('/halwai/calendar')}>
                        <IconWrapper><CalendarTodayIcon sx={{ fontSize: '1rem' }} /></IconWrapper>
                        Calendar
                      </StyledNavButton>
                    </motion.div>
                  </>
                )}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <StyledLogoutButton onClick={handleLogout}>
                    <IconWrapper><LogoutIcon sx={{ fontSize: '1rem' }} /></IconWrapper>
                    Logout
                  </StyledLogoutButton>
                </motion.div>
                <WelcomeTypography>
                  Welcome, {user.name}
                </WelcomeTypography>
              </Box>
              <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
                {role === 'customer' && <NotificationBar />}
                <IconButton
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{
                    ml: 1,
                    color: '#ffffff',
                    bgcolor: 'rgba(255, 140, 140, 0.1)',
                    '&:hover': { bgcolor: 'rgba(255, 140, 140, 0.2)' },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </>
          )}
        </Toolbar>
      </StyledAppBar>
      <StyledDrawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        anchorProp="right" 
        ModalProps={{ keepMounted: true }}
      >
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: mobileOpen ? '0' : '100%' }}
          transition={{ duration: 0.5 }}
        >
          {drawerContent}
        </motion.div>
      </StyledDrawer>
    </motion.div>
  );
};

export default Navbar;