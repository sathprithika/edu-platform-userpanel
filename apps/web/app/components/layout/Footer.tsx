"use client"
import React from 'react';

const Footer = () => {
  const footerColumns = [
    {
      heading: "Heading",
      points: ["Point", "Point", "Point", "Point"]
    },
    {
      heading: "Heading",
      points: ["Point", "Point", "Point", "Point"]
    },
    {
      heading: "Heading",
      points: ["Point", "Point", "Point", "Point"]
    }
  ];

  return (
    <footer className="jakarta-font bg-[#808080] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:justify-end gap-8">
          {/* Footer Columns - Aligned to Right */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-16 xl:gap-20">
            {footerColumns.map((column, index) => (
              <div key={index} className="flex flex-col">
                <h3 className="text-base font-semibold text-white mb-3">
                  {column.heading}
                </h3>
                <ul className="space-y-2">
                  {column.points.map((point, pointIndex) => (
                    <li key={pointIndex}>
                      <span className="text-white/90 text-sm">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

       {/* Large IMAJIIN Text Section - Fully Responsive */}
      <div className="w-full overflow-hidden py-4 sm:py-6 md:py-8">
        <div className="flex items-center justify-center">
          <h1 className="text-[5rem] xs:text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] 2xl:text-[24rem] font-bold text-white/10 tracking-wider leading-none whitespace-nowrap select-none">
            IMAJIIN
          </h1>
        </div>
      </div>

      {/* Bottom Bar with Logo and Links */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Logo in Bottom */}
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Logo
            </h2>
            
            {/* Links aligned to right */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 lg:gap-12">
              <button className="text-white/90 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                Terms & Condition
              </button>
              <button className="text-white/90 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                Privacy Policy
              </button>
              <button className="text-white/90 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;