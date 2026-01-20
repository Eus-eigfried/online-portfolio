import React from 'react';
import { motion } from 'framer-motion';
import { getIcon } from '../../utils/iconUtils';
import './Footer.css';

const Footer = () => {
  const techStack = [
    {
      name: 'React',
      url: 'https://reactjs.org/',
      icon: 'react'
    },
    {
      name: 'VS Code',
      url: 'https://code.visualstudio.com/',
      icon: 'vscode'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/',
      icon: 'github'
    }
  ];

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            Made using
          </p>
          
          <div className="tech-logos">
            {techStack.map((tech, index) => (
              <motion.a
                key={index}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tech-logo"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                title={tech.name}
              >
                {tech.icon === 'github' ? getIcon('github', 50) : (
                  <img 
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`} 
                    alt={tech.name}
                  />
                )}
              </motion.a>
            ))}
          </div>
        </div>
        
        <motion.p
          className="footer-copyright"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          © {new Date().getFullYear()} Kyle Vincent T. Alcantara. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;