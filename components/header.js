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
          <a>IL ÉTAIT UNE FOIS</a>
        </Link>
      </h2>
      <ul>
        <li>
          <a href="https://www.instagram.com/clairevaney/">
            <img src="/instagram.svg" />
          </a>
        </li>
        <li>
          <a href="mailto:vert.claire.blog@gmail.com">
            <img src="/mail.svg" />
          </a>
        </li>
        <li>
          <a href="https://www.pinterest.fr/clairevaney/">
            <img src="/pinterest.svg" />
          </a>
        </li>
      </ul>
    </nav>
    <style jsx>{`
      nav {
        grid-template-rows: repeat(3, minmax(0, 1fr));
        display: grid;
        text-decoration: none;
      }
      nav > ul {
        display: flex;
        flex-grow: 0.6;
        justify-content: space-evenly;
        margin: 1rem;
        padding: 0;
        list-style: none;
      }
      nav > ul > li {
        padding: 1em;
      }
      nav > ul > li > a {
        color: whitesmoke;
        text-decoration: none;
        text-transform: uppercase;
        font-family: arboria, sans-serif;
        font-weight: 500;
        font-style: normal;
        letter-spacing: 0.25em;
        font-size: 1em;
      }

      nav > ul > li > a > img {
        width: 1.25rem;
      }
      nav > h2 {
        text-align: center;
        font-family: astoria-sans-condensed, sans-serif;
        font-weight: 600;
        font-style: thin;
        font-size: 2em;
        margin-top: 0.5em;
        letter-spacing: 0.4em;
      }
      nav > h2 > a {
        text-decoration: none;
        color: whitesmoke;
      }
      @media (max-width: 1076px) {
        nav {
          grid-template-rows: repeat(2, minmax(0, 1fr));
        }
        nav > h2 {
          margin-left: 0.5em;
          font-size: 1.5em;
        }
      }
    `}</style>
  </header>
);

export default Header;
