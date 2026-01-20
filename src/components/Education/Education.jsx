import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../../data/educationData';
import { getIcon } from '../../utils/iconUtils';
import './Education.css';

const Education = () => {
  return (
    <motion.section
      className="education-section section-glow"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.div
          className="education-title-box"
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
            Education
          </motion.h2>
        </motion.div>
        
        <div className="education-grid">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="education-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.15 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="education-icon">
                <img
                  src={`${process.env.PUBLIC_URL}/images/education/education-${index + 1}.png`}
                  alt={item.name}
                  className="education-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.querySelector('.fallback-icon').style.display = 'flex';
                  }}
                />
                <div className="fallback-icon" style={{ display: 'none' }}>
                  {getIcon(item.icon, 50)}
                </div>
              </div>
              
              <div className="education-content">
                <span className="education-level">{item.level}</span>
                <h3 className="education-name">{item.name}</h3>
                <p className="education-details">{item.details}</p>
                <div className="education-year">
                  <span className="year-label">Year Graduated:</span>
                  <span className="year-value">{item.yearGraduated}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;