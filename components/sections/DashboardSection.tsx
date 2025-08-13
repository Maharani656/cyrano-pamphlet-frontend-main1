'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface DashboardSectionProps {
  backgroundImage: {
    src: string;
    alt: string;
  };
  phoneImage: {
    src: string;
    alt: string;
  };
  phonePosition?: 'left' | 'center' | 'right';
}

const DashboardSection: React.FC<DashboardSectionProps> = ({ 
  backgroundImage, 
  phoneImage, 
  phonePosition = 'center' 
}) => {
  // Calculate positioning based on phonePosition prop
  const getPhonePosition = () => {
    switch (phonePosition) {
      case 'left':
        return 'left-1/4';
      case 'right':
        return 'right-1/4';
      case 'center':
      default:
        return 'left-1/2';
    }
  };

  const getPhoneTransform = () => {
    switch (phonePosition) {
      case 'left':
        return '-translate-x-1/2';
      case 'right':
        return '-translate-x-1/2';
      case 'center':
      default:
        return '-translate-x-1/2 -translate-y-1/2';
    }
  };

  return (
    <section className="w-full bg-[#29252D] py-10 lg:py-8">
      {/* Background Image - Untitled-3 1.png covers the entire section */}
      <div className="relative  max-w-7xl mx-auto ">
        <Image
          src={backgroundImage.src}
          alt={backgroundImage.alt}
          width={1920}
          height={1080}
          className="object-cover w-full h-auto"
        />
        
        {/* Phone Image - Rectangle.png positioned based on phonePosition prop */}
        <div className={`absolute top-[60%] ${getPhonePosition()} transform ${getPhoneTransform()} z-20`}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-[491px] h-[922px] sm:w-[553px] sm:h-[1037px] md:w-[614px] md:h-[1152px] lg:w-[738px] lg:h-[1344px] xl:w-[768px] xl:h-[1536px]">
              <Image 
                src={phoneImage.src} 
                alt={phoneImage.alt} 
                fill
                className="object-contain" 
                priority 
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lower Section - Dark background with text content */}
      <div className="bg-[#29252D] relative">
        {/* Text Content positioned below the background image */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-80">
            {/* Left side text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-left max-w-lg"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight"
              >
                Lorem ipsum dolor
              </motion.h2>
            </motion.div>

            {/* Right side text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="text-left max-w-lg"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors cursor-pointer group"
              >
                <span className="text-base sm:text-lg">Lorem ipsum dolor si</span>
                <span className="text-2xl">&gt;</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
