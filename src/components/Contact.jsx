"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { RiSendPlaneFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Contact = () => {
  const [state, handleSubmit] = useForm("xwpbgvzg");

  return (
    <section id="contact" className="md:mt-8 py-1 px-4 md:px-0 scroll-mt-24">
      {/* Heading Animation */}
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ amount: 0.3 }}
        className="text-center text-3xl md:text-4xl text-white mb-12 md:mt-0"
      >
        Contact
      </motion.h2>

      {/* Contact Info + Form */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-9 md:gap-20 items-start">
        {/* Left: Contact Info Card with Animation */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ amount: 0.3 }}
        >
          <p className="text-lg mb-9">
            I am open to work and actively welcoming new opportunities where I
            can contribute fully, grow professionally, and be part of impactful
            projects and organization.
          </p>

          <div className="flex items-center space-x-4 mb-7">
            <div className="bg-[#8245ec] p-3 rounded-full">
              <MdEmail className="text-white text-xl" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <p className="text-white font-medium">
                shrutitiwari742@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-[#8245ec] p-3 rounded-full">
              <HiLocationMarker className="text-white text-xl" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Location</p>
              <p className="text-white font-medium">New Delhi, India</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form Card with Animation */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ amount: 0.3 }}
        >
          {state.succeeded ? (
            <p className="text-green-500 text-lg font-medium">
              ✅ Message sent successfully!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-transparent border border-gray-600 px-4 py-2 rounded text-white placeholder-gray-400"
              />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-transparent border border-gray-600 px-4 py-2 rounded text-white placeholder-gray-400"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Message"
                required
                className="w-full bg-transparent border border-gray-600 px-4 py-2 rounded text-white placeholder-gray-400"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <button
                type="submit"
                disabled={state.submitting}
                className="bg-[#8245ec] hover:bg-black transition-all text-white font-semibold py-2 px-6 rounded flex items-center space-x-2 cursor-pointer disabled:opacity-50"
              >
                <span>Send Message</span>
                <RiSendPlaneFill className="w-5 h-5" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
