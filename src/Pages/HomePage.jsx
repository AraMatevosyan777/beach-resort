import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { NavLink } from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'

const HomePage = () => {
  return (
    <>
      <Hero>
        <Banner
          title='luxurious rooms'
          subtitle='deluxe rooms starting at $299'>
          <NavLink to='/rooms' className='btn-primary'>our rooms</NavLink>
        </Banner>
      </Hero>
      <Services/>
      <FeaturedRooms/>
    </>
  )
}

export default HomePage
