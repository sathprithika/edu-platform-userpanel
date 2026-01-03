"use client";
import React from "react";
import { useRouter } from "next/navigation";
import cloudImage from "../common/images/beautiful-white-cloud.png";
import cloudImage2 from "../common/images/11506816.png";

const ExploreTopics = () => {
  const router = useRouter();

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
    { text: "#AI", top: "5%", left: "8%", rotate: "-5deg" },
    { text: "#AWS", top: "10%", left: "4%", rotate: "3deg" },
    { text: "#Digital Marketing", top: "10%", left: "12%", rotate: "-8deg" },
    { text: "#Vibe Coding", top: "5%", right: "8%", rotate: "8deg" },
    { text: "#R&D", top: "12%", right: "4%", rotate: "12deg" },
    { text: "#Meta Platform", top: "10%", right: "12%", rotate: "-10deg" },
  ];

  const handleExploreMore = () => {
    router.push("/explore");
  };

  const handleCardClick = (link) => {
    router.push(link);
  };

  return (
    <div className="jakarta-font w-full bg-white relative overflow-hidden">
      {/* Floating Tags - Only visible on large desktop screens (xl and above) */}
      <div className="hidden xl:block">
        {floatingTags.map((tag, index) => (
          <div
            key={index}
            className="absolute bg-white px-5 py-2.5 lg:px-6 lg:py-3 rounded-full shadow-lg text-sm lg:text-base font-bold text-gray-900 hover:shadow-xl transition-shadow duration-300 border border-gray-100 z-20"
            style={{
              top: tag.top,
              left: tag.left,
              right: tag.right,
              transform: `rotate(${tag.rotate})`,
            }}
          >
            {tag.text}
          </div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-16 lg:py-20">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <p className="handwritten-cursive text-blue-600 text-lg md:text-xl lg:text-2xl mb-2 md:mb-3">
            Discover & Learn
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 md:mb-4">
            Explore <span className="text-blue-600">Topics</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto px-4">
            Learn key technology skills for students, professionals, and
            businesses in today's connected world.
          </p>
        </div>

        {/* Topic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
          {topics.map((topic, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(topic.link)}
              className="rounded-2xl relative overflow-visible backdrop-blur-md cursor-pointer transition-all duration-300 p-4 md:p-5 lg:p-6"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                borderColor: "rgba(140, 140, 170, 0.4)",
                boxShadow:
                  "0 2px 4px 0 rgba(124, 58, 237, 0.06), 0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                border: "1px solid rgba(140, 140, 170, 0.4)",
              }}
            >
              {/* Image */}
              <div className="w-full aspect-video rounded-xl md:rounded-2xl mb-4 md:mb-5 overflow-hidden bg-gray-200">
                <img
                  src={topic.image}
                  alt={topic.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                {topic.title}
              </h3>

              {/* Description */}
              <p className="text-xs md:text-sm text-gray-600 mb-4 md:mb-5 line-clamp-4 leading-relaxed">
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
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center relative z-20 pb-8">
          <button
            onClick={handleExploreMore}
            className="px-8 py-3 md:px-10 md:py-4 text-base md:text-lg font-black text-white rounded-lg shadow-lg relative overflow-hidden border gradient-wave transition-all duration-300"
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
      <div className="w-full relative h-32 md:h-40 lg:h-48 overflow-hidden">
        {/* Cloud Images */}
        <div className="absolute inset-0 w-full h-full">
          {/* Cloud 1 - Left */}
          <img
            src={cloudImage2.src}
            alt="1"
            className="absolute top-0 left-12 w-64 md:w-80 lg:w-96 h-auto opacity-70 mix-blend-multiply"
            style={{ transform: "translateY(-20%)" }}
          />

          {/* Cloud 2 - Center */}
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 md:w-96 lg:w-[28rem] h-auto opacity-60 mix-blend-multiply"
          />

          {/* Cloud 3 - Right */}
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-0 right-12 w-64 md:w-80 lg:w-96 h-auto opacity-70 mix-blend-multiply"
            style={{ transform: "translateY(-10%)" }}
          />

          {/* Cloud 4 - Bottom Left */}
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute bottom-0 left-1/4 w-56 md:w-72 lg:w-80 h-auto opacity-50 mix-blend-multiply"
            style={{ transform: "translateY(10%)" }}
          />

          {/* Cloud 5 - Bottom Right */}
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute bottom-0 right-1/4 w-56 md:w-72 lg:w-80 h-auto opacity-50 mix-blend-multiply"
            style={{ transform: "translateY(15%)" }}
          />

          {/* NEW SMALL CLOUDS - Left Edge */}
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-1/3 left-0 w-32 md:w-40 lg:w-48 h-auto opacity-40 mix-blend-multiply"
            style={{ transform: "translateX(-20%)" }}
          />

          <img
            src={cloudImage2.src}
            alt=""
            className="absolute bottom-1/4 left-2 w-28 md:w-36 lg:w-44 h-auto opacity-35 mix-blend-multiply"
            style={{ transform: "translateY(5%)" }}
          />

          {/* NEW SMALL CLOUDS - Right Edge */}
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-1/3 right-0 w-32 md:w-40 lg:w-48 h-auto opacity-40 mix-blend-multiply"
            style={{ transform: "translateX(20%)" }}
          />

          <img
            src={cloudImage2.src}
            alt=""
            className="absolute bottom-1/4 right-2 w-28 md:w-36 lg:w-44 h-auto opacity-35 mix-blend-multiply"
            style={{ transform: "translateY(5%)" }}
          />

          {/* ADDITIONAL FILLER CLOUDS - Top Edges */}
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-2 left-1/4 -translate-x-1/2 w-36 md:w-48 lg:w-56 h-auto opacity-30 mix-blend-multiply"
            style={{ transform: "translateY(-30%)" }}
          />

          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-2 right-1/4 translate-x-1/2 w-36 md:w-48 lg:w-56 h-auto opacity-30 mix-blend-multiply"
            style={{ transform: "translateY(-30%)" }}
          />
        </div>

        {/* Gradient Overlays for Smooth Blending */}
        {/* Top gradient */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent z-10"></div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>

        {/* Left gradient */}
        <div className="absolute top-0 bottom-0 left-0 w-24 md:w-32 lg:w-40 bg-gradient-to-r from-white to-transparent z-10"></div>

        {/* Right gradient */}
        <div className="absolute top-0 bottom-0 right-0 w-24 md:w-32 lg:w-40 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 md:py-16 lg:py-20">
          <p className="handwritten-cursive text-blue-600 text-base md:text-lg lg:text-xl mb-3 md:mb-4">
            Step into a smarter way to learn
          </p>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
            Build Real{" "}
            <span className="inline-block text-blue-600 rounded-full border-2 border-black bg-white font-bold shadow-sm px-2 sm:px-3 md:px-4">
              Understanding
            </span>{" "}
            In Every Subject You <span className="text-blue-600">Explore</span>
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            We bring you the clarity and smart tools that transform how you
            learn, helping you grasp concepts deeper and remember them longer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExploreTopics;
