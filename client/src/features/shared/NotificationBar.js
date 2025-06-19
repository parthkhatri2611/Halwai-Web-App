import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  Badge,
  IconButton,
  Popover,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { styled } from '@mui/material/styles';
import { auth, db } from '../../services/firebaseConfig';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';


const StyledPopover = styled(Popover)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: '#FFF8E1',
    borderRadius: theme.spacing(1),
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  margin: theme.spacing(0.5, 0),
  '&:hover': {
    backgroundColor: 'rgba(255, 111, 0, 0.1)',
  },
}));

const NotificationBar = () => {
  const [user] = useAuthState(auth);
  const [notifications, setNotifications] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    if (user) {
      fetchNotifications();
    }
  }, [user]);

  const fetchNotifications = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, `customers/${user.uid}/notifications`));
      const notifs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setNotifications(notifs);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMarkAsRead = async (notificationId) => {
    try {
      await updateDoc(doc(db, `customers/${user.uid}/notifications`, notificationId), {
        read: true,
      });
      fetchNotifications();
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  const open = Boolean(anchorEl);
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <Box>
      <IconButton onClick={handleOpen}>
        <Badge badgeContent={unreadCount} sx={{ '& .MuiBadge-badge': { backgroundColor: '#FF6F00' } }}>
          <NotificationsIcon sx={{ color: '#ff8c8c' }} /> 
        </Badge>
      </IconButton>
      <StyledPopover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Box sx={{ p: 2, width: 300 }}>
          <Typography
            variant="h6"
            sx={{
              color: '#800000', 
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 600,
              mb: 2,
            }}
          >
            Notifications
          </Typography>
          {notifications.length === 0 ? (
            <Typography
              sx={{
                color: '#757575',
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              No notifications.
            </Typography>
          ) : (
            <List>
              {notifications.map(notification => (
                <StyledListItem
                  key={notification.id}
                  button
                  onClick={() => handleMarkAsRead(notification.id)}
                  sx={{ bgcolor: notification.read ? 'inherit' : '#A8D5BA33' }} 
                >
                  <ListItemText
                    primary={notification.message}
                    secondary={new Date(notification.createdAt).toLocaleString()}
                    primaryTypographyProps={{
                      sx: {
                        color: '#333333', 
                        fontFamily: '"Poppins", sans-serif',
                      },
                    }}
                    secondaryTypographyProps={{
                      sx: {
                        color: '#757575', 
                        fontFamily: '"Poppins", sans-serif',
                      },
                    }}
                  />
                </StyledListItem>
              ))}
            </List>
          )}
        </Box>
      </StyledPopover>
    </Box>
  );
};

export default NotificationBar;