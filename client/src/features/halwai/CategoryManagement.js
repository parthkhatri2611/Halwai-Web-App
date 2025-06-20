import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams, Routes, Route } from 'react-router-dom';
import {
  Container, Typography, Card, CardContent, CardActions, Button, Box, Grid,
  TextField, Select, MenuItem, IconButton, Dialog, DialogTitle,
  DialogContent, DialogActions
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Add, Edit, Delete, Image } from '@mui/icons-material';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { auth } from '../../services/firebaseConfig';
import {
  getCategories, addSubCategory, getSubCategories, updateSubCategory, deleteSubCategory,
  addDish, getDishes, updateDish, deleteDish, addPalace, getPalaces, updatePalace,
  deletePalace, addDecorItem, getDecorItems, updateDecorItem, deleteDecorItem
} from '../../services/halwaiService';
import Navbar from '../shared/Navbar';

const subCategorySchema = yup.object({
  name: yup.string().required('Sub-category name is required'),
}).required();

// const dishSchema = yup.object({
//   name: yup.string().required('Dish name is required'),
//   veg: yup.string().oneOf(['veg', 'non-veg'], 'Please select Veg or Non-Veg').required('Veg/Non-Veg is required'),
//   ingredients: yup.array().of(
//     yup.object({
//       name: yup.string().required('Ingredient name is required'),
//       quantity: yup.number().positive('Quantity must be positive').required('Quantity is required'),
//       unit: yup.string().required('Unit is required'),
//     })
//   ).min(1, 'At least one ingredient is required'),
// }).required();



const dishSchema = yup.object({
  name: yup.string().required('Dish name is required'),
  veg: yup.string().oneOf(['veg', 'non-veg'], 'Please select Veg or Non-Veg').required('Veg/Non-Veg is required'),
  ingredients: yup.array().of(
    yup.object({
      name: yup.string().required('Ingredient name is required'),
      quantity: yup
        .number()
        .typeError('Quantity must be a number')
        .positive('Quantity must be positive')
        .required('Quantity is required'),
      unit: yup.string().required('Unit is required'),
    })
  ).min(1, 'At least one ingredient is required'),
}).required();






const palaceSchema = yup.object({
  name: yup.string().required('Palace name is required'),
  address: yup.string().required('Address is required'),
  contact: yup.string().required('Contact number is required'),
  capacity: yup.number().positive('Capacity must be positive').required('Capacity is required'),
}).required();

const decorItemSchema = yup.object({
  name: yup.string().required('Name is required'),
  mobile: yup.string().required('Mobile number is required'),
  address: yup.string().required('Address is required'),
}).required();



const StyledBackgroundBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(180deg, #FCECDD 0%, #FFF8F0 100%)',
  minHeight: '100vh',
  position: 'relative',
  overflow: 'hidden',
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






const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(6),
  position: 'relative',
  zIndex: 1,
  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(4),
  },
}));



const CenteredBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minHeight: 'calc(100vh - 80px)',
  [theme.breakpoints.down('sm')]: {
    minHeight: 'calc(100vh - 64px)',
    padding: theme.spacing(0, 2),
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  background: '#FFF8F0', 
  backdropFilter: 'blur(6px)', 
  borderRadius: theme.spacing(1.5),
  boxShadow: '0 4px 12px rgba(75, 75, 75, 0.1)', 
  border: '1px solid #FF8C8C', 
  marginBottom: theme.spacing(2),
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 16px rgba(255, 140, 140, 0.2)', 
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

const StyledFormCard = styled(Card)(({ theme }) => ({
  background: '#FFF8F0', 
  borderRadius: theme.spacing(1.5),
  boxShadow: '0 4px 12px rgba(75, 75, 75, 0.1)',
  border: '1px solid #FCECDD',
  padding: theme.spacing(3),
  marginBottom: theme.spacing(4),
  width: '100%',
  maxWidth: '600px', 
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    maxWidth: '100%',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FF8C8C',
  color: '#FFF8F0', 
  fontFamily: '"Montserrat", sans-serif',
  fontWeight: 600,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1, 2),
  textTransform: 'none',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: '#FCECDD',
    color: '#FF8C8C',
    boxShadow: '0 0 8px rgba(255, 194, 136, 0.3)',
    transform: 'scale(1.05)',
  },
  '&:active': {
    transform: 'scale(0.95)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0.8, 1.5),
    fontSize: '0.9rem',
  },
}));

const StyledSecondaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FFC288', 
  color: '#FFF8F0', 
  fontFamily: '"Montserrat", sans-serif',
  fontWeight: 600,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1, 2),
  textTransform: 'none',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: '#FCECDD',
    color: '#FFC288',
    boxShadow: '0 0 8px rgba(255, 194, 136, 0.3)',
    transform: 'scale(1.05)',
  },
  '&:active': {
    transform: 'scale(0.95)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0.8, 1.5),
    fontSize: '0.9rem',
  },
}));

const StyledImage = styled('img')(({ theme }) => ({
  width: '100px',
  height: '100px',
  borderRadius: theme.spacing(1),
  objectFit: 'cover',
  marginBottom: theme.spacing(1),
  border: '1px solid #FCECDD',
  [theme.breakpoints.down('sm')]: {
    width: '80px',
    height: '80px',
  },
}));

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    background: '#FFF8F0',
    borderRadius: theme.spacing(1.5),
    padding: theme.spacing(2),
    border: '1px solid #FCECDD',
    boxShadow: '0 4px 12px rgba(75, 75, 75, 0.1)',
  },
}));

const HeaderTypography = styled(Typography)(({ theme }) => ({
  fontFamily: '"Playfair Display", serif',
  fontWeight: 700,
  color: '#4B4B4B', 
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-8px',
    left: '50%',
    width: '0',
    height: '2px',
    background: '#FF8C8C',
    transition: 'width 0.3s ease, left 0.3s ease',
  },
  '&:hover::after': {
    width: '50%',
    left: '25%',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.8rem',
  },
}));

const CardTypography = styled(Typography)(({ theme }) => ({
  fontFamily: '"Montserrat", sans-serif',
  fontWeight: 600,
  color: '#4B4B4B',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const BodyTypography = styled(Typography)(({ theme }) => ({
  fontFamily: '"Montserrat", sans-serif',
  fontWeight: 400,
  color: '#4B4B4B',
  fontSize: '0.9rem',
  opacity: 0.7,
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.85rem',
  },
}));

const LoadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 'calc(100vh - 80px)',
  [theme.breakpoints.down('sm')]: {
    minHeight: 'calc(100vh - 64px)',
  },
}));

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

const CategoryManagement = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [categories] = useState([
    { id: 'khana_khazana', name: 'Khana Khazana', type: 'khana_khazana' },
    { id: 'palace', name: 'Palace', type: 'palace' },
    { id: 'tent_light_decor', name: 'Tent/Light Decor', type: 'tent_light_decor' },
  ]);

  if (!user) return null;

  return (
  <StyledBackgroundBox>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Navbar user={{ name: user.displayName || 'Halwai' }} role="halwai" />
      <StyledContainer>
        <CenteredBox>
          <HeaderTypography variant="h4" align="center" sx={{ mb: 4 }}>
            Manage Categories
          </HeaderTypography>
          <Grid container spacing={5}>
            {categories.map(category => (
              <Grid item xs={12} sm={6} md={4} key={category.id}>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <StyledCard onClick={() => navigate(`/halwai/categories/${category.id}`)}>
                    <CardContent>
                      <CardTypography variant="h6" align="center">
                        {category.name}
                      </CardTypography>
                    </CardContent>
                  </StyledCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </CenteredBox>
      </StyledContainer>
    </motion.div>
  </StyledBackgroundBox>
);
};

const KhanaKhazanaSubCategory = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [subCategories, setSubCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [deleteDialog, setDeleteDialog] = useState({ open: false, id: null });

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(subCategorySchema),
  });

  useEffect(() => {
    if (user) fetchSubCategories();
  }, [user]);

  const fetchSubCategories = async () => {
    try {
      setLoading(true);
      const data = await getSubCategories(user.uid);
      setSubCategories(data);
    } catch (error) {
      alert('Failed to fetch sub-categories: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      if (editingCategory) {
        await updateSubCategory(user.uid, editingCategory.id, data);
        setEditingCategory(null);
      } else {
        await addSubCategory(user.uid, data);
      }
      reset();
      setShowForm(false);
      fetchSubCategories();
    } catch (error) {
      alert('Failed to save sub-category: ' + error.message);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteSubCategory(user.uid, deleteDialog.id);
      setDeleteDialog({ open: false, id: null });
      fetchSubCategories();
    } catch (error) {
      alert('Failed to delete sub-category: ' + error.message);
    }
  };

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
              <StyledBackgroundBox>

        <Navbar user={{ name: user?.displayName || 'Halwai' }} role="halwai" />
        <StyledContainer>
          <LoadingContainer>
            <JalebiSpinner viewBox="0 0 100 100">
              <defs>
                <linearGradient id="jalebiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#FF8C8C', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#FFC288', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path d="M50 10 C30 10 10 30 10 50 C10 70 30 90 50 90 C70 90 90 70 90 50 C90 30 70 10 50 10 M50 20 C35 20 20 35 20 50 C20 65 35 80 50 80 C65 80 80 65 80 50 C80 35 65 20 50 20" />
            </JalebiSpinner>
          </LoadingContainer>
        </StyledContainer>
              </StyledBackgroundBox>

      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <StyledBackgroundBox>
      <Navbar user={{ name: user?.displayName || 'Halwai' }} role="halwai" />
      <StyledContainer>
        <CenteredBox>
          <HeaderTypography variant="h4" align="center" sx={{ mb: 4 }}>
            Khana Khazana Sub-Categories
          </HeaderTypography>
          <StyledButton
            startIcon={<Add />}
            onClick={() => {
              setShowForm(true);
              setEditingCategory(null);
              reset();
            }}
            sx={{ mb: 3 }}
          >
            Add Sub-Category
          </StyledButton>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <StyledFormCard>
                <CardContent>
                  <CardTypography variant="h6" sx={{ mb: 2 }}>
                    {editingCategory ? 'Edit Sub-Category' : 'Add Sub-Category'}
                  </CardTypography>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          label="Sub-Category Name"
                          fullWidth
                          {...register('name')}
                          error={!!errors.name}
                          helperText={errors.name?.message}
                          sx={{
                            '& .MuiInputLabel-root': { fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' },
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': { borderColor: '#FCECDD' },
                              '&:hover fieldset': { borderColor: '#FF8C8C' },
                              '&.Mui-focused fieldset': { borderColor: '#FF8C8C' },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                          <StyledButton type="submit">
                            {editingCategory ? 'Update' : 'Add'}
                          </StyledButton>
                          <StyledSecondaryButton onClick={() => setShowForm(false)}>
                            Cancel
                          </StyledSecondaryButton>
                        </Box>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </StyledFormCard>
            </motion.div>
          )}
          <Grid container spacing={3}>
            {subCategories.map(subCategory => (
              <Grid item xs={12} sm={6} key={subCategory.id}>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <StyledCard onClick={() => navigate(`/halwai/categories/khana_khazana/subcategory/${subCategory.id}`)}>
                    <CardContent>
                      <CardTypography variant="h6" align="center">
                        {subCategory.name}
                      </CardTypography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center', gap: 1 }}>
                      <StyledButton
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          setEditingCategory(subCategory);
                          setShowForm(true);
                          reset(subCategory);
                        }}
                      >
                        Edit
                      </StyledButton>
                      <StyledSecondaryButton
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          setDeleteDialog({ open: true, id: subCategory.id });
                        }}
                      >
                        Delete
                      </StyledSecondaryButton>
                    </CardActions>
                  </StyledCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
          <StyledDialog
            open={deleteDialog.open}
            onClose={() => setDeleteDialog({ open: false, id: null })}
          >
            <DialogTitle>
              <CardTypography>Confirm Deletion</CardTypography>
            </DialogTitle>
            <DialogContent>
              <BodyTypography>Are you sure you want to delete this sub-category?</BodyTypography>
            </DialogContent>
            <DialogActions>
              <StyledSecondaryButton onClick={() => setDeleteDialog({ open: false, id: null })}>
                Cancel
              </StyledSecondaryButton>
              <StyledButton onClick={handleDelete}>Delete</StyledButton>
            </DialogActions>
          </StyledDialog>
        </CenteredBox>
      </StyledContainer>
      </StyledBackgroundBox>
    </motion.div>
  );
};

const DishManagement = () => {
  const [user] = useAuthState(auth);
  const { subCategoryId } = useParams();
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingDish, setEditingDish] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [dishImage, setDishImage] = useState(null);
  const [deleteDialog, setDeleteDialog] = useState({ open: false, id: null });

  const { register, handleSubmit, reset, formState: { errors }, control, setValue } = useForm({
    resolver: yupResolver(dishSchema),
    defaultValues: {
      ingredients: [{ name: '', quantity: '', unit: '' }],
      veg: 'veg',
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'ingredients',
  });

  useEffect(() => {
    if (user && subCategoryId) fetchDishes();
  }, [user, subCategoryId]);

  const fetchDishes = async () => {
    try {
      setLoading(true);
      const data = await getDishes(user.uid, subCategoryId);
      setDishes(data);
    } catch (error) {
      alert('Failed to fetch dishes: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      const formattedIngredients = data.ingredients.map(ing => ({
        name: ing.name,
        quantity: parseFloat(ing.quantity), // Explicitly parse to float
        unit: ing.unit,
      }));
      if (editingDish) {
        await updateDish(user.uid, subCategoryId, editingDish.id, { ...data, ingredients: formattedIngredients }, dishImage);
        setEditingDish(null);
      } else {
        await addDish(user.uid, subCategoryId, { ...data, ingredients: formattedIngredients }, dishImage);
      }
      reset();
      setShowForm(false);
      setImagePreview(null);
      setDishImage(null);
      fetchDishes();
    } catch (error) {
      alert('Failed to save dish: ' + error.message);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteDish(user.uid, subCategoryId, deleteDialog.id);
      setDeleteDialog({ open: false, id: null });
      fetchDishes();
    } catch (error) {
      alert('Failed to delete dish: ' + error.message);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setDishImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <StyledBackgroundBox>
        <Navbar user={{ name: user?.displayName || 'Halwai' }} role="halwai" />
        <StyledContainer>
          <LoadingContainer>
            <JalebiSpinner viewBox="0 0 100 100">
              <defs>
                <linearGradient id="jalebiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#FF8C8C', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#FFC288', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path d="M50 10 C30 10 10 30 10 50 C10 70 30 90 50 90 C70 90 90 70 90 50 C90 30 70 10 50 10 M50 20 C35 20 20 35 20 50 C20 65 35 80 50 80 C65 80 80 65 80 50 C80 35 65 20 50 20" />
            </JalebiSpinner>
          </LoadingContainer>
        </StyledContainer>
        </StyledBackgroundBox>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <StyledBackgroundBox>
      <Navbar user={{ name: user?.displayName || 'Halwai' }} role="halwai" />
      <StyledContainer>
        <CenteredBox>
          <HeaderTypography variant="h4" align="center" sx={{ mb: 4 }}>
            Manage Dishes
          </HeaderTypography>
          <StyledButton
            startIcon={<Add />}
            onClick={() => {
              setShowForm(true);
              setEditingDish(null);
              reset();
              setImagePreview(null);
            }}
            sx={{ mb: 3 }}
          >
            Add Dish
          </StyledButton>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <StyledFormCard>
                <CardContent>
                  <CardTypography variant="h6" sx={{ mb: 2 }}>
                    {editingDish ? 'Edit Dish' : 'Add Dish'}
                  </CardTypography>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          label="Dish Name"
                          fullWidth
                          {...register('name')}
                          error={!!errors.name}
                          helperText={errors.name?.message}
                          sx={{
                            '& .MuiInputLabel-root': { fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' },
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': { borderColor: '#FCECDD' },
                              '&:hover fieldset': { borderColor: '#FF8C8C' },
                              '&.Mui-focused fieldset': { borderColor: '#FF8C8C' },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Select
                          fullWidth
                          {...register('veg')}
                          error={!!errors.veg}
                          sx={{
                            fontFamily: '"Montserrat", sans-serif',
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': { borderColor: '#FCECDD' },
                              '&:hover fieldset': { borderColor: '#FF8C8C' },
                              '&.Mui-focused fieldset': { borderColor: '#FF8C8C' },
                            },
                          }}
                        >
                          <MenuItem value="veg">Veg</MenuItem>
                          <MenuItem value="non-veg">Non-Veg</MenuItem>
                        </Select>
                        {errors.veg && (
                          <BodyTypography color="#FF8C8C" variant="caption">
                            {errors.veg.message}
                          </BodyTypography>
                        )}
                      </Grid>
                      <Grid item xs={12}>
                        <CardTypography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>
                          Ingredients (for 50 servings)
                        </CardTypography>
                        {fields.map((field, index) => (
                          <Grid container spacing={1} key={field.id} sx={{ mb: 2 }}>
                            <Grid item xs={12} sm={4}>
                              <TextField
                                label="Ingredient Name"
                                fullWidth
                                {...register(`ingredients[${index}].name`)}
                                error={!!errors.ingredients?.[index]?.name}
                                helperText={errors.ingredients?.[index]?.name?.message}
                                sx={{
                                  '& .MuiInputLabel-root': { fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' },
                                  '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: '#FCECDD' },
                                    '&:hover fieldset': { borderColor: '#FF8C8C' },
                                    '&.Mui-focused fieldset': { borderColor: '#FF8C8C' },
                                  },
                                }}
                              />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                              <TextField
                                label="Quantity"
                                type="number"
                                step="any"
                                fullWidth
                                {...register(`ingredients[${index}].quantity`)}
                                error={!!errors.ingredients?.[index]?.quantity}
                                helperText={errors.ingredients?.[index]?.quantity?.message}
                                sx={{
                                  '& .MuiInputLabel-root': { fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' },
                                  '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: '#FCECDD' },
                                    '&:hover fieldset': { borderColor: '#FF8C8C' },
                                    '&.Mui-focused fieldset': { borderColor: '#FF8C8C' },
                                  },
                                }}
                              />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                              <TextField
                                label="Unit"
                                fullWidth
                                {...register(`ingredients[${index}].unit`)}
                                error={!!errors.ingredients?.[index]?.unit}
                                helperText={errors.ingredients?.[index]?.unit?.message}
                                sx={{
                                  '& .MuiInputLabel-root': { fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' },
                                  '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: '#FCECDD' },
                                    '&:hover fieldset': { borderColor: '#FF8C8C' },
                                    '&.Mui-focused fieldset': { borderColor: '#FF8C8C' },
                                  },
                                }}
                              />
                            </Grid>
                            <Grid item xs={12} sm={2}>
                              <StyledSecondaryButton onClick={() => remove(index)}>
                                Delete
                              </StyledSecondaryButton>
                            </Grid>
                          </Grid>
                        ))}
                        <StyledButton
                          onClick={() => append({ name: '', quantity: '', unit: '' })}
                          sx={{ mb: 2 }}
                        >
                          Add Ingredient
                        </StyledButton>
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          component="label"
                          startIcon={<Image />}
                          sx={{
                            fontFamily: '"Montserrat", sans-serif',
                            color: '#4B4B4B',
                            borderColor: '#FCECDD',
                            borderRadius: 1,
                            '&:hover': { borderColor: '#FF8C8C', background: '#FCECDD' },
                          }}
                        >
                          Upload Image
                          <input type="file" accept="image/*" hidden onChange={handleImageChange} />
                        </Button>
                        {imagePreview && <StyledImage src={imagePreview} alt="Preview" />}
                      </Grid>
                      <Grid item xs={12}>
                        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                          <StyledButton type="submit">
                            {editingDish ? 'Update' : 'Add'}
                          </StyledButton>
                          <StyledSecondaryButton onClick={() => setShowForm(false)}>
                            Cancel
                          </StyledSecondaryButton>
                        </Box>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </StyledFormCard>
            </motion.div>
          )}
          <Grid container spacing={3}>
            {dishes.map(dish => (
              <Grid item xs={12} sm={6} key={dish.id}>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <StyledCard>
                    <CardContent>
                      {dish.imageUrl && <StyledImage src={dish.imageUrl} alt={dish.name} sx={{ display: 'block', mx: 'auto' }} />}
                      <CardTypography variant="h6" align="center">
                        {dish.name} ({dish.veg})
                      </CardTypography>
                      <BodyTypography variant="body2" align="center">
                        Ingredients: {dish.ingredients.map(ing => `${ing.name}: ${ing.quantity} ${ing.unit}`).join(', ')}
                      </BodyTypography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center', gap: 1 }}>
                      <StyledButton
                        size="small"
                        onClick={() => {
                          setEditingDish(dish);
                          setShowForm(true);
                          setValue('name', dish.name);
                          setValue('veg', dish.veg);
                          setValue('ingredients', dish.ingredients);
                          setImagePreview(dish.imageUrl || null);
                        }}
                      >
                        Edit
                      </StyledButton>
                      <StyledSecondaryButton
                        size="small"
                        onClick={() => setDeleteDialog({ open: true, id: dish.id })}
                      >
                        Delete
                      </StyledSecondaryButton>
                    </CardActions>
                  </StyledCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
          <StyledDialog
            open={deleteDialog.open}
            onClose={() => setDeleteDialog({ open: false, id: null })}
          >
            <DialogTitle>
              <CardTypography>Confirm Deletion</CardTypography>
            </DialogTitle>
            <DialogContent>
              <BodyTypography>Are you sure you want to delete this dish?</BodyTypography>
            </DialogContent>
            <DialogActions>
              <StyledSecondaryButton onClick={() => setDeleteDialog({ open: false, id: null })}>
                Cancel
              </StyledSecondaryButton>
              <StyledButton onClick={handleDelete}>Delete</StyledButton>
            </DialogActions>
          </StyledDialog>
        </CenteredBox>
      </StyledContainer>
      </StyledBackgroundBox>
    </motion.div>
  );
};

const PalaceManagement = () => {
  const [user] = useAuthState(auth);
  const [palaces, setPalaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingPalace, setEditingPalace] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [palaceImage, setPalaceImage] = useState(null);
  const [deleteDialog, setDeleteDialog] = useState({ open: false, id: null });

  const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(palaceSchema),
  });

  useEffect(() => {
    if (user) fetchPalaces();
  }, [user]);

  const fetchPalaces = async () => {
    try {
      setLoading(true);
      const data = await getPalaces(user.uid);
      setPalaces(data);
    } catch (error) {
      alert('Failed to fetch palaces: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      if (editingPalace) {
        await updatePalace(user.uid, editingPalace.id, data, palaceImage);
        setEditingPalace(null);
      } else {
        await addPalace(user.uid, data, palaceImage);
      }
      reset();
      setShowForm(false);
      setImagePreview(null);
      setPalaceImage(null);
      fetchPalaces();
    } catch (error) {
      alert('Failed to save palace: ' + error.message);
    }
  };

  const handleDelete = async () => {
    try {
      await deletePalace(user.uid, deleteDialog.id);
      setDeleteDialog({ open: false, id: null });
      fetchPalaces();
    } catch (error) {
      alert('Failed to delete palace: ' + error.message);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setPalaceImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <StyledBackgroundBox>
        <Navbar user={{ name: user?.displayName || 'Halwai' }} role="halwai" />
        <StyledContainer>
          <LoadingContainer>
            <JalebiSpinner viewBox="0 0 100 100">
              <defs>
                <linearGradient id="jalebiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#FF8C8C', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#FFC288', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path d="M50 10 C30 10 10 30 10 50 C10 70 30 90 50 90 C70 90 90 70 90 50 C90 30 70 10 50 10 M50 20 C35 20 20 35 20 50 C20 65 35 80 50 80 C65 80 80 65 80 50 C80 35 65 20 50 20" />
            </JalebiSpinner>
          </LoadingContainer>
        </StyledContainer>
        </StyledBackgroundBox>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <StyledBackgroundBox>
      <Navbar user={{ name: user?.displayName || 'Halwai' }} role="halwai" />
      <StyledContainer>
        <CenteredBox>
          <HeaderTypography variant="h4" align="center" sx={{ mb: 4 }}>
            Manage Palaces
          </HeaderTypography>
          <StyledButton
            startIcon={<Add />}
            onClick={() => {
              setShowForm(true);
              setEditingPalace(null);
              reset();
              setImagePreview(null);
            }}
            sx={{ mb: 3 }}
          >
            Add Palace
          </StyledButton>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <StyledFormCard>
                <CardContent>
                  <CardTypography variant="h6" sx={{ mb: 2 }}>
                    {editingPalace ? 'Edit Palace' : 'Add Palace'}
                  </CardTypography>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          label="Palace Name"
                          fullWidth
                          {...register('name')}
                          error={!!errors.name}
                          helperText={errors.name?.message}
                          sx={{
                            '& .MuiInputLabel-root': { fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' },
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': { borderColor: '#FCECDD' },
                              '&:hover fieldset': { borderColor: '#FF8C8C' },
                              '&.Mui-focused fieldset': { borderColor: '#FF8C8C' },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Address"
                          fullWidth
                          {...register('address')}
                          error={!!errors.address}
                          helperText={errors.address?.message}
                          sx={{
                            '& .MuiInputLabel-root': { fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' },
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': { borderColor: '#FCECDD' },
                              '&:hover fieldset': { borderColor: '#FF8C8C' },
                              '&.Mui-focused fieldset': { borderColor: '#FF8C8C' },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Contact Number"
                          fullWidth
                          {...register('contact')}
                          error={!!errors.contact}
                          helperText={errors.contact?.message}
                          sx={{
                            '& .MuiInputLabel-root': { fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' },
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': { borderColor: '#FCECDD' },
                              '&:hover fieldset': { borderColor: '#FF8C8C' },
                              '&.Mui-focused fieldset': { borderColor: '#FF8C8C' },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Capacity"
                          type="number"
                          fullWidth
                          {...register('capacity')}
                          error={!!errors.capacity}
                          helperText={errors.capacity?.message}
                          sx={{
                            '& .MuiInputLabel-root': { fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' },
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': { borderColor: '#FCECDD' },
                              '&:hover fieldset': { borderColor: '#FF8C8C' },
                              '&.Mui-focused fieldset': { borderColor: '#FF8C8C' },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          component="label"
                          startIcon={<Image />}
                          sx={{
                            fontFamily: '"Montserrat", sans-serif',
                            color: '#4B4B4B',
                            borderColor: '#FCECDD',
                            borderRadius: 1,
                            '&:hover': { borderColor: '#FF8C8C', background: '#FCECDD' },
                          }}
                        >
                          Upload Image
                          <input type="file" accept="image/*" hidden onChange={handleImageChange} />
                        </Button>
                        {imagePreview && <StyledImage src={imagePreview} alt="Preview" />}
                      </Grid>
                      <Grid item xs={12}>
                        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                          <StyledButton type="submit">
                            {editingPalace ? 'Update' : 'Add'}
                          </StyledButton>
                          <StyledSecondaryButton onClick={() => setShowForm(false)}>
                            Cancel
                          </StyledSecondaryButton>
                        </Box>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </StyledFormCard>
            </motion.div>
          )}
          <Grid container spacing={3}>
            {palaces.map(palace => (
              <Grid item xs={12} sm={6} key={palace.id}>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <StyledCard>
                    <CardContent>
                      {palace.imageUrl && <StyledImage src={palace.imageUrl} alt={palace.name} sx={{ display: 'block', mx: 'auto' }} />}
                      <CardTypography variant="h6" align="center">
                        {palace.name}
                      </CardTypography>
                      <BodyTypography variant="body2" align="center">
                        Address: {palace.address}
                      </BodyTypography>
                      <BodyTypography variant="body2" align="center">
                        Contact: {palace.contact}
                      </BodyTypography>
                      <BodyTypography variant="body2" align="center">
                        Capacity: {palace.capacity}
                      </BodyTypography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center', gap: 1 }}>
                      <StyledButton
                        size="small"
                        onClick={() => {
                          setEditingPalace(palace);
                          setShowForm(true);
                          setValue('name', palace.name);
                          setValue('address', palace.address);
                          setValue('contact', palace.contact);
                          setValue('capacity', palace.capacity);
                          setImagePreview(palace.imageUrl || null);
                        }}
                      >
                        Edit
                      </StyledButton>
                      <StyledSecondaryButton
                        size="small"
                        onClick={() => setDeleteDialog({ open: true, id: palace.id })}
                      >
                        Delete
                      </StyledSecondaryButton>
                    </CardActions>
                  </StyledCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
          <StyledDialog
            open={deleteDialog.open}
            onClose={() => setDeleteDialog({ open: false, id: null })}
          >
            <DialogTitle>
              <CardTypography>Confirm Deletion</CardTypography>
            </DialogTitle>
            <DialogContent>
              <BodyTypography>Are you sure you want to delete this palace?</BodyTypography>
            </DialogContent>
            <DialogActions>
              <StyledSecondaryButton onClick={() => setDeleteDialog({ open: false, id: null })}>
                Cancel
              </StyledSecondaryButton>
              <StyledButton onClick={handleDelete}>Delete</StyledButton>
            </DialogActions>
          </StyledDialog>
        </CenteredBox>
      </StyledContainer>
      </StyledBackgroundBox>
    </motion.div>
  );
};

const DecorItemManagement = () => {
  const [user] = useAuthState(auth);
  const [decorItems, setDecorItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingDecorItem, setEditingDecorItem] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [decorImage, setDecorImage] = useState(null);
  const [deleteDialog, setDeleteDialog] = useState({ open: false, id: null });

  const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(decorItemSchema),
  });

  useEffect(() => {
    if (user) fetchDecorItems();
  }, [user]);

  const fetchDecorItems = async () => {
    try {
      setLoading(true);
      const data = await getDecorItems(user.uid);
      setDecorItems(data);
    } catch (error) {
      alert('Failed to fetch decor items: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      if (editingDecorItem) {
        await updateDecorItem(user.uid, editingDecorItem.id, data, decorImage);
        setEditingDecorItem(null);
      } else {
        await addDecorItem(user.uid, data, decorImage);
      }
      reset();
      setShowForm(false);
      setImagePreview(null);
      setDecorImage(null);
      fetchDecorItems();
    } catch (error) {
      alert('Failed to save decor item: ' + error.message);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteDecorItem(user.uid, deleteDialog.id);
      setDeleteDialog({ open: false, id: null });
      fetchDecorItems();
    } catch (error) {
      alert('Failed to delete decor item: ' + error.message);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setDecorImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <StyledBackgroundBox>
        <Navbar user={{ name: user?.displayName || 'Halwai' }} role="halwai" />
        <StyledContainer>
          <LoadingContainer>
            <JalebiSpinner viewBox="0 0 100 100">
              <defs>
                <linearGradient id="jalebiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#FF8C8C', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#FFC288', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path d="M50 10 C30 10 10 30 10 50 C10 70 30 90 50 90 C70 90 90 70 90 50 C90 30 70 10 50 10 M50 20 C35 20 20 35 20 50 C20 65 35 80 50 80 C65 80 80 65 80 50 C80 35 65 20 50 20" />
            </JalebiSpinner>
          </LoadingContainer>
        </StyledContainer>
        </StyledBackgroundBox>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <StyledBackgroundBox>
      <Navbar user={{ name: user?.displayName || 'Halwai' }} role="halwai" />
      <StyledContainer>
        <CenteredBox>
          <HeaderTypography variant="h4" align="center" sx={{ mb: 4 }}>
            Manage Tent/Light Decor
          </HeaderTypography>
          <StyledButton
            startIcon={<Add />}
            onClick={() => {
              setShowForm(true);
              setEditingDecorItem(null);
              reset();
              setImagePreview(null);
            }}
            sx={{ mb: 3 }}
          >
            Add Decor
          </StyledButton>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <StyledFormCard>
                <CardContent>
                  <CardTypography variant="h6" sx={{ mb: 2 }}>
                    {editingDecorItem ? 'Edit Decor' : 'Add Decor'}
                  </CardTypography>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          label="Name"
                          fullWidth
                          {...register('name')}
                          error={!!errors.name}
                          helperText={errors.name?.message}
                          sx={{
                            '& .MuiInputLabel-root': { fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' },
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': { borderColor: '#FCECDD' },
                              '&:hover fieldset': { borderColor: '#FF8C8C' },
                              '&.Mui-focused fieldset': { borderColor: '#FF8C8C' },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Mobile Number"
                          fullWidth
                          {...register('mobile')}
                          error={!!errors.mobile}
                          helperText={errors.mobile?.message}
                          sx={{
                            '& .MuiInputLabel-root': { fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' },
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': { borderColor: '#FCECDD' },
                              '&:hover fieldset': { borderColor: '#FF8C8C' },
                              '&.Mui-focused fieldset': { borderColor: '#FF8C8C' },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Address"
                          fullWidth
                          {...register('address')}
                          error={!!errors.address}
                          helperText={errors.address?.message}
                          sx={{
                            '& .MuiInputLabel-root': { fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' },
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': { borderColor: '#FCECDD' },
                              '&:hover fieldset': { borderColor: '#FF8C8C' },
                              '&.Mui-focused fieldset': { borderColor: '#FF8C8C' },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          component="label"
                          startIcon={<Image />}
                          sx={{
                            fontFamily: '"Montserrat", sans-serif',
                            color: '#4B4B4B',
                            borderColor: '#FCECDD',
                            borderRadius: 1,
                            '&:hover': { borderColor: '#FF8C8C', background: '#FCECDD' },
                          }}
                        >
                          Upload Image
                          <input type="file" accept="image/*" hidden onChange={handleImageChange} />
                        </Button>
                        {imagePreview && <StyledImage src={imagePreview} alt="Preview" />}
                      </Grid>
                      <Grid item xs={12}>
                        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                          <StyledButton type="submit">
                            {editingDecorItem ? 'Update' : 'Add'}
                          </StyledButton>
                          <StyledSecondaryButton onClick={() => setShowForm(false)}>
                            Cancel
                          </StyledSecondaryButton>
                        </Box>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </StyledFormCard>
            </motion.div>
          )}
          <Grid container spacing={3}>
            {decorItems.map(item => (
              <Grid item xs={12} sm={6} key={item.id}>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <StyledCard>
                    <CardContent>
                      {item.imageUrl && <StyledImage src={item.imageUrl} alt={item.name} sx={{ display: 'block', mx: 'auto' }} />}
                      <CardTypography variant="h6" align="center">
                        {item.name}
                      </CardTypography>
                      <BodyTypography variant="body2" align="center">
                        Mobile: {item.mobile}
                      </BodyTypography>
                      <BodyTypography variant="body2" align="center">
                        Address: {item.address}
                      </BodyTypography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center', gap: 1 }}>
                      <StyledButton
                        size="small"
                        onClick={() => {
                          setEditingDecorItem(item);
                          setShowForm(true);
                          setValue('name', item.name);
                          setValue('mobile', item.mobile);
                          setValue('address', item.address);
                          setImagePreview(item.imageUrl || null);
                        }}
                      >
                        Edit
                      </StyledButton>
                      <StyledSecondaryButton
                        size="small"
                        onClick={() => setDeleteDialog({ open: true, id: item.id })}
                      >
                        Delete
                      </StyledSecondaryButton>
                    </CardActions>
                  </StyledCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
          <StyledDialog
            open={deleteDialog.open}
            onClose={() => setDeleteDialog({ open: false, id: null })}
          >
            <DialogTitle>
              <CardTypography>Confirm Deletion</CardTypography>
            </DialogTitle>
            <DialogContent>
              <BodyTypography>Are you sure you want to delete this decor item?</BodyTypography>
            </DialogContent>
            <DialogActions>
              <StyledSecondaryButton onClick={() => setDeleteDialog({ open: false, id: null })}>
                Cancel
              </StyledSecondaryButton>
              <StyledButton onClick={handleDelete}>Delete</StyledButton>
            </DialogActions>
          </StyledDialog>
        </CenteredBox>
      </StyledContainer>
      </StyledBackgroundBox>
    </motion.div>
  );
};

const CategoryManagementRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CategoryManagement />} />
      <Route path="/khana_khazana" element={<KhanaKhazanaSubCategory />} />
      <Route path="/khana_khazana/subcategory/:subCategoryId" element={<DishManagement />} />
      <Route path="/palace" element={<PalaceManagement />} />
      <Route path="/tent_light_decor" element={<DecorItemManagement />} />
    </Routes>
  );
};

export default CategoryManagementRoutes;