import React from "react";
import Link from "next/link";

const Footer = () => (
  <footer>
    <nav>
      <div className=".ul > ul">
        <ul>
          <li>
            <a href="https://www.instagram.com/clairevaney/">
              <img src="../instagram.svg" />
            </a>
          </li>
          <li>
            <a href="mailto:vert.claire.blog@gmail.com">
              <img src="../mail.svg" />
            </a>
          </li>
        </ul>
      </div>

      <div className="title">
        <h2>
          <Link href="/">
            <a>IL ÉTAIT UNE FOIS</a>
          </Link>
        </h2>
      </div>
    </nav>
    <style jsx>{`
      nav {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        text-decoration: none;
        padding-top: 1rem;
      }
      nav > .ul > ul {
        display: flex;
        flex-grow: 0.6;
        justify-content: space-between;
        margin: 0;
        padding: 0;
        list-style: none;
      }
      nav > .ul > ul > li {
        margin: auto;
      }
      nav > .ul > ul > li > a {
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

      nav > .ul > ul > li > a > img {
        width: 1.1rem;
        color: black;
      }
      nav > .title > h2 {
        color: black;
        text-align: center;
        font-family: astoria-sans-condensed, sans-serif;
        font-weight: 600;
        font-size: 1.2rem;
        font-style: thin;
        margin-top: 0.5em;
        letter-spacing: 0.4em;
      }
      nav > .title > h2 > a {
        text-decoration: none;
        color: black;
      }
      @media (max-width: 1076px) {
        nav > .title > h2 {
          margin-left: 0.5em;
          font-size: 1.2em;
        }
      }
      @media (max-width: 500px) {
        nav {
          grid-template-rows: 1fr 1fr;
          grid-template-columns: none;
        }
        nav > .ul > ul > li > h2 {
          font-size: 1rem;
        }

        nav > .ul > ul > li > a > img {
          width: 1rem;
          color: black;
        }
      }
    `}</style>
  </footer>
);

export default Footer;
