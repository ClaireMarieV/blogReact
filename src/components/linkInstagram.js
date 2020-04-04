import React from "react"
import { Link } from "gatsby"
import './articleSplash.css'
import './linkInstagram.css'

const LinkInstagram = ({title, text, picture, className}) => (
    <div className = {"link-instagram " + (className || '')}>
        <img src={picture}/>
        <div className='text'>
             <h4>{title}</h4> 
             <h5>{text}</h5>
        </div>
    </div>
  )
  
  export default LinkInstagram