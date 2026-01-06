import React from 'react';

const FeaturesSection = () => {
  const features = [
    { 
      icon: (
        <svg className="w-12 h-12 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ), 
      title: 'Built-in Highlighter', 
      coming: false
    },
    { 
      icon: (
        <svg className="w-12 h-12 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ), 
      title: 'AI Summarisation', 
      coming: true
    },
    { 
      icon: (
        <svg className="w-12 h-12 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ), 
      title: 'PWA Setup', 
      coming: true
    },
    { 
      icon: (
        <svg className="w-12 h-12 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6m8.66-15L16 8.66M12 12l-4.66 4.66M23 12h-6m-6 0H1m20.66 8.66L16 15.34M12 12l-4.66-4.66" />
        </svg>
      ), 
      title: 'Realtime Progress', 
      coming: false
    },
    { 
      icon: (
        <svg className="w-12 h-12 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ), 
      title: 'Notion Integrate', 
      coming: true
    },
    { 
      icon: (
        <svg className="w-12 h-12 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ), 
      title: 'Video Tutorials', 
      coming: true
    },
    { 
      icon: (
        <svg className="w-12 h-12 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ), 
      title: 'Offline Mode', 
      coming: true
    },
    { 
      icon: (
        <svg className="w-12 h-12 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
      ), 
      title: 'Bookmark', 
      coming: false
    },
    { 
      icon: (
        <svg className="w-12 h-12 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
      ), 
      title: 'Multi-Lingual', 
      coming: true
    },
    { 
      icon: (
        <svg className="w-12 h-12 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ), 
      title: 'Reference Doc', 
      coming: false
    },
    { 
      icon: (
        <svg className="w-12 h-12 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ), 
      title: 'Annotated Doc', 
      coming: true
    },
    { 
      icon: (
        <svg className="w-12 h-12 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ), 
      title: 'Dark/Light Mode', 
      coming: true
    },
  ];

  const categories = [
    'Simplified Learning',
    'Annotations',
    'AI Summaries',
    'Learn Anywhere'
  ];

  // Feature card component with dimmed styling
  const FeatureCard = ({ feature }) => (
    <div className="bg-white border-2 border-gray-300 rounded-[2rem] lg:rounded-[2.5rem] aspect-square flex flex-col items-center justify-center text-center px-6 py-8 w-[160px] h-[160px] lg:w-[180px] lg:h-[180px]">
      <div className="mb-4 text-gray-400">
        {feature.icon}
      </div>
      <h3 className="text-sm lg:text-base font-semibold text-gray-500 mb-2 px-2">
        {feature.title}
      </h3>
      {feature.coming && (
        <p className="text-xs text-gray-400">
          ( Coming Soon )
        </p>
      )}
    </div>
  );

  // Feature card with fading border (bottom boxes - hide top border, fade bottom toward logo)
  const FeatureCardTopFade = ({ feature }) => (
    <div className="relative w-[160px] h-[160px] lg:w-[180px] lg:h-[180px]">
      {/* Main card */}
      <div className="relative bg-white rounded-[2rem] lg:rounded-[2.5rem] aspect-square flex flex-col items-center justify-center text-center px-6 py-8 w-full h-full overflow-hidden">
        {/* Border with top half hidden, bottom half visible and fading up toward logo */}
        <div className="absolute inset-0 rounded-[2rem] lg:rounded-[2.5rem] pointer-events-none"
             style={{
               border: '2px solid rgb(209, 213, 219)',
               maskImage: 'linear-gradient(to top, transparent 0%, black 40%, black 100%)',
               WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 40%, black 100%)'
             }}>
        </div>
        
        <div className="mb-4 text-gray-400">
          {feature.icon}
        </div>
        <h3 className="text-sm lg:text-base font-semibold text-gray-500 mb-2 px-2">
          {feature.title}
        </h3>
        {feature.coming && (
          <p className="text-xs text-gray-400">
            ( Coming Soon )
          </p>
        )}
      </div>
    </div>
  );

  // Feature card with fading border (top boxes - hide bottom border, fade top toward logo)
  const FeatureCardBottomFade = ({ feature }) => (
    <div className="relative w-[160px] h-[160px] lg:w-[180px] lg:h-[180px]">
      {/* Main card */}
      <div className="relative bg-white rounded-[2rem] lg:rounded-[2.5rem] aspect-square flex flex-col items-center justify-center text-center px-6 py-8 w-full h-full overflow-hidden">
        {/* Border with bottom half hidden, top half visible and fading down toward logo */}
        <div className="absolute inset-0 rounded-[2rem] lg:rounded-[2.5rem] pointer-events-none"
             style={{
               border: '2px solid rgb(209, 213, 219)',
               maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 100%)',
               WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 100%)'
             }}>
        </div>
        
        <div className="mb-4 text-gray-400">
          {feature.icon}
        </div>
        <h3 className="text-sm lg:text-base font-semibold text-gray-500 mb-2 px-2">
          {feature.title}
        </h3>
        {feature.coming && (
          <p className="text-xs text-gray-400">
            ( Coming Soon )
          </p>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <p className="blue-river-font text-blue-600 text-lg md:text-xl lg:text-2xl mb-2 md:mb-3">
            Features designed for knowledge seekers
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 md:mb-4">
            Learn Smarter As We Build <span className="text-blue-600">Smart</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto px-4">
            Every feature we add is designed to transform how you acquire, retain, and apply knowledge.
          </p>
        </div>

        {/* Features Grid Container - Exact Layout */}
        <div className="relative mb-4 md:mb-6 lg:mb-8 max-w-[1400px] mx-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:flex lg:flex-col lg:items-center lg:gap-8">
            {/* Top Row - Only 2 boxes centered with BOTTOM FADE */}
            <div className="flex gap-8 justify-center">
              <div className="opacity-30">
                <FeatureCardBottomFade feature={features[2]} />
              </div>
              <div className="opacity-60">
                <FeatureCardBottomFade feature={features[3]} />
              </div>
            </div>

            {/* Middle Row - Half box + 4 boxes left + Logo + 4 boxes right + Half box */}
            <div className="flex gap-8 items-center justify-center">
              {/* Left edge half box column - faded */}
              <div className="flex flex-col gap-8 opacity-15 overflow-hidden w-[90px]">
                <div className="-ml-[90px]">
                  <FeatureCard feature={features[5]} />
                </div>
                <div className="-ml-[90px]">
                  <FeatureCard feature={features[9]} />
                </div>
              </div>
              
              {/* Left Column - 4 boxes in 2 rows */}
              <div className="flex flex-col gap-8">
                <div className="flex gap-8">
                  <div className="opacity-20">
                    <FeatureCard feature={features[0]} />
                  </div>
                  <div className="opacity-30">
                    <FeatureCard feature={features[1]} />
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="opacity-20">
                    <FeatureCard feature={features[6]} />
                  </div>
                  <div className="opacity-40">
                    <FeatureCard feature={features[7]} />
                  </div>
                </div>
              </div>

              {/* Center Logo */}
              <div className="bg-white rounded-[3rem] shadow-2xl flex items-center justify-center" style={{width: '400px', height: '380px'}}>
                <img 
                  src="/path-to-your-logo.png" 
                  alt="Logo" 
                  className="max-w-[300px] max-h-[300px] object-contain"
                />
              </div>

              {/* Right Column - 4 boxes in 2 rows */}
              <div className="flex flex-col gap-8">
                <div className="flex gap-8">
                  <div className="opacity-30">
                    <FeatureCard feature={features[4]} />
                  </div>
                  <div className="opacity-20">
                    <FeatureCard feature={features[5]} />
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="opacity-60">
                    <FeatureCard feature={features[8]} />
                  </div>
                  <div className="opacity-40">
                    <FeatureCard feature={features[9]} />
                  </div>
                </div>
              </div>
              
              {/* Right edge half box column - faded */}
              <div className="flex flex-col gap-8 opacity-15 overflow-hidden w-[90px]">
                <div className="-mr-[90px]">
                  <FeatureCard feature={features[0]} />
                </div>
                <div className="-mr-[90px]">
                  <FeatureCard feature={features[6]} />
                </div>
              </div>
            </div>

            {/* Bottom Row - Only 2 boxes centered with TOP FADE */}
            <div className="flex gap-8 justify-center">
              <div className="opacity-30">
                <FeatureCardTopFade feature={features[10]} />
              </div>
              <div className="opacity-30">
                <FeatureCardTopFade feature={features[11]} />
              </div>
            </div>
          </div>

          {/* Tablet Grid - 3 columns */}
          <div className="hidden md:grid lg:hidden grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-300 rounded-[2.5rem] aspect-square flex flex-col items-center justify-center text-center px-6 py-8"
              >
                <div className="mb-4 text-gray-400">{feature.icon}</div>
                <h3 className="text-base font-semibold text-gray-500 mb-2 px-2">{feature.title}</h3>
                {feature.coming && <p className="text-xs text-gray-400">( Coming Soon )</p>}
              </div>
            ))}
            <div className="col-span-3 flex justify-center mt-6">
              <div className="bg-white rounded-[3rem] shadow-2xl flex items-center justify-center w-72 h-72">
                <img 
                  src="/path-to-your-logo.png" 
                  alt="Logo" 
                  className="max-w-[300px] max-h-[300px] object-contain"
                />
              </div>
            </div>
          </div>

          {/* Mobile Grid - 2 columns */}
          <div className="grid md:hidden grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-300 rounded-[2rem] aspect-square flex flex-col items-center justify-center text-center px-4 py-6"
              >
                <div className="mb-3 text-gray-400">{feature.icon}</div>
                <h3 className="text-xs font-semibold text-gray-500 mb-1 px-1">{feature.title}</h3>
                {feature.coming && <p className="text-[10px] text-gray-400">( Coming Soon )</p>}
              </div>
            ))}
            <div className="col-span-2 flex justify-center mt-4">
              <div className="bg-white rounded-[3rem] shadow-xl flex items-center justify-center w-56 h-56">
                <img 
                  src="/path-to-your-logo.png" 
                  alt="Logo" 
                  className="max-w-[300px] max-h-[300px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section - Full Width - Outside Container */}
      <div className="w-screen bg-[#6b7280] py-8 md:py-10 lg:py-12 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="jakarta-font text-white text-center font-semibold text-base md:text-lg lg:text-xl"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;