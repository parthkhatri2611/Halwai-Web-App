// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from '../services/firebaseConfig';

// const ProtectedRoute = ({ children }) => {
//   const [user, loading] = useAuthState(auth);

//   if (loading) {
//     return <div>Loading...</div>; // or spinner
//   }

//   if (!user) {
//     return <Navigate to="/halwai/login" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;



import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebaseConfig"; 

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>; // or a spinner
  }

  if (!user) {
    // Not logged in → send to login page
    return <Navigate to="/halwai/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
