import React from "react";
import Link from "next/link";

const Header = () => (
  <header>
    <nav>
      <div className="ul">
        <ul>
          <li>
            <Link href="/">
              <a className="link">
                <img src="/pivoine.svg" alt="logo pivoine" />
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="ul">
        <ul>
          <li>
            <Link href="/art">
              <a className="link">
                <span className="span">ART</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/shoes">
              <a className="link">
                <span className="span">SHOES</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/style">
              <a className="link">
                <span className="span">STYLE</span>
              </a>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <a href="https://www.instagram.com/clairemarievaney/">
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
        display: flex;
        justify-content: space-between;
        margin-top: 2rem 0 0 0;
        background-color: transparent;
        position: fixed;
        z-index: 5;
        width: 100%;
      }

      .ul > ul {
        display: flex;
        align-items: center;
      }

      nav > .ul:nth-child(1) li > a img {
        width: 10rem;
      }

      nav > .ul:nth-child(2) {
        display: flex;
        padding-right: 3rem;
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
        letter-spacing: 0.25em;
      }
      nav ul li a > img {
        width: 1.2rem;
      }

      nav > a {
        text-decoration: none;
        color: whitesmoke;
      }

      a .span {
        line-height: 1.4;
        transition: all 1s;
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
      }

      a .span::before {
        content: "";
        position: absolute;
        z-index: -1;
        width: 4rem;
        height: 0.8rem;
        opacity: 0.8;
        transform: scale3d(0, 1, 1);
        transform-origin: 0% 50%;
        transition: transform 1s;
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
      }
      a .span:hover,
      a .span:focus {
        color: #ffff;
      }
      a .span::before {
        background: #c1bdfc;
      }
      a .span:hover::before,
      a .span:focus::before {
        transform: scale3d(1, 1, 1);
      }

      @media (max-width: 660px) {
        nav {
          flex-direction: column;
          position: inherit;
          z-index: inherit;
        }
        nav > .ul:nth-child(2) {
          flex-direction: column;
        }
      }
    `}</style>
  </header>
);

export default Header;
