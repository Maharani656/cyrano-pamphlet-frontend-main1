'use client';

import { motion } from 'framer-motion';

const ElevatorPitchSection: React.FC = () => {
  return (
    <section className="w-full bg-[#29252D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Container for content */}
          <div className=" mx-auto">
            {/* ELEVATOR PITCH and first line of content - Combined in one element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <p className="text-sm sm:text-base text-gray-400 uppercase" style={{marginLeft: '40px'}}>
                ELEVATOR PITCH
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br/>quis nostrud exercitation
              </h2>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ElevatorPitchSection;
