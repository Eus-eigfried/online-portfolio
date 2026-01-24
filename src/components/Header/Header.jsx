import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { getIcon } from '../../utils/iconUtils';
import './Header.css';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const sections = [
    { id: 'profile', icon: 'user', label: 'Profile' },
    { id: 'resumes', icon: 'fileText', label: 'Resumes' },
    { id: 'contact', icon: 'mail', label: 'Contact' },
    { id: 'education', icon: 'graduationCap', label: 'Education' },
    { id: 'work', icon: 'briefcase', label: 'Work Experience' },
    { id: 'skills', icon: 'code', label: 'Skills' },
    { id: 'hobbies', icon: 'heart', label: 'Hobbies' },
    { id: 'projects', icon: 'folderOpen', label: 'Projects' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
        <motion.h1
          className="header-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Kyle Vincent T. Alcantara (CPE) Online Portfolio
        </motion.h1>

        <div className="header-actions">
          <motion.div
            className="section-icons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                className="section-icon-wrapper"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => scrollToSection(section.id)}
              >
                <div className="section-icon-box">
                  {getIcon(section.icon, 20)}
                  <span className="section-tooltip">{section.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {isDarkMode ? getIcon('sun', 24) : getIcon('moon', 24)}
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;