"use client";
import React, { useEffect, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const educationData = [
  {
    id: 1,
    title: "MCA - Master of Computer Applications",
    institution: "Banarsidas Chandiwala Institute Of Information Technology",
    date: "2023 - 2025",
    percentage: "9.0 CGPA",
    side: "left",
  },
  {
    id: 2,
    title: "BCA - Bachelor of Computer Applications",
    institution: "Chander Prabhu Jain College Of Higher Studies And School Of Law",
    date: "2019 - 2022",
    percentage: "8.8 CGPA",
    side: "right",
  },
  {
    id: 3,
    title: "XII th",
    institution: "Sanatan Dharam Public School",
    date: "2018 - 2019",
    percentage: "First Division",
    side: "left",
  },
];

const Education = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md: 768px
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section id="education" className="md:mt-12 py-6 px-4 md:px-0 scroll-mt-24">
      {/* Heading Animation */}
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5,ease: "easeOut" }}
        viewport={{ amount: 0.3 }} 
        className="text-center text-3xl md:text-4xl text-white mb-12 md:mt-0 mt-7"
      >
        Education
      </motion.h2>

      <div className="relative max-w-5xl mx-auto md:top-4">
        {/* Timeline vertical line */}
         <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
        className="absolute origin-top inset-y-0 left-6 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-white z-0"/>

        {educationData.map((item, index) => {
          const animateFrom = isMobile ? -100 : item.side === "left" ? -100 : 100;

          return (
            <motion.div
              key={item.id}
              initial={{ x: animateFrom, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.2 * index,ease: "easeOut" }}
              viewport={{ amount: 0.3 }}
              className={`relative mb-13 pl-16 md:pl-0 flex flex-col md:flex-row items-center ${
                item.side === "left"
                  ? "md:justify-start md:pr-[55%]"
                  : "md:justify-end md:pl-[55%]"
              }`}
            >
              {/* Timeline Icon */}
              <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 bg-[#8245ec] text-white w-10 h-10 rounded-full flex items-center justify-center z-10 border-2 border-white">
                <FaGraduationCap />
              </div>

              {/* Card */}
              <div
                className={`w-full md:w-[100%] bg-[#0e0e1a] bg-opacity-10 backdrop-blur-md text-white p-6 rounded-md shadow-md z-10 border border-white border-opacity-20 ${
                  item.side === "left" ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm">{item.institution}</p>
                <p className="text-sm mt-2">{item.percentage}</p>
                <p className="text-sm mt-2">{item.date}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
