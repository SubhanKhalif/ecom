import React, { useRef, useState, useEffect } from "react";

const BestMobilesSection = () => {
  const scrollRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const phones = [
    { id: 1, name: "Moto G35 5G", price: "₹9,999", img: "https://cdn.beebom.com/mobile/moto-g35-5g/moto-g35-front-and-back.png" },
    { id: 2, name: "Redmi 14C 5G", price: "₹9,999", img: "https://cdn.beebom.com/mobile/redmi-14c-5g/redmi-14c-5g-front-and-back-1.png" },
    { id: 3, name: "Poco C75 5G", price: "₹7,999", img: "https://cdn.beebom.com/mobile/poco-c75-5g-front-and-back-2.png" },
    { id: 2, name: "Redmi 14C 5G", price: "₹9,999", img: "https://cdn.beebom.com/mobile/redmi-14c-5g/redmi-14c-5g-front-and-back-1.png" },
    { id: 3, name: "Poco C75 5G pro", price: "₹7,999", img: "https://cdn.beebom.com/mobile/poco-c75-5g-front-and-back-2.png" }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 256; // Scroll by 256px
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="w-full py-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="shadow-mobile-gray-card-shadow bg-[#F8F8F8] px-[16px] py-[16px] md:px-[32px] md:py-[32px] rounded-[16px] md:rounded-[36px]">
        <div className="flex gap-[24px] items-center justify-between">
          <h2 className="text-[#3c3c3c] text-[20px] md:text-[28px] font-semibold font-figtree break-normal">
            Best Mobile Phones Under <span className="gradient-text-primary">10000</span>
          </h2>
          <a 
            className="flex items-center gap-[8px] text-[#1d2838] md:px-[16px] md:py-[10px] md:border md:border-[#cfd4dc] md:rounded-[8px] text-[14px] font-semibold text-nowrap"
            href="/best-phones-under-10000"
          >
            View all 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1d2838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                className="w-12 h-12 bg-[#f2f2f2] rounded-[42px] border border-[#b0d2f3]/30 flex justify-center items-center"
                aria-label="previous button"
                onClick={() => scroll("left")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#07184f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-90">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
            </div>
          )}

          <div ref={scrollRef} className="w-full overflow-x-auto py-1 sm:px-[16px] max-w-[calc(100vw-32px)] h-full" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="flex gap-[24px]">
              {phones.map((phone) => (
                <a
                  key={phone.id}
                  className="bg-white rounded-[16px] border border-[#f2f2f2] w-[256px] max-w-[80vw] transition-all hover:border-[#007aff]"
                  href={`/mobile/${phone.name.toLowerCase().replace(/ /g, '-')}`}
                >
                  <div className="p-[12px] flex gap-[12px] md:gap-[16px]">
                    <div className="h-full min-w-[80px] md:min-w-[120px]">
                      <img 
                        src={phone.img}
                        alt={phone.name}
                        className="rounded-[8px] border border-[#E5E5E5] bg-[#fdfdfd] w-[80px] md:w-[120px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <p className="text-[#46474a] text-[14px] md:text-[16px] font-medium line-clamp-2 overflow-hidden text-ellipsis">
                        {phone.name}
                      </p>
                      <p className="text-[#161616] text-[18px] md:text-[20px] font-semibold">
                        {phone.price}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {showRightButton && (
            <div className="absolute right-[0px] top-[45%] translate-y-[-50%] z-20">
              <button 
                className="w-12 h-12 bg-[#f2f2f2] rounded-[42px] border border-[#b0d2f3]/30 flex justify-center items-center"
                aria-label="next button"
                onClick={() => scroll("right")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#07184f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-rotate-90">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BestMobilesSection;
