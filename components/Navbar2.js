"use client";
import { useState, useEffect, useRef } from "react";

export default function Navbar2() {
  const [time, setTime] = useState(new Date());
  const [activeButton, setActiveButton] = useState(null);
  const [isStartOpen, setIsStartOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  // إغلاق القائمة إذا ضغط المستخدم برة أو سحب الشاشة
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsStartOpen(false);
      }
    };
    const handleScroll = () => setIsStartOpen(false);

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (id) => {
    setActiveButton(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setTimeout(() => setActiveButton(null), 200);
  };

  const buttonStyle = (id) =>
    `flex items-center gap-8 px-4 py-1 min-w-[80px] text-sm Tajwal select-none
     ${
       activeButton === id
         ? "bg-[#99a1af] border-t-gray-600 border-l-gray-600 border-b-[#4a5565] border-r-[#f1f5f9] shadow-inner"
         : "bg-[#d1d5dc] border-t-white border-l-white border-b-[#6a7282] border-r-[#6a7282] shadow"
     }`;

  const iconUrls = {
    start: "https://win98icons.alexmeub.com/icons/png/windows-0.png",
    about: "https://win98icons.alexmeub.com/icons/png/address_book_user.png",
    featured: "https://cdn-icons-png.flaticon.com/512/929/929495.png",
    skills: "https://win98icons.alexmeub.com/icons/png/internet_options-5.png",
    cta: "https://cdn-icons-png.flaticon.com/512/126/126509.png"
  };

  return (
    <div
      ref={menuRef}
      className="fixed bottom-0 w-full h-16 bg-[#cad5e2] border-t-2 border-[#99a1af] border-b-0 border-[#99a1af] flex items-center justify-between px-4 shadow-2xl z-50"  
    >
      {/* الجانب الأيسر: الساعة */}
      <div className="flex items-center gap-2">
        <div className="px-3 py-1 text-sm border-2 border-[#d1d5dc] bg-[#f3f4f6] text-[#1e2939] font-medium shadow-inner">
          {formattedTime}
        </div>
        <div className="w-7 h-7 bg-[#f3f4f6] border-2 border-[#f3f4f6] shadow-inner flex items-center justify-center">
          <div className="w-1 h-1"></div>
        </div>
        
      </div>

      {/* الجانب الأيمن: الأزرار */}
      <div className="relative flex items-center gap-1 flex-row-reverse">
        {/* زر ابدأ */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setActiveButton("start");
            setIsStartOpen(!isStartOpen);
            setTimeout(() => setActiveButton(null), 200);
          }}
          className={`${buttonStyle("start")} ml-8 mr-6`}
        >
            <span>ابدأ</span>
          <img src={iconUrls.start} alt="ابدأ" className="h-5 w-5 object-contain" />
          
        </button>

        {/* قائمة ابدأ */}
        {isStartOpen && (
          <div className="absolute bottom-11 right-0 w-56  bg-[#d1d5dc]  flex flex-col"   >
            {[
              { id: "about", label: "عني", icon: iconUrls.about },
              { id: "featured", label: "مميز", icon: iconUrls.featured },
              { id: "skills", label: "مهارات", icon: iconUrls.skills },
              { id: "Contact", label: "تواصل", icon: iconUrls.cta }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  handleClick(item.id);
                  setIsStartOpen(false);
                }}
                className="flex flex-row-reverse items-center gap-3 px-3 py-2 text-sm text-right hover:bg-[#155dfc] hover:text-white"
              >
                <img src={item.icon} alt={item.label} className="w-5 h-5 object-contain" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        )}

        {/* باقي الأزرار (شاشات كبيرة فقط) */}
        <div className="hidden md:flex items-center gap-1 flex-row-reverse ">
          <button onClick={() => handleClick("about")} className={buttonStyle("about")}>
            <span>عني</span>
            <img src={iconUrls.about} alt="عني" className="h-5 w-5 object-contain" />
            
          </button>
          <button onClick={() => handleClick("featured")} className={buttonStyle("featured")}>
            <img src={iconUrls.featured} alt="مميز" className="h-5 w-5 object-contain" />
            <span>مميز</span>
            
            
          </button>
          <button onClick={() => handleClick("skills")} className={buttonStyle("skills")}>
            <span>مهارات</span>
            <img src={iconUrls.skills} alt="مهارات" className="h-5 w-5 object-contain" />
            
          </button>
          <button onClick={() => handleClick("Contact")} className={buttonStyle("Contact")}>
            <span>تواصل</span>
            <img src={iconUrls.cta} alt="تواصل" className="h-5 w-5 object-contain " />
            
          </button>
        </div>
      </div>
    </div>
  );
}
