import React, { useRef, useState, useEffect } from "react";

const PopularPhones = () => {
  const scrollContainer = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const phones = [
    { 
      name: "iPhone 15 Pro", 
      price: "₹1,34,900", 
      img: "image_url",
      score: 92,
      rating: 4.7
    },
    { 
      name: "Samsung Galaxy S23 Ultra", 
      price: "₹1,24,999", 
      img: "image_url",
      score: 89,
      rating: 4.6
    },
    { 
      name: "OnePlus 11R", 
      price: "₹39,999", 
      img: "image_url",
      score: 87,
      rating: 4.5
    },
    { 
      name: "Google Pixel 7 Pro", 
      price: "₹74,999", 
      img: "image_url",
      score: 90,
      rating: 4.4
    },
    { 
      name: "Xiaomi 13 Pro", 
      price: "₹79,999", 
      img: "image_url",
      score: 88,
      rating: 4.3
    },
    { 
      name: "Vivo X90 Pro", 
      price: "₹84,999", 
      img: "image_url",
      score: 86,
      rating: 4.2
    },
    { 
      name: "Oppo Find X6 Pro", 
      price: "₹89,999", 
      img: "image_url",
      score: 85,
      rating: 4.1
    },
    { 
      name: "Nothing Phone (2)", 
      price: "₹44,999", 
      img: "image_url",
      score: 84,
      rating: 4.0
    },
  ];

  const scroll = (direction) => {
    if (scrollContainer.current) {
      const scrollAmount = 256; // w-64 (256px) + p-4 (32px) = 288px
      scrollContainer.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainer.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    const container = scrollContainer.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-10">
      <div className="shadow-mobile-gray-card-shadow bg-[#F8F8F8] px-[16px] py-[16px] md:px-[32px] md:py-[32px] rounded-[16px] md:rounded-[36px] relative">
        <div className="flex gap-[24px] items-center justify-between">
          <h2 className="text-[#3c3c3c] text-[20px] md:text-[28px] font-semibold font-figtree break-normal">
            Popular <span className="gradient-text-primary">Phones</span>
          </h2>
          <a 
            className="flex items-center gap-[8px] text-[#1d2838] md:px-[16px] md:py-[10px] md:border md:border-[#cfd4dc] md:rounded-[8px] text-[14px] font-semibold text-nowrap hover:bg-[#f0f0f0] transition-colors"
            href="/popular-phones"
          >
            View all 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1d2838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div className="h-[32px]"></div>
        <div className="relative">
          {showLeftButton && (
            <div className="absolute left-[0px] top-[45%] translate-y-[-50%] z-20">
              <button 
                className="w-12 h-12 origin-top-left bg-[#f2f2f2] rounded-[42px] border border-[#b0d2f3]/30 flex-col justify-center items-center inline-flex"
                aria-label="previous button"
                onClick={() => scroll("left")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#07184f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down size-4 shrink-0 rotate-90 text-muted-foreground transition-transform duration-200 inline-block">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
            </div>
          )}

          {showRightButton && (
            <div className="absolute right-[0px] top-[45%] translate-y-[-50%] z-20">
              <button 
                className="w-12 h-12 origin-top-left bg-[#f2f2f2] rounded-[42px] border border-[#b0d2f3]/30 flex-col justify-center items-center inline-flex"
                aria-label="next button"
                onClick={() => scroll("right")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#07184f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down size-4 shrink-0 -rotate-90 text-muted-foreground transition-transform duration-200 inline-block">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
            </div>
          )}

          <div 
            ref={scrollContainer}
            className="hide-scroll overflow-auto flex flex-row gap-[12px] md:gap-[24px] scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {phones.map((phone, index) => (
              <a
                key={index}
                className="max-sm:max-w-[180px] bg-white rounded-2xl border border-[#f2f2f2] w-[256px] max-w-[80vw] transition-all hover-gradient-border-primary"
                href={`/mobile/${phone.name.toLowerCase().replace(/ /g, '-')}`}
              >
                <div className="p-4 flex flex-col h-full">
                  <div className="relative">
                    <div className="absolute top-[8px] left-[8px] bg-no-repeat size-[50px] flex justify-center items-center flex-col bg-cover bg-center" style={{backgroundImage: "url('https://cdn.beebom.com/images/backgrounds/beebom-score-icon-background.svg')"}}>
                      <p className="text-center text-[#006fda] font-bold font-figtree text-[18px] leading-[21px]">{phone.score}</p>
                      <p className="text-center text-[#006fda] text-[8px] font-semibold leading-[9px]">Beebom Score</p>
                    </div>
                    <picture style={{ contentVisibility: 'auto' }}>
                      <source type="image/webp" srcSet={`${phone.img} 356w`} sizes="222px" />
                      <img 
                        src={phone.img}
                        alt={phone.name}
                        className="rounded-lg border border-[#b0d2f3]/30 bg-[#fdfdfd] size-[153px] md:size-[222px] w-full"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="h-[16px]"></div>
                  <div className="flex gap-2 justify-between items-start">
                    <p className="text-[#46474a] text-sm md:text-xl font-medium flex-1 line-clamp-2">
                      {phone.name}
                    </p>
                    {phone.rating && (
                      <div className="ratings flex gap-[5.5px] items-center">
                        <picture style={{ contentVisibility: 'auto' }}>
                          <source type="image/webp" srcSet="https://cdn.beebom.com/images/icons/rating-yellow-start-icon.svg 14w" sizes="14px" />
                          <img 
                            src="https://cdn.beebom.com/images/icons/rating-yellow-start-icon.svg" 
                            alt="rating" 
                            width="14" 
                            height="13"
                            loading="lazy"
                            decoding="async"
                          />
                        </picture>
                        <p className="font-normal text-neutral-700">
                          <span className="text-base">{phone.rating}</span>
                          <span className="text-sm font-light">/</span>
                          <span className="text-xs">5</span>
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="min-h-[12px] flex-1"></div>
                  <p className="text-[#161616] text-lg md:text-[28px] font-semibold">
                    {phone.price}
                  </p>
                </div>
              </a>
            ))}
          </div>
          <button 
            onClick={() => scroll('right')}
            className="hidden md:block absolute right-[-16px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularPhones;
