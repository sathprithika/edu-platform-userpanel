"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import FeaturesSection from "./FeaturesSection";

// Arrow SVG Constants
const LeftArrowIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 12H5M5 12l6 6m-6-6l6-6"
    />
  </svg>
);

const RightArrowIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 12h14m-6-6l6 6-6 6"
    />
  </svg>
);

const ProgressSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const router = useRouter();
  const carouselRef = useRef(null);

  const topics = [
    {
      title: "Generative AI",
      description:
        "Discover how AI creates artificial intelligence, enabling systems to generate content, art, and solutions autonomously. This includes usage like ChatGPT, MidJourney, and more.",
      views: "1K Views",
      tag: "#AI",
      image:
        "https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=800&q=80",
      link: "/topics/generative-ai",
    },
    {
      title: "Digital Marketing",
      description:
        "Dive into social and digital marketing, learning to promote brands and products online. Use familiar creator social tools to expand reach and revenue insights.",
      views: "1K Views",
      tag: "#Digital Marketing",
      image:
        "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=80",
      link: "/topics/digital-marketing",
    },
    {
      title: "AWS (Server)",
      description:
        "Learn how to set up and manage cloud infrastructure with Amazon Web Services. Dive into cloud computing, storage, and architecture for modern applications.",
      views: "1K Views",
      tag: "#AWS",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      link: "/topics/aws-server",
    },
    {
      title: "Meta Platform",
      description:
        "Learning AI Technology not new a great and advance technology in our system with deep learning. This robust tools makes AI Facebook, WhatsApp, and Instagram's digital ecosystems.",
      views: "1K Views",
      tag: "#Meta Platform",
      image:
        "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&q=80",
      link: "/topics/meta-platform",
    },
  ];

  // Handle responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2); // Tablet: 2 cards
      } else {
        setItemsPerPage(3); // Desktop: 3 cards
      }
      setCurrentIndex(0); // Reset to first item on resize
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, topics.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const handleExploreMore = () => {
    router.push("/explore");
  };

  const handleCardClick = (link) => {
    router.push(link);
  };

  return (
    <>
      <div className="jakarta-font w-full bg-white relative overflow-hidden">
        <style jsx>{`
          @keyframes float-1 {
            0%,
            100% {
              transform: translateY(0) rotate(-8deg);
            }
            50% {
              transform: translateY(-20px) rotate(-8deg);
            }
          }

          @keyframes float-2 {
            0%,
            100% {
              transform: translateY(0) rotate(8deg);
            }
            50% {
              transform: translateY(-20px) rotate(8deg);
            }
          }

          .float-1 {
            animation: float-1 3s ease-in-out infinite;
          }

          .float-2 {
            animation: float-2 3s ease-in-out infinite;
            animation-delay: 0.5s;
          }
        `}</style>

        {/* Floating Element 1 - Top Left */}
        <div className="absolute top-10 left-10 lg:top-12 lg:left-12 xl:top-16 xl:left-16 z-10 float-1 hidden lg:block">
          <div className="bg-white border-2 border-purple-400 rounded-2xl p-4 shadow-2xl">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-purple-400 to-blue-500 p-0.5 shadow-lg">
                <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                  <img
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&q=80"
                    alt="AI Technology"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Element 2 - Bottom Right */}
        <div className="absolute bottom-10 right-10 lg:bottom-12 lg:right-12 xl:bottom-16 xl:right-16 z-10 float-2 hidden lg:block">
          <div className="bg-white border-2 border-purple-400 rounded-2xl p-4 shadow-2xl">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 p-0.5 shadow-lg">
                <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&q=80"
                    alt="Digital Marketing"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-16 lg:py-20">
          {/* Header Section */}
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <p className="blue-river-font text-purple-600 text-lg md:text-xl lg:text-2xl mb-2 md:mb-3">
              Pick up right where you left off
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 md:mb-4">
              Continue Your Progress{" "}
              <span className="text-purple-600">Seamlessly</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto px-4">
              We keep track of what you've been exploring, so you can revisit
              and keep the momentum going in your educational journey.
            </p>
          </div>

          {/* Carousel Container with Navigation */}
          <div className="relative px-1">
            {/* Navigation Arrows - Desktop Only (lg and above) */}
            <div className="hidden lg:flex absolute -top-12 md:-top-16 lg:-top-20 right-0 gap-2 md:gap-3 z-30">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                  currentIndex === 0
                    ? "bg-gray-50 border-gray-200 cursor-not-allowed"
                    : "bg-gray-50 border-gray-300 hover:bg-white"
                }`}
              >
                <LeftArrowIcon
                  className={`w-4 h-4 md:w-5 md:h-5 ${currentIndex === 0 ? "text-gray-300" : "text-gray-700"}`}
                />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === maxIndex}
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                  currentIndex === maxIndex
                    ? "bg-gray-50 border-gray-200 cursor-not-allowed"
                    : "bg-gray-50 border-gray-300 hover:bg-white"
                }`}
              >
                <RightArrowIcon
                  className={`w-4 h-4 md:w-5 md:h-5 ${currentIndex === maxIndex ? "text-gray-300" : "text-gray-700"}`}
                />
              </button>
            </div>

            {/* Desktop View - Sliding carousel with arrows */}
            <div className="hidden lg:block overflow-hidden mt-4 md:mt-6 lg:mt-8">
              <div
                className="flex gap-6 transition-transform duration-700 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerPage + 2)}%)`,
                }}
              >
                {topics.map((topic, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0"
                    style={{
                      width: `calc(${100 / itemsPerPage}% - ${((itemsPerPage - 1) * 24) / itemsPerPage}px)`,
                    }}
                  >
                    <div
                      onClick={() => handleCardClick(topic.link)}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className="bg-white overflow-hidden cursor-pointer h-full flex flex-col"
                      style={{
                        borderRadius: "12px",
                        border:
                          hoveredCard === index
                            ? "1px solid rgba(90, 90, 190, 0.5)"
                            : "1px solid rgba(75, 75, 174, 0.3)",
                        boxShadow: "0 3px 3px -1.5px rgba(18, 43, 165, 0.05)",
                        transition: "border 0.3s ease",
                      }}
                    >
                      {/* Image */}
                      <div className="w-full p-4 sm:p-5 md:p-6">
                        <div className="w-full h-40 sm:h-44 md:h-48 lg:h-52 bg-gray-100 overflow-hidden rounded-lg">
                          <img
                            src={topic.image}
                            alt={topic.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 md:px-6 md:pb-6 flex flex-col flex-grow">
                        {/* Title */}
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                          {topic.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-gray-600 mb-3 md:mb-4 line-clamp-3 leading-relaxed flex-grow">
                          {topic.description}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-gray-200">
                          <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-gray-600">
                            <svg
                              className="w-4 h-4 md:w-5 md:h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                            <span className="font-medium">{topic.views}</span>
                          </div>
                          <button className="bg-gray-800 hover:bg-gray-900 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-colors duration-300">
                            Explore
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile/Tablet View - Horizontal Scroll */}
            <div
              ref={carouselRef}
              className="lg:hidden overflow-x-auto scrollbar-hide mt-4 md:mt-6"
              style={{
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <div className="flex gap-4 md:gap-6 px-1">
                {topics.map((topic, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[85vw] sm:w-[80vw] md:w-[45vw]"
                    style={{ scrollSnapAlign: "center" }}
                  >
                    <div
                      onClick={() => handleCardClick(topic.link)}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className="bg-white overflow-hidden cursor-pointer h-full flex flex-col"
                      style={{
                        borderRadius: "12px",
                        border:
                          hoveredCard === index
                            ? "1px solid rgba(90, 90, 190, 0.5)"
                            : "1px solid rgba(75, 75, 174, 0.3)",
                        boxShadow: "0 3px 3px -1.5px rgba(18, 43, 165, 0.05)",
                        transition: "border 0.3s ease",
                      }}
                    >
                      {/* Image */}
                      <div className="w-full p-4 sm:p-5 md:p-6">
                        <div className="w-full h-40 sm:h-44 md:h-48 bg-gray-100 overflow-hidden rounded-lg">
                          <img
                            src={topic.image}
                            alt={topic.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 md:px-6 md:pb-6 flex flex-col flex-grow">
                        {/* Title */}
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                          {topic.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-gray-600 mb-3 md:mb-4 line-clamp-3 leading-relaxed flex-grow">
                          {topic.description}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-gray-200">
                          <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-gray-600">
                            <svg
                              className="w-4 h-4 md:w-5 md:h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                            <span className="font-medium">{topic.views}</span>
                          </div>
                          <button className="bg-gray-800 hover:bg-gray-900 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-colors duration-300">
                            Explore
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Explore More Button */}
          <div className="text-center relative z-20 pb-8 mt-8 md:mt-10 lg:mt-12">
            <button
              onClick={handleExploreMore}
              className="px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-4 text-sm sm:text-base md:text-lg font-black text-white rounded-lg shadow-lg relative overflow-hidden border gradient-wave transition-all duration-300"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6)",
                borderColor: "#6366f1",
              }}
            >
              Explore More
            </button>
          </div>
        </div>
      </div>

      {/* Features Section - Separate */}
      <FeaturesSection />
    </>
  );
};

export default ProgressSection;
