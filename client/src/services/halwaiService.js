import { db } from './firebaseConfig';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import axios from 'axios';

const uploadImageToCloudinary = async (imageFile) => {
  try {
    const formData = new FormData();
    formData.append('image', imageFile);
    const response = await axios.post('http://localhost:5000/upload-image', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data.url;
  } catch (error) {
    console.error('Error uploading image to Cloudinary:', error.response?.data || error.message);
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

const addSubCategory = async (halwaiId, subCategoryData) => {
  try {
    const subCategoryRef = await addDoc(collection(db, `halwais/${halwaiId}/categories/khana_khazana/subCategories`), {
      ...subCategoryData,
      createdAt: new Date(),
    });
    return subCategoryRef.id;
  } catch (error) {
    console.error('Error adding sub-category:', error);
    throw error;
  }
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

const updateSubCategory = async (halwaiId, subCategoryId, subCategoryData) => {
  try {
    const subCategoryRef = doc(db, `halwais/${halwaiId}/categories/khana_khazana/subCategories`, subCategoryId);
    await updateDoc(subCategoryRef, subCategoryData);
  } catch (error) {
    console.error('Error updating sub-category:', error);
    throw error;
  }
};

const deleteSubCategory = async (halwaiId, subCategoryId) => {
  try {
    const subCategoryRef = doc(db, `halwais/${halwaiId}/categories/khana_khazana/subCategories`, subCategoryId);
    await deleteDoc(subCategoryRef);
  } catch (error) {
    console.error('Error deleting sub-category:', error);
    throw error;
  }
};

const addDish = async (halwaiId, subCategoryId, dishData, imageFile) => {
  try {
    let imageUrl = '';
    if (imageFile) {
      imageUrl = await uploadImageToCloudinary(imageFile);
    }
    const dishRef = await addDoc(collection(db, `halwais/${halwaiId}/categories/khana_khazana/subCategories/${subCategoryId}/dishes`), {
      ...dishData,
      imageUrl,
      createdAt: new Date(),
    });
    return dishRef.id;
  } catch (error) {
    console.error('Error adding dish:', error);
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

const updateDish = async (halwaiId, subCategoryId, dishId, dishData, imageFile) => {
  try {
    let imageUrl = dishData.imageUrl || '';
    if (imageFile) {
      imageUrl = await uploadImageToCloudinary(imageFile);
    }
    const dishRef = doc(db, `halwais/${halwaiId}/categories/khana_khazana/subCategories/${subCategoryId}/dishes`, dishId);
    await updateDoc(dishRef, { ...dishData, imageUrl });
  } catch (error) {
    console.error('Error updating dish:', error);
    throw error;
  }
};

const deleteDish = async (halwaiId, subCategoryId, dishId) => {
  try {
    const dishRef = doc(db, `halwais/${halwaiId}/categories/khana_khazana/subCategories/${subCategoryId}/dishes`, dishId);
    await deleteDoc(dishRef);
  } catch (error) {
    console.error('Error deleting dish:', error);
    throw error;
  }
};

const addPalace = async (halwaiId, palaceData, imageFile) => {
  try {
    let imageUrl = '';
    if (imageFile) {
      imageUrl = await uploadImageToCloudinary(imageFile);
    }
    const palaceRef = await addDoc(collection(db, `halwais/${halwaiId}/categories/palace/palaces`), {
      ...palaceData,
      imageUrl,
      createdAt: new Date(),
    });
    return palaceRef.id;
  } catch (error) {
    console.error('Error adding palace:', error);
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

const updatePalace = async (halwaiId, palaceId, palaceData, imageFile) => {
  try {
    let imageUrl = palaceData.imageUrl || '';
    if (imageFile) {
      imageUrl = await uploadImageToCloudinary(imageFile);
    }
    const palaceRef = doc(db, `halwais/${halwaiId}/categories/palace/palaces`, palaceId);
    await updateDoc(palaceRef, { ...palaceData, imageUrl });
  } catch (error) {
    console.error('Error updating palace:', error);
    throw error;
  }
};

const deletePalace = async (halwaiId, palaceId) => {
  try {
    const palaceRef = doc(db, `halwais/${halwaiId}/categories/palace/palaces`, palaceId);
    await deleteDoc(palaceRef);
  } catch (error) {
    console.error('Error deleting palace:', error);
    throw error;
  }
};

const addDecorItem = async (halwaiId, decorData, imageFile) => {
  try {
    let imageUrl = '';
    if (imageFile) {
      imageUrl = await uploadImageToCloudinary(imageFile);
    }
    const decorRef = await addDoc(collection(db, `halwais/${halwaiId}/categories/tent_light_decor/decorItems`), {
      ...decorData,
      imageUrl,
      createdAt: new Date(),
    });
    return decorRef.id;
  } catch (error) {
    console.error('Error adding decor item:', error);
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

const updateDecorItem = async (halwaiId, decorId, decorData, imageFile) => {
  try {
    let imageUrl = decorData.imageUrl || '';
    if (imageFile) {
      imageUrl = await uploadImageToCloudinary(imageFile);
    }
    const decorRef = doc(db, `halwais/${halwaiId}/categories/tent_light_decor/decorItems`, decorId);
    await updateDoc(decorRef, { ...decorData, imageUrl });
  } catch (error) {
    console.error('Error updating decor item:', error);
    throw error;
  }
};

const deleteDecorItem = async (halwaiId, decorId) => {
  try {
    const decorRef = doc(db, `halwais/${halwaiId}/categories/tent_light_decor/decorItems`, decorId);
    await deleteDoc(decorRef);
  } catch (error) {
    console.error('Error deleting decor item:', error);
    throw error;
  }
};

export {
  getCategories,
  addSubCategory, getSubCategories, updateSubCategory, deleteSubCategory,
  addDish, getDishes, updateDish, deleteDish,
  addPalace, getPalaces, updatePalace, deletePalace,
  addDecorItem, getDecorItems, updateDecorItem, deleteDecorItem
};