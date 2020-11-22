import React from "react";
import Link from "next/link";

const Header = () => (
  <header>
    <nav>
      <div className="ul">
        <ul>
          <li>
            <Link href="/about">
              <a className="link">
                <span className="span">
                  <h3>ABOUT</h3>
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/art">
              <a className="link">
                <span className="span">
                  <h3>ART</h3>
                </span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="ul">
        <ul>
          <li>
            <Link href="/shoes">
              <a className="link">
                <span className="span">
                  <h3>SHOES</h3>
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/style">
              <a className="link">
                <span className="span">
                  <h3>STYLE</h3>
                </span>
              </a>
            </Link>
          </li>
          <li>
            <a href="https://www.instagram.com/clairevaney/">
              <img src="/instagram.svg" alt="logo instagram" />
            </a>
          </li>
          <li>
            <a href="mailto:vert.claire.blog@gmail.com">
              <img src="/mail.svg" alt="logo mail" />
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <style jsx>{`
      nav {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        margin-top: 2rem 0 0 0;
        background-color: transparent;
        position: fixed;
        z-index: 5;
        width: 100%;
      }
      nav > .ul {
        align-self: center;
      }
      .ul > ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      nav > .ul:nth-child(1) {
        justify-self: start;
      }
      nav > .ul:nth-child(2) {
        padding-right: 3rem;
        justify-self: end;
      }
      nav:first-child > ul:nth-child(2) li {
        font-weight: bold;
      }
      nav > .ul > ul > li {
        padding: 0 0.5rem 0.5rem 1rem;
      }
      a .span {
        font-family: arboria, sans-serif;
        font-weight: 500;
        font-style: normal;
        letter-spacing: 0.25em;
      }
      nav ul li a > img {
        width: 1.2rem;
      }
      nav h3 {
        font-style: normal;
      }
      nav > a > h3 {
        text-decoration: none;
        color: whitesmoke;
      }
      .ul {
        margin: 0 0 1em;
      }
      a .span h3 {
        line-height: 1.4;
        transition: all 0.5s;
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
      }

      a .span h3::before {
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
      a .span h3:hover,
      a .span h3:focus {
        color: #ffff;
      }
      a .span h3::before {
        background: #b4ad93;
      }
      a .span:hover h3::before,
      a .span:focus h3::before {
        transform: scale3d(1, 1, 1);
      }

      @media (max-width: 1076px) {
        nav > h3 {
          margin-left: 0.5em;
          font-size: 1em;
        }
      }

      @media (max-width: 750px) {
        nav {
          display: grid;
          grid-template-columns: auto;
        }
        nav > .ul > ul {
          margin: 2rem 0 2rem;
          display: flex;
          justify-content: space-evenly;
          padding: 0;
        }
      }
    `}</style>
  </header>
);

export default Header;
