import React from "react";
import Link from "next/link";

const Header = () => (
  <header>
    <nav>
      <div className="ul">
        <ul>
          <li>
            <Link href="/">
              <a>
                <h1>IL ETAIT UNE FOIS</h1>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>
                <h2>About</h2>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="ul">
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
        </ul>
      </div>
    </nav>

    <style jsx>{`
      nav {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        text-decoration: none;
        margin-top: 2rem 0 0 0;
      }
      nav > .ul {
        padding-right: 6rem;
      }
      nav > .ul > ul {
        list-style: none;
        display: flex;
        justify-content: flex-end;
      }
      nav > .ul:nth-child(1) {
        list-style: none;
        display: flex;
        justify-content: flex-start;
      }

      nav > .ul > ul > li {
        padding: 0 0.5rem 0.5rem 1rem;
      }
      nav > .ul > ul > li > a {
        font-family: arboria, sans-serif;
        font-weight: 500;
        font-style: normal;
        letter-spacing: 0.25em;
      }
      nav .ul > ul li a:hover {
        font-style: italic;
        color: #b36353;
      }
      nav ul li a > img {
        width: 1.2rem;
      }
      nav h2 {
        font-style: normal;
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
      @media (max-width: 600px) {
        nav {
          display: block;
        }
        nav > .title {
          padding-left: 1.5rem;
        }
        nav > .ul > ul {
          margin: 2rem 0 2rem;
          display: inline-flex;
        }
      }
      @media (max-width: 400px) {
        nav > ul {
          padding: 0;
        }
      }
    `}</style>
  </header>
);

export default Header;
