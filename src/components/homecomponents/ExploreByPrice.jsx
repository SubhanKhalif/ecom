export default function ExploreByPrice() {
  const priceCategories = [
    { name: "Under ₹10,000", href: "/best-phones-under-10000" },
    { name: "Under ₹15,000", href: "/best-phones-under-15000" },
    { name: "Under ₹20,000", href: "/best-phones-under-20000" },
    { name: "Under ₹30,000", href: "/best-phones-under-30000" },
    { name: "Under ₹50,000", href: "/best-phones-under-50000" },
    { name: "Above ₹50,000", href: "/best-phones-above-50000" },
  ];

  return (
    <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-10">
      <div className="rounded-[16px] md:rounded-[32px] bg-[#EDF1FF] px-[16px] py-[24px] md:px-[40px] md:py-[40px]">
        <h3 className="text-[#0b184c] text-[18px] md:text-[24px] font-semibold font-figtree">
          Explore Phones by Price
        </h3>
        <div className="h-[24px] md:h-[40px]"></div>
        <div className="hide-scroll overflow-auto flex flex-row gap-[12px] md:gap-[24px] flex-wrap">
          {priceCategories.map((category, index) => (
            <a
              key={index}
              href={category.href}
              className="block text-nowrap px-[12px] py-[6px] md:px-[24px] md:py-[6px] rounded-[8px] bg-white hover:bg-[#0065c5] text-[#0065c5] hover:text-white border border-[#0065c5] transition-all duration-300 text-[14px] md:text-[20px] font-semibold"
            >
              {category.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
