import React from "react";
import LearningProgressSection from "./LearningProgressSection";

export default function LearningPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-16 jakarta-font">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12 lg:mb-16">
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center order-2 md:order-1">
            <p className="blue-river-font text-purple-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-1 md:mb-2">
              Learn smarter, not harder
            </p>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-2 md:mb-3 lg:mb-4 leading-tight">
              Knowledge made simple and clear
            </h1>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl font-normal">
              Complex topics broken down into easy-to-understand lessons
            </p>
          </div>

          {/* Right Side - Brain & Neural Network Illustration */}
          <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center h-56 sm:h-64 md:h-72 lg:h-80 order-1 md:order-2 p-6 md:p-8 relative overflow-hidden">
            {/* Neural Network & Brain Illustration */}
            <div className="relative z-10 flex flex-col items-center">
              <svg
                className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 drop-shadow-2xl"
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Central Brain Shape */}
                <g filter="url(#brainGlow)">
                  {/* Left hemisphere */}
                  <path
                    d="M120 80 Q100 80 90 95 Q80 110 80 130 Q80 150 85 165 Q90 180 100 190 Q110 200 125 205 L125 150 L120 80 Z"
                    fill="url(#brainGradient1)"
                    stroke="#8b5cf6"
                    strokeWidth="3"
                  />

                  {/* Right hemisphere */}
                  <path
                    d="M180 80 Q200 80 210 95 Q220 110 220 130 Q220 150 215 165 Q210 180 200 190 Q190 200 175 205 L175 150 L180 80 Z"
                    fill="url(#brainGradient2)"
                    stroke="#8b5cf6"
                    strokeWidth="3"
                  />

                  {/* Central connecting area */}
                  <ellipse
                    cx="150"
                    cy="140"
                    rx="30"
                    ry="45"
                    fill="url(#brainCenter)"
                    opacity="0.9"
                  />

                  {/* Brain folds/texture details */}
                  <path
                    d="M95 110 Q100 115 105 110 Q110 105 115 110"
                    stroke="#c4b5fd"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.6"
                  />
                  <path
                    d="M95 130 Q100 135 105 130 Q110 125 115 130"
                    stroke="#c4b5fd"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.6"
                  />
                  <path
                    d="M185 110 Q190 115 195 110 Q200 105 205 110"
                    stroke="#c4b5fd"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.6"
                  />
                  <path
                    d="M185 130 Q190 135 195 130 Q200 125 205 130"
                    stroke="#c4b5fd"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.6"
                  />
                </g>

                {/* Neural Network Nodes - Animated */}
                <g>
                  {/* Top nodes */}
                  <circle
                    cx="150"
                    cy="50"
                    r="8"
                    fill="#fef3c7"
                    stroke="#fbbf24"
                    strokeWidth="2.5"
                  >
                    <animate
                      attributeName="r"
                      values="8;10;8"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle
                    cx="110"
                    cy="70"
                    r="7"
                    fill="#fce7f3"
                    stroke="#ec4899"
                    strokeWidth="2"
                  >
                    <animate
                      attributeName="r"
                      values="7;9;7"
                      dur="2s"
                      repeatCount="indefinite"
                      begin="0.3s"
                    />
                  </circle>
                  <circle
                    cx="190"
                    cy="70"
                    r="7"
                    fill="#ddd6fe"
                    stroke="#8b5cf6"
                    strokeWidth="2"
                  >
                    <animate
                      attributeName="r"
                      values="7;9;7"
                      dur="2s"
                      repeatCount="indefinite"
                      begin="0.6s"
                    />
                  </circle>

                  {/* Side nodes */}
                  <circle
                    cx="60"
                    cy="140"
                    r="7"
                    fill="#bfdbfe"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  >
                    <animate
                      attributeName="r"
                      values="7;9;7"
                      dur="2s"
                      repeatCount="indefinite"
                      begin="0.9s"
                    />
                  </circle>
                  <circle
                    cx="240"
                    cy="140"
                    r="7"
                    fill="#fce7f3"
                    stroke="#ec4899"
                    strokeWidth="2"
                  >
                    <animate
                      attributeName="r"
                      values="7;9;7"
                      dur="2s"
                      repeatCount="indefinite"
                      begin="1.2s"
                    />
                  </circle>

                  {/* Bottom nodes */}
                  <circle
                    cx="120"
                    cy="220"
                    r="7"
                    fill="#ddd6fe"
                    stroke="#8b5cf6"
                    strokeWidth="2"
                  >
                    <animate
                      attributeName="r"
                      values="7;9;7"
                      dur="2s"
                      repeatCount="indefinite"
                      begin="1.5s"
                    />
                  </circle>
                  <circle
                    cx="180"
                    cy="220"
                    r="7"
                    fill="#bfdbfe"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  >
                    <animate
                      attributeName="r"
                      values="7;9;7"
                      dur="2s"
                      repeatCount="indefinite"
                      begin="1.8s"
                    />
                  </circle>
                </g>

                {/* Connecting Neural Lines - Animated */}
                <g stroke="#e0e7ff" strokeWidth="2" opacity="0.5">
                  <line x1="150" y1="50" x2="120" y2="100">
                    <animate
                      attributeName="opacity"
                      values="0.3;0.8;0.3"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </line>
                  <line x1="150" y1="50" x2="180" y2="100">
                    <animate
                      attributeName="opacity"
                      values="0.3;0.8;0.3"
                      dur="3s"
                      repeatCount="indefinite"
                      begin="0.5s"
                    />
                  </line>
                  <line x1="110" y1="70" x2="90" y2="120">
                    <animate
                      attributeName="opacity"
                      values="0.3;0.8;0.3"
                      dur="3s"
                      repeatCount="indefinite"
                      begin="1s"
                    />
                  </line>
                  <line x1="190" y1="70" x2="210" y2="120">
                    <animate
                      attributeName="opacity"
                      values="0.3;0.8;0.3"
                      dur="3s"
                      repeatCount="indefinite"
                      begin="1.5s"
                    />
                  </line>
                  <line x1="60" y1="140" x2="100" y2="155">
                    <animate
                      attributeName="opacity"
                      values="0.3;0.8;0.3"
                      dur="3s"
                      repeatCount="indefinite"
                      begin="2s"
                    />
                  </line>
                  <line x1="240" y1="140" x2="200" y2="155">
                    <animate
                      attributeName="opacity"
                      values="0.3;0.8;0.3"
                      dur="3s"
                      repeatCount="indefinite"
                      begin="2.5s"
                    />
                  </line>
                  <line x1="120" y1="220" x2="140" y2="190">
                    <animate
                      attributeName="opacity"
                      values="0.3;0.8;0.3"
                      dur="3s"
                      repeatCount="indefinite"
                      begin="0.8s"
                    />
                  </line>
                  <line x1="180" y1="220" x2="160" y2="190">
                    <animate
                      attributeName="opacity"
                      values="0.3;0.8;0.3"
                      dur="3s"
                      repeatCount="indefinite"
                      begin="1.3s"
                    />
                  </line>
                </g>

                {/* Floating Knowledge Icons */}
                <g opacity="0.9">
                  {/* Checkmark icon */}
                  <g transform="translate(40, 90)">
                    <circle cx="0" cy="0" r="12" fill="#10b981" opacity="0.2">
                      <animate
                        attributeName="cy"
                        values="0;-5;0"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <path
                      d="M-4,-1 L-1,2 L4,-3"
                      stroke="#10b981"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                    >
                      <animate
                        attributeName="transform"
                        values="translate(0,0);translate(0,-5);translate(0,0)"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </path>
                  </g>

                  {/* Star icon */}
                  <g transform="translate(260, 110)">
                    <circle cx="0" cy="0" r="12" fill="#fbbf24" opacity="0.2">
                      <animate
                        attributeName="cy"
                        values="0;-5;0"
                        dur="3s"
                        repeatCount="indefinite"
                        begin="0.5s"
                      />
                    </circle>
                    <path
                      d="M0,-5 L1,-1 L5,0 L1,1 L0,5 L-1,1 L-5,0 L-1,-1 Z"
                      fill="#fbbf24"
                    >
                      <animate
                        attributeName="transform"
                        values="translate(0,0);translate(0,-5);translate(0,0)"
                        dur="3s"
                        repeatCount="indefinite"
                        begin="0.5s"
                      />
                    </path>
                  </g>

                  {/* Book icon */}
                  <g transform="translate(50, 200)">
                    <circle cx="0" cy="0" r="12" fill="#3b82f6" opacity="0.2">
                      <animate
                        attributeName="cy"
                        values="0;-5;0"
                        dur="3s"
                        repeatCount="indefinite"
                        begin="1s"
                      />
                    </circle>
                    <rect
                      x="-5"
                      y="-4"
                      width="10"
                      height="8"
                      rx="1"
                      fill="#3b82f6"
                    >
                      <animate
                        attributeName="transform"
                        values="translate(0,0);translate(0,-5);translate(0,0)"
                        dur="3s"
                        repeatCount="indefinite"
                        begin="1s"
                      />
                    </rect>
                    <line
                      x1="0"
                      y1="-4"
                      x2="0"
                      y2="4"
                      stroke="#bfdbfe"
                      strokeWidth="1"
                    >
                      <animate
                        attributeName="transform"
                        values="translate(0,0);translate(0,-5);translate(0,0)"
                        dur="3s"
                        repeatCount="indefinite"
                        begin="1s"
                      />
                    </line>
                  </g>

                  {/* Lightbulb icon */}
                  <g transform="translate(250, 200)">
                    <circle cx="0" cy="0" r="12" fill="#ec4899" opacity="0.2">
                      <animate
                        attributeName="cy"
                        values="0;-5;0"
                        dur="3s"
                        repeatCount="indefinite"
                        begin="1.5s"
                      />
                    </circle>
                    <circle
                      cx="0"
                      cy="-1"
                      r="4"
                      fill="#fef3c7"
                      stroke="#fbbf24"
                      strokeWidth="1.5"
                    >
                      <animate
                        attributeName="transform"
                        values="translate(0,0);translate(0,-5);translate(0,0)"
                        dur="3s"
                        repeatCount="indefinite"
                        begin="1.5s"
                      />
                    </circle>
                    <rect
                      x="-1.5"
                      y="3"
                      width="3"
                      height="2"
                      rx="0.5"
                      fill="#fbbf24"
                    >
                      <animate
                        attributeName="transform"
                        values="translate(0,0);translate(0,-5);translate(0,0)"
                        dur="3s"
                        repeatCount="indefinite"
                        begin="1.5s"
                      />
                    </rect>
                  </g>
                </g>

                {/* Energy/Spark particles */}
                <g fill="#fef3c7">
                  <circle cx="150" cy="120" r="2">
                    <animate
                      attributeName="opacity"
                      values="0;1;0"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="cy"
                      values="120;110;120"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="145" cy="160" r="2">
                    <animate
                      attributeName="opacity"
                      values="0;1;0"
                      dur="2s"
                      repeatCount="indefinite"
                      begin="0.7s"
                    />
                    <animate
                      attributeName="cy"
                      values="160;150;160"
                      dur="2s"
                      repeatCount="indefinite"
                      begin="0.7s"
                    />
                  </circle>
                  <circle cx="155" cy="160" r="2">
                    <animate
                      attributeName="opacity"
                      values="0;1;0"
                      dur="2s"
                      repeatCount="indefinite"
                      begin="1.4s"
                    />
                    <animate
                      attributeName="cy"
                      values="160;150;160"
                      dur="2s"
                      repeatCount="indefinite"
                      begin="1.4s"
                    />
                  </circle>
                </g>

                {/* Definitions */}
                <defs>
                  {/* Brain Glow Filter */}
                  <filter
                    id="brainGlow"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                  >
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  {/* Brain Gradients */}
                  <linearGradient
                    id="brainGradient1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.7" />
                  </linearGradient>

                  <linearGradient
                    id="brainGradient2"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.7" />
                  </linearGradient>

                  <radialGradient id="brainCenter">
                    <stop offset="0%" stopColor="#ddd6fe" stopOpacity="1" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            {/* Background decorative elements */}
            <div className="absolute top-6 right-6 w-20 h-20 md:w-24 md:h-24 bg-white opacity-10 rounded-full blur-md"></div>
            <div className="absolute bottom-6 left-6 w-16 h-16 md:w-20 md:h-20 bg-white opacity-10 rounded-full blur-md"></div>
            <div className="absolute top-1/2 left-6 w-12 h-12 md:w-16 md:h-16 bg-yellow-300 opacity-10 rounded-full blur-lg"></div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Left Side - Interactive Digital Tablet Illustration */}
          <div className="bg-gradient-to-br from-amber-300 via-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center h-56 sm:h-64 md:h-72 lg:h-80 order-1 p-6 md:p-8 relative overflow-hidden">
            {/* Digital Tablet with Interactive Elements */}
            <div className="relative z-10 flex flex-col items-center">
              <svg
                className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 drop-shadow-2xl"
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Tablet Device Shadow */}
                <rect
                  x="62"
                  y="52"
                  width="180"
                  height="230"
                  rx="16"
                  fill="#000000"
                  opacity="0.15"
                />

                {/* Tablet Device Body */}
                <rect
                  x="60"
                  y="50"
                  width="180"
                  height="230"
                  rx="16"
                  fill="url(#tabletGradient)"
                  stroke="#d1d5db"
                  strokeWidth="3"
                />

                {/* Tablet Screen */}
                <rect
                  x="70"
                  y="65"
                  width="160"
                  height="195"
                  rx="8"
                  fill="#f8fafc"
                />

                {/* Screen Content - Header Bar */}
                <rect
                  x="70"
                  y="65"
                  width="160"
                  height="30"
                  rx="8"
                  fill="url(#headerGradient)"
                  opacity="0.9"
                />

                {/* Header Icons */}
                <g opacity="0.8">
                  <circle cx="85" cy="80" r="5" fill="#ffffff" />
                  <circle cx="100" cy="80" r="5" fill="#ffffff" />
                  <circle cx="115" cy="80" r="5" fill="#ffffff" />
                </g>

                {/* Content Cards on Screen */}
                <g>
                  {/* Card 1 */}
                  <rect
                    x="80"
                    y="105"
                    width="65"
                    height="50"
                    rx="6"
                    fill="#fef3c7"
                    stroke="#fbbf24"
                    strokeWidth="2"
                    opacity="0.9"
                  />
                  <rect
                    x="85"
                    y="115"
                    width="50"
                    height="4"
                    rx="2"
                    fill="#f59e0b"
                    opacity="0.6"
                  />
                  <rect
                    x="85"
                    y="125"
                    width="45"
                    height="3"
                    rx="1.5"
                    fill="#d97706"
                    opacity="0.5"
                  />
                  <rect
                    x="85"
                    y="133"
                    width="40"
                    height="3"
                    rx="1.5"
                    fill="#d97706"
                    opacity="0.5"
                  />

                  {/* Card 2 */}
                  <rect
                    x="155"
                    y="105"
                    width="65"
                    height="50"
                    rx="6"
                    fill="#ddd6fe"
                    stroke="#8b5cf6"
                    strokeWidth="2"
                    opacity="0.9"
                  />
                  <rect
                    x="160"
                    y="115"
                    width="50"
                    height="4"
                    rx="2"
                    fill="#7c3aed"
                    opacity="0.6"
                  />
                  <rect
                    x="160"
                    y="125"
                    width="45"
                    height="3"
                    rx="1.5"
                    fill="#6b21a8"
                    opacity="0.5"
                  />
                  <rect
                    x="160"
                    y="133"
                    width="40"
                    height="3"
                    rx="1.5"
                    fill="#6b21a8"
                    opacity="0.5"
                  />

                  {/* Card 3 */}
                  <rect
                    x="80"
                    y="165"
                    width="65"
                    height="50"
                    rx="6"
                    fill="#fce7f3"
                    stroke="#ec4899"
                    strokeWidth="2"
                    opacity="0.9"
                  />
                  <rect
                    x="85"
                    y="175"
                    width="50"
                    height="4"
                    rx="2"
                    fill="#db2777"
                    opacity="0.6"
                  />
                  <rect
                    x="85"
                    y="185"
                    width="45"
                    height="3"
                    rx="1.5"
                    fill="#be185d"
                    opacity="0.5"
                  />
                  <rect
                    x="85"
                    y="193"
                    width="40"
                    height="3"
                    rx="1.5"
                    fill="#be185d"
                    opacity="0.5"
                  />

                  {/* Card 4 */}
                  <rect
                    x="155"
                    y="165"
                    width="65"
                    height="50"
                    rx="6"
                    fill="#bfdbfe"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    opacity="0.9"
                  />
                  <rect
                    x="160"
                    y="175"
                    width="50"
                    height="4"
                    rx="2"
                    fill="#2563eb"
                    opacity="0.6"
                  />
                  <rect
                    x="160"
                    y="185"
                    width="45"
                    height="3"
                    rx="1.5"
                    fill="#1e40af"
                    opacity="0.5"
                  />
                  <rect
                    x="160"
                    y="193"
                    width="40"
                    height="3"
                    rx="1.5"
                    fill="#1e40af"
                    opacity="0.5"
                  />
                </g>

                {/* Bottom Navigation Bar */}
                <g>
                  <rect
                    x="80"
                    y="235"
                    width="140"
                    height="15"
                    rx="7.5"
                    fill="#e5e7eb"
                    opacity="0.5"
                  />
                  <circle cx="110" cy="242.5" r="4" fill="#6366f1" />
                  <circle cx="150" cy="242.5" r="4" fill="#8b5cf6" />
                  <circle cx="190" cy="242.5" r="4" fill="#ec4899" />
                </g>

                {/* Home Button */}
                <circle
                  cx="150"
                  cy="268"
                  r="6"
                  fill="#ffffff"
                  stroke="#9ca3af"
                  strokeWidth="2"
                />

                {/* Interactive Touch Points - Animated */}
                <g>
                  {/* Touch point 1 */}
                  <circle cx="112" cy="130" r="0" fill="#fbbf24" opacity="0.6">
                    <animate
                      attributeName="r"
                      values="0;15;0"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.6;0;0.6"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="112" cy="130" r="8" fill="#fef3c7" opacity="0.9">
                    <animate
                      attributeName="r"
                      values="8;4;8"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* Touch point 2 */}
                  <circle cx="187" cy="130" r="0" fill="#8b5cf6" opacity="0.6">
                    <animate
                      attributeName="r"
                      values="0;15;0"
                      dur="3s"
                      repeatCount="indefinite"
                      begin="1s"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.6;0;0.6"
                      dur="3s"
                      repeatCount="indefinite"
                      begin="1s"
                    />
                  </circle>
                  <circle cx="187" cy="130" r="8" fill="#ddd6fe" opacity="0.9">
                    <animate
                      attributeName="r"
                      values="8;4;8"
                      dur="3s"
                      repeatCount="indefinite"
                      begin="1s"
                    />
                  </circle>

                  {/* Touch point 3 */}
                  <circle cx="112" cy="190" r="0" fill="#ec4899" opacity="0.6">
                    <animate
                      attributeName="r"
                      values="0;15;0"
                      dur="3s"
                      repeatCount="indefinite"
                      begin="2s"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.6;0;0.6"
                      dur="3s"
                      repeatCount="indefinite"
                      begin="2s"
                    />
                  </circle>
                  <circle cx="112" cy="190" r="8" fill="#fce7f3" opacity="0.9">
                    <animate
                      attributeName="r"
                      values="8;4;8"
                      dur="3s"
                      repeatCount="indefinite"
                      begin="2s"
                    />
                  </circle>
                </g>

                {/* Floating Action Icons */}
                <g opacity="0.9">
                  {/* Bookmark icon */}
                  <g transform="translate(35, 120)">
                    <circle cx="0" cy="0" r="14" fill="#10b981" opacity="0.2">
                      <animate
                        attributeName="cx"
                        values="0;-5;0"
                        dur="4s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <path d="M-4,-6 L-4,6 L0,3 L4,6 L4,-6 Z" fill="#10b981">
                      <animate
                        attributeName="transform"
                        values="translate(0,0);translate(-5,0);translate(0,0)"
                        dur="4s"
                        repeatCount="indefinite"
                      />
                    </path>
                  </g>

                  {/* Tag icon */}
                  <g transform="translate(265, 160)">
                    <circle cx="0" cy="0" r="14" fill="#f59e0b" opacity="0.2">
                      <animate
                        attributeName="cx"
                        values="0;5;0"
                        dur="4s"
                        repeatCount="indefinite"
                        begin="1s"
                      />
                    </circle>
                    <path d="M-5,-3 L-2,-3 L5,4 L2,7 L-5,0 Z" fill="#f59e0b">
                      <animate
                        attributeName="transform"
                        values="translate(0,0);translate(5,0);translate(0,0)"
                        dur="4s"
                        repeatCount="indefinite"
                        begin="1s"
                      />
                    </path>
                    <circle cx="-2" cy="-1" r="1.5" fill="#fef3c7">
                      <animate
                        attributeName="transform"
                        values="translate(0,0);translate(5,0);translate(0,0)"
                        dur="4s"
                        repeatCount="indefinite"
                        begin="1s"
                      />
                    </circle>
                  </g>

                  {/* Pencil/Edit icon */}
                  <g transform="translate(35, 200)">
                    <circle cx="0" cy="0" r="14" fill="#3b82f6" opacity="0.2">
                      <animate
                        attributeName="cx"
                        values="0;-5;0"
                        dur="4s"
                        repeatCount="indefinite"
                        begin="2s"
                      />
                    </circle>
                    <path d="M2,-5 L5,-2 L0,3 L-3,3 L-3,0 Z" fill="#3b82f6">
                      <animate
                        attributeName="transform"
                        values="translate(0,0);translate(-5,0);translate(0,0)"
                        dur="4s"
                        repeatCount="indefinite"
                        begin="2s"
                      />
                    </path>
                    <path d="M5,-2 L6,-3 L6.5,-2.5 L5.5,-1.5 Z" fill="#1e40af">
                      <animate
                        attributeName="transform"
                        values="translate(0,0);translate(-5,0);translate(0,0)"
                        dur="4s"
                        repeatCount="indefinite"
                        begin="2s"
                      />
                    </path>
                  </g>

                  {/* Share icon */}
                  <g transform="translate(265, 220)">
                    <circle cx="0" cy="0" r="14" fill="#ec4899" opacity="0.2">
                      <animate
                        attributeName="cx"
                        values="0;5;0"
                        dur="4s"
                        repeatCount="indefinite"
                        begin="3s"
                      />
                    </circle>
                    <circle cx="0" cy="-4" r="2.5" fill="#ec4899">
                      <animate
                        attributeName="transform"
                        values="translate(0,0);translate(5,0);translate(0,0)"
                        dur="4s"
                        repeatCount="indefinite"
                        begin="3s"
                      />
                    </circle>
                    <circle cx="-4" cy="2" r="2.5" fill="#ec4899">
                      <animate
                        attributeName="transform"
                        values="translate(0,0);translate(5,0);translate(0,0)"
                        dur="4s"
                        repeatCount="indefinite"
                        begin="3s"
                      />
                    </circle>
                    <circle cx="4" cy="2" r="2.5" fill="#ec4899">
                      <animate
                        attributeName="transform"
                        values="translate(0,0);translate(5,0);translate(0,0)"
                        dur="4s"
                        repeatCount="indefinite"
                        begin="3s"
                      />
                    </circle>
                    <line
                      x1="0"
                      y1="-4"
                      x2="-4"
                      y2="2"
                      stroke="#ec4899"
                      strokeWidth="1.5"
                    >
                      <animate
                        attributeName="transform"
                        values="translate(0,0);translate(5,0);translate(0,0)"
                        dur="4s"
                        repeatCount="indefinite"
                        begin="3s"
                      />
                    </line>
                    <line
                      x1="0"
                      y1="-4"
                      x2="4"
                      y2="2"
                      stroke="#ec4899"
                      strokeWidth="1.5"
                    >
                      <animate
                        attributeName="transform"
                        values="translate(0,0);translate(5,0);translate(0,0)"
                        dur="4s"
                        repeatCount="indefinite"
                        begin="3s"
                      />
                    </line>
                  </g>
                </g>

                {/* Signal/Connection Lines */}
                <g
                  stroke="#f59e0b"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                  opacity="0.4"
                >
                  <line x1="49" y1="120" x2="80" y2="130">
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;8"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </line>
                  <line x1="251" y1="160" x2="220" y2="165">
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;8"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </line>
                  <line x1="49" y1="200" x2="80" y2="190">
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;8"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </line>
                  <line x1="251" y1="220" x2="220" y2="215">
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;8"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </line>
                </g>

                {/* Definitions */}
                <defs>
                  {/* Tablet Gradient */}
                  <linearGradient
                    id="tabletGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#1f2937" stopOpacity="1" />
                    <stop offset="100%" stopColor="#374151" stopOpacity="1" />
                  </linearGradient>

                  {/* Header Gradient */}
                  <linearGradient
                    id="headerGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#fbbf24" stopOpacity="1" />
                    <stop offset="50%" stopColor="#f59e0b" stopOpacity="1" />
                    <stop offset="100%" stopColor="#ea580c" stopOpacity="1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {/* Background decorative elements */}
            <div className="absolute top-8 left-8 w-20 h-20 md:w-24 md:h-24 bg-white opacity-20 rounded-lg rotate-12 blur-sm"></div>
            <div className="absolute bottom-8 right-8 w-16 h-16 md:w-20 md:h-20 bg-white opacity-20 rounded-lg -rotate-12 blur-sm"></div>
            <div className="absolute top-1/2 right-12 w-12 h-12 md:w-16 md:h-16 bg-pink-300 opacity-20 rounded-full blur-md"></div>
          </div>

          {/* Right Side - Text Content */}
          <div className="flex flex-col justify-center order-2">
            <p className="blue-river-font text-purple-600 text-sm sm:text-base  md:text-lg lg:text-xl xl:text-2xl mb-1 md:mb-2">
              Your learning, your way
            </p>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-2 md:mb-3 lg:mb-4 leading-tight">
              Highlight what matters.
            </h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl font-normal">
              Interactive annotations let you mark key points and learn.
            </p>
          </div>
        </div>
      </div>

      <div className="relative py-10">
        <LearningProgressSection />
      </div>
    </div>
  );
}
