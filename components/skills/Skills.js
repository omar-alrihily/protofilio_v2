"use client";
import { motion } from "framer-motion";
import { Code, Database, Layout, Server } from "lucide-react";

const skills = [
  { icon: <Code className="w-8 h-8 text-[#ffd230]" />, title: "الواجهات الأمامية", description: "React, Next.js, Tailwind, TypeScript, UI/UX" },
  { icon: <Server className="w-8 h-8 text-[#ffd230]" />, title: "الخلفيات", description: "Node.js, Express, REST APIs, Authentication" },
  { icon: <Database className="w-8 h-8 text-[#ffd230]" />, title: "قواعد البيانات", description: "MongoDB, PostgreSQL, MySQL, Prisma ORM" },
  { icon: <Layout className="w-8 h-8 text-[#ffd230]" />, title: "أخرى", description: "Git/GitHub, Docker, CI/CD, Cloud Deployment" },
];

export default function Skills() {
  return (
    <section className="py-20 w-full" style={{ background: "#36688d" }}>
      <div className="max-w-6xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl font-extrabold tracking-wide mb-6 drop-shadow-[3px_3px_0px_#000]">
          ✦ مهاراتي ✦
        </h2>
        <p className="text-[#ffedd4] mb-12 text-lg">
          بعض التقنيات والأدوات التي أستخدمها في تطوير الويب، وأسعى دائماً لتعلم المزيد وتطوير نفسي
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 30, delay: i * 0.1 }}
              className="p-6 rounded-xl border-4 border-[#ffd230] shadow-[6px_6px_0px_#000] bg-[#fff7e0] text-right"
              
            >
              {/* العنوان والايقونة */}
              <div className="flex items-center justify-end gap-3 mb-5">
                
                <h3 className="text-lg font-bold text-[#1e2939]">{skill.title}</h3>
                <div>{skill.icon}</div>
                
              </div>

              {/* التاقات */}
              <div className="flex flex-wrap gap-2 justify-end">
                {skill.description.split(",").map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-mono bg-[#FFD54F] text-black border-2 border-black shadow-[2px_2px_0px_#000]"
                  >
                    {tag.trim()}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
