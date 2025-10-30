 import AnimatedList from "@/components/AnimatedList";
import { h2 } from "motion/react-client";

export default function Experience() {
    const items = [
        {
           id: 1,
            company: 'PT. Hwaseung Indonesia 2 Pati',
            logo: '/hwp.png',
            description: 'Data & System • Oct 2025 – Now',
            tasks: [
                'Mengembangkan sistem input data survei berbasis Laravel.',
                'Input Data pada bagian Quality Control untuk keperluan analisis produksi.',
                'Fix Bug dan maintenance sistem yang berjalan.',
            ]
        },
        {
           id: 2,
            company: 'Indosat Ooredoo Hutchison',
            logo: '/indosat.png',
            description: 'Data Analyst Intern • July – Dec 2024',
            tasks: [
                'Menganalisis data kompetitor dan membuat dashboard market share dengan Tableau.',
                'Mengembangkan model prediksi tren pasar menggunakan Python & Pandas.',
                'Mempresentasikan insight mingguan kepada tim bisnis.'
            ]
        },
        {
            id: 3,
            company: 'BPS Kota Semarang',
            logo: '/bps.png',
            description: 'Web Developer & Data Entry Intern • Jul – Aug 2024',
            tasks: [
                'Mengembangkan sistem input data survei berbasis Laravel.',
                'Melakukan validasi data dan cleaning dataset untuk publikasi statistik.',
                'Mendukung tim pengembangan website internal BPS.'
            ]
        },
        {
            id: 4,
            company: 'Bangkit Academy by Google',
            logo: '/bangkit.png',
            description: 'Machine Learning Cohort • Feb – Jul 2024',
            tasks: [
                'Membangun model LSTM untuk klasifikasi produk dalam aplikasi finansial Gen-Z.',
                'Melatih model di TensorFlow dan melakukan evaluasi performa model.',
                'Berkolaborasi dengan tim Mobile & Cloud dalam capstone project untuk membuat aplikasi Pencatat Keuangan untuk Gen-Z.'
            ]
        },
        {
            id: 5,
            company: 'Dinus Open Source Community',
            logo: '/dsc.jpeg',
            description: 'Koordinator Divisi Pemrograman • Jun 2023 – Jun 2024',
            tasks: [
                'Mengadakan pelatihan rutin tentang pengembangan skill pemrograman untuk anggota komunitas.',
                'Mendukung pengembangan proyek open source oleh anggota komunitas.',
                'Penanggung jawab setiap kegiatan divisi pemrograman.'
            ]
        }
    ];

  return (  
    <>
    <h2 className="text-xl font-bold mb-3">Experience</h2>
        <AnimatedList className="w-full  glass-item h-[25em] p-5"
            items={items}
            onItemSelect={(item, index) => console.log(item, index)}
            showGradients={true}
            enableArrowNavigation={true}
            displayScrollbar={false}
        />
    </>
  )
}