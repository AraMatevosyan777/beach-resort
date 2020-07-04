import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Rooms from './Pages/Rooms'
import SingleRoom from './Pages/SingleRoom'
import Error from './Pages/Error'
import {Navbar} from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path='/' render={()=> <HomePage/>}/>
        <Route exact path='/rooms/' render={()=> <Rooms/>}/>
        <Route exact path='/rooms/:slug' render={()=> <SingleRoom/>}/>
        <Route render={()=> <Error/>}/>
      </Switch>
    </div>
  )
}

export default App
