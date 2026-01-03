"use client";

import React from "react";

export default function HeroSection() {
  const categories = [
    {
      name: "Python",
      icon: (
        <svg
          className="w-full h-full"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      color: "text-blue-500",
      templates: "342 tutorials",
      link: "/python",
    },
    {
      name: "JavaScript",
      icon: (
        <svg
          className="w-full h-full"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M7 8h10M7 12h10M7 16h6" />
        </svg>
      ),
      color: "text-yellow-500",
      templates: "298 tutorials",
      link: "/javascript",
    },
    {
      name: "Java",
      icon: (
        <svg
          className="w-full h-full"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2v20M2 12h20" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      ),
      color: "text-red-500",
      templates: "267 tutorials",
      link: "/java",
    },
    {
      name: "C++",
      icon: (
        <svg
          className="w-full h-full"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M16 18L22 12L16 6" />
          <path d="M8 6L2 12L8 18" />
        </svg>
      ),
      color: "text-indigo-500",
      templates: "189 tutorials",
      link: "/cpp",
    },
    {
      name: "React",
      icon: (
        <svg
          className="w-full h-full"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="3" />
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        </svg>
      ),
      color: "text-cyan-500",
      templates: "234 tutorials",
      link: "/react",
    },
    {
      name: "SQL",
      icon: (
        <svg
          className="w-full h-full"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
      color: "text-orange-500",
      templates: "156 tutorials",
      link: "/sql",
    },
  ];

  const handleCategoryClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="relative bg-white overflow-hidden jakarta-font">
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(12deg);
            }
            50% {
              transform: translateY(-20px) rotate(12deg);
            }
          }
          
          @keyframes floatReverse {
            0%, 100% {
              transform: translateY(0px) rotate(-12deg);
            }
            50% {
              transform: translateY(-15px) rotate(-12deg);
            }
          }
          
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>

      <div className="relative">
        {/* Left Floating Element - Book Icon with Animation */}
        <div
          className="absolute left-4 sm:left-6 md:left-8 lg:left-10 top-8 sm:top-10 md:top-12 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 z-20"
          style={{
            animation: "float 3s ease-in-out infinite",
          }}
        >
          <div className="w-full h-full rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 p-2 shadow-lg">
            <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
              <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
            </svg>
          </div>
        </div>

        {/* Right Floating Element - Graduation Cap with Animation */}
        <div
          className="absolute right-4 sm:right-6 md:right-8 lg:right-10 top-20 sm:top-24 md:top-26 lg:top-28 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 z-20"
          style={{
            animation: "floatReverse 3.5s ease-in-out infinite",
          }}
        >
          <div className="w-full h-full rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 p-2 shadow-lg">
            <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
              <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center pt-12 pb-8 px-4">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 text-center mb-2 sm:mb-3 md:mb-3 lg:mb-4 leading-tight">
            Master New Skills, Build Your{" "}
            <span className="relative inline-block">
              <span className="handwritten-cursive text-blue-600 text-xl md:text-4xl lg:text-4xl mb-2 md:mb-3">
                Future
              </span>
              {/* Exact curve matching the reference image */}
              <svg
                className="absolute left-0 bottom-[-6px] w-full h-[10px]"
                viewBox="0 0 200 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="underlineCurve" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#9333EA" />
                  </linearGradient>
                </defs>
                <path
                  d="M 1 7 Q 100 1, 199 5"
                  stroke="url(#underlineCurve)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-700 text-center text-base mb-6 max-w-xl leading-relaxed">
            The best and largest online tutoring platform. The most complete online
            <br />
            learning solution
          </p>

          {/* Search Bar with exact border styles */}
          <div className="w-full max-w-lg mb-8">
            <div 
              className="relative rounded-2xl border overflow-visible backdrop-blur-md"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                borderColor: 'rgba(140, 140, 170, 0.4)', 
                boxShadow: '0 2px 4px 0 rgba(124, 58, 237, 0.06), 0 1px 2px 0 rgba(0, 0, 0, 0.05)' 
              }}
            >
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" strokeWidth="2" />
                  <path
                    d="M21 21l-4.35-4.35"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-transparent text-gray-700 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-200 jakarta-font"
              />
            </div>
          </div>

          {/* Categories Section - Programming Languages with exact border styles */}
          <div className="w-full max-w-7xl px-2 sm:px-4">
            <div className="flex gap-3 overflow-x-auto pb-6 scrollbar-hide">
              {categories.map((category, index) => (
                <div
                  key={index}
                  onClick={() => handleCategoryClick(category.link)}
                  className="flex-shrink-0 w-[140px] sm:w-[160px] rounded-2xl p-4 border relative overflow-visible backdrop-blur-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    borderColor: 'rgba(140, 140, 170, 0.4)', 
                    boxShadow: '0 2px 4px 0 rgba(124, 58, 237, 0.06), 0 1px 2px 0 rgba(0, 0, 0, 0.05)' 
                  }}
                >
                  <div
                    className={`w-8 h-8 ${category.color} mb-2 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-gray-900 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-500 text-xs">{category.templates}</p>
                </div>
              ))}

              {/* View All Card with exact border styles */}
              <div
                onClick={() => handleCategoryClick("/all-languages")}
                className="flex-shrink-0 w-[140px] sm:w-[160px] rounded-2xl p-4 border relative overflow-visible backdrop-blur-md hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col justify-center items-center"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                  borderColor: 'rgba(140, 140, 170, 0.4)', 
                  boxShadow: '0 2px 4px 0 rgba(124, 58, 237, 0.06), 0 1px 2px 0 rgba(0, 0, 0, 0.05)' 
                }}
              >
                <div className="text-gray-900 font-semibold text-sm mb-1 group-hover:text-gray-900 transition-colors">
                  View all
                </div>
                <p className="text-gray-500 text-xs mb-2">15+ languages</p>
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-gray-900 group-hover:text-gray-900 group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Wave Border */}
        <div className="relative bottom-0 left-0 w-full h-[10px] sm:h-[12px] md:h-[14px] overflow-visible">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="waveGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="25%" stopColor="#6366F1" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="75%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#C084FC" />
              </linearGradient>
              <filter id="roughEdges">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="1.5"
                  numOctaves="6"
                  result="noise"
                  seed="5"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  scale="2.8"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>
            </defs>

            <path
              d="M0 4 Q5 2 10 4 T20 4 Q25 2 30 4 T40 4 Q45 2 50 4 T60 4 Q65 2 70 4 T80 4 Q85 2 90 4 T100 4 Q105 2 110 4 T120 4 Q125 2 130 4 T140 4 Q145 2 150 4 T160 4 Q165 2 170 4 T180 4 Q185 2 190 4 T200 4 Q205 2 210 4 T220 4 Q225 2 230 4 T240 4 Q245 2 250 4 T260 4 Q265 2 270 4 T280 4 Q285 2 290 4 T300 4 Q305 2 310 4 T320 4 Q325 2 330 4 T340 4 Q345 2 350 4 T360 4 Q365 2 370 4 T380 4 Q385 2 390 4 T400 4 Q405 2 410 4 T420 4 Q425 2 430 4 T440 4 Q445 2 450 4 T460 4 Q465 2 470 4 T480 4 Q485 2 490 4 T500 4 Q505 2 510 4 T520 4 Q525 2 530 4 T540 4 Q545 2 550 4 T560 4 Q565 2 570 4 T580 4 Q585 2 590 4 T600 4 Q605 2 610 4 T620 4 Q625 2 630 4 T640 4 Q645 2 650 4 T660 4 Q665 2 670 4 T680 4 Q685 2 690 4 T700 4 Q705 2 710 4 T720 4 Q725 2 730 4 T740 4 Q745 2 750 4 T760 4 Q765 2 770 4 T780 4 Q785 2 790 4 T800 4 Q805 2 810 4 T820 4 Q825 2 830 4 T840 4 Q845 2 850 4 T860 4 Q865 2 870 4 T880 4 Q885 2 890 4 T900 4 Q905 2 910 4 T920 4 Q925 2 930 4 T940 4 Q945 2 950 4 T960 4 Q965 2 970 4 T980 4 Q985 2 990 4 T1000 4 Q1005 2 1010 4 T1020 4 Q1025 2 1030 4 T1040 4 Q1045 2 1050 4 T1060 4 Q1065 2 1070 4 T1080 4 Q1085 2 1090 4 T1100 4 Q1105 2 1110 4 T1120 4 Q1125 2 1130 4 T1140 4 Q1145 2 1150 4 T1160 4 Q1165 2 1170 4 T1180 4 Q1185 2 1190 4 T1200 4 Q1205 2 1210 4 T1220 4 Q1225 2 1230 4 T1240 4 Q1245 2 1250 4 T1260 4 Q1265 2 1270 4 T1280 4 Q1285 2 1290 4 T1300 4 Q1305 2 1310 4 T1320 4 Q1325 2 1330 4 T1340 4 Q1345 2 1350 4 T1360 4 Q1365 2 1370 4 T1380 4 Q1385 2 1390 4 T1400 4 Q1405 2 1410 4 T1420 4 Q1425 2 1430 4 T1440 4 L1440 10 Q1435 12 1430 10 T1420 10 Q1415 12 1410 10 T1400 10 Q1395 12 1390 10 T1380 10 Q1375 12 1370 10 T1360 10 Q1355 12 1350 10 T1340 10 Q1335 12 1330 10 T1320 10 Q1315 12 1310 10 T1300 10 Q1295 12 1290 10 T1280 10 Q1275 12 1270 10 T1260 10 Q1255 12 1250 10 T1240 10 Q1235 12 1230 10 T1220 10 Q1215 12 1210 10 T1200 10 Q1195 12 1190 10 T1180 10 Q1175 12 1170 10 T1160 10 Q1155 12 1150 10 T1140 10 Q1135 12 1130 10 T1120 10 Q1115 12 1110 10 T1100 10 Q1095 12 1090 10 T1080 10 Q1075 12 1070 10 T1060 10 Q1055 12 1050 10 T1040 10 Q1035 12 1030 10 T1020 10 Q1015 12 1010 10 T1000 10 Q995 12 990 10 T980 10 Q975 12 970 10 T960 10 Q955 12 950 10 T940 10 Q935 12 930 10 T920 10 Q915 12 910 10 T900 10 Q895 12 890 10 T880 10 Q875 12 870 10 T860 10 Q855 12 850 10 T840 10 Q835 12 830 10 T820 10 Q815 12 810 10 T800 10 Q795 12 790 10 T780 10 Q775 12 770 10 T760 10 Q755 12 750 10 T740 10 Q735 12 730 10 T720 10 Q715 12 710 10 T700 10 Q695 12 690 10 T680 10 Q675 12 670 10 T660 10 Q655 12 650 10 T640 10 Q635 12 630 10 T620 10 Q615 12 610 10 T600 10 Q595 12 590 10 T580 10 Q575 12 570 10 T560 10 Q555 12 550 10 T540 10 Q535 12 530 10 T520 10 Q515 12 510 10 T500 10 Q495 12 490 10 T480 10 Q475 12 470 10 T460 10 Q455 12 450 10 T440 10 Q435 12 430 10 T420 10 Q415 12 410 10 T400 10 Q395 12 390 10 T380 10 Q375 12 370 10 T360 10 Q355 12 350 10 T340 10 Q335 12 330 10 T320 10 Q315 12 310 10 T300 10 Q295 12 290 10 T280 10 Q275 12 270 10 T260 10 Q255 12 250 10 T240 10 Q235 12 230 10 T220 10 Q215 12 210 10 T200 10 Q195 12 190 10 T180 10 Q175 12 170 10 T160 10 Q155 12 150 10 T140 10 Q135 12 130 10 T120 10 Q115 12 110 10 T100 10 Q95 12 90 10 T80 10 Q75 12 70 10 T60 10 Q55 12 50 10 T40 10 Q35 12 30 10 T20 10 Q15 12 10 10 T0 10 Z"
              fill="url(#waveGradient)"
              filter="url(#roughEdges)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}