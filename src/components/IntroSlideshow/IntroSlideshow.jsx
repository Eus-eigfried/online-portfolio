import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { getIcon } from '../../utils/iconUtils';
import { profileData } from '../../data/profileData';
import { workExperienceData } from '../../data/workExperienceData';
import { educationData } from '../../data/educationData';
import { projectsData } from '../../data/projectsData';
import { skillsData } from '../../data/skillsData';
import { hobbiesData } from '../../data/hobbiesData';
import { contactData } from '../../data/contactData';
import './IntroSlideshow.css';

const IntroSlideshow = ({ onComplete }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typewriterText, setTypewriterText] = useState('');
  const [showContinue, setShowContinue] = useState(false);
  const containerRef = useRef(null);

  // Generate random positions for skills without overlap
  const generateSkillPositions = (skills) => {
    const positions = [];
    const containerWidth = 800;
    const containerHeight = 500;
    const bubbleSize = 120;
    
    for (let i = 0; i < skills.length; i++) {
      let position;
      let attempts = 0;
      const maxAttempts = 100;
      
      do {
        position = {
          x: Math.random() * (containerWidth - bubbleSize - 50) + 25,
          y: Math.random() * (containerHeight - bubbleSize - 50) + 25
        };
        attempts++;
      } while (
        // eslint-disable-next-line no-loop-func
        attempts < maxAttempts && positions.some(pos => {
        const distance = Math.sqrt(
          Math.pow(pos.x - position.x, 2) + 
          Math.pow(pos.y - position.y, 2)
        );
        return distance < bubbleSize + 20; // 20px gap between bubbles
      }));
      
      positions.push(position);
    }
    
    return positions;
  };

  const skillPositions = generateSkillPositions(skillsData);

  const slides = [
    {
      type: 'theme',
      text: 'For a better experience, choose your preferred theme',
      render: () => (
        <div className="slide-content theme-slide">
          <p>{typewriterText}</p>
          <motion.button
            className="theme-continue-btn"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDarkMode ? getIcon('sun', 24) : getIcon('moon', 24)}
          </motion.button>
        </div>
      )
    },
    {
      type: 'text',
      text: 'Hello World!',
      render: () => (
        <div className="slide-content text-slide">
          <p className="typewriter-text">{typewriterText}</p>
        </div>
      )
    },
    {
      type: 'text',
      text: `My name is ${profileData.fullName}!`,
      render: () => (
        <div className="slide-content text-slide">
          <p className="typewriter-text">{typewriterText}</p>
        </div>
      )
    },
    {
      type: 'text',
      text: `A Computer Engineering Student aspiring to be a Cybersecurity Engineer.`,
      render: () => (
        <div className="slide-content text-slide">
          <p className="typewriter-text">{typewriterText}</p>
        </div>
      )
    },
    {
      type: 'about',
      text: 'About Me:',
      render: () => (
        <div className="slide-content about-slide">
          <div className="about-layout">
            <div className="about-text">
              <h2>{typewriterText}</h2>
            </div>
            <div className="aside-bar">
              <div className="aside-item">
                <span className="aside-label">Birthdate:</span>
                <span className="aside-value">{profileData.birthdate}</span>
              </div>
              <div className="aside-item">
                <span className="aside-label">Address:</span>
                <span className="aside-value">{contactData[1]?.value || ''}</span>
              </div>
              <div className="aside-item">
                <span className="aside-label">Hobbies:</span>
                <div className="aside-hobbies">
                  {hobbiesData.map((hobby, index) => (
                    <div key={index} className="hobby-tag">
                      {getIcon(hobby.icon, 24)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      type: 'work',
      text: 'My Work Experience:',
      render: () => (
        <div className="slide-content work-slide">
          <h2>{typewriterText}</h2>
          <div className="work-list">
            {workExperienceData.map((work, index) => (
              <motion.div
                key={index}
                className="work-item"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3 }}
              >
                <h3>{work.title}</h3>
                <p className="company">{work.company}</p>
                <p className="dates">{work.startDate} - {work.endDate}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )
    },
    {
      type: 'education',
      text: 'My Education:',
      render: () => (
        <div className="slide-content education-slide">
          <div className="education-layout">
            <div className="aside-scroll">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  className="edu-item"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.3 }}
                >
                  <span className="edu-level">{edu.level}</span>
                  <h3>{edu.name}</h3>
                  <p className="edu-year">{edu.yearGraduated}</p>
                </motion.div>
              ))}
            </div>
            <div className="education-text">
              <h2>{typewriterText}</h2>
              <div className="education-logos">
                {educationData.map((edu, index) => (
                  <motion.img
                    key={index}
                    src={`${process.env.PUBLIC_URL}/images/education/education-${index + 1}.png`}
                    alt={edu.name}
                    className="edu-logo"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      type: 'projects',
      text: 'Projects:',
      render: () => (
        <div className="slide-content projects-slide">
          <h2>{typewriterText}</h2>
          <div className="projects-grid">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                className="project-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/projects/project-${index + 1}.png`}
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      )
    },
    {
      type: 'skills',
      text: 'Skills:',
      render: () => (
        <div className="slide-content skills-slide">
          <h2>{typewriterText}</h2>
          <div className="skills-popup" ref={containerRef}>
            {skillsData.map((skill, index) => {
              const position = skillPositions[index];
              return (
                <motion.div
                  key={index}
                  className="skill-bubble"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.15 }}
                  style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`
                  }}
                >
                  {getIcon(skill.icon, 30)}
                  <span>{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      )
    },
    {
      type: 'contact',
      text: 'Contact Me:',
      render: () => (
        <div className="slide-content contact-slide">
          <h2>{typewriterText}</h2>
          <div className="contact-list">
            {contactData.map((contact, index) => (
              <motion.div
                key={index}
                className="contact-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3 }}
              >
                {getIcon(contact.type, 24)}
                <span>{contact.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      )
    },
    {
      type: 'text',
      text: 'Hope to connect with you soon!',
      render: () => (
        <div className="slide-content text-slide">
          <p className="typewriter-text">{typewriterText}</p>
        </div>
      )
    }
  ];

  useEffect(() => {
    if (currentSlide < slides.length) {
      const slide = slides[currentSlide];
      let charIndex = 0;
      setTypewriterText('');

      const typewriter = setInterval(() => {
        if (charIndex <= slide.text.length) {
          setTypewriterText(slide.text.substring(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typewriter);
          setShowContinue(true);
        }
      }, 50);

      return () => clearInterval(typewriter);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  const handleContinue = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
      setShowContinue(false);
    } else {
      onComplete();
    }
  };

  return (
    <div className="intro-slideshow">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="slide"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          {slides[currentSlide]?.render()}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {showContinue && (
          <motion.button
            className="continue-btn"
            onClick={handleContinue}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Continue
            {getIcon('arrowRight', 20)}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IntroSlideshow;