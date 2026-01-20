import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '../../data/resumeData';
import { getIcon } from '../../utils/iconUtils';
import './ResumeSection.css';

const ResumeSection = () => {
  const [showModal, setShowModal] = useState(null);

  return (
    <motion.section
      className="resume-section section-glow"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.div
          className="resume-title-box"
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
            Resumes
          </motion.h2>
        </motion.div>
        
        <div className="resume-container">
          {resumeData.map((resume, index) => (
            <motion.div
              key={index}
              className="resume-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.2 }}
              whileHover={{ scale: 1.03, y: -10 }}
            >
              <div className="resume-preview">
                <motion.div
                  className="preview-placeholder"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={`/images/resumes/resume-${index + 1}.png`}
                    alt={resume.type}
                    className="resume-preview-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.querySelector('.fallback-icon').style.display = 'flex';
                    }}
                  />
                  <div className="fallback-icon" style={{ display: 'none' }}>
                    {getIcon('fileText', 80)}
                  </div>
                  <span className="preview-label">{resume.type}</span>
                </motion.div>
              </div>
              
              <motion.button
                className="view-button"
                onClick={() => setShowModal(resume)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {getIcon('eye', 20)}
                View Full Resume
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h3>{showModal.type}</h3>
                <motion.button
                  className="close-button"
                  onClick={() => setShowModal(null)}
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {getIcon('x', 24)}
                </motion.button>
              </div>
              
              <div className="modal-body">
                <iframe
                  src={showModal.file}
                  title={showModal.type}
                  className="pdf-viewer"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default ResumeSection;