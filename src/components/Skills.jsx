"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiPostman,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

const skills = [
  { name: "Java", icon: <DiJava className="text-orange-500" /> },
  { name: "Javascript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Python", icon: <SiPython className="text-blue-400" /> },
  { name: "React", icon: <SiReact className="text-blue-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "MySql", icon: <SiMysql className="text-yellow-300" /> },
  { name: "Postman", icon: <SiPostman className="text-yellow-300" /> },
];

const TechnicalSkills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, triggerOnce: false });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-0 md:py-5 px-4 md:px-0 text-white scroll-mt-24"
    >
      {/* Heading animation */}
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
        transition={{ duration: 1.5 , ease: "easeOut"}}
        className="text-center text-3xl md:text-4xl text-white mb-12 md:mt-0 mt-7"
      >
        Technical Skills
      </motion.h2>

      {/* Skill cards - fade in one by one */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1.2, delay: index * 0.2, ease: "easeOut" }}
            className="flex items-center gap-3 border border-gray-600 px-6 py-4 rounded-2xl shadow-md hover:shadow-[#8245ec] transition duration-300"
          >
            <span className="text-2xl">{skill.icon}</span>
            <span className="text-lg font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
