import React from "react";

import Header from "./header";
import Canvas from "./canvas";

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    <link rel="stylesheet" href="https://use.typekit.net/auf8jri.css"></link>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1400,
      }}
    >
      <main>{children}</main>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.12.0/paper-core.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/simplex-noise/2.4.0/simplex-noise.min.js"></script>
    {process.env.FATHOM && (
      <script
        src="https://cdn.usefathom.com/script.js"
        site={process.env.FATHOM}
        defer
      ></script>
    )}
    <style jsx global>
      {`
        html {
          overflow: auto;
          height: 100%;
        }

        main {
          perspective: 2px;
        }
        html,
        body {
          margin: 0;
          padding: 0;
          border: 0;
        }
        body {
          margin: 0;
          overflow-x: auto;
          overflow-y: hidden;
          background-color: #262525;
          color: #ffffff;
          font-size: 1.1rem;
        }
        ::-webkit-scrollbar {
          scrollbar-width: 5px;
          scroll-behavior: smooth;
        }

        /* Track */
        ::-webkit-scrollbar-track {
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: rgba(79, 71, 78, 0.8);
        }

        header {
          margin-top: 1rem;
        }
        img {
          overflow: hidden;
        }
        a {
          text-decoration: none;
          color: #ffff;
        }
        h1,
        h3 {
          font-weight: 500;
          font-style: normal;
          color: #c1bdfc;
          margin: 0;
          font-family: arboria, sans-serif;
        }

        h2,
        h4 {
          font-family: arboria, sans-serif;
          font-weight: 500;
          margin-bottom: 0.5rem;
          margin-top: 0;
          color: #c1bdfc;
        }
        p {
          font-family: arboria, sans-serif;
          text-align: justify;
          line-height: 1.5rem;
          letter-spacing: 0.1rem;
        }
        p > a {
          color: #edc0b2;
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        ul {
          list-style: none;
        }
      `}
    </style>
    <style jsx>{`
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      main,
      menu,
      section,
      summary {
        display: block;
      }

      audio,
      canvas,
      progress,
      video {
        display: inline-block;
      }
      audio:not([controls]) {
        display: none;
        height: 0;
      }
      progress {
        vertical-align: baseline;
      }
      [hidden],
      template {
        display: none;
      }
      a {
        background-color: transparent;
        -webkit-text-decoration-skip: objects;
      }
      a:active,
      a:hover {
        outline-width: 0;
      }
      abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        text-decoration: underline dotted;
      }
      b,
      strong {
        font-weight: inherit;
        font-weight: bolder;
      }
      dfn {
        font-style: italic;
      }
      h1 {
        font-size: 2em;
        margin: 0.67em 0;
      }
      mark {
        background-color: #ff0;
        color: #000;
      }
      small {
        font-size: 80%;
      }
      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }
      sub {
        bottom: -0.25em;
      }
      sup {
        top: -0.5em;
      }
      img {
        border-style: none;
      }
      svg:not(:root) {
        overflow: hidden;
      }
      code,
      kbd,
      pre,
      samp {
        font-family: monospace, monospace;
        font-size: 1em;
      }
      figure {
        margin: 1em 40px;
      }
      hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }
      button,
      input,
      optgroup,
      select,
      textarea {
        font: inherit;
        margin: 0;
      }
      optgroup {
        font-weight: 700;
      }
      button,
      input {
        overflow: visible;
      }
      button,
      select {
        text-transform: none;
      }
      [type="reset"],
      [type="submit"],
      button,
      html [type="button"] {
        -webkit-appearance: button;
      }
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner,
      button::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }
      [type="button"]:-moz-focusring,
      [type="reset"]:-moz-focusring,
      [type="submit"]:-moz-focusring,
      button:-moz-focusring {
        outline: 1px dotted ButtonText;
      }
      fieldset {
        border: 1px solid silver;
        margin: 0 2px;
        padding: 0.35em 0.625em 0.75em;
      }
      legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }
      textarea {
        overflow: auto;
      }
      [type="checkbox"],
      [type="radio"] {
        box-sizing: border-box;
        padding: 0;
      }
      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
        height: auto;
      }
      [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }
      [type="search"]::-webkit-search-cancel-button,
      [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
      }
      ::-webkit-input-placeholder {
        color: inherit;
        opacity: 0.54;
      }
      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }
      html {
        font: 112.5%/1.45em georgia, serif;
        box-sizing: border-box;
        overflow-y: scroll;
      }
      * {
        box-sizing: inherit;
      }
      *:before {
        box-sizing: inherit;
      }
      *:after {
        box-sizing: inherit;
      }
      body {
        color: hsla(0, 0%, 0%, 0.8);
        font-family: kumlien-pro, serif;
        font-weight: 400;
        font-style: normal;
        word-wrap: break-word;
        font-kerning: normal;
        -moz-font-feature-settings: "kern", "liga", "clig", "calt";
        -ms-font-feature-settings: "kern", "liga", "clig", "calt";
        -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
        font-feature-settings: "kern", "liga", "clig", "calt";
        position: absolute;
        top: 20px;
        left: 20px;
        bottom: 20px;
        right: 20px;
        padding: 30px;
        overflow-y: scroll;
        overflow-x: hidden;
      }

      img {
        max-width: 100%;
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
      }
      h1 {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        color: inherit;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-weight: bold;
        text-rendering: optimizeLegibility;
        font-size: 2.25rem;
        line-height: 1.1;
      }
      h2 {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        color: inherit;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-weight: bold;
        text-rendering: optimizeLegibility;
        font-size: 1.62671rem;
        line-height: 1.1;
      }
      h3 {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        color: inherit;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-weight: bold;
        text-rendering: optimizeLegibility;
        font-size: 1.38316rem;
        line-height: 1.1;
      }
      h4 {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        color: inherit;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-weight: bold;
        text-rendering: optimizeLegibility;
        font-size: 1rem;
        line-height: 1.1;
      }
      h6 {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        color: inherit;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-weight: bold;
        text-rendering: optimizeLegibility;
        font-size: 0.78405rem;
        line-height: 1.1;
      }
      hgroup {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
      }
      ul {
        margin-left: 1.45rem;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        list-style-position: outside;
        list-style-image: none;
      }
      ol {
        margin-left: 1.45rem;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        list-style-position: outside;
        list-style-image: none;
      }
      dl {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
      }
      dd {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
      }
      p {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
      }
      figure {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
      }
      pre {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        margin-bottom: 1.45rem;
        font-size: 0.85rem;
        line-height: 1.42;
        background: hsla(0, 0%, 0%, 0.04);
        border-radius: 3px;
        overflow: auto;
        word-wrap: normal;
        padding: 1.45rem;
      }
      table {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        font-size: 1rem;
        line-height: 1.45rem;
        border-collapse: collapse;
        width: 100%;
      }
      fieldset {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
      }
      blockquote {
        margin-left: 1.45rem;
        margin-right: 1.45rem;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
      }
      form {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
      }
      noscript {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
      }
      iframe {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
      }
      hr {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: calc(1.45rem - 1px);
        background: hsla(0, 0%, 0%, 0.2);
        border: none;
        height: 1px;
      }
      address {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
      }
      b {
        font-weight: bold;
      }
      strong {
        font-weight: bold;
      }
      dt {
        font-weight: bold;
      }
      th {
        font-weight: bold;
      }
      li {
        margin-bottom: calc(1.45rem / 2);
      }
      ol li {
        padding-left: 0;
      }
      ul li {
        padding-left: 0;
      }
      li > ol {
        margin-left: 1.45rem;
        margin-bottom: calc(1.45rem / 2);
        margin-top: calc(1.45rem / 2);
      }
      li > ul {
        margin-left: 1.45rem;
        margin-bottom: calc(1.45rem / 2);
        margin-top: calc(1.45rem / 2);
      }
      blockquote *:last-child {
        margin-bottom: 0;
      }
      li *:last-child {
        margin-bottom: 0;
      }
      p *:last-child {
        margin-bottom: 0;
      }
      li > p {
        margin-bottom: calc(1.45rem / 2);
      }
      code {
        font-size: 0.85rem;
        line-height: 1.45rem;
      }
      kbd {
        font-size: 0.85rem;
        line-height: 1.45rem;
      }
      samp {
        font-size: 0.85rem;
        line-height: 1.45rem;
      }
      abbr {
        border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
        cursor: help;
      }
      acronym {
        border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
        cursor: help;
      }
      abbr[title] {
        border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
        cursor: help;
        text-decoration: none;
      }
      thead {
        text-align: left;
      }
      td,
      th {
        text-align: left;
        border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
        font-feature-settings: "tnum";
        -moz-font-feature-settings: "tnum";
        -ms-font-feature-settings: "tnum";
        -webkit-font-feature-settings: "tnum";
        padding-left: 0.96667rem;
        padding-right: 0.96667rem;
        padding-top: 0.725rem;
        padding-bottom: calc(0.725rem - 1px);
      }
      th:first-child,
      td:first-child {
        padding-left: 0;
      }
      th:last-child,
      td:last-child {
        padding-right: 0;
      }
      tt,
      code {
        background-color: hsla(0, 0%, 0%, 0.04);
        border-radius: 3px;
        font-family: "SFMono-Regular", Consolas, "Roboto Mono",
          "Droid Sans Mono", "Liberation Mono", Menlo, Courier, monospace;
        padding: 0;
        padding-top: 0.2em;
        padding-bottom: 0.2em;
      }
      pre code {
        background: none;
        line-height: 1.42;
      }
      code:before,
      code:after,
      tt:before,
      tt:after {
        letter-spacing: -0.2em;
        content: " ";
      }
      pre code:before,
      pre code:after,
      pre tt:before,
      pre tt:after {
        content: "";
      }
      @media only screen and (max-width: 480px) {
        html {
          font-size: 100%;
        }
      }
    `}</style>
  </div>
);

export default Layout;
