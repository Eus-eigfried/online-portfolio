import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../../data/projectsData';
import { getIcon } from '../../utils/iconUtils';
import './PreviousWorks.css';

const PreviousWorks = () => {
  const [selectedWork, setSelectedWork] = useState(null);

  return (
    <motion.section
      className="previous-works-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.div
          className="works-title-box"
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
          >
            Previous Works
          </motion.h2>
        </motion.div>
        
        <div className="works-grid">
          {projectsData.map((work, index) => (
            <motion.div
              key={index}
              className="work-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.15 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="work-preview">
                <motion.div
                  className="preview-image"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={`/images/projects/project-${index + 1}.png`}
                    alt={work.title}
                    className="preview-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.querySelector('.fallback-icon').style.display = 'flex';
                    }}
                  />
                  <div className="fallback-icon" style={{ display: 'none' }}>
                    {getIcon('folderOpen', 60)}
                  </div>
                </motion.div>
              </div>
              
              <div className="work-info">
                <h3 className="work-title">{work.title}</h3>
                <motion.button
                  className="view-project-button"
                  onClick={() => setSelectedWork(work)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedWork && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedWork(null)}
          >
            <motion.div
              className="work-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h3>{selectedWork.title}</h3>
                <motion.button
                  className="close-button"
                  onClick={() => setSelectedWork(null)}
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {getIcon('x', 24)}
                </motion.button>
              </div>
              
              <div className="modal-content">
                <div className="modal-section">
                  <h4>Description</h4>
                  <p>{selectedWork.description}</p>
                </div>
                
                <div className="modal-section">
                  <h4>What I Learned</h4>
                  <p>{selectedWork.learned}</p>
                </div>
                
                {selectedWork.link && (
                  <div className="modal-section">
                    <h4>Link to Project</h4>
                    <motion.a
                      href={selectedWork.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {getIcon('externalLink', 20)}
                      <span>View Project</span>
                    </motion.a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default PreviousWorks;