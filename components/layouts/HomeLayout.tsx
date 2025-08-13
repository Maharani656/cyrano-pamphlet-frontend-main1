import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import SmartClient from '@/components/sections/SmartClient';
import IntroCard from '@/components/sections/IntroCard';
import FlipSection from '@/components/sections/FlipSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import CatIllustrationSection from '@/components/sections/CatIllustrationSection';
import ElevatorPitchSection from '@/components/sections/ElevatorPitchSection';
import FooterImage from '@/components/sections/FooterImage';
import Ticker from "../sections/Ticker";
import type { PageData } from "@/interfaces/page.interface";

interface HomeLayoutProps {
  page: PageData;
}

const heroImage = {
  src: "/assets/0_0 26.png",
  alt: "Black cat with glowing blue eyes against a pink moon backdrop with cherry blossoms",
  width: 500,
  height: 500
};

const smartClientImage = {
  src: "/assets/0_0 24.png",
  alt: "Two stylized cats with thought bubble and heart, surrounded by swirling white lines",
  width: 500,
  height: 500
};
  const mockTickerSection = {
    __component: "sections.ticker" as const,
    id: 1,
    items: [
      {
        id: 1,
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  3.  Learn More",
        logo: null
      },
      {
        id: 2,
        name: "Lorem Ipsum 1.  Learn More",
        logo: null
      },
      {
        id: 3,
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  2.  Learn More",
        logo: null
      }
    ],
    speed: 1
  };


const smartClientImage1 = {
  src: "/assets/image.png",
  alt: "Two stylized cats with thought bubble and heart, surrounded by swirling white lines",
  width: 500,
  height: 1000
};

const testimonialImage = {
  src: "/assets/unsplash_WNoLnJo7tS8.png",
  alt: "Profile image for testimonials",
  width: 128,
  height: 128
};

const flipSectionImage1 = {
  src: "/assets/0_0 10.png",
  alt: "Three cats in a magical forest setting with glowing elements and dreamy atmosphere",
  width: 500,
  height: 500
};

const flipSectionImage = {
  src: "/assets/0_1 17.png",
  alt: "Three cats in a magical forest setting with glowing elements and dreamy atmosphere",
  width: 500,
  height: 500
};


const features = [
  {
    icon: "/assets/oneOnOne.svg",
    title: "One-on-One",
    description: ["Live agent", "Fully Vetted"]
  },
  {
    icon: "/assets/noStrings.svg",
    title: "No Commitment",
    description: ["Pay Model", "Date-to-date"]
  },
  {
    icon: "/assets/International.svg",
    title: "International Matching",
    description: ["Big pond", "Access geofenced prospects"]
  },
  {
    icon: "/assets/Demographics.svg",
    title: "Specific Demographic",
    description: ["Up to 500 Preferences", "Tailored"]
  },
  {
    icon: "/assets/Component 15.svg",
    title: "And More",
    description: ["Date Coaching", "Post-date Feedback"]
  }
];

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit es",
    name: "Vanessa",
    subtitle: "Lorem ipsum dolor sit amet, conse"
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Amy",
    subtitle: "Lorem ipsum dolor sit amet, cons"
  },
  {
    text: "\"I did a few verification checks and they tested my ability, now I am able to find people a partner for life. I always loved hooking my friends up... now I can do it for money. Truly a case of finding my calling! No but the extra money is really well received by my family, plus working from home allows me to take better care them.\"",
    name: "Frank",
    subtitle: "Lorem ipsum dolor sit amet, con"
  }
];

const catIllustrationImages = {
  smallImage: {
    src: "/assets/image 281.png",
    alt: "Three stylized cats with glowing pink elements and magical atmosphere",
    width: 400,
    height: 300
  },
  smallImage1: {
    src: "/assets/image 284.png",
    alt: "Three stylized cats with glowing pink elements and magical atmosphere",
    width: 400,
    height: 300
  },
  footerImage: {
    src: "/assets/image 424.png",
    alt: "Large illustration of three stylized cats in a magical glowing environment with purple, pink, and blue colors",
    width: 1200,
    height: 600
  }
};

export default function HomeLayout({ page }: HomeLayoutProps) {
  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Loading...
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Please wait while we load your content.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Ticker section={mockTickerSection} />
      <HeroSection heroImage={heroImage} />
      <ElevatorPitchSection />

      <SmartClient illustrationImage={smartClientImage} />
      <SmartClient illustrationImage={smartClientImage1} reversed={true} />
      <IntroCard testimonialImage={testimonialImage} testimonials={testimonials} /> 
      <FlipSection sectionImage={flipSectionImage1} />
      <FlipSection sectionImage={flipSectionImage} reversed={true} />
      <FeatureGrid features={features} />
      <CatIllustrationSection smallImage={catIllustrationImages.smallImage} />
      <CatIllustrationSection smallImage={catIllustrationImages.smallImage1} reversed={false} />
      <FooterImage footerImage={catIllustrationImages.footerImage} />
    </div>
  );
};

// export default HomeLayout;