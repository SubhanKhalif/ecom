import { useRef, useState, useEffect } from "react";

const phones = [
  { id: 1, name: "Samsung Galaxy A26 5G pro plus", price: "₹24,999", img: "https://cdn.beebom.com/mobile/samsung-galaxy-a26-5g-front-and-back-4-356w.webp" },
  { id: 2, name: "HMD Barbie Phone", price: "₹7,999", img: "https://cdn.beebom.com/mobile/samsung-galaxy-a26-5g-front-and-back-4-356w.webp" },
  { id: 3, name: "Huawei Pura X", price: "₹90,000", img: "https://cdn.beebom.com/mobile/samsung-galaxy-a26-5g-front-and-back-4-356w.webp" },
  { id: 4, name: "Oppo F29 Pro 5G", price: "₹27,999", img: "https://cdn.beebom.com/mobile/samsung-galaxy-a26-5g-front-and-back-4-356w.webp" },
  { id: 5, name: "Oppo F29 5G", price: "₹23,999", img: "https://cdn.beebom.com/mobile/samsung-galaxy-a26-5g-front-and-back-4-356w.webp" }
];

export default function LatestPhones() {
  const scrollRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 256; // w-64 (256px) + p-4 (32px) = 288px
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
    <section id="latest-devices" className="w-full py-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div>
        <div className="flex gap-[24px] items-center justify-between">
          <h2 className="text-[#3c3c3c] text-[20px] md:text-[28px] font-semibold font-figtree break-normal">
            Latest <span className="gradient-text-primary">Phones</span>
          </h2>
          <a 
            className="flex items-center gap-[8px] text-[#1d2838] md:px-[16px] md:py-[10px] md:border md:border-[#cfd4dc] md:rounded-[8px] text-[14px] font-semibold text-nowrap"
            href="/latest-mobile-phones"
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
          {/* Left Scroll Button */}
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

          {/* Scrollable Card Container */}
          <div ref={scrollRef} className="w-full overflow-scroll py-1 sm:px-[16px] max-w-[calc(100vw-32px)] h-full" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="elements-container grid gap-[24px] grid-cols-[repeat(100,_1fr);]">
              {phones.map((phone) => (
                <a
                  key={phone.id}
                  title={`${phone.name} page`}
                  className="max-sm:max-w-[180px] bg-white rounded-[16px] border border-[#f2f2f2] w-[256px] max-w-[80vw] transition-all hover-gradient-border-primary"
                  href={`/mobile/${phone.name.toLowerCase().replace(/ /g, '-')}`}
                >
                  <div className="p-4 flex flex-col h-full">
                    <div className="relative">
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
                    </div>
                    <div className="min-h-[12px] flex-1"></div>
                    <p className="text-[#161616] text-lg md:text-[28px] font-semibold">
                      {phone.price}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Scroll Button */}
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
        </div>
      </div>
    </section>
  );
}
