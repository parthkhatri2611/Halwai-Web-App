import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import SplashScreen from './pages/SplashScreen';
import RoleSelection from './pages/RoleSelection';
import HalwaiLogin from './features/auth/HalwaiLogin';
import HalwaiRegister from './features/auth/HalwaiRegister';
import CustomerLogin from './features/auth/CustomerLogin';
import CustomerRegister from './features/auth/CustomerRegister';
import HalwaiDashboard from './pages/HalwaiDashboard';
import CustomerDashboard from './pages/CustomerDashboard';
import CategoryManagementRoutes from './features/halwai/CategoryManagement';
import CategoryBrowser from './features/customer/CategoryBrowser';
import CalendarManagement from './features/halwai/CalendarManagement';
import CustomerOrderHistory from './features/customer/CustomerOrderHistory';
import HalwaiOrderManagement from './features/halwai/HalwaiOrderManagement';
import './App.css';

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
  palette: {
    primary: { main: '#FF6F00' }, 
    secondary: { main: '#006064' }, 
    error: { main: '#A8D5BA' }, 
    text: { primary: '#333333', secondary: '#757575' }, 
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/role-selection" element={<RoleSelection />} />
            <Route path="/halwai/login" element={<HalwaiLogin />} />
            <Route path="/halwai/register" element={<HalwaiRegister />} />
            <Route path="/customer/login" element={<CustomerLogin />} />
            <Route path="/customer/register" element={<CustomerRegister />} />
            <Route path="/halwai/dashboard" element={<HalwaiDashboard />} />
            <Route path="/customer/dashboard" element={<CustomerDashboard />} />
            <Route path="/halwai/categories/*" element={<CategoryManagementRoutes />} />
            <Route path="/customer/categories" element={<CategoryBrowser />} />
            <Route path="/halwai/calendar" element={<CalendarManagement />} />
            <Route path="/halwai/orders" element={<HalwaiOrderManagement />} />
            <Route path="/customer/orders" element={<CustomerOrderHistory />} />
            <Route path="/halwai/portfolio" element={<div>Halwai Portfolio (TBD)</div>} />
            <Route path="/halwai/analytics" element={<div>Halwai Analytics (TBD)</div>} />
            <Route path="/halwai/cart" element={<div>Halwai Cart (TBD)</div>} />
            <Route path="/halwai/chat" element={<div>Halwai Chat (TBD)</div>} />
            <Route path="/halwai/profile" element={<div>Halwai Profile (TBD)</div>} />
            <Route path="/customer/cart" element={<div>Customer Cart (TBD)</div>} />
            <Route path="/customer/chat" element={<div>Customer Chat (TBD)</div>} />
            <Route path="/customer/profile" element={<div>Customer Profile (TBD)</div>} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;