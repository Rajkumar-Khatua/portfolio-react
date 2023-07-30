import React from 'react'
import "./Portfolio.scss"
import Projects from '../Projects/Projects'
const Portfolio = () => {
  return (
    <div className='Portfolio'>
        <h2>My Works</h2>
        <Projects/>
    </div>
  )
}

export default Portfolio