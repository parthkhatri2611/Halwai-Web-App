// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// import { auth, db } from '../../services/firebaseConfig';
// import { doc, setDoc } from 'firebase/firestore';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import {
//   Container,
//   Card,
//   CardContent,
//   Typography,
//   TextField,
//   Button,
//   Box,
//   InputAdornment,
//   IconButton,
//   Link,
// } from '@mui/material';
// import { Google as GoogleIcon, Visibility, VisibilityOff } from '@mui/icons-material';
// import { motion } from 'framer-motion';
// import { styled } from '@mui/material/styles';

// // Validation schema
// const schema = yup.object({
//   name: yup.string().required('Name is required'),
//   email: yup.string().email('Invalid email').required('Email is required'),
//   mobile: yup.string().matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits').required('Mobile is required'),
//   password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
// }).required();

// const StyledBackgroundBox = styled(Box)(({ theme }) => ({
//   background: 'linear-gradient(180deg, #FCECDD 0%, #FFF8F0 100%)',
//   minHeight: '100vh',
//   position: 'relative',
//   overflow: 'hidden',
//   display: 'flex',
//   '&::before': {
//     content: '""',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     background: 'url("data:image/svg+xml,%3Csvg opacity=\'0.03\' width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M50 20c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30zm0 50c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z\' fill=\'%23FF8C8C\'/%3E%3C/svg%3E") repeat',
//     zIndex: 0,
//   },
// }));

// const StyledContainer = styled(Container)(({ theme }) => ({
//   position: 'relative',
//   zIndex: 1,
//   height: '100vh', 
//   display: 'flex', 
//   alignItems: 'center',
//   justifyContent: 'center', 
//   [theme.breakpoints.down('sm')]: {
//     padding: theme.spacing(0, 2), 
//   },
// }));


// const CenteredBox = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
//   width: '100%',
//   height: '100%',
//   [theme.breakpoints.down('sm')]: {
//     padding: theme.spacing(2), 
//   },
// }));


// const StyledCard = styled(Card)(({ theme }) => ({
//   background: '#FFF8F0',
//   backdropFilter: 'blur(6px)',
//   borderRadius: theme.spacing(1.5),
//   boxShadow: '0 4px 12px rgba(75, 75, 75, 0.1)',
//   border: '1px solid #FCECDD',
//   padding: theme.spacing(4),
//   maxWidth: 500,
//   width: '100%',
//   zIndex: 1,
//   transition: 'all 0.3s ease',
//   '&:hover': {
//     transform: 'scale(1.05)',
//     boxShadow: '0 6px 16px rgba(255, 140, 140, 0.2)',
//   },
//   [theme.breakpoints.down('sm')]: {
//     padding: theme.spacing(2),
//     maxWidth: '90%',
//   },
// }));

// const StyledButton = styled(Button)(({ theme }) => ({
//   backgroundColor: '#FF8C8C',
//   color: '#FFF8F0',
//   fontFamily: '"Montserrat", sans-serif',
//   fontWeight: 600,
//   borderRadius: theme.spacing(1),
//   padding: theme.spacing(1.5, 3),
//   textTransform: 'none',
//   transition: 'all 0.2s ease',
//   '&:hover': {
//     backgroundColor: '#FCECDD',
//     color: '#FF8C8C',
//     boxShadow: '0 0 8px rgba(255, 194, 136, 0.3)',
//     transform: 'scale(1.05)',
//   },
//   '&:active': {
//     transform: 'scale(0.95)',
//   },
//   '&:disabled': {
//     backgroundColor: '#B0B0B0',
//     color: '#FFF8F0',
//   },
//   [theme.breakpoints.down('sm')]: {
//     padding: theme.spacing(1, 2),
//     fontSize: '0.9rem',
//   },
// }));

// const StyledSecondaryButton = styled(Button)(({ theme }) => ({
//   backgroundColor: '#FFC288',
//   color: '#FFF8F0',
//   fontFamily: '"Montserrat", sans-serif',
//   fontWeight: 600,
//   borderRadius: theme.spacing(1),
//   padding: theme.spacing(1.5, 3),
//   textTransform: 'none',
//   transition: 'all 0.2s ease',
//   '&:hover': {
//     backgroundColor: '#FCECDD',
//     color: '#FFC288',
//     boxShadow: '0 0 8px rgba(255, 194, 136, 0.3)',
//     transform: 'scale(1.05)',
//   },
//   '&:active': {
//     transform: 'scale(0.95)',
//   },
//   '&:disabled': {
//     backgroundColor: '#B0B0B0',
//     color: '#FFF8F0',
//   },
//   [theme.breakpoints.down('sm')]: {
//     padding: theme.spacing(1, 2),
//     fontSize: '0.9rem',
//   },
// }));

// const StyledLink = styled(Link)(({ theme }) => ({
//   color: '#FF8C8C',
//   fontFamily: '"Montserrat", sans-serif',
//   textDecoration: 'none',
//   '&:hover': {
//     textDecoration: 'underline',
//     color: '#FFC288',
//   },
//   [theme.breakpoints.down('sm')]: {
//     fontSize: '0.85rem',
//   },
// }));

// const HeaderTypography = styled(Typography)(({ theme }) => ({
//   fontFamily: '"Playfair Display", serif',
//   fontWeight: 700,
//   color: '#4B4B4B',
//   position: 'relative',
//   '&::after': {
//     content: '""',
//     position: 'absolute',
//     bottom: '-8px',
//     left: '50%',
//     width: '0',
//     height: '2px',
//     background: '#FF8C8C',
//     transition: 'width 0.3s ease, left 0.3s ease',
//   },
//   '&:hover::after': {
//     width: '50%',
//     left: '25%',
//   },
//   [theme.breakpoints.down('sm')]: {
//     fontSize: '1.8rem',
//   },
// }));

// const BodyTypography = styled(Typography)(({ theme }) => ({
//   fontFamily: '"Montserrat", sans-serif',
//   fontWeight: 400,
//   color: '#4B4B4B',
//   fontSize: '0.9rem',
//   opacity: 0.7,
//   [theme.breakpoints.down('sm')]: {
//     fontSize: '0.85rem',
//   },
// }));

// const JalebiSpinner = styled('svg')(({ theme }) => ({
//   width: '100px',
//   height: '100px',
//   animation: 'spin 2s linear infinite',
//   '@keyframes spin': {
//     '0%': { transform: 'rotate(0deg)' },
//     '100%': { transform: 'rotate(360deg)' },
//   },
//   '& path': {
//     fill: 'url(#jalebiGradient)',
//     filter: 'drop-shadow(0 0 8px rgba(255, 140, 140, 0.3))',
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: '80px',
//     height: '80px',
//   },
// }));

// const CustomerRegister = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = async (data) => {
//     setLoading(true);
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
//       await setDoc(doc(db, 'customers', userCredential.user.uid), {
//         name: data.name,
//         email: data.email,
//         mobile: data.mobile,
//         role: 'customer',
//       });
//       navigate('/customer/dashboard');
//     } catch (error) {
//       console.error('Registration error:', error.message);
//       alert('Registration failed: ' + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     setLoading(true);
//     const provider = new GoogleAuthProvider();
//     try {
//       const userCredential = await signInWithPopup(auth, provider);
//       await setDoc(doc(db, 'customers', userCredential.user.uid), {
//         name: userCredential.user.displayName || 'Customer',
//         email: userCredential.user.email || '',
//         mobile: '',
//         role: 'customer',
//       });
//       navigate('/customer/dashboard');
//     } catch (error) {
//       console.error('Google Sign-In error:', error.message);
//       alert('Google Sign-In failed: ' + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleTogglePassword = () => {
//     setShowPassword((prev) => !prev);
//   };

//   return (
//     <StyledBackgroundBox>
//     <StyledContainer>
//       <CenteredBox>
//         <motion.div
//   initial={{ opacity: 0, y: 20 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.6, ease: 'easeOut' }}
// >
//           <StyledCard>
//             <CardContent>
//               <HeaderTypography variant="h4" align="center" sx={{ mb: 4 }}>
//                 Customer Registration
//               </HeaderTypography>
//               <form onSubmit={handleSubmit(onSubmit)}>
//                 <TextField
//                   label="Full Name"
//                   fullWidth
//                   margin="normal"
//                   {...register('name')}
//                   error={!!errors.name}
//                   helperText={errors.name?.message}
//                   sx={{
//                     '& .MuiInputLabel-root': { fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' },
//                     '& .MuiOutlinedInput-root': {
//                       '& fieldset': { borderColor: '#FCECDD' },
//                       '&:hover fieldset': { borderColor: '#FF8C8C' },
//                       '&.Mui-focused fieldset': { borderColor: '#FF8C8C' },
//                       backgroundColor: '#FFF8F0',
//                     },
//                     '& .MuiFormHelperText-root': { fontFamily: '"Montserrat", sans-serif', color: '#FF8C8C' },
//                   }}
//                   InputProps={{
//                     style: { fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' },
//                   }}
//                 />
//                 <TextField
//                   label="Email Address"
//                   fullWidth
//                   margin="normal"
//                   {...register('email')}
//                   error={!!errors.email}
//                   helperText={errors.email?.message}
//                   sx={{
//                     '& .MuiInputLabel-root': { fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' },
//                     '& .MuiOutlinedInput-root': {
//                       '& fieldset': { borderColor: '#FCECDD' },
//                       '&:hover fieldset': { borderColor: '#FF8C8C' },
//                       '&.Mui-focused fieldset': { borderColor: '#FF8C8C' },
//                       backgroundColor: '#FFF8F0',
//                     },
//                     '& .MuiFormHelperText-root': { fontFamily: '"Montserrat", sans-serif', color: '#FF8C8C' },
//                   }}
//                   InputProps={{
//                     style: { fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' },
//                   }}
//                 />
//                 <TextField
//                   label="Mobile Number"
//                   fullWidth
//                   margin="normal"
//                   {...register('mobile')}
//                   error={!!errors.mobile}
//                   helperText={errors.mobile?.message}
//                   sx={{
//                     '& .MuiInputLabel-root': { fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' },
//                     '& .MuiOutlinedInput-root': {
//                       '& fieldset': { borderColor: '#FCECDD' },
//                       '&:hover fieldset': { borderColor: '#FF8C8C' },
//                       '&.Mui-focused fieldset': { borderColor: '#FF8C8C' },
//                       backgroundColor: '#FFF8F0',
//                     },
//                     '& .MuiFormHelperText-root': { fontFamily: '"Montserrat", sans-serif', color: '#FF8C8C' },
//                   }}
//                   InputProps={{
//                     style: { fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' },
//                   }}
//                 />
//                 <TextField
//                   label="Password"
//                   type={showPassword ? 'text' : 'password'}
//                   fullWidth
//                   margin="normal"
//                   {...register('password')}
//                   error={!!errors.password}
//                   helperText={errors.password?.message}
//                   sx={{
//                     '& .MuiInputLabel-root': { fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' },
//                     '& .MuiOutlinedInput-root': {
//                       '& fieldset': { borderColor: '#FCECDD' },
//                       '&:hover fieldset': { borderColor: '#FF8C8C' },
//                       '&.Mui-focused fieldset': { borderColor: '#FF8C8C' },
//                       backgroundColor: '#FFF8F0',
//                     },
//                     '& .MuiFormHelperText-root': { fontFamily: '"Montserrat", sans-serif', color: '#FF8C8C' },
//                   }}
//                   InputProps={{
//                     style: { fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' },
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton onClick={handleTogglePassword} edge="end" sx={{ color: '#4B4B4B' }}>
//                           {showPassword ? <VisibilityOff /> : <Visibility />}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//                 <StyledButton
//                   type="submit"
//                   fullWidth
//                   disabled={loading}
//                   sx={{ mt: 3 }}
//                 >
//                   {loading ? (
//                     <JalebiSpinner viewBox="0 0 100 100">
//                       <defs>
//                         <linearGradient id="jalebiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                           <stop offset="0%" style={{ stopColor: '#FF8C8C', stopOpacity: 1 }} />
//                           <stop offset="100%" style={{ stopColor: '#FFC288', stopOpacity: 1 }} />
//                         </linearGradient>
//                       </defs>
//                       <path d="M50 10 C30 10 10 30 10 50 C10 70 30 90 50 90 C70 90 90 70 90 50 C90 30 70 10 50 10 M50 20 C35 20 20 35 20 50 C20 65 35 80 50 80 C65 80 80 65 80 50 C80 35 65 20 50 20" />
//                     </JalebiSpinner>
//                   ) : (
//                     'Register'
//                   )}
//                 </StyledButton>
//                 <StyledSecondaryButton
//                   variant="contained"
//                   fullWidth
//                   startIcon={<GoogleIcon />}
//                   onClick={handleGoogleSignIn}
//                   disabled={loading}
//                   sx={{ mt: 2 }}
//                 >
//                   Sign Up with Google
//                 </StyledSecondaryButton>
//                 <Box sx={{ mt: 2, textAlign: 'center' }}>
//                   <BodyTypography>
//                     Already have an account?{' '}
//                     <StyledLink
//                       href="#"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         navigate('/customer/login');
//                       }}
//                     >
//                       Log In
//                     </StyledLink>
//                   </BodyTypography>
//                 </Box>
//               </form>
//             </CardContent>
//           </StyledCard>
//         </motion.div>
//       </CenteredBox>
//     </StyledContainer>
//     </StyledBackgroundBox>  
//   );
// };

// export default CustomerRegister;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, db } from '../../services/firebaseConfig';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  InputAdornment,
  IconButton,
  Link,
} from '@mui/material';
import { Google as GoogleIcon, Visibility, VisibilityOff } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  mobile: yup.string().matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits').required('Mobile is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
}).required();

const StyledBackgroundBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(180deg, #FCECDD 0%, #FFF8F0 100%)',
  minHeight: '100vh',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
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
  position: 'relative',
  zIndex: 1,
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0, 2),
  },
}));

const CenteredBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  background: '#FFF8F0',
  backdropFilter: 'blur(6px)',
  borderRadius: theme.spacing(1.5),
  boxShadow: '0 4px 12px rgba(75, 75, 75, 0.1)',
  border: '1px solid #FCECDD',
  padding: theme.spacing(4),
  maxWidth: 500,
  width: '100%',
  zIndex: 1,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 16px rgba(255, 140, 140, 0.2)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    maxWidth: '90%',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FF8C8C',
  color: '#FFF8F0',
  fontFamily: '"Montserrat", sans-serif',
  fontWeight: 600,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1.5, 3),
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
  '&:disabled': {
    backgroundColor: '#B0B0B0',
    color: '#FFF8F0',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1, 2),
    fontSize: '0.9rem',
  },
}));

const StyledSecondaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FFC288',
  color: '#FFF8F0',
  fontFamily: '"Montserrat", sans-serif',
  fontWeight: 600,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1.5, 3),
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
  '&:disabled': {
    backgroundColor: '#B0B0B0',
    color: '#FFF8F0',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1, 2),
    fontSize: '0.9rem',
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: '#FF8C8C',
  fontFamily: '"Montserrat", sans-serif',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
    color: '#FFC288',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.85rem',
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

const CustomerRegister = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await setDoc(doc(db, 'customers', userCredential.user.uid), {
        name: data.name,
        email: data.email,
        mobile: data.mobile,
        role: 'customer',
      });
      navigate('/customer/dashboard');
    } catch (error) {
      console.error('Registration error:', error.message);
      alert('Registration failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const userRef = doc(db, 'customers', userCredential.user.uid);
      const userDoc = await getDoc(userRef);
      
      if (!userDoc.exists()) {
        await setDoc(userRef, {
          name: userCredential.user.displayName || 'Customer_' + userCredential.user.uid.slice(0, 8),
          email: userCredential.user.email || '',
          mobile: '',
          role: 'customer',
        });
      }
      navigate('/customer/dashboard');
    } catch (error) {
      console.error('Google Sign-In error:', error.message);
      alert('Google Sign-In failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <StyledBackgroundBox>
      <StyledContainer>
        <CenteredBox>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <StyledCard>
              <CardContent>
                <HeaderTypography variant="h4" align="center" sx={{ mb: 4 }}>
                  Customer Registration
                </HeaderTypography>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <TextField
                    label="Full Name"
                    fullWidth
                    margin="normal"
                    {...register('name')}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    sx={{
                      '& .MuiInputLabel-root': { fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#FCECDD' },
                        '&:hover fieldset': { borderColor: '#FF8C8C' },
                        '&.Mui-focused fieldset': { borderColor: '#FF8C8C' },
                        backgroundColor: '#FFF8F0',
                      },
                      '& .MuiFormHelperText-root': { fontFamily: '"Montserrat", sans-serif', color: '#FF8C8C' },
                    }}
                    InputProps={{
                      style: { fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' },
                    }}
                  />
                  <TextField
                    label="Email Address"
                    fullWidth
                    margin="normal"
                    {...register('email')}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    sx={{
                      '& .MuiInputLabel-root': { fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#FCECDD' },
                        '&:hover fieldset': { borderColor: '#FF8C8C' },
                        '&.Mui-focused fieldset': { borderColor: '#FF8C8C' },
                        backgroundColor: '#FFF8F0',
                      },
                      '& .MuiFormHelperText-root': { fontFamily: '"Montserrat", sans-serif', color: '#FF8C8C' },
                    }}
                    InputProps={{
                      style: { fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' },
                    }}
                  />
                  <TextField
                    label="Mobile Number"
                    fullWidth
                    margin="normal"
                    {...register('mobile')}
                    error={!!errors.mobile}
                    helperText={errors.mobile?.message}
                    sx={{
                      '& .MuiInputLabel-root': { fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#FCECDD' },
                        '&:hover fieldset': { borderColor: '#FF8C8C' },
                        '&.Mui-focused fieldset': { borderColor: '#FF8C8C' },
                        backgroundColor: '#FFF8F0',
                      },
                      '& .MuiFormHelperText-root': { fontFamily: '"Montserrat", sans-serif', color: '#FF8C8C' },
                    }}
                    InputProps={{
                      style: { fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' },
                    }}
                  />
                  <TextField
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    fullWidth
                    margin="normal"
                    {...register('password')}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    sx={{
                      '& .MuiInputLabel-root': { fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#FCECDD' },
                        '&:hover fieldset': { borderColor: '#FF8C8C' },
                        '&.Mui-focused fieldset': { borderColor: '#FF8C8C' },
                        backgroundColor: '#FFF8F0',
                      },
                      '& .MuiFormHelperText-root': { fontFamily: '"Montserrat", sans-serif', color: '#FF8C8C' },
                    }}
                    InputProps={{
                      style: { fontFamily: '"Montserrat", sans-serif', color: '#4B4B4B' },
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleTogglePassword} edge="end" sx={{ color: '#4B4B4B' }}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <StyledButton
                    type="submit"
                    fullWidth
                    disabled={loading}
                    sx={{ mt: 3 }}
                  >
                    {loading ? (
                      <JalebiSpinner viewBox="0 0 100 100">
                        <defs>
                          <linearGradient id="jalebiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#FF8C8C', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#FFC288', stopOpacity: 1 }} />
                          </linearGradient>
                        </defs>
                        <path d="M50 10 C30 10 10 30 10 50 C10 70 30 90 50 90 C70 90 90 70 90 50 C90 30 70 10 50 10 M50 20 C35 20 20 35 20 50 C20 65 35 80 50 80 C65 80 80 65 80 50 C80 35 65 20 50 20" />
                      </JalebiSpinner>
                    ) : (
                      'Register'
                    )}
                  </StyledButton>
                  <StyledSecondaryButton
                    variant="contained"
                    fullWidth
                    startIcon={<GoogleIcon />}
                    onClick={handleGoogleSignIn}
                    disabled={loading}
                    sx={{ mt: 2 }}
                  >
                    Sign Up with Google
                  </StyledSecondaryButton>
                  <Box sx={{ mt: 2, textAlign: 'center' }}>
                    <BodyTypography>
                      Already have an account?{' '}
                      <StyledLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          navigate('/customer/login');
                        }}
                      >
                        Log In
                      </StyledLink>
                    </BodyTypography>
                  </Box>
                </form>
              </CardContent>
            </StyledCard>
          </motion.div>
        </CenteredBox>
      </StyledContainer>
    </StyledBackgroundBox>
  );
};

export default CustomerRegister;