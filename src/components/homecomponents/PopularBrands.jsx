import React, { useRef, useState, useEffect } from "react";

const PopularBrands = () => {
  const brands = [
    { name: "Apple", href: "/mobile-brands/apple" },
    { name: "Samsung", href: "/mobile-brands/samsung" },
    { name: "OnePlus", href: "/mobile-brands/oneplus" },
    { name: "Xiaomi", href: "/mobile-brands/xiaomi" },
    { name: "Realme", href: "/mobile-brands/realme" },
    { name: "Google", href: "/mobile-brands/google" },
    { name: "Vivo", href: "/mobile-brands/vivo" },
    { name: "Oppo", href: "/mobile-brands/oppo" },
    { name: "Motorola", href: "/mobile-brands/motorola" },
    { name: "Jio", href: "/mobile-brands/jio" },
    { name: "Poco", href: "/mobile-brands/poco" },
    { name: "Redmi", href: "/mobile-brands/redmi" },
    { name: "Nokia", href: "/mobile-brands/nokia" },
    { name: "Infinix", href: "/mobile-brands/infinix" },
    { name: "Asus", href: "/mobile-brands/asus" },
    { name: "Honor", href: "/mobile-brands/honor" },
    { name: "Nothing", href: "/mobile-brands/nothing" },
    { name: "Lava", href: "/mobile-brands/lava" },
    { name: "Iqoo", href: "/mobile-brands/iqoo" },
    { name: "Itel", href: "/mobile-brands/itel" },
    { name: "Tecno", href: "/mobile-brands/tecno" },
    { name: "Cmf", href: "/mobile-brands/cmf" },
    { name: "Hmd", href: "/mobile-brands/hmd" },
    { name: "Sony", href: "/mobile-brands/sony" },
    { name: "I-kall", href: "/mobile-brands/i-kall" },
    { name: "Huawei", href: "/mobile-brands/huawei" },
    { name: "Tcl", href: "/mobile-brands/tcl" },
    { name: "Zte", href: "/mobile-brands/zte" }
  ];

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
    <section id="top-brands" className="w-full py-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="flex gap-[24px] items-center justify-between">
        <h2 className="text-[#3c3c3c] text-[20px] md:text-[28px] font-semibold font-figtree break-normal">
          Popular <span className="gradient-text-primary">Brands</span>
        </h2>
        <a 
          className="flex items-center gap-[8px] text-[#1d2838] md:px-[16px] md:py-[10px] md:border md:border-[#cfd4dc] md:rounded-[8px] text-[14px] font-semibold text-nowrap"
          href="/mobile-brands"
        >
          View all 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1d2838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="custom-gap h-[32px]"></div>
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

        <div ref={scrollRef} className="w-full overflow-scroll py-1 sm:px-[16px] max-w-[calc(100vw-32px)] h-full" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="elements-container grid gap-[24px] grid-cols-[repeat(100,_1fr);]">
            {brands.map((brand, index) => (
              <a
                key={index}
                className="flex justify-center items-center w-[124px] h-[124px] md:w-[237px] md:h-[237px] rounded-[12px] border border-[#f2f2f2] group transition-all !overflow-hidden duration-1000 overflow-hidden"
                href={brand.href}
              >
                <picture style={{ contentVisibility: 'auto' }}>
                  <source type="image/webp" srcSet={`https://cdn.beebom.com/brands/${brand.name}/${brand.name}-main-237w.webp 237w, https://cdn.beebom.com/brands/${brand.name}/${brand.name}-main-124w.webp 124w`} sizes="237px" />
                  <source type="image/png" srcSet={`https://cdn.beebom.com/brands/${brand.name}/${brand.name}-main-237w.png 237w, https://cdn.beebom.com/brands/${brand.name}/${brand.name}-main-124w.png 124w`} sizes="237px" />
                  <source type="image/jpeg" srcSet={`https://cdn.beebom.com/brands/${brand.name}/${brand.name}-main-237w.jpeg 237w, https://cdn.beebom.com/brands/${brand.name}/${brand.name}-main-124w.jpeg 124w`} sizes="237px" />
                  <img 
                    src={`https://cdn.beebom.com/brands/${brand.name}/${brand.name}-main.png`}
                    alt={`${brand.name} logo`}
                    className="w-full h-full md:group-hover:w-0 md:group-hover:h-0 md:group-hover:opacity-0 object-cover scale-[1.01]"
                    loading="lazy"
                    decoding="async"
                    title={brand.name}
                  />
                </picture>
                <div style={{ background: 'unset' }} className="w-0 h-0 opacity-0 md:group-hover:w-full md:group-hover:h-full md:group-hover:opacity-100 object-cover transition-opacity duration-300">
                  <picture style={{ contentVisibility: 'auto' }}>
                    <source type="image/webp" srcSet={`https://cdn.beebom.com/brands/${brand.name}/${brand.name}-color-237w.webp 237w, https://cdn.beebom.com/brands/${brand.name}/${brand.name}-color-124w.webp 124w`} sizes="237px" />
                    <source type="image/png" srcSet={`https://cdn.beebom.com/brands/${brand.name}/${brand.name}-color-237w.png 237w, https://cdn.beebom.com/brands/${brand.name}/${brand.name}-color-124w.png 124w`} sizes="237px" />
                    <source type="image/jpeg" srcSet={`https://cdn.beebom.com/brands/${brand.name}/${brand.name}-color-237w.jpeg 237w, https://cdn.beebom.com/brands/${brand.name}/${brand.name}-color-124w.jpeg 124w`} sizes="237px" />
                    <img 
                      src={`https://cdn.beebom.com/brands/${brand.name}/${brand.name}-color.png`}
                      alt={`${brand.name} logo`}
                      loading="lazy"
                      decoding="async"
                      title={brand.name}
                    />
                  </picture>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularBrands;
