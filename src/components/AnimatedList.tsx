import React, { useRef, useState, useEffect, ReactNode, MouseEventHandler, UIEvent } from 'react';
import { motion, useInView } from 'motion/react';

interface AnimatedItemProps {
  children: ReactNode;
  delay?: number;
  index: number;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const AnimatedItem: React.FC<AnimatedItemProps> = ({ children, delay = 0, index, onMouseEnter, onClick }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5, once: false });
  return (
    <motion.div
      ref={ref}
      data-index={index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
      transition={{ duration: 0.2, delay }}
      className="mb-4 cursor-pointer"
    >
      {children}
    </motion.div>
  );
};

interface ExperienceItem {
  id: number;
  company: string;
  logo: string;
  description: string;
  tasks: string[];
}

interface AnimatedListProps {
  items?: ExperienceItem[];
  onItemSelect?: (item: ExperienceItem, index: number) => void;
  showGradients?: boolean;
  enableArrowNavigation?: boolean;
  className?: string;
  itemClassName?: string;
  displayScrollbar?: boolean;
  initialSelectedIndex?: number;
}

const AnimatedList: React.FC<AnimatedListProps> = ({
  items = [
    {
      id: 1,
      company: 'Indosat Ooredoo Hutchison',
      logo: '/images/indosat.png',
      description: 'Data Analyst Intern • July – Dec 2024',
      tasks: [
        'Menganalisis data kompetitor dan membuat dashboard market share dengan Tableau.',
        'Mengembangkan model prediksi tren pasar menggunakan Python & Pandas.',
        'Mempresentasikan insight mingguan kepada tim bisnis.'
      ]
    },
    {
      id: 2,
      company: 'BPS Kota Semarang',
      logo: '/bps.jpeg',
      description: 'Web Developer & Data Entry Intern • Jan – Apr 2023',
      tasks: [
        'Mengembangkan sistem input data survei berbasis Laravel.',
        'Melakukan validasi data dan cleaning dataset untuk publikasi statistik.',
        'Mendukung tim pengembangan website internal BPS.'
      ]
    },
    {
      id: 3,
      company: 'Bangkit Academy by Google',
      logo: '/images/bangkit.png',
      description: 'Machine Learning Cohort • Feb – Jul 2024',
      tasks: [
        'Membangun model LSTM untuk klasifikasi produk dalam aplikasi finansial Gen-Z.',
        'Melatih model di TensorFlow dan melakukan evaluasi performa model.',
        'Berpartisipasi dalam capstone project lintas learning path.'
      ]
    }
  ],
  onItemSelect,
  showGradients = true,
  enableArrowNavigation = true,
  className = '',
  itemClassName = '',
  displayScrollbar = true,
  initialSelectedIndex = -1
}) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(initialSelectedIndex);
  const [keyboardNav, setKeyboardNav] = useState<boolean>(false);
  const [topGradientOpacity, setTopGradientOpacity] = useState<number>(0);
  const [bottomGradientOpacity, setBottomGradientOpacity] = useState<number>(1);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target as HTMLDivElement;
    setTopGradientOpacity(Math.min(scrollTop / 50, 1));
    const bottomDistance = scrollHeight - (scrollTop + clientHeight);
    setBottomGradientOpacity(scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1));
  };

  useEffect(() => {
    if (!enableArrowNavigation) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex(prev => Math.min(prev + 1, items.length - 1));
      } else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex(prev => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter') {
        if (selectedIndex >= 0 && selectedIndex < items.length) {
          e.preventDefault();
          if (onItemSelect) {
            onItemSelect(items[selectedIndex], selectedIndex);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [items, selectedIndex, onItemSelect, enableArrowNavigation]);

  useEffect(() => {
    if (!keyboardNav || selectedIndex < 0 || !listRef.current) return;
    const container = listRef.current;
    const selectedItem = container.querySelector(`[data-index="${selectedIndex}"]`) as HTMLElement | null;
    if (selectedItem) {
      const extraMargin = 50;
      const containerScrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const itemTop = selectedItem.offsetTop;
      const itemBottom = itemTop + selectedItem.offsetHeight;
      if (itemTop < containerScrollTop + extraMargin) {
        container.scrollTo({ top: itemTop - extraMargin, behavior: 'smooth' });
      } else if (itemBottom > containerScrollTop + containerHeight - extraMargin) {
        container.scrollTo({
          top: itemBottom - containerHeight + extraMargin,
          behavior: 'smooth'
        });
      }
    }
    setKeyboardNav(false);
  }, [selectedIndex, keyboardNav]);

  return (
    <div className={`relative w-[500px] p-5 ${className}`}>
      <div
        ref={listRef}
        className={`max-h-[350px] overflow-y-auto p-4 ${
          displayScrollbar
            ? '[&::-webkit-scrollbar]:w-[8px] [&::-webkit-scrollbar-track]:bg-[rgba(255,255,255,0.15)] [&::-webkit-scrollbar-thumb]:bg-[rgba(255,255,255,0.15)] [&::-webkit-scrollbar-thumb]:rounded-[4px]'
            : 'scrollbar-hide'
        }`}
        onScroll={handleScroll}
        style={{
          scrollbarWidth: displayScrollbar ? 'thin' : 'none',
          scrollbarColor: 'rgba(255,255,255,0.3) rgba(255,255,255,0.15)'
        }}
      >
        {items.map((item, index) => (
          <AnimatedItem
            key={item.id}
            delay={0.1}
            index={index}
            onMouseEnter={() => setSelectedIndex(index)}
            onClick={() => {
              setSelectedIndex(index);
              onItemSelect?.(item, index);
            }}
          >
            <div
              className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                selectedIndex === index
                  ? 'bg-white text-black scale-[1.02]'
                  : 'bg-white/20 text-white hover:bg-white/30'
              } ${itemClassName}`}
            >
              {/* Logo */}
              <img
                src={item.logo}
                alt={item.company}
                className="w-30 h-30 rounded-md object-cover mt-1"
              />

              {/* Konten */}
              <div className="flex flex-col">
                <h4 className="font-semibold text-lg">{item.company}</h4>
                <p className="text-sm opacity-80 mb-2">{item.description}</p>

                {/* Tugas */}
                <ul className="list-disc list-inside text-sm opacity-90 space-y-1">
                  {item.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>

          </AnimatedItem>
        ))}

      </div>
      {showGradients && (
        <>
          <div
            className="absolute top-0 left-0 right-0 h-[100px] rounded-xl bg-gradient-to-b from-[rgba(255,255,255,0.15)] to-transparent pointer-events-none transition-opacity duration-300 ease"
            style={{ opacity: topGradientOpacity }}
          ></div>
          <div
            className="absolute bottom-0 left-0 right-0 h-[100px] rounded-xl bg-gradient-to-t from-[rgba(255,255,255,0.15)] to-transparent pointer-events-none transition-opacity duration-300 ease"
            style={{ opacity: bottomGradientOpacity }}
          ></div>
        </>
      )}
    </div>
  );
};

export default AnimatedList;
