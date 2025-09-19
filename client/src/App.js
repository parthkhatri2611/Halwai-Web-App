// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
// import SplashScreen from './pages/SplashScreen';
// import RoleSelection from './pages/RoleSelection';
// import HalwaiLogin from './features/auth/HalwaiLogin';
// import HalwaiRegister from './features/auth/HalwaiRegister';
// import CustomerLogin from './features/auth/CustomerLogin';
// import CustomerRegister from './features/auth/CustomerRegister';
// import HalwaiDashboard from './pages/HalwaiDashboard';
// import CustomerDashboard from './pages/CustomerDashboard';
// import CategoryManagementRoutes from './features/halwai/CategoryManagement';
// import CategoryBrowser from './features/customer/CategoryBrowser';
// import CalendarManagement from './features/halwai/CalendarManagement';
// import CustomerOrderHistory from './features/customer/CustomerOrderHistory';
// import HalwaiOrderManagement from './features/halwai/HalwaiOrderManagement';
// import './App.css';

// import ProtectedRoute from "./components/ProtectedRoute";
// import PublicRoute from "./components/PublicRoute";

// const theme = createTheme({
//   typography: {
//     fontFamily: '"Poppins", sans-serif',
//   },
//   palette: {
//     primary: { main: '#FF6F00' }, 
//     secondary: { main: '#006064' }, 
//     error: { main: '#A8D5BA' }, 
//     text: { primary: '#333333', secondary: '#757575' }, 
//   },
// });

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Router>
//         <div className="App">
//           <Routes>
//             {/* Public Routes */}
//             <Route path="/" element={<SplashScreen />} />
//             <Route path="/role-selection" element={<RoleSelection />} />
//             <Route path="/halwai/login" element={<PublicRoute><HalwaiLogin /></PublicRoute>} />
//             <Route path="/halwai/register" element={<PublicRoute><HalwaiRegister /></PublicRoute>} />
//             <Route path="/customer/login" element={<PublicRoute><CustomerLogin /></PublicRoute>} />
//             <Route path="/customer/register" element={<PublicRoute><CustomerRegister /></PublicRoute>} />

//             {/* Protected Routes */}
//             <Route path="/halwai/dashboard" element={<ProtectedRoute><HalwaiDashboard /></ProtectedRoute>} />
//             <Route path="/customer/dashboard" element={<ProtectedRoute><CustomerDashboard /></ProtectedRoute>} />
//             <Route path="/halwai/categories/*" element={<ProtectedRoute><CategoryManagementRoutes /></ProtectedRoute>} />
//             <Route path="/customer/categories" element={<ProtectedRoute><CategoryBrowser /></ProtectedRoute>} />
//             <Route path="/halwai/calendar" element={<ProtectedRoute><CalendarManagement /></ProtectedRoute>} />
//             <Route path="/halwai/orders" element={<ProtectedRoute><HalwaiOrderManagement /></ProtectedRoute>} />
//             <Route path="/customer/orders" element={<ProtectedRoute><CustomerOrderHistory /></ProtectedRoute>} />

//           </Routes>
//         </div>
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App;



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
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';

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
            <Route path="/role-selection" element={<PublicRoute><RoleSelection /></PublicRoute>} />
            <Route path="/halwai/login" element={<PublicRoute><HalwaiLogin /></PublicRoute>} />
            <Route path="/halwai/register" element={<PublicRoute><HalwaiRegister /></PublicRoute>} />
            <Route path="/customer/login" element={<PublicRoute><CustomerLogin /></PublicRoute>} />
            <Route path="/customer/register" element={<PublicRoute><CustomerRegister /></PublicRoute>} />

            {/* Protected Routes */}
            <Route
              path="/halwai/dashboard"
              element={<ProtectedRoute allowedRole="halwai"><HalwaiDashboard /></ProtectedRoute>}
            />
            <Route
              path="/customer/dashboard"
              element={<ProtectedRoute allowedRole="customer"><CustomerDashboard /></ProtectedRoute>}
            />
            <Route
              path="/halwai/categories/*"
              element={<ProtectedRoute allowedRole="halwai"><CategoryManagementRoutes /></ProtectedRoute>}
            />
            <Route
              path="/customer/categories"
              element={<ProtectedRoute allowedRole="customer"><CategoryBrowser /></ProtectedRoute>}
            />
            <Route
              path="/halwai/calendar"
              element={<ProtectedRoute allowedRole="halwai"><CalendarManagement /></ProtectedRoute>}
            />
            <Route
              path="/halwai/orders"
              element={<ProtectedRoute allowedRole="halwai"><HalwaiOrderManagement /></ProtectedRoute>}
            />
            <Route
              path="/customer/orders"
              element={<ProtectedRoute allowedRole="customer"><CustomerOrderHistory /></ProtectedRoute>}
            />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; 