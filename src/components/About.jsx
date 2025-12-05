import React from 'react'
import ArjunImage from "../assets/Arjun.jpeg"

function About() {
  return (
    <section id="about" className="about">
      <h2>ABOUT ME</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I am a passionate Full Stack Developer with a strong interest in building clean,
            efficient, and user-friendly applications.
          </p>

          <p className='training'>
            I completed an 8-month MERN Stack training program at AccioJob, Noida (Sector 2), where I
            learned JavaScript, HTML, CSS, React, Node.js, Express.js, and MongoDB. 
            Along with the training, I also worked as a Teacher Assistant (TA) for 2 months, helping other
            students with coding concepts and debugging.
          </p>

          <p>
            I enjoy learning new technologies, improving my development skills, and working on real-world
            projects that challenge me to grow as a developer.
          </p>

          {/* Project Buttons Section */}
          <div className="project-buttons">
            <h3>My Projects:</h3>
            <div className="buttons-container">
              <a 
                href="https://instagram-clone-frontend-tawny.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-btn instagram-btn"
              >
                Instagram Clone
              </a>
              <a 
                href="https://notes-frontend-black-omega.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-btn notes-btn"
              >
                Notes App
              </a>
              <a 
                href="https://ecommerce2-0-tan.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-btn ecommerce-btn"
              >
                Ecommerce
              </a>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img src={ArjunImage} alt="Arjun" />
        </div>
      </div>
    </section>
  )
}

export default About