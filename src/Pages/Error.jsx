import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <Hero>
      <Banner title='404' subtitle='page not found'>
        <NavLink to='/' className='btn-primary'>return home</NavLink>
      </Banner>
    </Hero>
  )
}

export default Error
