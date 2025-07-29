"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Live Location Tracker",
    image: "/s1.png",
    description:
      "This project helps track attendance and monitor the location and routes traveled by individual members in an organization. The application uses Google Maps to display real-time locations.",
    github: "https://github.com/your-username/devcollab",
  },
  {
    title: "SkillSync AI Career Coach",
    image: "/s2.jpg",
    description:
      "An AI-powered platform designed to help users assess and showcase their technical skills. SkillSync AI enables personalized skill tracking, automated resume enhancement, and smart career suggestions — all through a sleek, responsive interface built with modern web technologies.",
    github: "https://github.com/your-username/homii",
  },
  {
    title: "BlogSpace",
    image: "/s3.png",
    description:
      "A dynamic blogging platform that allows users to create, edit, and share posts with ease. BlogSpace features a clean, responsive UI, markdown support, and real-time content rendering. Built with modern frontend frameworks and designed for a seamless reading and writing experience.",
    github: "https://github.com/your-username/well-mind-wave",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="md:mt-4 py-14 px-4 md:px-0 scroll-mt-24">
      {/* Heading Animation */}
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5,ease: "easeOut" }}
        className="text-center text-3xl md:text-4xl text-white mb-12 md:mt-0"
      >
        Projects
      </motion.h2>

      {/* Project Cards with Fade Animation */}
      <div className="grid gap-10 max-w-6xl mx-auto grid-cols-1 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: index * 0.3 , ease: "easeOut"}}
            className="rounded-md overflow-hidden bg-white text-black shadow-lg hover:shadow-[#8245ec] transition duration-300">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <div className="flex items-center gap-2 text-xl font-semibold mb-3">
                {project.title}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-lg hover:text-gray-700" />
                </a>
              </div>
              <p className="text-sm text-gray-700">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
