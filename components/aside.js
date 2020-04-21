import React from "react"

const Aside = ({children, className, id}) => (
    <div className = {"aside " + (className || '')} id= {id}>
        {children}
        <style jsx>{`
            .aside {
                max-width: 15rem;
                margin-left: 1em;
                border-left: double;
                border-top: double;
                padding-left: 1em;
                padding-top: 1em;
            }

            @media (max-width: 990px){
                .aside {
                    display: none;
                }
            }
        `}</style>
    </div>
  )
  
  export default Aside