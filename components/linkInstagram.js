import React from "react"

const LinkInstagram = ({title, text, picture, className}) => (
    <div className = {"link-instagram " + (className || '')}>
        <img src={picture}/>
        <div className='text'>
             <h4>{title}</h4> 
             <h5>{text}</h5>
        </div>
        <style jsx>{`
            .link-instagram {
                margin-top: 2rem;
            }
            .text{
                text-align: center;
            }
            .text > h4 {
                color: black;
                text-align: center;
                font-family: astoria-sans-condensed, sans-serif;
                font-weight: 700;
                font-style: thin;
                margin-top: 0.5em;
                margin-bottom: 0;
                letter-spacing: 0.5em;
            }
            .text > h5 {
                text-align: center;
                color: #ba1833;
                margin: 0.5em;
                font-family: astoria-sans-condensed, sans-serif;
                font-weight: 100;
                font-size: 1.3rem;
                margin-bottom: 0.5em;
            }

            .link-instagram img {
                max-width: 12rem;
                padding-left: 1rem;
            }
        `}</style>
    </div>
  )
  
  export default LinkInstagram