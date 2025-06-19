import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './RoleSelection.css';

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    navigate(role === 'halwai' ? '/halwai/login' : '/customer/login');
  };

  return (
    <div className="role-selection-container">
      <h1>Welcome to HalwaiConnect</h1>
      <p>Are you a Halwai or a Customer?</p>
      <div className="role-buttons">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleRoleSelect('halwai')}
          className="role-button halwai"
        >
          I'm a Halwai
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleRoleSelect('customer')}
          className="role-button customer"
        >
          I'm a Customer
        </motion.button>
      </div>
    </div>
  );
};

export default RoleSelection;