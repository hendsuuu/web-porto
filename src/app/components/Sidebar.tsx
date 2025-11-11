"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaUser,
  FaChartBar,
  FaClipboardList,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";
import { FaComputer, FaComputerMouse } from "react-icons/fa6";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState<string>("about");

  // Scroll halus saat diklik
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  // Observer: update section aktif ketika di-scroll manual
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setActiveSection(entry.target.id), 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // List menu sidebar
  const menuItems = [
    { id: "about", label: "About Me", icon: <FaUser size={18} /> },
    { id: "skills", label: "Skills", icon: <FaComputer size={18} /> },
    { id: "projects", label: "Projects", icon: <FaClipboardList size={18} /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope size={18} /> },
  ];

  return (
    <div className="fixed left-0 top-0 w-[40vh] bg-primmary h-screen flex items-center p-5 py-7 gap-4">
      {/* === Bagian kiri sidebar === */}
      <div className="w-full h-full flex flex-col justify-between items-center gap-4">
        <div className="flex flex-col items-center w-full">
          {/* === Profile === */}
          <Image
            src="/me.jpeg"
            width={150}
            height={150}
            className="rounded-xl mt-[5em]"
            alt="Sidebar Image"
          />
          <h2 className="text-2xl font-bold mb-2 mt-2 text-gray-300">
            Hendra Sutrisno
          </h2>

          {/* Garis pembatas setelah profil */}
          <hr className="w-[80%] border-t border-gray-400/40 my-4" />

          {/* === Menu Buttons === */}
          <div className="w-full p-5 flex flex-col gap-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative flex justify-between items-center w-full rounded-sm p-4 px-5 transition-all duration-300 border cursor-pointer
                  ${
                    activeSection === item.id
                      ? "bg-white text-[#313647] font-semibold shadow-md border-white"
                      : "bg-white/10 text-gray-200 hover:bg-white/20 border-transparent"
                  }`}
              >
                <span>{item.label}</span>
                {item.icon}
              </button>
            ))}
          </div>

          {/* Garis pembatas sebelum tombol Download */}
        </div>

        {/* === Download CV Button === */}
        <div className="w-full p-5">
        <hr className="w-[100%] border-t border-gray-400/40 my-2 mb-5" />
          <a
            href="/Hendra Sutrisno.pdf"
            download
            className="flex justify-center items-center gap-2 bg-white text-[#313647] font-semibold rounded-md mt-5 py-3 hover:bg-gray-100 transition duration-300 shadow-md cursor-pointer"
          >
            <FaDownload size={16} />
            Download CV
          </a>
        </div>
      </div>

      {/* === Garis pembatas luar (tidak dihapus) === */}
      <div className="w-[1px] bg-gray-400/40 h-[90%] rounded-full items-center" />
    </div>
  );
}
