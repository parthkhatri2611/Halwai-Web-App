// import React, { useEffect, useState } from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth, db } from "../services/firebaseConfig";
// import { doc, getDoc } from "firebase/firestore";

// const ProtectedRoute = ({ children, allowedRole }) => {
//   const [user, loading] = useAuthState(auth);
//   const [role, setRole] = useState(null);
//   const [checkingRole, setCheckingRole] = useState(true);
//   const location = useLocation();

//   useEffect(() => {
//     const fetchRole = async () => {
//       if (user) {
//         try {
//           const userRef = doc(db, "users", user.uid);
//           const snap = await getDoc(userRef);
//           if (snap.exists()) {
//             setRole(snap.data().role);
//           }
//         } catch (err) {
//           console.error("Error fetching role:", err);
//         }
//       }
//       setCheckingRole(false);
//     };
//     fetchRole();
//   }, [user]);

//   if (loading || checkingRole) {
//     return <div>Loading...</div>;
//   }

//   if (!user) {
//     // user not logged in → login bhej do
//     return <Navigate to="/role-selection" state={{ from: location }} replace />;
//   }

//   if (role !== allowedRole) {
//     // agar role mismatch hai → apne dashboard bhej do
//     return role === "halwai"
//       ? <Navigate to="/halwai/dashboard" replace />
//       : <Navigate to="/customer/dashboard" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;



import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../services/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

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
    return <div>Loading...</div>;
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