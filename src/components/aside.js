import React from "react"
import './aside.css'

const Aside = ({children, className, id}) => (
    <div className = {"aside " + (className || '')} id= {id}>
            {children}
    </div>
  )
  
  export default Aside