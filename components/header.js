import React from "react";
import Link from "next/link";

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link href="/art">
            <a>ART</a>
          </Link>
        </li>
        <li>
          <Link href="/shoes">
            <a>SHOES</a>
          </Link>
        </li>
        <li>
          <Link href="/style">
            <a>STYLE</a>
          </Link>
        </li>
        <li>
          <Link href="/life">
            <a>LIFE</a>
          </Link>
        </li>
      </ul>
      <h2>
        <Link href="/">
          <a>. IL ÉTAIT UNE FOIS .</a>
        </Link>
      </h2>
      <ul>
        <li>
          <Link href="/a-propos">
            <a>À PROPOS</a>
          </Link>
        </li>
      </ul>
    </nav>
    <style jsx>{`
      nav {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        text-decoration: none;
        margin-top: 1rem;
      }
      nav > ul {
        display: flex;
        flex-grow: 0.6;
        justify-content: space-between;
        margin: 0;
        padding: 0;
        list-style: none;
      }
      nav > ul > li {
        margin: auto;
      }
      nav > ul > li > a {
        color: black;
        text-decoration: none;
        text-transform: uppercase;
        /*font-family: astoria-sans-condensed, sans-serif;
            font-weight: 700;
            font-style: thin;*/
        font-family: arboria, sans-serif;
        font-weight: 500;
        font-style: normal;
        letter-spacing: 0.25em;
        font-size: 0.8em;
      }
      nav > h2 {
        color: black;
        text-align: center;
        /*font-family: arboria, sans-serif;
            font-weight: 200;  
            font-style: italic;*/
        font-family: astoria-sans-condensed, sans-serif;
        font-weight: 700;
        font-style: thin;
        margin-top: 0.5em;
        letter-spacing: 0.5em;
      }
      nav > h2 > a {
        text-decoration: none;
        color: black;
      }
      @media (max-width: 1076px) {
        nav {
          grid-template-rows: 1fr 1fr 1fr;
          grid-template-columns: none;
        }
        nav > h2 {
          margin-left: 0.5em;
        }
      }
    `}</style>
  </header>
);

export default Header;
