import AnimatedList from "@/components/AnimatedList";
import Image from "next/image";

export default function Experience() {
  const items = [
        {
            id: 1,
            company: "PT. Hwaseung Indonesia 2 Pati",
            logo: "/hwp.png",
            description: "Data & System • Oct 2025 – Present",
            tasks: [
            "Developed a survey data input system using Laravel.",
            "Handled data entry in the Quality Control department for production analysis purposes.",
            "Fixed bugs and performed ongoing system maintenance.",
            ],
        },
        {
            id: 2,
            company: "Indosat Ooredoo Hutchison",
            logo: "/indosat.png",
            description: "Data Analyst Intern • July – Dec 2024",
            tasks: [
            "Analyzed competitor data and built a market share dashboard using Laravel Fillament.",
            "Developed market trend analysis using Python and Pandas.",
            "Presented insights and findings to the business team.",
            ],
        },
        {
            id: 3,
            company: "BPS Kota Semarang",
            logo: "/bps.png",
            description: "Web Developer & Data Entry Intern • Jul – Aug 2024",
            tasks: [
            "Developed a CodeIgniter-based employee permission and survey tracking system.",
            "Performed data validation and cleaning for statistical publication datasets.",
            "Supported the internal web development team in improving the organization's website.",
            ],
        },
        {
            id: 4,
            company: "Bangkit Academy by Google",
            logo: "/bangkit.png",
            description: "Machine Learning Cohort • Feb – Jul 2024",
            tasks: [
            "Built an LSTM model for product classification in a Gen-Z financial management app.",
            "Train and evaluate models using TensorFlow to optimize performance.",
            "Collaborate with Mobile and Cloud teams on a capstone project for a financial tracking application.",
            ],
        },
        {
            id: 5,
            company: "Dinus Open Source Community",
            logo: "/dsc.jpeg",
            description: "Programming Division Coordinator • Jun 2023 – Jun 2024",
            tasks: [
            "Organized regular training sessions to improve members’ programming skills.",
            "Supported the development of open-source projects by community members.",
            "Lead and managed all activities under the Programming Division.",
            ],
        },
    ];


  return (
    <>
      <h2 className="text-xl font-bold mb-3">Experience</h2>
      <div className="glass-item w-full rounded-md h-auto md:h-[25em]">
        {/* 🖥️ Desktop view */}
        <div className="hidden md:block">
          <AnimatedList
            className="w-full h-[25em]"
            items={items}
            onItemSelect={(item, index) => console.log(item, index)}
            showGradients={true}
            enableArrowNavigation={true}
            displayScrollbar={false}
          />
        </div>

        {/* 📱 Mobile view */}
        <div className="block p-5 md:hidden">
          <div className="flex flex-col gap-5 overflow-y-auto max-h-[60vh] pr-2">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center bg-white/10 p-5 rounded-xl shadow-md hover:bg-white/20 transition text-center"
              >
                {/* 🔹 Logo di tengah */}
                <div className="mb-3">
                  <Image
                    src={item.logo}
                    width={70}
                    height={70}
                    alt={item.company}
                    className="rounded-lg bg-white/80 p-2 shadow-sm"
                  />
                </div>

                {/* 🔹 Nama perusahaan & deskripsi */}
                <div className="mb-2">
                  <h3 className="font-semibold text-white text-lg leading-tight">
                    {item.company}
                  </h3>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>

                {/* 🔹 List tugas */}
                <ul className="list-disc text-left text-gray-300 text-sm mt-2 pl-5 space-y-1">
                  {item.tasks.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
