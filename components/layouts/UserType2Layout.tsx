import React from 'react';
import FlipSection from '../sections/FlipSection';
import SmartClient from '../sections/SmartClient';
import DashboardSection from '../sections/DashboardSection';
import LoremIpsumSection from '../sections/LoremIpsumSection';
import FeaturesSection from '../sections/FeaturesSection';
import FooterImage from "../sections/FooterImage";

 const dashboardImages = {
    backgroundImage: { src: '/assets/image 380.png', alt: 'Dashboard Background'},
    phoneImage: { src: '/assets/Rectangle.png', alt: 'Phone Mockup'},
  };

  // 0_1 9.png
const smartClientImage1 = {
    src: "/assets/0_1 9.png",
    alt: "Two stylized cats with thought bubble and heart, surrounded by swirling white lines",
    width: 500,
    height: 500
  };

const smartClientImage = {
    src: "/assets/image 407.png",
    alt: "Two stylized cats with thought bubble and heart, surrounded by swirling white lines",
    width: 500,
    height: 500
  };

const flipSectionImage1 = {
  src: "/assets/0_0 10.png",
  alt: "Three cats in a magical forest setting with glowing elements and dreamy atmosphere",
  width: 500,
  height: 500
};

  const catIllustrationImages = {
    largeImage: {
      src: "/assets/0_0 9.png",
      alt: "Large illustration of three stylized cats in a magical glowing environment with purple, pink, and blue colors",
      width: 1200,
      height: 600
    }
  };

const UserType2Layout = () => {
  return (
    <div>
      <FlipSection sectionImage={flipSectionImage1} reversed = {true}/>
      <SmartClient illustrationImage={smartClientImage1} />
        <DashboardSection 
        backgroundImage={dashboardImages.backgroundImage} 
        phoneImage={dashboardImages.phoneImage} 
        phonePosition="center" // Can be "left", "center", or "right"
      />
      <SmartClient illustrationImage={smartClientImage} reversed={true}/>
      <LoremIpsumSection />
      <FeaturesSection />
      <FooterImage footerImage={catIllustrationImages.largeImage} />

    </div>
  );
};

export default UserType2Layout;
