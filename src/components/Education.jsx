import React from 'react'

function Education() {
  const educationItems = [
        {
      degree: 'Full Stack Web Development Course',
      school: 'Accio jOb',
      year: '2025',
      description: 'Intensive 9-month program focused on modern web technologies.'
    },
       {
      degree: 'Masters of Computer Application',
      school: 'Chandigarh University',
      year: '2023-2025',
    },
    {
      degree: 'Bachelor of Computer Science',
      school: 'Guru Nanak Khalsa College',
      year: '2019 - 2022',
    },

  ]

  return (
    <section id="education" className="education">
      <h2>EDUCATION</h2>
      <div className="education-container">
        {educationItems.map((item, index) => (
          <div key={index} className="education-item">
            <h3>{item.degree}</h3>
            <p className="school">{item.school}</p>
            <p className="year">{item.year}</p>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education