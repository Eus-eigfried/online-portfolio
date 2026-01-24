import React from 'react';
import { motion } from 'framer-motion';
import { contactData } from '../../data/contactData';
import { getIcon } from '../../utils/iconUtils';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <motion.section
      id="contact"
      className="contact-section section-glow"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.div
          className="contact-title-box"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Contact Information
          </motion.h2>
        </motion.div>
        
        <div className="contact-grid">
          {contactData.map((item, index) => (
            <motion.div
              key={index}
              className="contact-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.15 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="contact-icon">
                {getIcon(item.type, 40)}
              </div>
              <div className="contact-details">
                <h3 className="contact-label">{item.label}</h3>
                <p className="contact-value">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ContactInfo;