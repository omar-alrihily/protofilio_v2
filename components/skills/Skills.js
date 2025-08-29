"use client";
import { motion } from "framer-motion";
import { Code, Database, Layout, Server } from "lucide-react";

const skills = [
  { icon: <Code className="w-8 h-8 text-amber-400" />, title: "Frontend", description: "React, Next.js, Tailwind, TypeScript, UI/UX" },
  { icon: <Server className="w-8 h-8 text-amber-400" />, title: "Backend", description: "Node.js, Express, REST APIs, Authentication" },
  { icon: <Database className="w-8 h-8 text-amber-400" />, title: "Databases", description: "MongoDB, PostgreSQL, MySQL, Prisma ORM" },
  { icon: <Layout className="w-8 h-8 text-amber-400" />, title: "Other", description: "Git/GitHub, Docker, CI/CD, Cloud Deployment" },
];

export default function Skills() {
  return (
    <section className="py-16 w-full" style={{ background: "#36688d" }}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-orange-100 mb-12">مهاراتي</h2>
        <p className="text-gray-300 mb-12">
          هذه بعض المهارات التي أمتلكها في مجال تطوير الويب. أعمل باستمرار على تحسين مهاراتي وتعلم تقنيات جديدة.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.6 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 20, delay: i * 0.1 }}
              className="p-6 rounded-2xl shadow-md hover:shadow-xl"
              style={{ background: "#f7ebd3" }}
            >
              {/* العنوان والايقونة في نفس السطر */}
              <div className="flex items-center justify-start mb-5 gap-3">
                <div>{skill.icon}</div>
                <h3 className="text-xl font-semibold text-gray-600">{skill.title}</h3>
              </div>

              {/* الوصف على شكل تاقز */}
              <div className="flex flex-wrap gap-2 justify-start ">
                {skill.description.split(",").map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-500  text-gray-100 text-xs px-2 py-1 rounded-full"
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
