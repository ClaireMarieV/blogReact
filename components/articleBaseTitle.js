import React, { useEffect, useRef, createRef } from "react";
import gsap from "gsap";

const effectDuration = 0.5;
const staggerValue = 0.05;
const startDelay = 1;
const animation = (elements) =>
  gsap.timeline().addLabel("start").delay(startDelay).staggerTo(
    elements,
    effectDuration,
    {
      ease: "Power3.easeOut",
      y: "0%",
    },
    staggerValue,
    "start"
  );

const ArticleBaseTitle = ({ title, date }) => {
  const titleLetters = (title || "").split("");
  const titleRef = useRef(titleLetters.map(() => createRef()));
  const dateLetters = (date || "").split("");
  const dateRef = useRef(dateLetters.map(() => createRef()));

  useEffect(() => {
    if (titleLetters != "" && titleRef.current) {
      const titleAnimation = animation(
        titleRef.current.map((ref) => ref.current)
      );
      const dateAnimation = animation(
        dateRef.current.map((ref) => ref.current)
      );

      document.fonts.ready.then(() => {
        titleAnimation.play();
        dateAnimation.play();
      });
    }
  }, [titleRef, titleLetters]);

  return (
    <div className="article-base-title">
      <h2>
        {titleLetters.map((letter, index) => (
          <span
            key={index}
            ref={titleRef.current[index]}
            className={letter == " " ? "whitespace" : ""}
          >
            {letter}
          </span>
        ))}
      </h2>
      <h4>
        {dateLetters.map((letter, index) => (
          <span
            key={index}
            ref={dateRef.current[index]}
            className={letter == " " ? "whitespace" : ""}
          >
            {letter}
          </span>
        ))}
      </h4>
      <style jsx>
        {`
          .article-title {
            text-align: right;
            writing-mode: vertical-rl;
            transform: rotate(180deg);
            display: flex;
            line-height: 1.875vw;
          }
          .article-title .content {
            margin: auto;
          }

          .article-title h4 {
            font-family: astoria-sans-condensed, sans-serif;
            font-weight: 100;
            font-size: 1.3rem;
            margin-top: 0.5rem;
          }

          .article-title a {
            text-decoration: none;
          }

          h2,
          h4 {
            display: flex;
            overflow: hidden;
          }

          h2 > span,
          h4 > span {
            display: inline-block;
            transform: translate(0px, 100%);
          }

          h2 > span.whitespace,
          h4 > span.whitespace {
            width: 0.5rem;
          }

          @media (max-width: 700px) {
            .article-base-title {
              line-height: normal;
              writing-mode: inherit;
              writing-mode: tb-rl;
              transform: rotate(0deg);
              transform: rotate(0deg);
              display: -webkit-inline-box;
              text-align: inherit;
              padding-left: 3rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ArticleBaseTitle;
