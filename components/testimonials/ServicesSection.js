"use client";
import { Cpu, Terminal, Layers } from "lucide-react";

// نظام الألوان الأصلي:
// الخلفية: #36688d (أزرق غامق)
// لون البطاقات (الورق): #fff7e0 (بيج فاتح)
// الأكسنت: #ffd230 (أصفر مشع)

const services = [
  {
    icon: <Cpu className="w-8 h-8 text-[#36688d]" />, // أيقونات بلون الخلفية الداكن لتباين حاد
    title: "أنظمة الويب",
    tagline: "ابنِ بسرعة، وتجاوز الحدود.",
    desc: "تصميم وتطوير مواقع وأنظمة تعتمد على البساطة في الواجهة، والقوة في البنية الخلفية. الجمع بين الشكل العملي والهوية الجمالية.",
  },
  {
    icon: <Terminal className="w-8 h-8 text-[#36688d]" />,
    title: " الذكاء الاصطناعي",
    tagline: "حلول تفكر معك.",
    desc: "دمج خوارزميات الذكاء الاصطناعي في التجربة الرقمية: من تحليل البيانات حتى التفاعل الذكي مع المستخدم.",
  },
  {
    icon: <Layers className="w-8 h-8 text-[#36688d]" />,
    title: "تجربة المستخدم",
    tagline: "منطق قبل الجمال.",
    desc: "تصميم التجربة من منظور إدراكي — فهم السلوك قبل الزخرفة. بناء واجهات تجعل التفاعل بديهيًا، دون شرح.",
  },
];

export default function ServicesSection() {
  // دالة لتوليد كلاسات لتغيير شكل البطاقة قليلاً
  const shapeClasses = [
    "rotate-1 shadow-[5px_5px_0_#ffd230,-5px_-5px_0_#ffd230]", // دوران و ظل مزدوج
    "rotate-[-2deg] shadow-[8px_8px_0_#ffd230]", // دوران أكبر و ظل واحد سميك
    "rotate-[1deg] shadow-[-6px_6px_0_#ffd230]", // دوران عكسي وظل جانبي
  ];

  return (
    // الخلفية الثابتة
    <section dir="rtl" className="relative py-24 bg-[#36688d] text-[#fff7e0] overflow-hidden">
        
      {/* تأثير الشبكة الخفيفة أو النقش (لتكسير جمود اللون الثابت) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('data:image/svg+xml;base64,...')] bg-repeat" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* العنوان - بخط عريض وغير متناسق */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4  
             drop-shadow-[6px_6px_0px_#1e2939] // ظل سميك وداكن
             text-[#ffd230] // لون الأكسنت
             tracking-tighter"> 
            الـخـدمـات الـرقـمـيـة
          </h2>
          <p className="text-[#ffeec0] text-lg max-w-3xl mx-auto leading-relaxed mt-4">
            نـقـدم حـلـولاً مـصـمـمـة لـك بـطـريـقـة لـم تـعـتـد عـلـيـهـا مـن قـبـل.
          </p>
        </div>

        {/* شبكة البطاقات */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 pt-8">
          {services.map((s, i) => (
            // البطاقة: المظهر المقطوع يدوياً
            <div
              key={i}
              // تطبيق خصائص الشكل غير المتناسق والدوران والظل العشوائي
              className={`relative p-8 bg-[#fff7e0] text-[#1e2939] 
              border-2 border-[#1e2939] // حدود بسيطة للورقة
              transition-all duration-300 transform hover:scale-[1.02] 
              ${shapeClasses[i % shapeClasses.length]}`} // تطبيق كلاس الشكل العشوائي
            >
              
              {/* تزيين الزاوية (كأنه "لصق" بشريط لاصق) */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-[#ffd230] border-l-2 border-b-2 border-[#1e2939] -mt-1 -mr-1 transform rotate-6 opacity-70"></div>

              {/* الأيقونة + العنوان */}
              <div className="flex items-center gap-4 mb-4 ">
                {s.icon}
                <h3 className="text-2xl font-extrabold  text-[#36688d] uppercase">
                  {s.title}
                </h3>
              </div>

              {/* التاق - بخط مائل Bold */}
              <p className="text-sm font-bold mb-3 text-[#000] italic border-b-2 border-dashed border-[#afafaf] pb-2">
                {s.tagline}
              </p>

              {/* النص */}
              <p className="text-sm leading-relaxed text-black">
                {s.desc}
              </p>
              
              {/* زر "مهم" بمظهر مطبوع/ختم */}
              <button className="mt-6 px-4 py-1 text-sm font-extrabold text-[#ffd230] bg-[#36688d] border-2 border-dashed border-[#ffd230] hover:bg-black transition-colors duration-200">
                 ** تـحـديـد الـخـدمـة **
              </button>
            </div>
          ))}
        </div>
      </div>
      
      {/* طبقة سفلية زخرفية */}
      

    </section>
  );
}