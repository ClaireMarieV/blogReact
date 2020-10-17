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
            <span className="span">
              <Link className="link" href="/about">
                <a>
                  <h2>ABOUT</h2>
                </a>
              </Link>
            </span>
          </li>
        </ul>
      </div>
      <div className="ul">
        <ul>
          <li>
            <span className="span">
              <Link className="link" href="/art">
                <a>
                  <h2>ART</h2>
                </a>
              </Link>
            </span>
          </li>
          <li>
            <span className="span">
              <Link className="link" href="/shoes">
                <a>
                  <h2>SHOES</h2>
                </a>
              </Link>
            </span>
          </li>
          <li>
            <span className="span">
              <Link className="link" href="/style">
                <a>
                  <h2>STYLE</h2>
                </a>
              </Link>
            </span>
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
        align-self: center;
      }
      .ul > ul {
        list-style: none;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
      nav > .ul:nth-child(1) {
        display: flex;
        justify-content: flex-start;
      }
      nav:first-child > ul:nth-child(2) li {
        font-weight: bold;
      }
      nav > .ul > ul > li {
        padding: 0 0.5rem 0.5rem 1rem;
      }
      .span a {
        font-family: arboria, sans-serif;
        font-weight: 500;
        font-style: normal;
        letter-spacing: 0.25em;
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
      .ul {
        margin: 0 0 1em;
      }
      .span a h2 {
        line-height: 1.4;
        transition: all 0.5s;
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
      }

      .span a h2::before {
        content: "";
        position: absolute;
        z-index: -1;
        width: 4rem;
        height: 1rem;
        opacity: 0.3;
        transform: scale3d(0, 1, 1);
        transform-origin: 0% 50%;
        transition: transform 0.5s;
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
      }
      .span a h2:hover,
      .span a h2:focus {
        color: #563440;
      }
      .span a h2::before {
        background: #563440;
      }
      .span:hover a h2::before,
      .span:focus a h2::before {
        transform: scale3d(1, 1, 1);
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
          padding: 0;
        }
      }
    `}</style>
  </header>
);

export default Header;
