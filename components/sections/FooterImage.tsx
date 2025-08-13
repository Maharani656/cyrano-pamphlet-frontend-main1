'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface CatIllustrationSectionProps {
  footerImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

const CatIllustrationSection: React.FC<CatIllustrationSectionProps> = ({ footerImage }) => {
  return (
    <section className="w-full bg-[#29252D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bottom Section - Large Full-width Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="relative w-full">
            <Image
              src={footerImage.src}
              alt={footerImage.alt}
              width={footerImage.width}
              height={footerImage.height}
              className="w-full h-auto object-cover rounded-lg"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CatIllustrationSection;
