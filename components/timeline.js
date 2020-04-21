import React from "react"

const Timeline = ({text, category, title, date, picture, className, id}) => (
    <div className = {"timeline " + (className || '')} id= {id}>
        <div className= 'text'><h5>{text}</h5></div>
        <div className='title'>
            <h4>{title}</h4>
            <h5>{category}</h5>
            <h5>{date}</h5>
        </div>
        <style jsx>{`
            .timeline {
                text-align: center;
            }
            .timeline > h4, h5 {
                margin: 0;
            }
            .timeline h4 {
                margin: 0;
                letter-spacing: -0.03rem;
                font-family: freight-big-pro, serif;
                font-weight: 500;
                font-style: italic;
                font-size: 1.1em;
                margin-bottom: 0.5em;
            }
            .timeline h5 {
                margin: 0.5em;
                font-family: astoria-sans-condensed, sans-serif;
                font-weight: 100;
                font-size: 1.2rem;
                margin-bottom: 0.5em;
            }
        `}</style>
    </div>
  )
  
  export default Timeline
  