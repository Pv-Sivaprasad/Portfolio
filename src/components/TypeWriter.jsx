import React, { useEffect, useState } from "react";

const Typewriter = () => {
  const texts = ["Full Stack Developer", "MERN Stack Developer"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState(texts[0]);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);

      setTimeout(() => {
        const next = (currentIndex + 1) % texts.length;
        setCurrentIndex(next);
        setDisplayText(texts[next]);
        setAnimate(true);
      }, 100);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <h2
      className={`text-2xl md:text-4xl font-semibold mb-6 ${
        animate ? "typewriter" : ""
      }`}
    >
      {displayText}
    </h2>
  );
};

export default Typewriter;
