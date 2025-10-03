"use client";
import React, { useState } from "react";

const newspaperPages = [
  [
    { title: "تصميم مواقع", description: "واجهة كلاسيكية.", icon: "🖥️" },
    { title: "تطوير تطبيقات", description: "تجربة مستخدم مرتبة.", icon: "📱" },
  ],
  [
    { title: "تحليل البيانات", description: "مقالات دقيقة.", icon: "📊" },
    { title: "استشارات تقنية", description: "نصائح حديثة.", icon: "💡" },
  ],
];

export default function ServicesSection() {
  const [pageIndex, setPageIndex] = useState(0);

  const nextPage = () => {
    setPageIndex((prev) => (prev + 1 < newspaperPages.length ? prev + 1 : prev));
  };

  const prevPage = () => {
    setPageIndex((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  return (
    <div className="bg-[#fdf6e3] flex flex-col items-center p-8 min-h-screen font-serif text-[#3e2c1c]">
      <div className="w-[600px] h-[800px] p-6 border border-[#d9c6a8] bg-[#fdf6e3] relative">
        <div className="absolute inset-0 bg-[url('/paper-texture.png')] opacity-10 pointer-events-none"></div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {newspaperPages[pageIndex].map((article, idx) => (
            <article
              key={idx}
              className="p-4 border border-[#d9c6a8] rounded-md shadow-sm bg-[#fdf6e3]"
            >
              <div className="text-5xl mb-2">{article.icon}</div>
              <h3 className="text-2xl font-bold mb-1">{article.title}</h3>
              <p className="leading-relaxed">{article.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-4 flex gap-4">
        <button
          onClick={prevPage}
          className="px-4 py-2 bg-brown-600 text-white rounded hover:bg-brown-700"
        >
          السابق
        </button>
        <button
          onClick={nextPage}
          className="px-4 py-2 bg-brown-600 text-white rounded hover:bg-brown-700"
        >
          التالي
        </button>
      </div>
    </div>
  );
}
