'use client';

import { motion } from 'framer-motion';

const ElevatorPitchSection: React.FC = () => {
  return (
    <section className="w-full bg-[#29252D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Container for content */}
          <div className="mx-auto">
            {/* ELEVATOR PITCH and first line of content - Combined in one element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <p className="text-sm sm:text-base text-gray-400 uppercase mb-4 sm:mb-6 break-words">
                ELEVATOR PITCH
              </p>
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white leading-tight break-words">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </h2>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ElevatorPitchSection;
