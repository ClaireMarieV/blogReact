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
      <h1>
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
      </h1>
      <h2>
        {dateLetters.map((letter, index) => (
          <span
            key={index}
            ref={dateRef.current[index]}
            className={letter == " " ? "whitespace" : ""}
          >
            {letter}
          </span>
        ))}
      </h2>
      <style jsx>
        {`
          .word,
          h2 {
            overflow: hidden;
          }
          h1 {
            display: flex;
            flex-wrap: wrap;
            // color: #ff9505 !important;
            font-weight: bold;
            font-size: 7rem;
          }
          h1 > span > span,
          h2 > span {
            display: inline-block;
            transform: translate(0px, 100%);
          }
          h1 > span.whitespace,
          h2 > span.whitespace {
            width: 0.5rem;
          }

          @media (max-width: 800px) {
            .article-base-title {
              line-height: normal;
              display: block;
            }
            h1 {
              font-size: 4rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ArticleBaseTitle;
