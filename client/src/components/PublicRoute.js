// import { Navigate } from "react-router-dom";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth, db } from "../services/firebaseConfig";
// import { doc, getDoc } from "firebase/firestore";
// import { useEffect, useState } from "react";

// const PublicRoute = ({ children }) => {
//   const [user, loading] = useAuthState(auth);
//   const [role, setRole] = useState(null);
//   const [checkingRole, setCheckingRole] = useState(true);

//   useEffect(() => {
//     const fetchRole = async () => {
//       if (user) {
//         try {
//           const userRef = doc(db, "users", user.uid);
//           const snap = await getDoc(userRef);

//           if (snap.exists()) {
//             setRole(snap.data().role); // role = "halwai" ya "customer"
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
//     return <p>Loading...</p>;
//   }

//   if (user) {
//     if (role === "halwai") {
//       return <Navigate to="/halwai/dashboard" replace />;
//     }
//     if (role === "customer") {
//       return <Navigate to="/customer/dashboard" replace />;
//     }
//   }

//   return children; // agar user logged in nahi hai
// };

// export default PublicRoute;


import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../services/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const PublicRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [role, setRole] = useState(null);
  const [checkingRole, setCheckingRole] = useState(true);

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
    return <p>Loading...</p>;
  }

  if (user && role) {
    // Redirect based on role
    if (role === "halwai") {
      return <Navigate to="/halwai/dashboard" replace />;
    }
    if (role === "customer") {
      return <Navigate to="/customer/dashboard" replace />;
    }
  }

  return children;
};

export default PublicRoute;