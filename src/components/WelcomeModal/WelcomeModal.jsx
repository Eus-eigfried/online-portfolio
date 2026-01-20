import React from 'react';
import { motion } from 'framer-motion';
import './WelcomeModal.css';

const WelcomeModal = ({ onClose }) => {
  return (
    <motion.div
      className="welcome-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="welcome-modal"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="welcome-content">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Welcome!
          </motion.h1>
          
          <motion.div
            className="welcome-message"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p>
              <strong>Important Notice:</strong> All information, materials, and content displayed on this portfolio website are the personal and related information of Kyle Vincent T. Alcantara. Any unauthorized use, reproduction, distribution, or exploitation of this content, including the use of my name, likeness, or personal information for any illegal or fraudulent activities, is strictly prohibited.
            </p>
            <p>
              Violators will be prosecuted to the fullest extent of the law under applicable legislation, including but not limited to:
            </p>
            <ul>
              <li>Data Privacy Act of 2012 (Republic Act No. 10173)</li>
              <li>Cybercrime Prevention Act of 2012 (Republic Act No. 10175)</li>
              <li>Anti-Identity Theft Law (Republic Act No. 10173)</li>
              <li>Revised Penal Code of the Philippines</li>
            </ul>
            <p>
              By accessing this website, you acknowledge and agree to these terms and conditions.
            </p>
          </motion.div>
          
          <motion.button
            className="accept-button"
            onClick={onClose}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            I Accept
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeModal;