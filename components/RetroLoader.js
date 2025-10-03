"use client";
import { useEffect, useState } from "react";

export default function RetroSplash({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3 ثواني
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#36688d] z-50">
        <div className="border-4 border-[#d1d5dc] bg-[#d1d5dc] shadow-[6px_6px_0px_#000] w-80 text-center p-6">
          {/* شعار أو ايقونة */}
          <div className="mb-4 animate-bounce">💾</div>
          <h1 className="text-lg font-bold text-[#364153] mb-2">
            أهلاً بك في موقعي
          </h1>
          <p className="text-sm text-[#4a5565] mb-4">
            جار تحميل تجربتك الرقمية...
          </p>
          {/* شريط تقدم بسيط */}
          <div className="w-full bg-[#4a5565]   h-5">
            <div className="bg-blue-600 h-full animate-pulse w-3/4" />
          </div>
        </div>
      </div>
    );
  }

  return children;
}
