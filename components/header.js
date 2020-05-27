import React from "react";
import Link from "next/link";

const Header = () => (
  <header>
    <nav>
      <div className="title">
        <Link href="/">
          <a>
            <h2>IL ÉTAIT UNE FOIS</h2>
          </a>
        </Link>
      </div>
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
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        text-decoration: none;
      }
      nav > .title {
        padding-left: 2rem;
      }
      nav > ul {
        display: flex;
        flex-grow: 0.6;
        margin: 1rem;
        padding: 0;
        list-style: none;
      }
      nav > ul > li {
        padding: 0 1rem 1rem 1rem;
      }
      nav > ul > li > a {
        text-decoration: none;
        text-transform: uppercase;
        font-family: arboria, sans-serif;
        font-weight: 500;
        font-style: normal;
        letter-spacing: 0.25em;
        font-size: 0.9rem;
      }

      nav > ul > li > a > img {
        width: 0.9rem;
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
      nav > a > h2 {
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
