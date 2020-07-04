import React from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

const Services = () => {
    const initialState = [
        {
            icon: <FaCocktail/>,
            title: 'free coctails',
            info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, neque!'
        },
        {
            icon: <FaHiking/>,
            title: 'endless hiking',
            info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, neque!'
        },
        {
            icon: <FaShuttleVan/>,
            title: 'free shuttle',
            info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, neque!'
        },
        {
            icon: <FaBeer/>,
            title: 'strongest beer',
            info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, neque!'
        },
    ]

  return (
    <div className='services'>
      <Title title='services'/>
      <div className="services-center">
          {initialState.map((item, index) => 
            <article key={index} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
            </article>
          )}
      </div>
    </div>
  )
}

export default Services
