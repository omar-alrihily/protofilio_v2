// components/SeparatedCard.jsx
'use client'; // 👈 ADD THIS LINE

import { useState } from 'react'; // 👈 You must also import useState

export default function SeparatedCard() {
  // Assume setActiveButton is part of state management
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (id) => {
    setActiveButton(id);
    const element = document.getElementById(id);
    if (element) {
      // Use window.scrollTo instead of scrollIntoView for better compatibility and control
      // Or keep scrollIntoView if it works for your use case
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // You might want to remove the setTimeout unless it's strictly needed
    setTimeout(() => setActiveButton(null), 200);
  };

  return (
    <div className="relative w-full flex flex-col lg:flex-row items-center lg:items-start justify-center px-6 py-78 gap-10 lg:py-40 lg:mt-36" style={{ background: "#36688d" }}>

      {/* الصورة مستقلة، تظهر فقط على الشاشات الكبيرة */}
      <div className="hidden lg:block flex-shrink-0 w-1/3 h-96 overflow-hidden lg:top-20px mt-10 relative glitch">
        <img
          src="/Laptop.png"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* الكارد */}
      <div className="w-full lg:w-1/3 p-8 flex flex-col items-center text-center rounded-2xl shadow-[8px_8px_0px_#000] border-4 border-black lg:ml-28"
        style={{ background: "linear-gradient(135deg, #ffd230 0%, #f8eda5 100%)" }}>

        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-widest text-[#4a5565] drop-shadow-[2px_2px_0px_#3c6997]">
          أهلاً أنا عمر
        </h2>

        <p className="mt-6 sm:mt-4 text-lg sm:text-base leading-relaxed text-black font-medium bg-[#fef9c2] px-4 py-3 rounded-lg shadow-inner rotate-1">
          مطور ويب متكامل متخصص في تصميم وتطوير حلول رقمية مبتكرة وعالية الجودة.
          أمتلك خبرة في تحويل الأفكار إلى تطبيقات ومواقع تفاعلية تجمع بين الأداء
          العالي والتجربة الممتازة للمستخدم. أسعى دائمًا لتقديم حلول تقنية تلبي
          احتياجات المشاريع بدقة. سواء كنت تبحث عن تطوير موقع شخصي، منصة تفاعلية
          أو مشروع تجاري رقمي، فأنا هنا لتحويل رؤيتك الرقمية إلى واقع ملموس.
        </p>

        <div className="mt-6">
          {/* The onClick handler is now defined within this Client Component */}
          <button onClick={() => handleClick("Contact")}
            className="px-6 py-2 text-lg text-[#4a5565] font-bold uppercase border-2 border-black bg-[#fef9c2] hover:bg-[#fbc531] shadow-[4px_4px_0px_#000] transition-transform hover:-translate-y-1">
            🚀 تواصل معي
          </button>
        </div>
      </div>
    </div>
  );
}