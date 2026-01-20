
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { getIcon } from '../../utils/iconUtils';
import './Header.css';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.header
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="header-content">
        <motion.h1
          className="header-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Kyle Vincent T. Alcantara (CPE) Online Portfolio
        </motion.h1>
        
        <motion.button
          className="theme-toggle"
          onClick={toggleTheme}
          whileHover={{ scale: 1.1, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {isDarkMode ? getIcon('sun', 24) : getIcon('moon', 24)}
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;