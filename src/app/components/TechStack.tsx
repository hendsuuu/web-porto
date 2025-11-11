'use client';
import {
  SiApache,
  SiBootstrap,
  SiCplusplus,
  SiDocker,
  SiFlask,
  SiGithub,
  SiJavascript,
  SiJenkins,
  SiLaragon,
  SiLaravel,
  SiLooker,
  SiNetlify,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiTableau,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiUbuntu,
} from "react-icons/si";

export default function TechStack() {
  const techLogos = [
    { icon: SiReact, color: "#61DAFB", title: "React", href: "https://react.dev" },
    { icon: SiNextdotjs, color: "#FFFFFF", title: "Next.js", href: "https://nextjs.org" },
    { icon: SiTypescript, color: "#3178C6", title: "TypeScript", href: "https://www.typescriptlang.org" },
    { icon: SiTailwindcss, color: "#38BDF8", title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { icon: SiLaravel, color: "#FF2D20", title: "Laravel", href: "https://laravel.com" },
    { icon: SiPhp, color: "#777BB4", title: "PHP", href: "https://www.php.net" },
    { icon: SiTensorflow, color: "#FF6F00", title: "TensorFlow", href: "https://www.tensorflow.org" },
    { icon: SiDocker, color: "#2496ED", title: "Docker", href: "https://www.docker.com" },
    { icon: SiFlask, color: "#FFFFFF", title: "Flask", href: "https://flask.palletsprojects.com" },
    { icon: SiLaragon, color: "#5c94cfff", title: "Laragon", href: "https://laragon.org" },
    { icon: SiJavascript, color: "#F7DF1E", title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { icon: SiPython, color: "#3776AB", title: "Python", href: "https://www.python.org" },
    { icon: SiBootstrap, color: "#7952B3", title: "Bootstrap", href: "https://getbootstrap.com" },
    { icon: SiGithub, color: "#181717", title: "GitHub", href: "https://github.com" },
    { icon: SiNodedotjs, color: "#65c765ff", title: "Node.js", href: "https://nodejs.org" },
    { icon: SiNginx, color: "#009639", title: "Nginx", href: "https://www.nginx.com" },
    { icon: SiUbuntu, color: "#E95420", title: "Ubuntu", href: "https://ubuntu.com" },
    { icon: SiJenkins, color: "#D24939", title: "Jenkins", href: "https://www.jenkins.io" },
    { icon: SiApache, color: "#D22128", title: "Apache", href: "https://httpd.apache.org" },
    { icon: SiNetlify, color: "#00C7B7", title: "Netlify", href: "https://www.netlify.com" },
    { icon: SiLooker, color: "#4285F4", title: "Looker", href: "https://looker.com" },
    { icon: SiTableau, color: "#E97627", title: "Tableau", href: "https://www.tableau.com" },
  ];

  return (
    <>
      <h2 className="text-xl font-bold mb-3">My Skill</h2>
      <div className="w-full h-full glass-item px-5 py-8 rounded-md">
        {/* Flex Container */}
        <div className="
          flex flex-wrap justify-center 
          gap-4 sm:gap-5 md:gap-6 
          mt-5
        ">
          {techLogos.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <a
                key={i}
                href={tech.href}
                target="_blank"
                title={tech.title}
                className="
                  group flex flex-col items-center justify-center
                  bg-white/10 border border-white/20 backdrop-blur-md 
                  rounded-xl 
                  p-4 sm:p-5 
                  w-[45%] sm:w-[30%] md:w-[18%] xl:w-[13%]
                  hover:scale-105 hover:border-sky-400 
                  transition duration-300
                "
              >
                <div className="text-4xl sm:text-5xl transition-all duration-300 group-hover:scale-110">
                  <Icon
                    className="transition-colors duration-300 text-white group-hover:[color:var(--icon-color)]"
                    style={{ "--icon-color": tech.color } as React.CSSProperties}
                  />
                </div>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white text-center transition-colors">
                  {tech.title}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
