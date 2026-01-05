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
            <p className="handwritten-cursive text-blue-600 text-sm sm:text-base md:text-lg mb-1 md:mb-2">
              Learn smarter, not harder
            </p>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-2 md:mb-3 lg:mb-4 leading-tight">
              Knowledge made simple and clear
            </h1>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl font-normal">
              Complex topics broken down into easy-to-understand lessons
            </p>
          </div>

          {/* Right Side - Image: Learning/Books Illustration */}
          <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center h-56 sm:h-64 md:h-72 lg:h-80 order-1 md:order-2 p-6 md:p-8 relative overflow-hidden">
            {/* Book Stack Illustration */}
            <div className="relative z-10 flex flex-col items-center">
              <svg
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
                viewBox="0 0 240 240"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Base shadow */}
                <ellipse
                  cx="120"
                  cy="200"
                  rx="60"
                  ry="8"
                  fill="#000000"
                  opacity="0.15"
                />

                {/* Book 1 - Bottom */}
                <rect
                  x="60"
                  y="160"
                  width="80"
                  height="12"
                  rx="2"
                  fill="#1e3a8a"
                  opacity="0.9"
                />
                <rect
                  x="60"
                  y="120"
                  width="80"
                  height="40"
                  rx="3"
                  fill="#3b82f6"
                />
                <rect
                  x="65"
                  y="125"
                  width="70"
                  height="30"
                  rx="2"
                  fill="#60a5fa"
                  opacity="0.4"
                />
                <rect x="98" y="120" width="4" height="40" fill="#1e40af" />

                {/* Book 2 - Middle */}
                <rect
                  x="70"
                  y="135"
                  width="75"
                  height="10"
                  rx="2"
                  fill="#6b21a8"
                  opacity="0.9"
                />
                <rect
                  x="70"
                  y="100"
                  width="75"
                  height="35"
                  rx="3"
                  fill="#8b5cf6"
                />
                <rect
                  x="75"
                  y="105"
                  width="65"
                  height="25"
                  rx="2"
                  fill="#a78bfa"
                  opacity="0.4"
                />
                <rect x="105" y="100" width="4" height="35" fill="#6b21a8" />

                {/* Book 3 - Top */}
                <rect
                  x="80"
                  y="110"
                  width="70"
                  height="10"
                  rx="2"
                  fill="#be185d"
                  opacity="0.9"
                />
                <rect
                  x="80"
                  y="80"
                  width="70"
                  height="30"
                  rx="3"
                  fill="#ec4899"
                />
                <rect
                  x="85"
                  y="85"
                  width="60"
                  height="20"
                  rx="2"
                  fill="#f9a8d4"
                  opacity="0.4"
                />
                <rect x="113" y="80" width="4" height="30" fill="#9f1239" />

                {/* Lightbulb on top - larger and more prominent */}
                <circle
                  cx="115"
                  cy="50"
                  r="18"
                  fill="#fef3c7"
                  stroke="#fbbf24"
                  strokeWidth="3"
                />
                <path d="M105 68 L125 68 L123 80 L107 80 Z" fill="#fbbf24" />
                <rect
                  x="107"
                  y="80"
                  width="16"
                  height="4"
                  rx="2"
                  fill="#f59e0b"
                />

                {/* Light rays */}
                <path
                  d="M115 32 L115 20"
                  stroke="#fbbf24"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M135 50 L147 50"
                  stroke="#fbbf24"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M83 50 L95 50"
                  stroke="#fbbf24"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M128 37 L137 28"
                  stroke="#fbbf24"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M102 37 L93 28"
                  stroke="#fbbf24"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
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
          {/* Left Side - Image: Highlighter/Annotation Illustration */}
          <div className="bg-gradient-to-br from-amber-300 via-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center h-56 sm:h-64 md:h-72 lg:h-80 order-1 p-6 md:p-8 relative overflow-hidden">
            {/* Highlighter and Text Illustration */}
            <div className="relative z-10 flex flex-col items-center">
              <svg
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
                viewBox="0 0 240 240"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Paper shadow */}
                <rect
                  x="42"
                  y="42"
                  width="120"
                  height="150"
                  rx="6"
                  fill="#000000"
                  opacity="0.1"
                />

                {/* Document/Paper */}
                <rect
                  x="40"
                  y="40"
                  width="120"
                  height="150"
                  rx="6"
                  fill="white"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                />

                {/* Paper lines decoration */}
                <line
                  x1="50"
                  y1="40"
                  x2="50"
                  y2="190"
                  stroke="#fee2e2"
                  strokeWidth="1"
                />

                {/* Text Lines - Regular */}
                <rect
                  x="60"
                  y="60"
                  width="90"
                  height="4"
                  rx="2"
                  fill="#d1d5db"
                />
                <rect
                  x="60"
                  y="72"
                  width="85"
                  height="4"
                  rx="2"
                  fill="#d1d5db"
                />
                <rect
                  x="60"
                  y="84"
                  width="80"
                  height="4"
                  rx="2"
                  fill="#d1d5db"
                />

                {/* Highlighted section 1 - Yellow */}
                <rect
                  x="58"
                  y="94"
                  width="85"
                  height="14"
                  rx="3"
                  fill="#fef08a"
                  opacity="0.7"
                />
                <rect
                  x="60"
                  y="96"
                  width="80"
                  height="4"
                  rx="2"
                  fill="#374151"
                />
                <rect
                  x="60"
                  y="104"
                  width="75"
                  height="4"
                  rx="2"
                  fill="#374151"
                />

                {/* More text lines */}
                <rect
                  x="60"
                  y="116"
                  width="90"
                  height="4"
                  rx="2"
                  fill="#d1d5db"
                />
                <rect
                  x="60"
                  y="128"
                  width="70"
                  height="4"
                  rx="2"
                  fill="#d1d5db"
                />

                {/* Highlighted section 2 - Pink */}
                <rect
                  x="58"
                  y="138"
                  width="75"
                  height="14"
                  rx="3"
                  fill="#fecaca"
                  opacity="0.7"
                />
                <rect
                  x="60"
                  y="140"
                  width="70"
                  height="4"
                  rx="2"
                  fill="#374151"
                />
                <rect
                  x="60"
                  y="148"
                  width="68"
                  height="4"
                  rx="2"
                  fill="#374151"
                />

                {/* More text */}
                <rect
                  x="60"
                  y="160"
                  width="85"
                  height="4"
                  rx="2"
                  fill="#d1d5db"
                />
                <rect
                  x="60"
                  y="172"
                  width="75"
                  height="4"
                  rx="2"
                  fill="#d1d5db"
                />

                {/* Highlighter pen - larger and more detailed */}
                <rect
                  x="140"
                  y="120"
                  width="50"
                  height="12"
                  rx="4"
                  fill="#fbbf24"
                  transform="rotate(-35 165 126)"
                />
                <rect
                  x="180"
                  y="90"
                  width="12"
                  height="18"
                  rx="3"
                  fill="#f59e0b"
                  transform="rotate(-35 186 99)"
                />
                <circle cx="193" cy="87" r="5" fill="#fde047" />
                <circle cx="193" cy="87" r="3" fill="#fef3c7" />

                {/* Star sparkles around highlighter */}
                <path d="M200 80 L202 82 L204 80 L202 78 Z" fill="#fbbf24" />
                <path d="M195 70 L197 72 L199 70 L197 68 Z" fill="#fbbf24" />
                <path d="M205 95 L207 97 L209 95 L207 93 Z" fill="#fbbf24" />
              </svg>
            </div>
            {/* Background decorative elements */}
            <div className="absolute top-8 left-8 w-20 h-20 md:w-24 md:h-24 bg-white opacity-20 rounded-lg rotate-12 blur-sm"></div>
            <div className="absolute bottom-8 right-8 w-16 h-16 md:w-20 md:h-20 bg-white opacity-20 rounded-lg -rotate-12 blur-sm"></div>
            <div className="absolute top-1/2 right-12 w-12 h-12 md:w-16 md:h-16 bg-pink-300 opacity-20 rounded-full blur-md"></div>
          </div>

          {/* Right Side - Text Content */}
          <div className="flex flex-col justify-center order-2">
            <p className="handwritten-cursive text-blue-600 text-sm sm:text-base md:text-lg mb-1 md:mb-2">
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
