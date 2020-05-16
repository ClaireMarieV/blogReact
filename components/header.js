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
          <img src="/images/instagram-logo.png" />
        </li>
        <li>
          <i className="far fa-envelope"></i>
        </li>
        <li>
          <img src="/images/social-media.png" />
        </li>
      </ul>
    </nav>
    <style jsx>{`
      nav {
        grid-template-rows: 1fr 1fr 1fr 1fr;
        display: grid;
        text-decoration: none;
        padding-top: 3rem;
        grid-row: 3/4;
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
        color: whitesmoke;
        text-decoration: none;
        text-transform: uppercase;
        font-family: arboria, sans-serif;
        font-weight: 500;
        font-style: normal;
        letter-spacing: 0.25em;
        font-size: 1em;
      }

      nav > ul > li > img {
        width: 1rem;
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
          grid-template-rows: 1fr 1fr;
          grid-template-columns: none;
        }
        nav > h2 {
          margin-left: 0.5em;
          font-size: 1.4em;
        }
      }
    `}</style>
  </header>
);

export default Header;
