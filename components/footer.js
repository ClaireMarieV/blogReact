import React from "react";
import Link from "next/link";

const Footer = () => (
  <footer>
    <nav>
      <ul>
        <li>
          <img src="/images/instagram-logo.png" />
        </li>
        <li>
          <img src="/images/social-media.png" />
        </li>
      </ul>
      <h2>
        <Link href="/">
          <a>IL ÉTAIT UNE FOIS</a>
        </Link>
      </h2>
    </nav>
    <style jsx>{`
      nav {
        display: flex;
        text-decoration: none;
        padding-top: 1rem;
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

      nav > ul > li > img {
        width: 1rem;
      }
      nav > h2 {
        color: black;
        text-align: center;
        font-family: astoria-sans-condensed, sans-serif;
        font-weight: 600;
        font-size: 0.9em;
        font-style: thin;
        margin-top: 0.5em;
        letter-spacing: 0.4em;
      }
      nav > h2 > a {
        text-decoration: none;
        color: black;
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
  </footer>
);

export default Footer;