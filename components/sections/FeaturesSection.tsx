'use client';

import React from 'react';
import { Settings, User, FileText, Activity, Users, Monitor } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Settings className="w-12 h-12 text-gray-300" />,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
    },
    {
      icon: <User className="w-12 h-12 text-gray-300" />,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat"
    },
    {
      icon: <FileText className="w-12 h-12 text-gray-300" />,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
      icon: <Activity className="w-12 h-12 text-gray-300" />,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit"
    },
    {
      icon: <Users className="w-12 h-12 text-gray-300" />,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ve"
    },
    {
      icon: <Monitor className="w-12 h-12 text-gray-300" />,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit a consectetur adipiscing sed do eiusmod ter incididunt ut labore dolore magna aliqua enim ad minim veniam, nostrud exercito ullamco labo"
    }
  ];

  return (
    <div className="w-full  bg-[#29252D] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between gap-8" style={{ flexWrap: "wrap" }}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex-1 text-center"
              style={{
                minWidth: "180px",
                maxWidth: "190px"
              }}
            >
              <div className="flex flex-col items-center space-y-4">
                {/* Icon */}
                <div className="flex items-center justify-center">
                  {feature.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-white text-xl font-bold">
                  {feature.title}
                </h3>
                
                                 {/* Description */}
                 <p className="text-gray-300 text-sm leading-relaxed text-justify">
                   {feature.description}
                 </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
