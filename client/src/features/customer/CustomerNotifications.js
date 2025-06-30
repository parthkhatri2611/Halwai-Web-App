// import React, { useState, useEffect } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { Container, Typography, List, ListItem, ListItemText, IconButton, Badge } from '@mui/material';
// import { Notifications } from '@mui/icons-material';
// import { auth } from '../../services/firebaseConfig';
// import { getNotifications, markNotificationAsRead } from '../../services/notificationService';
// import Navbar from '../shared/Navbar';

// const CustomerNotifications = () => {
//   const [user] = useAuthState(auth);
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     if (user) {
//       fetchNotifications();
//     }
//   }, [user]);

//   const fetchNotifications = async () => {
//     try {
//       const notifs = await getNotifications(user.uid);
//       setNotifications(notifs);
//     } catch (error) {
//       alert('Failed to fetch notifications: ' + error.message);
//     }
//   };

//   const handleMarkAsRead = async (notificationId) => {
//     try {
//       await markNotificationAsRead(user.uid, notificationId);
//       setNotifications(prev =>
//         prev.map(notif => (notif.id === notificationId ? { ...notif, read: true } : notif))
//       );
//     } catch (error) {
//       alert('Failed to mark notification as read: ' + error.message);
//     }
//   };

//   const unreadCount = notifications.filter(notif => !notif.read).length;

//   return (
//     <div>
//       <Navbar user={user ? { name: user.displayName || 'Customer' } : null} role="customer" />
//       <Container sx={{ mt: 8, mb: 8 }}>
//         <Typography variant="h4" gutterBottom>
//           Notifications
//           <Badge badgeContent={unreadCount} color="error" sx={{ ml: 2 }}>
//             <Notifications />
//           </Badge>
//         </Typography>
//         <List>
//           {notifications.length === 0 ? (
//             <Typography>No notifications.</Typography>
//           ) : (
//             notifications.map(notif => (
//               <ListItem
//                 key={notif.id}
//                 sx={{ bgcolor: notif.read ? 'transparent' : 'grey.100' }}
//               >
//                 <ListItemText
//                   primary={notif.message}
//                   secondary={`Status: ${notif.status} | ${new Date(notif.createdAt).toLocaleString()}`}
//                 />
//                 {!notif.read && (
//                   <IconButton onClick={() => handleMarkAsRead(notif.id)}>
//                     <Notifications color="primary" />
//                   </IconButton>
//                 )}
//               </ListItem>
//             ))
//           )}
//         </List>
//       </Container>
//     </div>
//   );
// };

// export default CustomerNotifications;

import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Container, Typography, List, ListItem, ListItemText, IconButton, Badge } from '@mui/material';
import { Notifications } from '@mui/icons-material';
import { auth } from '../../services/firebaseConfig';
import { getNotifications, markNotificationAsRead } from '../../services/notificationService';
import Navbar from '../shared/Navbar';

const CustomerNotifications = () => {
  const [user] = useAuthState(auth);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (user) {
      fetchNotifications();
      const interval = setInterval(fetchNotifications, 1000); // Refresh every 10 seconds
      return () => clearInterval(interval); // Clean up interval on unmount
    }
  }, [user]);

  const fetchNotifications = async () => {
    try {
      const notifs = await getNotifications(user.uid);
      // Sort notifications by createdAt in descending order (latest first)
      const sortedNotifs = notifs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setNotifications(sortedNotifs);
    } catch (error) {
      alert('Failed to fetch notifications: ' + error.message);
    }
  };

  const handleMarkAsRead = async (notificationId) => {
    try {
      await markNotificationAsRead(user.uid, notificationId);
      setNotifications(prev =>
        prev.map(notif => (notif.id === notificationId ? { ...notif, read: true } : notif))
      );
    } catch (error) {
      alert('Failed to mark notification as read: ' + error.message);
    }
  };

  const unreadCount = notifications.filter(notif => !notif.read).length;

  return (
    <div>
      <Navbar user={user ? { name: user.displayName || 'Customer' } : null} role="customer" />
      <Container sx={{ mt: 8, mb: 8 }}>
        <Typography variant="h4" gutterBottom>
          Notifications
          <Badge badgeContent={unreadCount} color="error" sx={{ ml: 2 }}>
            <Notifications />
          </Badge>
        </Typography>
        <List>
          {notifications.length === 0 ? (
            <Typography>No notifications.</Typography>
          ) : (
            notifications.map(notif => (
              <ListItem
                key={notif.id}
                sx={{ bgcolor: notif.read ? 'transparent' : 'grey.100' }}
              >
                <ListItemText
                  primary={notif.message}
                  secondary={`Status: ${notif.status} | ${new Date(notif.createdAt).toLocaleString()}`}
                />
                {!notif.read && (
                  <IconButton onClick={() => handleMarkAsRead(notif.id)}>
                    <Notifications color="primary" />
                  </IconButton>
                )}
              </ListItem>
            ))
          )}
        </List>
      </Container>
    </div>
  );
};

export default CustomerNotifications;