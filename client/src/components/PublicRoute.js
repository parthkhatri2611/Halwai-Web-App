// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../services/firebaseConfig";

// const PublicRoute = ({ children }) => {
//   const [user, loading] = useAuthState(auth);

//   if (loading) return <div>Loading...</div>;

//   if (user) {
//     return <Navigate to="/halwai/dashboard" replace />;
//   }

//   return children;
// };

// export default PublicRoute;


import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebaseConfig";

const PublicRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    // Already logged in → redirect to dashboard
    return <Navigate to="/halwai/dashboard" replace />;
  }

  return children;
};

export default PublicRoute;
