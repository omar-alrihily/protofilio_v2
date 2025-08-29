"use client";
import { useEffect, useState } from "react";


export default function About() {
  const rotatingWords = ["النجاح", "القمة", "الإنجاز"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const languages = ["JavaScript", "Python", "React", "Node.js"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-full  overflow-hidden flex justify-center  text-center px-6 " style={{ background: "#f7ebd3" }}>
      
      

      <div className="relative z-10 flex flex-col items-center space-y-12 space-x-6 mt-18   ">
      <div className="relative flex justify-center items-center mt-16 mb-20">
  <div className="absolute w-62 h-62 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full blur-2xl -z-10"></div>
  <img
    src="/omar_logo3.svg"
    alt="Logo"
    className="opacity-40 w-50 md:w-60 h-auto drop-shadow-lg transition-transform duration-500 hover:scale-105"
  />
</div>

        <div className="relative flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4  ">
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-600 relative">
            <span
              key={currentIndex}
              className="absolute text-amber-700 opacity-0"
              style={{
                animation: "fallWord 3.0s ease forwards",
              }}
            >
              {rotatingWords[currentIndex]}
            </span>
            <span className="ml-23 md:ml-20 lg:ml-35 ">انطلق بفكرتك إلى</span>
          </p>
        </div>
        
        
      </div>
      

      <style jsx>{`
        @keyframes fallWord {
          0% { opacity: 0; transform: translateY(-20px); }
          50% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(20px); }
        }
      `}</style>
    </section>
  );
}
