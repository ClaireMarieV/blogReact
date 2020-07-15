import React, { useEffect, useRef, createRef } from "react";
import gsap from "gsap";

const indexOfLetter = (words, wordIndex, letterIndex) => {
  let index = 0;

  for (let i = 0; i < wordIndex; i++) {
    index += words[i].length + 1;
  }
  return index + letterIndex;
};

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
  const words = (title || "").split(" ");
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
        {words
          .map((word, wordIndex) => (
            <span key={wordIndex} className="word">
              {word.split("").map((letter, letterIndex) => (
                <span
                  key={letterIndex}
                  ref={
                    titleRef.current[
                      indexOfLetter(words, wordIndex, letterIndex)
                    ]
                  }
                >
                  {letter}
                </span>
              ))}
            </span>
          ))
          .reduce(
            (acc, word, index) =>
              acc.concat(
                index > 0
                  ? [<span className="whitespace"></span>, word]
                  : [word]
              ),
            []
          )}
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

          .word,
          h4 {
            overflow: hidden;
          }

          h2 {
            display: flex;
            flex-wrap: wrap;
          }

          h2 > span > span,
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
              display: block;
              padding-left: 3rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ArticleBaseTitle;
