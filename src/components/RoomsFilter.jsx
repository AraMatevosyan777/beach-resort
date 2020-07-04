import React, { useContext } from 'react'
import {RoomContext} from '../context'
import Title from './Title'

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}
const RoomsFilter = ({rooms}) => {
    const context = useContext(RoomContext)
    const{handleChange, type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets} = context
    let types = getUnique(rooms, 'type')
    types = ['all', ...types]
    types = types.map((type, index)=> <option value={type} key={index}>{type}</option>)
    let people = getUnique(rooms, 'capacity')
    people = people.map((item,index)=> <option key={index} value={item}>{item}</option>)
  return (
    <section className="filter-container">
        <Title title='search rooms'/>
        <form className="filter-form">
            {/* select type */}
            <div className="form-group">
                <label htmlFor="type">room type</label>
                <select className='form-control' name="type" id="type" value={type} onChange={handleChange}>
                    {types}
                </select>
            </div>
            {/* guests filter */}
            <div className="form-group">
                <label htmlFor="type">guests</label>
                <select className='form-control' name="capacity" id="capacity" value={capacity} onChange={handleChange}>
                    {people}
                </select>
            </div>
            {/* room price */}
            <div className="form-group">
                <label htmlFor="">room price ${price}</label>
                <input type="range" name='price' 
                value={price} min={minPrice} 
                max={maxPrice} id='price' className='form-control' onChange={handleChange}/>
            </div>
            {/* size */}
            <div className="form-group">
                <label htmlFor="size">room size</label>
                <div className="size-inputs">
                    <input type="number" className="size-input" name='minSize'
                     id='size' value={minSize} onChange={handleChange}/>
                    <input type="number" className="size-input" name='maxSize'
                     id='size' value={maxSize} onChange={handleChange}/>
                </div>
            </div>
            {/* extras */}
            <div className="form-group">
                <div className="single-extra">
                    <input type="checkbox" name='breakfast' id='breakfast' 
                    checked={breakfast} onChange={handleChange}/>
                    <label htmlFor="breakfast">breakfast</label>
                </div>
                <div className="single-extra">
                    <input type="checkbox" name='pets' id='pets' 
                    checked={pets} onChange={handleChange}/>
                    <label htmlFor="pets">pets</label>
                </div>
            </div>
        </form>
    </section>
  )
}

export default RoomsFilter
