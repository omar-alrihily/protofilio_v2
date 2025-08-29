"use client";
import { useEffect, useState } from "react";

export default function FallingLanguages({ languages }) {
  const [animate, setAnimate] = useState(false);
  const [rotates, setRotates] = useState([]);

  useEffect(() => {
    setAnimate(true);
    const randomRotates = languages.map(() => Math.random() * 40 - 20);
    setRotates(randomRotates);
  }, [languages]);

  return (
    <>
      {languages.map((lang, index) => (
        <span
          key={index}
          className="absolute text-xl md:text-2xl font-bold text-orange-600"
          style={{
            left: `${6 + index * 25}%`,
            top: "110px",
            opacity: 0,
            transform: `rotate(${rotates[index] || 0}deg)`,
            animationName: animate ? "fall" : "none",
            animationDuration: "5s",
            animationTimingFunction: "ease-in-out",
            animationFillMode: "forwards",
            animationDelay: `${index * 0.5}s`,
          }}
        >
          {lang}
        </span>
      ))}

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            transform: translateY(80vh) rotate(0deg);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
