import React, { useState, useEffect } from "react";

const TypeEffect = ({ words }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [dynamicText, setDynamicText] = useState("");

  useEffect(() => {
    const typeEffect = () => {
      const currentWord = words[wordIndex];
      const currentChar = isDeleting
        ? currentWord.substring(0, charIndex - 1)
        : currentWord.substring(0, charIndex + 1);

      setDynamicText(currentChar);

      if (!isDeleting && charIndex === currentWord.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }

      const speed = isDeleting ? 200 : 450;
      // const speed = isDeleting ? 50 : 200;

      setTimeout(() => {
        setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
      }, speed);
    };

    const timer = setTimeout(typeEffect, 500);
    // const timer = setTimeout(typeEffect, 1200);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    <span
      className={`changing-text dynamic-text ${
        charIndex === words[wordIndex].length ? "" : "stop-blinking"
      }`}
    >
      {dynamicText}
    </span>
  );
};

export default TypeEffect;
