// components/Skills.jsx
import { Code, Database, Layout, Server } from "lucide-react";

const skills = [
  {
    icon: <Code className="w-8 h-8 text-orange-500" />,
    title: "Frontend",
    description: "React, Next.js, Tailwind, TypeScript, UI/UX",
  },
  {
    icon: <Server className="w-8 h-8 text-orange-500" />,
    title: "Backend",
    description: "Node.js, Express, REST APIs, Authentication",
  },
  {
    icon: <Database className="w-8 h-8 text-orange-500" />,
    title: "Databases",
    description: "MongoDB, PostgreSQL, MySQL, Prisma ORM",
  },
  {
    icon: <Layout className="w-8 h-8 text-orange-500" />,
    title: "Other",
    description: "Git/GitHub, Docker, CI/CD, Cloud Deployment",
  },
];

export default function Skills() {
  return (
    <section className="py-16  w-full" style={{ background: "#36688d" }} > 
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-orange-100 dark:text-white mb-12">
          مهاراتي
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4" >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800 hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                {skill.title}
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
