import React from 'react';
import { motion } from 'framer-motion';
import { workExperienceData } from '../../data/workExperienceData';
import { getIcon } from '../../utils/iconUtils';
import './WorkExperience.css';

const WorkExperience = () => {
  return (
    <motion.section
      id="work"
      className="work-experience-section section-glow"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.div
          className="work-title-box"
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
            Work Experience
          </motion.h2>
        </motion.div>
        
        <div className="work-experience-grid">
          {workExperienceData.map((work, index) => (
            <motion.div
              key={index}
              className="work-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.2 }}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              <div className="work-cover">
                <img
                  src={`${process.env.PUBLIC_URL}/images/work/work-${index + 1}.jpg`}
                  alt={`${work.company} - ${work.title}`}
                  className="work-cover-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.querySelector('.cover-content').style.display = 'flex';
                  }}
                />
                <div className="cover-content" style={{ display: 'none' }}>
                  {getIcon('briefcase', 60)}
                  <span className="cover-title">Work Experience</span>
                </div>
              </div>
              
              <div className="work-details">
                <h3 className="work-title">{work.title}</h3>
                <h4 className="work-company">{work.company}</h4>
                
                <div className="work-dates">
                  <div className="date-item">
                    {getIcon('calendar', 18)}
                    <span className="date-label">Start:</span>
                    <span className="date-value">{work.startDate}</span>
                  </div>
                  <div className="date-item">
                    {getIcon('calendar', 18)}
                    <span className="date-label">End:</span>
                    <span className="date-value">{work.endDate}</span>
                  </div>
                </div>
                
                <p className="work-description">{work.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WorkExperience;