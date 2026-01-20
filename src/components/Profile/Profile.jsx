import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/profileData';
import { getIcon } from '../../utils/iconUtils';
import './Profile.css';

const Profile = () => {
  return (
    <motion.section
      className="profile-section section-glow"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.div
          className="profile-card"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="id-card">
            <div className="id-photo">
              <motion.div
                className="photo-placeholder"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/profile/Kyle.jpg`}
                  alt={profileData.fullName}
                  className="profile-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.querySelector('.photo-initials').style.display = 'flex';
                  }}
                />
                <div className="photo-initials">
                  {profileData.fullName.split(' ').map(name => name[0]).join('')}
                </div>
              </motion.div>
            </div>
            
            <div className="id-info">
              <h3 className="id-name">{profileData.fullName}</h3>
              <p className="id-title">{profileData.title}</p>
              <p className="id-birthdate">Birthdate: {profileData.birthdate}</p>
              <p className="id-introduction">{profileData.introduction}</p>
              
              <div className="social-links">
                {profileData.socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ backgroundColor: getLinkColor(link.name) }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    title={link.name}
                  >
                    {getIcon(link.icon, 24)}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

const getLinkColor = (name) => {
  const colors = {
    'Facebook': '#1877F2',
    'LinkedIn': '#0077B5',
    'Indeed': '#2557a7',
    'Jobstreet': '#FF7A00'
  };
  return colors[name] || '#22c55e';
};

export default Profile;