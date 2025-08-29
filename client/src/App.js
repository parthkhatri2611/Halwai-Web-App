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

import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

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
            {/* Public Routes */}
            <Route path="/" element={<SplashScreen />} />
            <Route path="/role-selection" element={<RoleSelection />} />
            <Route path="/halwai/login" element={<PublicRoute><HalwaiLogin /></PublicRoute>} />
            <Route path="/halwai/register" element={<PublicRoute><HalwaiRegister /></PublicRoute>} />
            <Route path="/customer/login" element={<PublicRoute><CustomerLogin /></PublicRoute>} />
            <Route path="/customer/register" element={<PublicRoute><CustomerRegister /></PublicRoute>} />

            {/* Protected Routes */}
            <Route path="/halwai/dashboard" element={<ProtectedRoute><HalwaiDashboard /></ProtectedRoute>} />
            <Route path="/customer/dashboard" element={<ProtectedRoute><CustomerDashboard /></ProtectedRoute>} />
            <Route path="/halwai/categories/*" element={<ProtectedRoute><CategoryManagementRoutes /></ProtectedRoute>} />
            <Route path="/customer/categories" element={<ProtectedRoute><CategoryBrowser /></ProtectedRoute>} />
            <Route path="/halwai/calendar" element={<ProtectedRoute><CalendarManagement /></ProtectedRoute>} />
            <Route path="/halwai/orders" element={<ProtectedRoute><HalwaiOrderManagement /></ProtectedRoute>} />
            <Route path="/customer/orders" element={<ProtectedRoute><CustomerOrderHistory /></ProtectedRoute>} />

            {/* Optional protected placeholders */}
            <Route path="/halwai/portfolio" element={<ProtectedRoute><div>Halwai Portfolio (TBD)</div></ProtectedRoute>} />
            <Route path="/halwai/analytics" element={<ProtectedRoute><div>Halwai Analytics (TBD)</div></ProtectedRoute>} />
            <Route path="/halwai/cart" element={<ProtectedRoute><div>Halwai Cart (TBD)</div></ProtectedRoute>} />
            <Route path="/halwai/chat" element={<ProtectedRoute><div>Halwai Chat (TBD)</div></ProtectedRoute>} />
            <Route path="/halwai/profile" element={<ProtectedRoute><div>Halwai Profile (TBD)</div></ProtectedRoute>} />
            <Route path="/customer/cart" element={<ProtectedRoute><div>Customer Cart (TBD)</div></ProtectedRoute>} />
            <Route path="/customer/chat" element={<ProtectedRoute><div>Customer Chat (TBD)</div></ProtectedRoute>} />
            <Route path="/customer/profile" element={<ProtectedRoute><div>Customer Profile (TBD)</div></ProtectedRoute>} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
