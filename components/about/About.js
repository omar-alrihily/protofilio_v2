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
    <section className="relative w-full h-full  overflow-hidden flex justify-center  text-center px-6 " style={{ background: "#36688d" }}>
      
      

      <div className="relative z-10 flex flex-col items-center space-y-12 space-x-6    ">
      <div className="relative flex justify-center items-center mt-6 mb-20">
       
  <img
    src="/LOG2.png"
    alt="Logo"
    className="opacity-90 w-60 md:w-70 h-auto drop-shadow-lg transition-transform duration-500 hover:scale-105"
  />
</div>

        <div className="relative flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4  ">
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 relative">
            <span
              key={currentIndex}
              className="absolute text-gray-300 opacity-0 font-sans "
              style={{
                animation: "fallWord 3.0s ease forwards",
              }}
            >
              {rotatingWords[currentIndex]}
            </span>
            <span className="ml-23 md:ml-20 lg:ml-35 font-sans  ">انطلق بفكرتك إلى</span>
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
