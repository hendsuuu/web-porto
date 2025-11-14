'use client';

import Sidebar from "./components/Sidebar";
import TextType from "@/components/TextType";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import FadeInWhenVisible from "@/components/FadeInWhenInvisible";
import { Instagram, Linkedin, Github, Mail } from "lucide-react";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen bg-primary bg-opacity-90 relative z-10">
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* ========================== */}
        {/* Main content */}
        {/* ========================== */}
        <main className="flex-1 md:ml-[40vh] flex flex-col items-center py-24 px-6 sm:px-10 md:px-16 sm:items-start">
          
          {/* 👇 Foto hanya muncul di HP */}
          <div className="block md:hidden mb-8 flex flex-col items-center">
            <Image
              src="/me.jpeg"
              width={120}
              height={120}
              alt="Hendra Sutrisno"
              className="rounded-xl shadow-lg"
            />
            <h2 className="text-xl font-bold text-gray-100 mt-3">
              Hendra Sutrisno
            </h2>
            <p className="text-gray-400 text-sm">Pati, Central Java</p>
          </div>

          {/* Nama dan lokasi (tetap di desktop) */}
          <FadeInWhenVisible direction="up" delay={0.1}>
            <h1 className="text-3xl font-bold hidden md:block">
              Hendra Sutrisno
            </h1>
            <h5 className="hidden md:block">Pati, Central Java</h5>
          </FadeInWhenVisible>

          {/* Teks typing effect */}
          <FadeInWhenVisible direction="up" delay={0.2}>
            <div className="mt-2 flex items-center justify-center gap-3">
              <p className="text-2xl font-bold">I'm a</p>
              <TextType
                className="font-bold text-2xl text-gray-300"
                text={["Web Developer", "ML Engineer", "Data Analyst"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="●"
              />
            </div>
          </FadeInWhenVisible>

          {/* Section About */}
          <FadeInWhenVisible direction="up" delay={0.3}>
            <section
              className="w-full flex flex-col md:flex-row gap-4 mt-8"
              id="about"
            >
              <div className="w-full md:w-2/4 glass-item p-5 rounded-md">
                <h2 className="text-xl font-bold mb-4">About Me</h2>
                <p className="text-justify">
                  As a dedicated Informatics Engineering graduate with a strong passion for web development, 
                  I have over a year of hands-on experience building and maintaining user-focused web applications. 
                  My expertise includes front-end and back-end development, and database management using technologies such as HTML, CSS, JavaScript, PHP, Laravel, and MySQL.
                   Eager to grow further as a Web Developer, I am committed to creating efficient, responsive, and scalable solutions that enhance user experience and meet 
                   business needs.
                </p>
              </div>

              <div className="w-full md:w-2/4 glass-item p-5 rounded-md">
                <h2 className="text-xl font-bold mb-4">Lets Get in Touch</h2>
                <div className="grid grid-cols-2 gap-4">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/hendsuuuu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white/10 hover:bg-white/20 transition rounded-md cursor-pointer"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                    <span className="font-medium">Instagram</span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/hendrasutrisno"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white/10 hover:bg-white/20 transition rounded-md cursor-pointer"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                    <span className="font-medium">LinkedIn</span>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/hendsuuu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white/10 hover:bg-white/20 transition rounded-md cursor-pointer"
                  >
                    <Github className="w-6 h-6 text-white" />
                    <span className="font-medium">GitHub</span>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:sutrishendra07@gmail.com"
                    className="flex items-center gap-3 p-4 bg-white/10 hover:bg-white/20 transition rounded-md cursor-pointer"
                  >
                    <Mail className="w-6 h-6 text-white" />
                    <span className="font-medium">Email</span>
                  </a>
                </div>
              </div>
            </section>
          </FadeInWhenVisible>

          {/* Section lainnya */}
          <div className="w-full">
          <FadeInWhenVisible direction="up" delay={0.3}>
          <section className="w-full mt-5" id="experience">
            <Experience />
          </section>
          </FadeInWhenVisible>
          </div>
          <div className="w-full">
          <FadeInWhenVisible direction="up" delay={0.3}>
          <section className="w-full mt-5" id="skills">
            <TechStack />
          </section>
          </FadeInWhenVisible>
          </div>
          <div className="w-full">

          <FadeInWhenVisible direction="up" delay={0.3}>
          <section className="w-full mt-5" id="projects">
            <Project />
          </section>
          </FadeInWhenVisible>
          </div>
          <div className="w-full">
          <FadeInWhenVisible direction="up" delay={0.3}>
          <section className="w-full mt-5" id="contact">
            <Contact />
          </section>
          </FadeInWhenVisible>
          </div>
        </main>
      </div>
    </>
  );
}
