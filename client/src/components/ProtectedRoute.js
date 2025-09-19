import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../services/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

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

const StyledBackgroundBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(180deg, #FCECDD 0%, #FFF8F0 100%)',
  minHeight: '100vh',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
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

const ProtectedRoute = ({ children, allowedRole }) => {
  const [user, loading] = useAuthState(auth);
  const [role, setRole] = useState(null);
  const [checkingRole, setCheckingRole] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchRole = async () => {
      if (user) {
        try {
          // Check customers collection first
          const customerRef = doc(db, "customers", user.uid);
          const customerSnap = await getDoc(customerRef);
          if (customerSnap.exists()) {
            setRole(customerSnap.data().role);
          } else {
            // Fallback: Check halwais collection
            const halwaiRef = doc(db, "halwais", user.uid);
            const halwaiSnap = await getDoc(halwaiRef);
            if (halwaiSnap.exists()) {
              setRole(halwaiSnap.data().role);
            }
          }
        } catch (err) {
          console.error("Error fetching role:", err);
        }
      }
      setCheckingRole(false);
    };
    fetchRole();
  }, [user]);

  if (loading || checkingRole) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <StyledBackgroundBox>
          <JalebiSpinner viewBox="0 0 100 100">
            <defs>
              <linearGradient id="jalebiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#FF8C8C', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#FFC288', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path d="M50 10 C30 10 10 30 10 50 C10 70 30 90 50 90 C70 90 90 70 90 50 C90 30 70 10 50 10 M50 20 C35 20 20 35 20 50 C20 65 35 80 50 80 C65 80 80 65 80 50 C80 35 65 20 50 20" />
          </JalebiSpinner>
        </StyledBackgroundBox>
      </motion.div>
    );
  }

  if (!user) {
    // User not logged in → redirect to role-selection
    return <Navigate to="/role-selection" state={{ from: location }} replace />;
  }

  if (allowedRole && role !== allowedRole) {
    // Role mismatch or no role found → redirect to appropriate dashboard or role-selection
    return role === "halwai"
      ? <Navigate to="/halwai/dashboard" replace />
      : role === "customer"
      ? <Navigate to="/customer/dashboard" replace />
      : <Navigate to="/role-selection" replace />;
  }

  return children;
};

export default ProtectedRoute;