import React from "react"
import './timeline.css'

const Timeline = ({text, category, title, date, picture, className, id}) => (
    <div className = {"timeline " + (className || '')} id= {id}>
        <div className= 'text'><h5>{text}</h5></div>
        <div className='title'>
            <h4>{title}</h4>
            <h5>{category}</h5>
            <h5>{date}</h5>
        </div>
    </div>
  )
  
  export default Timeline
  