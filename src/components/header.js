import React from "react"
import { Link } from "gatsby"
import './header.css'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/art">ART</Link></li>
        <li><Link to="/style">STYLE</Link></li>
        <li><Link to="/life">LIFE</Link></li>
      </ul>
      <h2><Link to="/">. VERT CLAIRE .</Link></h2>
      <ul>
        <li><Link to="/a-propos">À PROPOS</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
