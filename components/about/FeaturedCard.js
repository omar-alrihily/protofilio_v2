// components/SeparatedCard.jsx
export default function SeparatedCard() {
  return (
<div className="relative w-full h-full flex flex-col lg:flex-row items-center lg:items-start justify-center px-6 py-24 gap-10 lg:py-40" style={{ background: "#f7ebd3" }}>

  {/* الصورة مستقلة، تظهر فقط على الشاشات الكبيرة */}
  <div className="hidden lg:block flex-shrink-0 w-1/3 h-96 overflow-hidden lg:top-20px">
    <img
      src="/Laptop.png"
      alt="Profile"
      className="w-full h-full object-cover"
    />
  </div>

  {/* الكارد */}
  <div className="w-full lg:w-1/3 p-7 sm:p-8 rounded-2xl shadow-2xl flex flex-col justify-center text-right lg:ml-30" style={{ background: "#c95933" }}>
    <h2 className="text-2xl sm:text-3xl font-extrabold text-orange-100">أهلاً انا عمر</h2>
    <p className="text-orange-100 text-center  mt-8 sm:mt-4 text-xl sm:text-lg">
      مطور ويب متكامل متخصص في تصميم وتطوير حلول رقمية مبتكرة وعالية الجودة . أمتلك خبرة في تحويل الأفكار إلى تطبيقات ومواقع تفاعلية تجمع بين الأداء العالي والتجربة الممتازة للمستخدم . أسعى دائمًا لتقديم حلول تقنية تلبي احتياجات المشاريع بشكل دقيق . سواء كنت تبحث عن تطوير موقع شخصي، منصة تفاعلية أو مشروع تجاري رقمي ، فأنا هنا لتحويل رؤيتك الرقمية إلى واقع ملموس
    </p>
    
  </div>

</div>






  );
}
