"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("تم إرسال:", formData);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#36688d] px-4">
      <div className="w-full max-w-lg border-2 border-[#808080] shadow-[4px_4px_0px_#404040]">
        
        {/* Title Bar */}
        <div className="flex items-center justify-between bg-[#000080] text-white px-2 py-1 text-xs sm:text-sm font-bold">
          <div className="flex gap-1">
            <button className="bg-[#c0c0c0] text-black w-6 h-6 flex items-center justify-center border border-[#808080]">
              _
            </button>
            <button className="bg-[#c0c0c0] text-black w-6 h-6 flex items-center justify-center border border-[#808080]">
              □
            </button>
            <button className="bg-[#c0c0c0] text-black w-6 h-6 flex items-center justify-center border border-[#808080]">
              X
            </button>
          </div>
          <span>📨 تواصل معي</span>
        </div>

        {/* Window Content */}
        <div className="bg-[#c0c0c0] p-3 sm:p-4 text-sm text-right">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-gray-800">
            
            <label className="flex flex-col">
              <span className="mb-1">الاسم:</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-white border-2 border-[#808080] px-2 py-1 text-right focus:outline-none w-full"
              />
            </label>

            <label className="flex flex-col">
              <span className="mb-1">البريد الإلكتروني:</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-white border-2 border-[#808080] px-2 py-1 text-right focus:outline-none w-full"
              />
            </label>

            <label className="flex flex-col">
              <span className="mb-1">الرسالة:</span>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="bg-white border-2 border-[#808080] px-2 py-1 text-right focus:outline-none w-full"
              />
            </label>

            <div className="flex flex-col sm:flex-row justify-end gap-2 mt-4">
              <button
                type="submit"
                className="bg-[#c0c0c0] border-2 border-[#808080] px-4 py-1 active:border-t-white active:border-l-white active:border-b-black active:border-r-black"
              >
                إرسال
              </button>
              <button
                type="reset"
                className="bg-[#c0c0c0] border-2 border-[#808080] px-4 py-1 active:border-t-white active:border-l-white active:border-b-black active:border-r-black"
              >
                إلغاء
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
