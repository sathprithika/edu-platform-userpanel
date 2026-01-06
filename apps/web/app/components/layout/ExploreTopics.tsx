"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import cloudImage from "../common/images/beautiful-white-cloud.png";

// import cloudImage2 from "../common/images/cloud.jpg";

import cloudImage2 from "../common/images/11506816.png";


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

const ExploreTopics = () => {
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
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      link: "/topics/generative-ai",
    },
    {
      title: "Digital Marketing",
      description:
        "Dive into social and digital marketing, learning to promote brands and products online. Use familiar creator social tools to expand reach and revenue insights.",
      views: "1K Views",
      tag: "#Digital Marketing",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      link: "/topics/digital-marketing",
    },
    {
      title: "AWS (Server)",
      description:
        "Learn how to set up and manage cloud infrastructure with Amazon Web Services. Dive into cloud computing, storage, and architecture for modern applications.",
      views: "1K Views",
      tag: "#AWS",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      link: "/topics/aws-server",
    },
    {
      title: "Meta Platform",
      description:
        "Learning AI Technology not new a great and advance technology in our system with deep learning. This robust tools makes AI Facebook, WhatsApp, and Instagram's digital ecosystems.",
      views: "1K Views",
      tag: "#Meta Platform",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      link: "/topics/meta-platform",
    },
  ];

  const floatingTags = [
    {
      text: "#AI",
      id: "tag-1",
      className: "floating-tag-1",
    },
    {
      text: "#AWS",
      id: "tag-2",
      className: "floating-tag-2",
    },
    {
      text: "#Digital Marketing",
      id: "tag-3",
      className: "floating-tag-3",
    },
    {
      text: "#Vibe Coding",
      id: "tag-4",
      className: "floating-tag-4",
    },
    {
      text: "#R&D",
      id: "tag-5",
      className: "floating-tag-5",
    },
    {
      text: "#Meta Platform",
      id: "tag-6",
      className: "floating-tag-6",
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
    <div className="jakarta-font w-full bg-white relative overflow-hidden">
      {/* Floating Tags - Responsive for all screen sizes */}
      <div className="floating-tags-container">
        {floatingTags.map((tag, index) => (
          <div
            key={tag.id}
            className={`${tag.className} absolute bg-white rounded-full shadow-lg font-bold text-gray-900 hover:shadow-xl transition-shadow duration-300 border border-gray-100 z-20
                       px-3 py-1.5 text-xs
                       sm:px-4 sm:py-2 sm:text-sm
                       md:px-4 md:py-2 md:text-sm
                       lg:px-5 lg:py-2.5 lg:text-base
                       xl:px-6 xl:py-3`}
          >
            {tag.text}
          </div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 md:py-12 lg:py-16 xl:py-20">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <p className="blue-river-font text-purple-600 text-base md:text-lg lg:text-xl xl:text-2xl mb-2 md:mb-3">
            Discover & Learn
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-2 md:mb-3 lg:mb-4 px-4">
            Explore <span className="text-purple-600">Topics</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 max-w-3xl mx-auto px-4">
            Learn key technology skills for students, professionals, and
            businesses in today's connected world.
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

      {/* CLOUD TRANSITION SECTION */}
      <div className="w-full relative h-24 sm:h-32 md:h-40 lg:h-48 overflow-hidden">
        {/* Cloud Images */}
        <div className="absolute inset-0 w-full h-full">
          {/* Cloud 1 - Left */}
          <img
            src={cloudImage2.src}
            alt="1"
            className="absolute top-0 left-4 sm:left-8 md:left-12 w-48 sm:w-64 md:w-80 lg:w-96 h-auto opacity-70 mix-blend-multiply"
            style={{ transform: "translateY(-20%)" }}
          />

          {/* Cloud 2 - Center */}
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-56 sm:w-72 md:w-96 lg:w-[28rem] h-auto opacity-60 mix-blend-multiply"
          />

          {/* Cloud 3 - Right */}
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-0 right-4 sm:right-8 md:right-12 w-48 sm:w-64 md:w-80 lg:w-96 h-auto opacity-70 mix-blend-multiply"
            style={{ transform: "translateY(-10%)" }}
          />

          {/* Cloud 4 - Bottom Left */}
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute bottom-0 left-1/4 w-40 sm:w-56 md:w-72 lg:w-80 h-auto opacity-50 mix-blend-multiply"
            style={{ transform: "translateY(10%)" }}
          />

          {/* Cloud 5 - Bottom Right */}
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute bottom-0 right-1/4 w-40 sm:w-56 md:w-72 lg:w-80 h-auto opacity-50 mix-blend-multiply"
            style={{ transform: "translateY(15%)" }}
          />

          {/* NEW SMALL CLOUDS - Left Edge */}
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-1/3 left-0 w-24 sm:w-32 md:w-40 lg:w-48 h-auto opacity-40 mix-blend-multiply"
            style={{ transform: "translateX(-20%)" }}
          />

          <img
            src={cloudImage2.src}
            alt=""
            className="absolute bottom-1/4 left-1 sm:left-2 w-20 sm:w-28 md:w-36 lg:w-44 h-auto opacity-35 mix-blend-multiply"
            style={{ transform: "translateY(5%)" }}
          />

          {/* NEW SMALL CLOUDS - Right Edge */}
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-1/3 right-0 w-24 sm:w-32 md:w-40 lg:w-48 h-auto opacity-40 mix-blend-multiply"
            style={{ transform: "translateX(20%)" }}
          />

          <img
            src={cloudImage2.src}
            alt=""
            className="absolute bottom-1/4 right-1 sm:right-2 w-20 sm:w-28 md:w-36 lg:w-44 h-auto opacity-35 mix-blend-multiply"
            style={{ transform: "translateY(5%)" }}
          />

          {/* ADDITIONAL FILLER CLOUDS - Top Edges */}
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-1 sm:top-2 left-1/4 -translate-x-1/2 w-28 sm:w-36 md:w-48 lg:w-56 h-auto opacity-30 mix-blend-multiply"
            style={{ transform: "translateY(-30%)" }}
          />

          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-1 sm:top-2 right-1/4 translate-x-1/2 w-28 sm:w-36 md:w-48 lg:w-56 h-auto opacity-30 mix-blend-multiply"
            style={{ transform: "translateY(-30%)" }}
          />
        </div>

        {/* Gradient Overlays for Smooth Blending */}
        {/* Top gradient */}
        <div className="absolute top-0 left-0 right-0 h-12 md:h-16 bg-gradient-to-b from-white to-transparent z-10"></div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-12 md:h-16 bg-gradient-to-t from-white to-transparent z-10"></div>

        {/* Left gradient */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 md:w-32 lg:w-40 bg-gradient-to-r from-white to-transparent z-10"></div>

        {/* Right gradient */}
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 md:w-32 lg:w-40 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12 md:py-16 lg:py-20">
          <p className="blue-river-font text-purple-600 text-sm sm:text-base  md:text-lg lg:text-xl xl:text-2xl mb-2 sm:mb-3 md:mb-4">
            Step into a smarter way to learn
          </p>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 leading-tight px-4">
            Build Real{" "}
            <span className="relative inline-block mx-1 md:mx-2">
              <span className="relative z-10 text-purple-600">
                Understanding
              </span>
              {/* Oval border using SVG - responsive */}
              <svg
                className="absolute top-1/2 left-1/2 pointer-events-none w-full h-full"
                style={{
                  transform: "translate(-50%, -50%)",
                  width: "105%",
                  height: "140%",
                }}
                viewBox="0 0 320 70"
                preserveAspectRatio="none"
              >
                <ellipse
                  cx="160"
                  cy="35"
                  rx="155"
                  ry="30"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2.5"
                />
              </svg>
            </span>{" "}
            In Every Subject You{" "}
            <span className="text-purple-600">Explore</span>
          </h3>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 max-w-3xl mx-auto px-4">
            We bring you the clarity and smart tools that transform how you
            learn, helping you grasp concepts deeper and remember them longer.
          </p>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Floating Tags Responsive Positioning */
        /* Mobile View - Only 2 tags (1 left, 1 right) */
        .floating-tag-1 {
          top: 1%;
          left: 3%;
          transform: rotate(-5deg);
        }
        .floating-tag-2 {
          display: none;
        }
        .floating-tag-3 {
          display: none;
        }
        .floating-tag-4 {
          top: 1%;
          right: 3%;
          transform: rotate(8deg);
        }
        .floating-tag-5 {
          display: none;
        }
        .floating-tag-6 {
          display: none;
        }

        /* Tablet View - 4 tags (2 left, 2 right) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .floating-tag-1 {
            top: 1%;
            left: 3%;
            transform: rotate(-5deg);
          }
          .floating-tag-2 {
            display: block;
            top: 6%;
            left: 1%;
            transform: rotate(3deg);
          }
          .floating-tag-3 {
            display: none;
          }
          .floating-tag-4 {
            top: 1%;
            right: 3%;
            transform: rotate(8deg);
          }
          .floating-tag-5 {
            display: block;
            top: 6%;
            right: 1%;
            transform: rotate(12deg);
          }
          .floating-tag-6 {
            display: none;
          }
        }

        /* Desktop View - All 6 tags */
        @media (min-width: 1024px) {
          .floating-tag-1 {
            top: 5%;
            left: 8%;
            transform: rotate(-5deg);
          }
          .floating-tag-2 {
            display: block;
            top: 10%;
            left: 4%;
            transform: rotate(3deg);
          }
          .floating-tag-3 {
            display: block;
            top: 10%;
            left: 12%;
            transform: rotate(-8deg);
          }
          .floating-tag-4 {
            top: 5%;
            right: 8%;
            transform: rotate(8deg);
          }
          .floating-tag-5 {
            display: block;
            top: 12%;
            right: 4%;
            transform: rotate(12deg);
          }
          .floating-tag-6 {
            display: block;
            top: 10%;
            right: 12%;
            left: auto;
            transform: rotate(-10deg);
          }
        }
      `}</style>
    </div>
  );
};

export default ExploreTopics;
