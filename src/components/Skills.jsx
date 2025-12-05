import React from 'react'

function Skills() {
  const skillsList = [
    { name: 'React', description: 'Frontend library for building user interfaces' },
    { name: 'Redux', description: 'A state management tool that makes it easier to handle and share data across React applications.' },
    { name: 'JavaScript', description: 'Programming language for web development' },
    { name: 'HTML', description: 'Markup Language for Create Structure' },
    { name: 'CSS', description: 'Make the Structure Attractive' },
    { name: 'Express.js', description: 'JavaScript runtime for backend development' },
    { name: 'Postman', description: 'Check the restful API' },
    { name: 'MongoDB', description: 'NoSQL database for modern applications' },
    { name: 'Git', description: 'Version control system' },
  ]

  return (
    <section id="skills" className="skills">
      <h2>MY SKILLS</h2>
      <div className="skills-container">
        {skillsList.map((skill, index) => (
          <div key={index} className="skill-item">
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills