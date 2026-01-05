"use client"
import React from 'react';

const Card: React.FC = () => {
  const handleSignUpClick = () => {
    // Navigate to signup page
    window.location.href = '/signup'; // Change this URL to your actual signup page
  };

  return (
    <div className="min-h-[calc(100vh-200px)] bg-white flex items-start justify-center -mt-24 md:-mt-32 lg:-mt-40 p-4 md:p-6 lg:p-8 pb-4 md:pb-6 lg:pb-8">
      <div className="w-full max-w-[1280px] rounded-[32px] overflow-hidden shadow-2xl relative">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#6B46C1] via-[#4F7CFF] to-[#06B6D4]"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/2 right-[20%] -translate-y-1/2 w-[320px] h-[320px] rounded-full bg-[#8B5CF6] opacity-50 blur-[100px]"></div>
        <div className="absolute bottom-[15%] right-[10%] w-[160px] h-[160px] rounded-full bg-[#EC4899] opacity-60 blur-[60px]"></div>
        
        <div className="flex flex-col md:flex-row relative z-10">
          {/* Left Content Section */}
          <div className="flex-1 px-12 py-12 md:px-16 md:py-14 lg:px-20 lg:py-16 flex flex-col justify-center">
            <h1 className="jakarta-font font-bold text-white text-[36px] md:text-[40px] lg:text-[44px] leading-[1.15] mb-5">
              Your Free Pass<br />Is Ready!
            </h1>
            
            <p className="jakarta-font font-normal text-white/95 text-[16px] md:text-[17px] leading-[1.6] mb-9 max-w-[420px]">
              Sign up now and start using every feature at no cost—from clear explanations to smart annotations that help knowledge stick.
            </p>
            
            <button 
              onClick={handleSignUpClick}
              className="jakarta-font font-semibold text-white text-[16px] px-9 py-4 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#7C3AED] bg-[length:200%_100%] hover:bg-right transition-all duration-500 ease-out w-fit flex items-center gap-2.5 cursor-pointer shadow-lg shadow-purple-900/30 hover:shadow-xl hover:shadow-purple-900/40 border border-white/20"
            >
              Sign Up Now
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default Card;