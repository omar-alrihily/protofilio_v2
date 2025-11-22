"use client";
import { FaLinkedin, FaGithub, FaTwitter, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="relative py-20 md:py-32 bg-[#36688d] text-[#fff7e0] overflow-hidden" >
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* العنوان */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-[4px_4px_0px_#1e2939] text-[#ffd230] tracking-tight">
            :: تواصل معي ::
          </h2>
          <p className="text-[#ffeec0] text-lg max-w-3xl mx-auto leading-relaxed mt-4 border-b-2 border-dashed border-[#ffeec0] inline-block pb-2">
            هذه نافذة المعلومات الخاصة بي، يمكنك التواصل معي مباشرة عبر الوسائل أدناه
          </p>
        </div>

        {/* النافذة */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-lg border-2 border-[#808080] shadow-[4px_4px_0px_#404040]">

            {/* الشريط العلوي */}
            <div className="flex items-center justify-between bg-[#000080] text-white px-2 py-1 text-xs sm:text-sm font-bold">
              <div className="flex gap-1">
                <button className="bg-[#c0c0c0] text-black w-6 h-6 flex items-center justify-center border border-[#808080]">_</button>
                <button className="bg-[#c0c0c0] text-black w-6 h-6 flex items-center justify-center border border-[#808080]">□</button>
                <button className="bg-[#c0c0c0] text-black w-6 h-6 flex items-center justify-center border border-[#808080]">X</button>
              </div>
              <span>📇 معلومات التواصل</span>
            </div>

            {/* محتوى النافذة */}
            <div className="bg-[#c0c0c0] p-5 sm:p-6 text-sm text-right text-[#1e2939]">
              <div className="flex flex-col gap-4" dir="rtl">

                <div className="flex items-center justify-between border-b border-[#808080] pb-2">
                  <span className="font-bold">📞 الهاتف:</span>
                  <span dir="ltr">+966 549262671</span>
                </div>

                <div className="flex items-center justify-between border-b border-[#808080] pb-2">
                  <span className="font-bold"><FaEnvelope /> البريد الإلكتروني</span>
                  <span>omar.8260@gmail.com</span>
                </div>

                <div className="flex items-center justify-between border-b border-[#808080] pb-2">
                  <span className="font-bold">💼 لينكدإن:</span>
                  <a
                    href="https://www.linkedin.com/in/omar-alrehaili/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    linkedin.com/in/omar-alrehaili
                  </a>
                </div>

                <div className="flex items-center justify-between border-b border-[#808080] pb-2">
                  <span className="font-bold"><FaGithub /><p>github</p></span>
                  <a
                    href="https://github.com/omar-alrihily"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    github.com/omar-alrihily
                  </a>
                </div>

             

              </div>
            </div>
          </div>
        </div>

        {/* أيقونات صغيرة تحت النافذة */}
        

      </div>
    </section>
  );
}
