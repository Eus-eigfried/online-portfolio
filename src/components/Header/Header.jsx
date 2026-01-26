import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { getIcon } from '../../utils/iconUtils';
import './Header.css';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [showNav, setShowNav] = useState(false);

  const sections = [
    { id: 'profile', icon: 'user', label: 'Profile' },
    { id: 'resumes', icon: 'fileText', label: 'Resumes' },
    { id: 'contact', icon: 'mail', label: 'Contact' },
    { id: 'education', icon: 'graduationCap', label: 'Education' },
    { id: 'work-experience', icon: 'briefcase', label: 'Work Experience' },
    { id: 'skills', icon: 'code', label: 'Skills' },
    { id: 'hobbies', icon: 'heart', label: 'Hobbies' },
    { id: 'projects', icon: 'folderOpen', label: 'Projects' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setShowNav(false);
    }
  };

  return (
    <motion.header
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="header-content">
        <motion.button
          className="nav-toggle"
          onClick={() => setShowNav(!showNav)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {getIcon('menu', 24)}
        </motion.button>

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

      <AnimatePresence>
        {showNav && (
          <motion.div
            className="header-nav-dropdown"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="nav-icons">
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  className="nav-icon-wrapper"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => scrollToSection(section.id)}
                >
                  <div className="nav-icon-box">
                    {getIcon(section.icon, 20)}
                    <span className="nav-tooltip">{section.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;