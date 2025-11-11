"use client";

import SpotlightCard from "@/components/SpotlightCard";

export default function Project() {
  const projects = [
    {
      id: 1,
      title: "IKM Website",
      description:
        "Website for employee permission and Survey Tracking System at BPS Kota Semarang.",
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800",
      link: "https://bpskotasemarang.go.id/",
    },
    {
      id: 2,
      title: "Category Classification Model",
      description:
        "LSTM-powered app to categorize product names and help Gen Z manage their expenses.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800",
      link: "https://github.com/hendsuuu/product-category-lstm",
    },
    {
      id: 3,
      title: "Competition Landscape Dashboard",
      description:
        "A Laravel Filament Dashboard to visualize market competition data for Indosat Ooredoo Hutchison.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800",
      link: "https://github.com/hendsuuu/competition-dashboard",
    },
  ];

  return (
    <>
      <h2 className="text-xl font-bold mb-3">My Projects</h2>
      <div className="w-full h-full glass-item rounded-md p-5">
        <div className="w-full flex flex-wrap justify-center gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <SpotlightCard
                className="custom-spotlight-card border-white w-[300px] h-[350px] rounded-xl overflow-hidden relative hover:scale-105 transition-all duration-300 cursor-pointer"
                spotlightColor="rgba(255, 255, 255, 0.7)"
              >
                {/* Gambar background */}
                <div
                  className="absolute inset-0 bg-cover bg-center z-0"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    filter: "brightness(0.9)",
                  }}
                ></div>

                {/* Efek gradient supaya teks tetap terbaca */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/10 to-transparent z-[1]" />

                {/* Konten teks */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-[2]">
                  <div className="relative">
                    {/* Lapisan blur putih */}
                    <div className="absolute inset-0 bg-white/70 backdrop-blur-md rounded-lg"></div>

                    {/* Isi teks */}
                    <div className="relative p-4 rounded-lg">
                      <h3 className="text-lg font-bold text-[#1f1f1f] mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-700 leading-snug">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
