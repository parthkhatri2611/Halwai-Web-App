import { db } from './firebaseConfig';
import { collection, addDoc ,getDocs , doc , updateDoc } from 'firebase/firestore';

const addNotification = async (customerId, orderId, message, status) => {
  try {
    await addDoc(collection(db, `customers/${customerId}/notifications`), {
      orderId,
      message,
      status,
      createdAt: new Date(),
      read: false,
    });
    console.log('Notification sent:', { customerId, orderId, message });
  } catch (error) {
    console.error('Error sending notification:', error);
    throw error;
  }
};

const getNotifications = async (customerId) => {
  try {
    const querySnapshot = await getDocs(collection(db, `customers/${customerId}/notifications`));
    const notifications = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log('Fetched notifications:', notifications);
    return notifications;
  } catch (error) {
    console.error('Error fetching notifications:', error);
    throw error;
  }
};

const markNotificationAsRead = async (customerId, notificationId) => {
  try {
    const notificationRef = doc(db, `customers/${customerId}/notifications`, notificationId);
    await updateDoc(notificationRef, { read: true });
    console.log('Notification marked as read:', notificationId);
  } catch (error) {
    console.error('Error marking notification as read:', error);
    throw error;
  }
};

export { addNotification, getNotifications, markNotificationAsRead };