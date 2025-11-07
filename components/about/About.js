"use client";
import { useEffect, useState } from "react";

export default function About() {
  const rotatingWords = ["النجاح", "القمة", "الإنجاز"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full  overflow-hidden flex flex-col justify-center text-center px-6" style={{ background: "#36688d" }}>
      <div className="relative z-10 flex flex-col items-center space-y-8">
        <div className="relative flex justify-center items-center mt-6 mb-8 glitch-container">
          <img
            src="/LOG2.png"
            alt="Logo"
            className="w-60 md:w-70 h-auto drop-shadow-lg transition-transform duration-500 hover:scale-105"
          />
          {/* Glitch Layers */}
          <img src="/LOG2.png" alt="Logo glitch" className="glitch glitch-red" />
          <img src="/LOG2.png" alt="Logo glitch" className="glitch glitch-blue" />
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mt-10">
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f3f4f6] relative">
            <span
              key={currentIndex}
              className="absolute text-[#fdc700] opacity-0 font-sans"
              style={{ animation: "fallWord 3s ease forwards" }}
            >
              {rotatingWords[currentIndex]}
            </span>
            <span className="ml-18 md:ml-20 lg:ml-28 font-sans">انطلق بفكرتك إلى</span>
          </p>
        </div>

        {/* العبارة الجديدة أسفل الجملة الدوّارة */}
       <p className="mt-24 text-xl md:text-xl lg:text-2xl text-[#364153] font-semibold tracking-wide text-center max-w-xl mx-auto px-6 py-4 border-4 border-black rounded-xl shadow-[4px_4px_0px_#000] bg-[#fef9c2]">
  من البدايات البسيطة للتكنولوجيا إلى عالم سريع يتغير كل ثانية، أعمل على بناء مواقع وأنظمة ذكاء اصطناعي تتكيف وتبتكر لتجارب رقمية مميزة.
</p>


      </div>

      <style jsx>{`
        @keyframes fallWord {
          0% { opacity: 0; transform: translateY(-20px); }
          50% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(20px); }
        }

        /* Glitch Effect */
        .glitch-container {
          position: relative;
          display: inline-block;
        }
        .glitch {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: auto;
          opacity: 0.8;
          animation: glitchAnim 1s infinite;
          pointer-events: none;
        }
        .glitch-red {
          clip: rect(0, 9999px, 60%, 0);
          left: 2px;
          text-shadow: -2px 0 red;
        }
        .glitch-blue {
          clip: rect(40%, 9999px, 100%, 0);
          left: -2px;
          text-shadow: -2px 0 blue;
        }

        @keyframes glitchAnim {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
      `}</style>
    </section>
  );
}
