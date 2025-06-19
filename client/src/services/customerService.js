import { db } from './firebaseConfig';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';

const getHalwais = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'halwais'));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching halwais:', error);
    throw error;
  }
};

const getCategories = async (halwaiId) => {
  return [
    { id: 'khana_khazana', name: 'Khana Khazana', type: 'khana_khazana' },
    { id: 'palace', name: 'Palace', type: 'palace' },
    { id: 'tent_light_decor', name: 'Tent/Light Decor', type: 'tent_light_decor' },
  ];
};

const getSubCategories = async (halwaiId) => {
  try {
    const querySnapshot = await getDocs(collection(db, `halwais/${halwaiId}/categories/khana_khazana/subCategories`));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching sub-categories:', error);
    throw error;
  }
};

const getDishes = async (halwaiId, subCategoryId) => {
  try {
    const querySnapshot = await getDocs(collection(db, `halwais/${halwaiId}/categories/khana_khazana/subCategories/${subCategoryId}/dishes`));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching dishes:', error);
    throw error;
  }
};

const getPalaces = async (halwaiId) => {
  try {
    const querySnapshot = await getDocs(collection(db, `halwais/${halwaiId}/categories/palace/palaces`));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching palaces:', error);
    throw error;
  }
};

const getDecorItems = async (halwaiId) => {
  try {
    const querySnapshot = await getDocs(collection(db, `halwais/${halwaiId}/categories/tent_light_decor/decorItems`));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching decor items:', error);
    throw error;
  }
};

export { getHalwais, getCategories, getSubCategories, getDishes, getPalaces, getDecorItems };