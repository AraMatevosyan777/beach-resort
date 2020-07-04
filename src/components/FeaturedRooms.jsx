import React, { Component } from 'react'
import { RoomContext } from '../context'
import Loading from './Loading'
import Title from './Title'
import Room from './Room'

export default class FeaturedRooms extends Component {
    static contextType = RoomContext
  render() {
      const {loading, featuredRooms: rooms} = this.context
      const roomsElement = rooms.map(room => <Room key={room.id} room={room}/>)
    return (
      <section className='featured-rooms'>
        <Title title='featured rooms'/>
        <div className="featured-rooms-center">
          {loading
            ? <Loading/>
            : roomsElement
          }
        </div>
        
      </section>
    )
  }
}
