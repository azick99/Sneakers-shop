import React from 'react'

const AboutCard = ({ person }) => {
  const { img, name, content, title } = person
  return (
    <div className="about-card flex">
      <img src={img} alt={name} className="card-img" />
      <p className='fs-500 text-bold text-dark'>{name}</p>
      <p className='fs-400 text-bold '>{title}</p>
      <p className='fs-400'>{content}</p>
    </div>
  )
}

export default AboutCard
