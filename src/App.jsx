import { useState } from 'react'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    setMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">PORTFOLIO</div>
          
          <button 
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          
          <div className={`nav-items ${menuOpen ? 'active' : ''}`}>
            <button 
              className={activeSection === 'home' ? 'nav-item active' : 'nav-item'}
              onClick={() => scrollToSection('home')}
            >
              HOME
            </button>
            <button 
              className={activeSection === 'about' ? 'nav-item active' : 'nav-item'}
              onClick={() => scrollToSection('about')}
            >
              ABOUT ME
            </button>
            <button 
              className={activeSection === 'skills' ? 'nav-item active' : 'nav-item'}
              onClick={() => scrollToSection('skills')}
            >
              SKILLS
            </button>
            <button 
              className={activeSection === 'education' ? 'nav-item active' : 'nav-item'}
              onClick={() => scrollToSection('education')}
            >
              EDUCATION
            </button>
            <button 
              className={activeSection === 'contact' ? 'nav-item active' : 'nav-item'}
              onClick={() => scrollToSection('contact')}
            >
              CONTACT
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <h1>I'm a <span>FULL STACK SOFTWARE DEVELOPER</span></h1>
        <p>Building modern web applications with clean code and best practices</p>
        <div className="hero-buttons">
          <button className="primary-btn" onClick={() => scrollToSection('contact')}>
            CONTACT ME
          </button>
          <button className="secondary-btn" onClick={() => scrollToSection('skills')}>
            VIEW SKILLS
          </button>
        </div>
      </section>

      {/* About Component */}
      <About />

      {/* Skills Component */}
      <Skills />

      {/* Education Component */}
      <Education />

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>CONTACT ME</h2>
        <div className="contact-info">
          <p>📧 Email: arjun@example.com</p>
          <p>📱 Phone: +91 98765 43210</p>
          <p>📍 Location: Noida, India</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Arjun's Portfolio. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App