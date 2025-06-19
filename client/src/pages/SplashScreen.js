import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './SplashScreen.css';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/role-selection');
    }, 5000); 
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div
      className="splash-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="splash-video"
      >
        <source src="assets/videos/splash-video.mp4" type="video/mp4"/>
        <source src= "assets/videos/splash-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="splash-overlay">
        <h1>HalwaiConnect</h1>
        <p>Connecting Halwais & Customers</p>
      </div>
    </motion.div>
  );
};

export default SplashScreen;