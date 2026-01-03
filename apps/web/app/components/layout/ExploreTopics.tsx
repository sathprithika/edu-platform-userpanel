"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ExploreTopics = () => {
  const router = useRouter();

  const topics = [
    {
      title: "Generative AI",
      description:
        "Discover how AI creates artificial intelligence, enabling systems to generate content, art, and solutions autonomously. This includes usage like ChatGPT, MidJourney, and more.",
      views: "1K Views",
      tag: "#AI",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      link: "/topics/generative-ai"
    },
    {
      title: "Digital Marketing",
      description:
        "Dive into social and digital marketing, learning to promote brands and products online. Use familiar creator social tools to expand reach and revenue insights.",
      views: "1K Views",
      tag: "#Digital Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      link: "/topics/digital-marketing"
    },
    {
      title: "AWS (Server)",
      description:
        "Learn how to set up and manage cloud infrastructure with Amazon Web Services. Dive into cloud computing, storage, and architecture for modern applications.",
      views: "1K Views",
      tag: "#AWS",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      link: "/topics/aws-server"
    },
    {
      title: "Meta Platform",
      description:
        "Learning AI Technology not new a great and advance technology in our system with deep learning. This robust tools makes AI Facebook, WhatsApp, and Instagram's digital ecosystems.",
      views: "1K Views",
      tag: "#Meta Platform",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      link: "/topics/meta-platform"
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
      {/* Floating Tags - Only visible on desktop (lg and above) */}
      <div className="hidden lg:block">
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
                backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                borderColor: 'rgba(140, 140, 170, 0.4)', 
                boxShadow: '0 2px 4px 0 rgba(124, 58, 237, 0.06), 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                border: '1px solid rgba(140, 140, 170, 0.4)'
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

      {/* REALISTIC CLOUD SECTION - EXACT NATURAL SHAPES */}
      <div 
        className="relative w-full"
        style={{ 
          height: '400px',
          marginTop: '-80px',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(252,253,254,0.15) 18%, rgba(246,248,250,0.35) 35%, rgba(240,243,246,0.58) 52%, rgba(245,247,250,0.8) 70%, rgba(250,251,252,0.92) 85%, rgb(255,255,255) 100%)'
        }}
      >
        {/* LEFT SIDE CLOUD FORMATIONS */}
        
        {/* Top Left - Large puffy cloud */}
        <div 
          className="absolute"
          style={{
            width: '380px',
            height: '150px',
            left: '2%',
            top: '8%',
            background: 'radial-gradient(ellipse 120% 100% at 30% 45%, rgba(255,255,255,0.98) 0%, rgba(252,253,254,0.92) 15%, rgba(248,250,252,0.82) 28%, rgba(243,246,249,0.68) 42%, rgba(238,242,246,0.5) 58%, rgba(233,238,243,0.32) 75%, transparent 92%)',
            borderRadius: '65% 35% 48% 52%',
            filter: 'blur(32px)',
            transform: 'rotate(-4deg) scaleX(1.1)',
          }}
        />
        <div 
          className="absolute"
          style={{
            width: '280px',
            height: '115px',
            left: '3.5%',
            top: '10%',
            background: 'radial-gradient(circle at 52% 50%, rgba(255,255,255,0.94) 0%, rgba(250,251,253,0.85) 20%, rgba(245,247,250,0.7) 40%, rgba(240,243,246,0.5) 62%, transparent 85%)',
            borderRadius: '58% 42% 45% 55%',
            filter: 'blur(24px)',
            transform: 'rotate(3deg)',
          }}
        />
        <div 
          className="absolute"
          style={{
            width: '200px',
            height: '85px',
            left: '5%',
            top: '12%',
            background: 'radial-gradient(circle at 48% 52%, rgba(255,255,255,0.88) 0%, rgba(248,250,252,0.72) 28%, rgba(243,245,248,0.52) 60%, transparent 82%)',
            borderRadius: '50%',
            filter: 'blur(18px)',
          }}
        />

        {/* Middle Left - Elongated horizontal cloud */}
        <div 
          className="absolute"
          style={{
            width: '450px',
            height: '130px',
            left: '4%',
            top: '32%',
            background: 'radial-gradient(ellipse 140% 90% at 38% 48%, rgba(250,252,253,0.94) 0%, rgba(246,248,251,0.86) 18%, rgba(241,244,248,0.74) 35%, rgba(236,240,245,0.6) 52%, rgba(231,236,242,0.42) 70%, rgba(236,240,245,0.24) 85%, transparent 95%)',
            borderRadius: '52% 48% 45% 55%',
            filter: 'blur(36px)',
            transform: 'rotate(-2deg) scaleX(1.15)',
          }}
        />
        <div 
          className="absolute"
          style={{
            width: '340px',
            height: '105px',
            left: '5%',
            top: '33.5%',
            background: 'radial-gradient(ellipse at 55% 50%, rgba(248,250,252,0.88) 0%, rgba(243,246,249,0.76) 25%, rgba(238,242,246,0.6) 50%, rgba(233,238,243,0.4) 75%, transparent 92%)',
            borderRadius: '48% 52% 50% 50%',
            filter: 'blur(28px)',
            transform: 'rotate(2deg)',
          }}
        />

        {/* Lower Left - Medium sized cloud cluster */}
        <div 
          className="absolute"
          style={{
            width: '420px',
            height: '155px',
            left: '1%',
            top: '56%',
            background: 'radial-gradient(ellipse 125% 95% at 35% 46%, rgba(245,247,250,0.92) 0%, rgba(240,243,247,0.84) 20%, rgba(235,239,244,0.72) 38%, rgba(230,235,241,0.58) 56%, rgba(235,239,244,0.38) 75%, rgba(242,245,248,0.2) 88%, transparent 96%)',
            borderRadius: '55% 45% 52% 48%',
            filter: 'blur(38px)',
            transform: 'rotate(-3deg) scaleX(1.08)',
          }}
        />
        <div 
          className="absolute"
          style={{
            width: '320px',
            height: '125px',
            left: '2.5%',
            top: '57.5%',
            background: 'radial-gradient(circle at 50% 48%, rgba(243,246,249,0.86) 0%, rgba(238,242,246,0.72) 26%, rgba(233,238,243,0.56) 52%, rgba(238,242,246,0.34) 78%, transparent 90%)',
            borderRadius: '50%',
            filter: 'blur(30px)',
            transform: 'rotate(2deg)',
          }}
        />

        {/* Bottom Left - Large blending cloud */}
        <div 
          className="absolute"
          style={{
            width: '520px',
            height: '175px',
            left: '0%',
            top: '72%',
            background: 'radial-gradient(ellipse 135% 100% at 40% 44%, rgba(242,245,248,0.88) 0%, rgba(237,241,246,0.78) 22%, rgba(232,237,243,0.66) 42%, rgba(237,241,246,0.5) 62%, rgba(242,245,248,0.32) 80%, rgba(248,250,252,0.16) 92%, transparent 98%)',
            borderRadius: '48% 52% 50% 50%',
            filter: 'blur(42px)',
            transform: 'rotate(-2deg) scaleX(1.12)',
          }}
        />
        <div 
          className="absolute"
          style={{
            width: '400px',
            height: '145px',
            left: '1.5%',
            top: '73.5%',
            background: 'radial-gradient(circle at 48% 50%, rgba(240,243,247,0.82) 0%, rgba(235,239,244,0.68) 28%, rgba(230,235,241,0.5) 58%, rgba(240,243,247,0.28) 84%, transparent 94%)',
            borderRadius: '50%',
            filter: 'blur(34px)',
          }}
        />

        {/* RIGHT SIDE CLOUD FORMATIONS */}
        
        {/* Top Right - Rounded cloud cluster */}
        <div 
          className="absolute"
          style={{
            width: '400px',
            height: '160px',
            right: '2%',
            top: '6%',
            background: 'radial-gradient(ellipse 115% 100% at 42% 42%, rgba(255,255,255,0.97) 0%, rgba(252,253,254,0.91) 16%, rgba(248,250,252,0.81) 30%, rgba(243,246,249,0.66) 45%, rgba(238,242,246,0.48) 62%, rgba(233,238,243,0.3) 78%, transparent 90%)',
            borderRadius: '40% 60% 52% 48%',
            filter: 'blur(34px)',
            transform: 'rotate(5deg) scaleX(1.05)',
          }}
        />
        <div 
          className="absolute"
          style={{
            width: '300px',
            height: '125px',
            right: '3.5%',
            top: '8%',
            background: 'radial-gradient(circle at 56% 48%, rgba(255,255,255,0.92) 0%, rgba(250,251,253,0.83) 22%, rgba(245,247,250,0.68) 44%, rgba(240,243,246,0.48) 68%, transparent 88%)',
            borderRadius: '45% 55% 50% 50%',
            filter: 'blur(26px)',
            transform: 'rotate(-4deg)',
          }}
        />
        <div 
          className="absolute"
          style={{
            width: '210px',
            height: '92px',
            right: '5%',
            top: '10.5%',
            background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.86) 0%, rgba(248,250,252,0.7) 30%, rgba(243,245,248,0.5) 62%, transparent 84%)',
            borderRadius: '50%',
            filter: 'blur(20px)',
          }}
        />

        {/* Middle Right - Wide stretched cloud */}
        <div 
          className="absolute"
          style={{
            width: '480px',
            height: '140px',
            right: '3%',
            top: '30%',
            background: 'radial-gradient(ellipse 145% 88% at 44% 46%, rgba(250,252,253,0.96) 0%, rgba(246,248,251,0.88) 17%, rgba(241,244,248,0.76) 33%, rgba(236,240,245,0.62) 50%, rgba(231,236,242,0.44) 68%, rgba(236,240,245,0.26) 84%, transparent 94%)',
            borderRadius: '48% 52% 52% 48%',
            filter: 'blur(38px)',
            transform: 'rotate(3deg) scaleX(1.18)',
          }}
        />
        <div 
          className="absolute"
          style={{
            width: '360px',
            height: '112px',
            right: '4.5%',
            top: '31.5%',
            background: 'radial-gradient(ellipse at 52% 52%, rgba(248,250,252,0.9) 0%, rgba(243,246,249,0.78) 24%, rgba(238,242,246,0.62) 48%, rgba(233,238,243,0.42) 74%, transparent 90%)',
            borderRadius: '50% 50% 48% 52%',
            filter: 'blur(30px)',
            transform: 'rotate(-2deg)',
          }}
        />

        {/* Lower Right - Irregular shaped cloud */}
        <div 
          className="absolute"
          style={{
            width: '440px',
            height: '165px',
            right: '1.5%',
            top: '54%',
            background: 'radial-gradient(ellipse 128% 98% at 46% 44%, rgba(245,247,250,0.94) 0%, rgba(240,243,247,0.86) 19%, rgba(235,239,244,0.74) 37%, rgba(230,235,241,0.6) 55%, rgba(235,239,244,0.4) 73%, rgba(242,245,248,0.22) 87%, transparent 95%)',
            borderRadius: '42% 58% 48% 52%',
            filter: 'blur(40px)',
            transform: 'rotate(4deg) scaleX(1.1)',
          }}
        />
        <div 
          className="absolute"
          style={{
            width: '340px',
            height: '132px',
            right: '3%',
            top: '55.5%',
            background: 'radial-gradient(circle at 52% 50%, rgba(243,246,249,0.88) 0%, rgba(238,242,246,0.74) 25%, rgba(233,238,243,0.58) 50%, rgba(238,242,246,0.36) 76%, transparent 92%)',
            borderRadius: '50%',
            filter: 'blur(32px)',
            transform: 'rotate(-3deg)',
          }}
        />

        {/* Bottom Right - Extended blending cloud */}
        <div 
          className="absolute"
          style={{
            width: '540px',
            height: '182px',
            right: '0%',
            top: '70%',
            background: 'radial-gradient(ellipse 138% 102% at 48% 42%, rgba(242,245,248,0.9) 0%, rgba(237,241,246,0.8) 21%, rgba(232,237,243,0.68) 40%, rgba(237,241,246,0.52) 60%, rgba(242,245,248,0.34) 78%, rgba(248,250,252,0.18) 90%, transparent 97%)',
            borderRadius: '52% 48% 48% 52%',
            filter: 'blur(44px)',
            transform: 'rotate(2deg) scaleX(1.14)',
          }}
        />
        <div 
          className="absolute"
          style={{
            width: '420px',
            height: '152px',
            right: '1.5%',
            top: '71.5%',
            background: 'radial-gradient(circle at 50% 48%, rgba(240,243,247,0.84) 0%, rgba(235,239,244,0.7) 26%, rgba(230,235,241,0.52) 54%, rgba(240,243,247,0.3) 82%, transparent 93%)',
            borderRadius: '50%',
            filter: 'blur(36px)',
          }}
        />

        {/* CENTER - Very minimal subtle wisps */}
        
        {/* Top center wisp */}
        <div 
          className="absolute"
          style={{
            width: '220px',
            height: '85px',
            left: '42%',
            top: '12%',
            background: 'radial-gradient(ellipse at 50% 50%, rgba(252,253,254,0.5) 0%, rgba(246,248,250,0.32) 40%, rgba(240,243,246,0.18) 72%, transparent 90%)',
            borderRadius: '50%',
            filter: 'blur(28px)',
            opacity: 0.7,
          }}
        />

        {/* Middle center wisp */}
        <div 
          className="absolute"
          style={{
            width: '260px',
            height: '95px',
            left: '40%',
            top: '36%',
            background: 'radial-gradient(ellipse at 48% 52%, rgba(248,250,252,0.48) 0%, rgba(243,245,248,0.3) 42%, rgba(237,240,244,0.16) 75%, transparent 92%)',
            borderRadius: '50%',
            filter: 'blur(32px)',
            opacity: 0.65,
          }}
        />

        {/* Lower center wisp */}
        <div 
          className="absolute"
          style={{
            width: '240px',
            height: '90px',
            left: '41%',
            top: '60%',
            background: 'radial-gradient(ellipse at 52% 48%, rgba(243,246,249,0.44) 0%, rgba(238,241,245,0.28) 45%, rgba(233,237,242,0.14) 78%, transparent 94%)',
            borderRadius: '50%',
            filter: 'blur(30px)',
            opacity: 0.6,
          }}
        />
      </div>

      {/* BOTTOM SECTION */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 md:py-16 lg:py-20">
          <p className="handwritten-cursive text-blue-600 text-base md:text-lg lg:text-xl mb-3 md:mb-4">
            Step into a smarter way to learn
          </p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Build Real{" "}
            <span className="inline-block text-blue-600 rounded-full border-2 border-black bg-white font-bold shadow-sm px-3 md:px-4">
              Understanding
            </span>{" "}
            In Every Subject You <span className="text-blue-600">Explore</span>
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            We bring you the clarity and smart tools that transform how you learn,
            helping you grasp concepts deeper and remember them longer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExploreTopics;