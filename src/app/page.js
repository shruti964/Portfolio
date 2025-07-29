'use client';
import React from 'react';
import About from '@/components/About';
import Navbar from '@/components/Navbar';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Navbar />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
