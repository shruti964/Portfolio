'use client';

import React, { useState, useEffect } from 'react';
import profileImage from '/public/Shruti_Tiwari_img.jpg';
import { motion } from 'framer-motion';

// ✅ Infinite Code Typing Effect Component
const CodeTypingEffect = () => {
  const fullCode = `String whyYouShouldHireMe() {
    return """
    ✅ Why You Should Hire Me:
    - Strong foundation in programming and problem-solving
    - Quick learner with a passion for technology
    - Good communicator and team player
    - Experienced with real-world projects
    - Eager to contribute and grow with your organization
    """;
}`;

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typing = setInterval(() => {
      setDisplayedText((prev) => {
        if (index >= fullCode.length) {
          setIndex(0); // restart
          return "";
        }
        return prev + fullCode[index];
      });
      setIndex((prev) => (prev + 1) % (fullCode.length + 1));
    }, 70);

    return () => clearInterval(typing);
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="bg-[#0e0e1a] text-white p-4 rounded-xl shadow-md mt-12 font-mono text-sm leading-relaxed whitespace-pre-wrap h-[310px]"
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </motion.div>
  );
};

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="py-0 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans mt-6 md:mt-7 lg:mt-20 scroll-mt-24"
    >
      <div className="flex flex-col md:flex-row justify-between items-center md:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="md:w-1/2 flex flex-col justify-center items-center md:justify-start mb-8 md:mb-0"
        >
          <img
            src={profileImage.src}
            alt="Shruti Tiwari"
            className="w-41 h-41 sm:w-64 sm:h-50 md:w-[20rem] md:h-[20rem] rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
          />

          <a
            href="https://drive.google.com/file/d/1nDtgNlliQeIDq4LU3Xm8gBEUJ1CDlcoa/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-4 rounded-full mt-9 md:mt-8 md:mt-20 text-sm md:text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 20px #8245ec',
            }}
          >
            DOWNLOAD RESUME
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white mb-6 leading-tight exo text-2xl ">
            Hi, I am <span className='text-[#8245ec] edu-nsw-act-cursive '>Shruti Tiwari</span>
          </h1>

          <h1 className='edu-vic-wa-nt-hand text-xl'>
            Results-driven software developer with a focus on building scalable, maintainable solutions. Committed to continuous learning and delivering real value through clean and efficient code.
          </h1>

          <CodeTypingEffect />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
