import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { NavLink } from 'react-router-dom'
import RoomsContainer from '../components/RoomsContainer'

const Rooms = () => {
  return (
    <>
    <Hero hero='roomsHero'>
      <Banner title='our rooms'>
        <NavLink to='/' className='btn-primary'>return home</NavLink>
      </Banner>
    </Hero>
    <RoomsContainer/>
    </>
  )
}

export default Rooms
