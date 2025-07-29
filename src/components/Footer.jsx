"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1,ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#0e0e1a] text-white py-4 px-4 md:mt-15 mt-12"
    >
      <div className="flex flex-col items-center justify-center space-y-3">
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Shruti Tiwari
        </p>

        <div className="flex space-x-6">
          <a
            href="https://github.com/shruti96"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              className="hover:scale-110 transition-transform duration-200"
              size={22}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/shruti-tiwari-6040b131b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              className="hover:scale-110 transition-transform duration-200"
              size={22}
            />
          </a>
          <a
            href="https://leetcode.com/u/shrutit25/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode
              className="hover:scale-110 transition-transform duration-200"
              size={22}
            />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
