"use client";
import React from "react";
import { useRouter } from "next/navigation";
import FeaturesSection from "./FeaturesSection";

const ProgressSection = () => {
  const router = useRouter();

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
            We keep track of what you've been exploring, so you can revisit and
            keep the momentum going in your educational journey.
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
    </div>

     {/* Features Section - Separate */}
     <FeaturesSection />
   

    </>
  );
};

export default ProgressSection;
