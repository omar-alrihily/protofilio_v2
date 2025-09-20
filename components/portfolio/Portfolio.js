"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "موقع شخصي",
    description: "تصميم وتطوير موقع شخصي تفاعلي باستخدام Next.js وTailwind.",
    image: "/projects/personal-site.png",
    link: "#",
  },
  {
    title: "لوحة تحكم",
    description: "بناء Dashboard متكامل مع REST APIs وواجهة سهلة الاستخدام.",
    image: "/projects/dashboard.png",
    link: "#",
  },
  {
    title: "تطبيق تجارة إلكترونية",
    description: "تطوير منصة بيع وشراء بواجهة حديثة وربط مع بوابات الدفع.",
    image: "/projects/ecommerce.png",
    link: "#",
  },
  {
    title: "مدونة تقنية",
    description: "مدونة لمشاركة المقالات التقنية مع دعم Markdown والبحث.",
    image: "/projects/blog.png",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <section className="py-20 w-full" style={{ background: "#36688d" }}>
      <div className="max-w-6xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl font-extrabold tracking-wide mb-6 drop-shadow-[3px_3px_0px_#000]">
          ✦ معرض الأعمال ✦
        </h2>
        <p className="text-orange-100 mb-12 text-lg">
          بعض المشاريع التي عملت عليها، من مواقع شخصية إلى تطبيقات تفاعلية.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
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
