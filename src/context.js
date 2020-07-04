import React, { Component, createContext } from 'react'
import items from './data'

const RoomContext = createContext()

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false,
    }

    componentDidMount(){
        let rooms = this.formData(items)
        let featuredRooms = rooms.filter(room => room.featured === true)
        let maxPrice = Math.max(...rooms.map(room=> room.price))
        let minPrice = Math.min(...rooms.map(room=> room.price))
        let maxSize = Math.max(...rooms.map(room=> room.size))
        let minSize = Math.min(...rooms.map(room=> room.size))
        this.setState({
            rooms,
            sortedRooms: rooms,
            featuredRooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            minPrice,
            maxSize,
            minSize
        })
    }

    formData(items){
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image=> image.fields.file.url)
            let room = {...item.fields, images, id}
            return room
        })
        return tempItems
    }

    getRoom = slug => {
      let tempRooms = [...this.state.rooms]
      const room = tempRooms.find(room => room.slug === slug)
      return room
    }
    handleChange = (event) => {
      const target = event.target
      const value = target.type === 'checkbox' ? target.checked : target.value
      const name = event.target.name
      this.setState({
        [name]:value
      }, this.filterRooms)
    }
    filterRooms = () => {
      let {rooms, type, capacity, price, minSize, maxSize, breakfast, pets} = this.state
      let tempRooms = [...rooms]
      capacity = parseInt(capacity)
      if(type !== 'all'){
        tempRooms = tempRooms.filter(room => room.type === type)
      }
      if(capacity !== 1){
        tempRooms = tempRooms.filter(room => room.capacity >= capacity)
      }
  
      tempRooms = tempRooms.filter(room => room.price <= price)

      tempRooms = tempRooms.filter(room => room.size <= maxSize && room.size >= minSize)

      if(breakfast){
        tempRooms = tempRooms.filter(room => room.breakfast)
      }
      if(pets){
        tempRooms = tempRooms.filter(room => room.pets)
      }

      this.setState({
        sortedRooms: tempRooms
      })
    }


  render() {
    return (
      <RoomContext.Provider value={{...this.state, getRoom: this.getRoom, handleChange: this.handleChange}}>
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}

const RoomsConsumer = RoomContext.Consumer

export const withRoomConsumer = (Component) => {
  const ConsumerWrapper = (props) => {
    return(
      <RoomsConsumer>
        {value => <Component {...props} context={value}/>}
      </RoomsConsumer>
    )
  }
  return ConsumerWrapper
}

export {RoomProvider, RoomsConsumer, RoomContext}
