'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  icon: string;
  description: string[];
}

interface FeatureGridProps {
  features: Feature[];
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ features }) => {
  return (
    <section className="w-full bg-[#29252D] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Lorem ipsum dolor sit amet, consectetur
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </motion.p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
                className="text-lg sm:text-xl font-bold text-white mb-3 lg:mb-4"
              >
                {feature.title}
              </motion.h3>

              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="mb-4 lg:mb-6"
              >
                <div className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center">
                  <Image
                    src={feature.icon}
                    alt={`${feature.title} icon`}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                viewport={{ once: true }}
                className="space-y-1"
              >
                {feature.description.map((line, lineIndex) => (
                  <p key={lineIndex} className="text-sm sm:text-base text-gray-400">
                    {line}
                  </p>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;



