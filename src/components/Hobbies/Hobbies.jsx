import React from 'react';
import { motion } from 'framer-motion';
import { hobbiesData } from '../../data/hobbiesData';
import { getIcon } from '../../utils/iconUtils';
import './Hobbies.css';

const Hobbies = () => {
  return (
    <motion.section
      className="hobbies-section section-glow"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.div
          className="hobbies-title-box"
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
            Hobbies
          </motion.h2>
        </motion.div>
        
        <div className="hobbies-grid">
          {hobbiesData.map((hobby, index) => (
            <motion.div
              key={index}
              className="hobby-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="hobby-icon">
                {getIcon(hobby.icon, 50)}
              </div>
              
              <div className="hobby-content">
                <h3 className="hobby-name">{hobby.name}</h3>
                <p className="hobby-description">{hobby.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Hobbies;