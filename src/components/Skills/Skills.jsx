import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../../data/skillsData';
import { getIcon } from '../../utils/iconUtils';
import './Skills.css';

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="skills-section section-glow"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.div
          className="skills-title-box"
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
            Skills
          </motion.h2>
        </motion.div>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="skill-icon">
                {getIcon(skill.icon, 40)}
              </div>
              
              <h3 className="skill-name">{skill.name}</h3>
              
              <div className="progress-container">
                <motion.div
                  className="progress-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                />
              </div>
              
              <div className="skill-percentage">
                {skill.percentage}%
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;