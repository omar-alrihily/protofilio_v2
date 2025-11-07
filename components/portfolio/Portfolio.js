"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: " منصة مرغوب",
    description: "منصة عمل حر تجمع بين المستقلين والعملاء في نفس المدينة",
    image: "/Marghob.png",
    link: "https://marghob.net/",
  },
  {
    title: "منصة تقدير  ",
    description: "منصة  ذكاء اصطناعي لتقدير أسعار السيارات المستعملة في السوق السعودي",
    image: "/Tagdeer.png",
    link: "https://saudi-cars-b1m6.onrender.com/",
  },

];

export default function Portfolio() {
  return (
    <section className="py-20 w-full h-full" style={{ background: "#36688d" }}>
      <div className="max-w-6xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl font-extrabold tracking-wide mb-6 drop-shadow-[3px_3px_0px_#000]">
          ✦ معرض الأعمال ✦
        </h2>
        <p className="text-orange-100 mb-12 text-lg">
          بعض المشاريع التي عملت عليها، من مواقع شخصية إلى تطبيقات تفاعلية.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 30, delay: i * 0.1 }}
              className="rounded-xl overflow-hidden border-4 border-amber-300 shadow-[6px_6px_0px_#000] bg-[#f7ebd3] text-right"
              dir="rtl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover border-b-4 border-amber-300"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700 mb-4">{project.description}</p>
               <a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-4 py-2 bg-amber-300 text-black border-2 border-black shadow-[2px_2px_0px_#000] text-sm font-mono hover:translate-y-[-2px] transition-transform"
>
  مشاهدة المشروع
</a>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
