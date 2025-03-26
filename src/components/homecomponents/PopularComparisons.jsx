import React from "react";

const PopularComparisons = () => {
  const comparisons = [
    { 
      model1: "iPhone 15 Pro", 
      model2: "Samsung S23 Ultra",
      img1: "https://cdn.beebom.com/mobile/2023/09/iPhone-15-Pro-pdp-image.png",
      img2: "https://cdn.beebom.com/mobile/samsung-galaxy-s23-ultra-front-and-back-1.png"
    },
    { 
      model1: "OnePlus 11R", 
      model2: "Google Pixel 7",
      img1: "https://cdn.beebom.com/mobile/oneplus-11r-5g-front-and-back-1.png",
      img2: "https://cdn.beebom.com/mobile/google-pixel-7-front-and-back.png"
    },
    { 
      model1: "Redmi Note 12", 
      model2: "Realme 10 Pro",
      img1: "https://cdn.beebom.com/mobile/redmi-note-12-front-and-back.png",
      img2: "https://cdn.beebom.com/mobile/realme-10-pro-front-and-back.png"
    },
  ];

  return (
    <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-10">
      <div className="shadow-mobile-gray-card-shadow bg-[#F8F8F8] px-[16px] py-[16px] md:px-[32px] md:py-[32px] rounded-[16px] md:rounded-[36px]">
        <h2 className="text-[#3c3c3c] text-[20px] md:text-[28px] font-semibold font-figtree break-normal">
          Popular <span className="gradient-text-primary">Comparisons</span>
        </h2>
        <div className="h-[32px]"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {comparisons.map((comp, index) => (
            <a
              key={index}
              className="bg-white rounded-2xl border border-[#f2f2f2] transition-all hover-gradient-border-primary"
              href={`/compare/${comp.model1.toLowerCase().replace(/ /g, '-')}-vs-${comp.model2.toLowerCase().replace(/ /g, '-')}`}
            >
              <div className="p-4 relative">
                <div className="absolute top-[39px] md:top-[80px] translate-x-[-50%] left-[50%]">
                  <img 
                    src="https://cdn.beebom.com/images/icons/product-compare-icon.svg" 
                    alt="compare icon" 
                    width="50" 
                    height="50"
                  />
                </div>
                <div className="grid grid-cols-2 gap-[14px] w-full">
                  <div>
                    <div className="rounded-lg border border-[#b0d2f3]/30 bg-[#fdfdfd] w-full">
                      <img
                        src={comp.img1}
                        alt={comp.model1}
                        className="size-[90px] md:size-[178px] object-cover"
                      />
                    </div>
                    <div className="h-[8px] md:h-[16px]"></div>
                    <p className="text-[#46474a] text-[14px] md:text-[20px] font-medium text-center">
                      {comp.model1}
                    </p>
                  </div>
                  <div>
                    <div className="rounded-lg border border-[#b0d2f3]/30 bg-[#fdfdfd] w-full">
                      <img
                        src={comp.img2}
                        alt={comp.model2}
                        className="size-[90px] md:size-[178px] object-cover"
                      />
                    </div>
                    <div className="h-[8px] md:h-[16px]"></div>
                    <p className="text-[#46474a] text-[14px] md:text-[20px] font-medium text-center">
                      {comp.model2}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularComparisons;
