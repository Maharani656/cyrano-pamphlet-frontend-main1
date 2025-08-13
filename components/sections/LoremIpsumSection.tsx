'use client';

import React from 'react';
import Image from 'next/image';

const LoremIpsumSection: React.FC = () => {
  return (
    <>
      <div style={{
        width: "200%",
        maxWidth: "880px",
        margin: "auto",
        color: "white",
        position: "relative"
      }}>
        <div>
          <p style={{ padding: "10px 0" }}>Lorem ipsum dolor</p>
          <h1 style={{ fontSize: "20px", width: "25%", marginBottom: "20px" }}>Lorem ipsum dolor sit amet, consectetur</h1>
        </div>
        <div>
          <Image src={'/assets/btn2.png'} alt="a" width={300} height={100} style={{
            width: "60%"
          }} />
        </div>
        <div style={{ position: "absolute", top: "0", right: "0", width: "60%" }}>
          <Image src="/assets/btn1.png" alt="" width={300} height={100} style={{
            width: "100%"
          }} />
        </div>
      </div>
      <div className='w-full bg-[#29252D] py-10 lg:py-8'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' style={{ color: "white" }}>
          <h2 style={{ fontSize: "32px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem</h2>
          <p style={{ fontSize: "12px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris n</p>
        </div>
      </div>
    </>
  );
};

export default LoremIpsumSection;
