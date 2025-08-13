'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Buttons';

interface FlipSectionProps {
  sectionImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  reversed?: boolean;
}

const FlipSection: React.FC<FlipSectionProps> = ({ sectionImage, reversed = false }) => {
  return (
    <section className="w-full bg-[#29252D] py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`relative flex justify-center lg:justify-${reversed ? 'start' : 'end'} order-1 ${reversed ? 'lg:order-1' : 'lg:order-2'}`}
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-xl">
              <Image
                src={sectionImage.src}
                alt={sectionImage.alt}
                width={sectionImage.width}
                height={sectionImage.height}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className={`text-center lg:text-left order-2 ${reversed ? 'lg:order-2' : 'lg:order-1'}`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-center items-center"
            >
              <Button
                type="primary"
                href="/apply"
                className="w-full sm:w-auto"
              >
                Sign Up for The Hardware
              </Button>
              {/* <Button
                type="text"
                href="/learn-more"
                className="w-full sm:w-auto flex items-center gap-2"
                showArrow={true}
              >
                Learn More
              </Button> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FlipSection;
