import AnimatedList from "@/components/AnimatedList";
import Image from "next/image";

export default function Experience() {
  const items = [
    {
      id: 1,
      company: "PT. Hwaseung Indonesia 2 Pati",
      logo: "/hwp.png",
      description: "Data & System • Oct 2025 – Now",
      tasks: [
        "Mengembangkan sistem input data survei berbasis Laravel.",
        "Input Data pada bagian Quality Control untuk keperluan analisis produksi.",
        "Fix Bug dan maintenance sistem yang berjalan.",
      ],
    },
    {
      id: 2,
      company: "Indosat Ooredoo Hutchison",
      logo: "/indosat.png",
      description: "Data Analyst Intern • July – Dec 2024",
      tasks: [
        "Menganalisis data kompetitor dan membuat dashboard market share dengan Tableau.",
        "Mengembangkan model prediksi tren pasar menggunakan Python & Pandas.",
        "Mempresentasikan insight mingguan kepada tim bisnis.",
      ],
    },
    {
      id: 3,
      company: "BPS Kota Semarang",
      logo: "/bps.png",
      description: "Web Developer & Data Entry Intern • Jul – Aug 2024",
      tasks: [
        "Mengembangkan sistem input data survei berbasis Laravel.",
        "Melakukan validasi data dan cleaning dataset untuk publikasi statistik.",
        "Mendukung tim pengembangan website internal BPS.",
      ],
    },
    {
      id: 4,
      company: "Bangkit Academy by Google",
      logo: "/bangkit.png",
      description: "Machine Learning Cohort • Feb – Jul 2024",
      tasks: [
        "Membangun model LSTM untuk klasifikasi produk dalam aplikasi finansial Gen-Z.",
        "Melatih model di TensorFlow dan melakukan evaluasi performa model.",
        "Berkolaborasi dengan tim Mobile & Cloud dalam capstone project untuk membuat aplikasi Pencatat Keuangan untuk Gen-Z.",
      ],
    },
    {
      id: 5,
      company: "Dinus Open Source Community",
      logo: "/dsc.jpeg",
      description: "Koordinator Divisi Pemrograman • Jun 2023 – Jun 2024",
      tasks: [
        "Mengadakan pelatihan rutin tentang pengembangan skill pemrograman untuk anggota komunitas.",
        "Mendukung pengembangan proyek open source oleh anggota komunitas.",
        "Penanggung jawab setiap kegiatan divisi pemrograman.",
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
