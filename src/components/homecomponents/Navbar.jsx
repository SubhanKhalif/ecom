import React, { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import { FiMenu } from "react-icons/fi";
import { FaSearch, FaChevronDown, FaChevronRight } from "react-icons/fa";

const Navbar = () => {
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isFeatureOpen, setIsFeatureOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="dropdown-shadow-mini fixed w-full z-50 bg-white max-h-fit transition-all duration-900 h-[109px] min-[900px]:h-[calc(72px+40px)]">
        <div data-aldebaran="bmF2YmFyLWRlc2t0b3At">
          {/* Desktop Navigation */}
          <div className="hidden min-[900px]:block max-w-[1156px] mx-auto h-full px-[16px] min-w-fit">
            {/* First Line - Logo, Search, Profile */}
            <div className="flex gap-[32px] justify-between items-center h-[72px]">
              {/* Logo */}
              gadgets
              <a 
                title="Beebom Logo" 
                className="flex items-center h-full" 
                href="/"
              >
              </a>

              {/* Search Bar */}
              <div id="navbar-search" className="relative flex-1 w-full z-40">
                <label htmlFor="navbar-search-input" className="hover:cursor-text py-[12px]">
                  <span className="justify-start items-center gap-2 flex bg-[#F5F5F5] px-[16px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] border border-[#E5E5E5]">
                    <FaSearch className="text-[#636363]" />
                    <input 
                      id="navbar-search-input"
                      className="placeholder:text-[#636363] text-[#46474A] text-[16px] font-medium font-figtree leading-[21px] py-3 border-none bg-transparent w-full outline-none" 
                      placeholder="Search for products..." 
                      autoComplete="off" 
                    />
                  </span>
                </label>
              </div>

              {/* Beebom Link */}
              <a 
                href="https://www.yourwebsite.com" 
                className="group transition-all duration-300 ease-in-out mix-blend-luminosity hover:mix-blend-normal"
              >
                <div className="border rounded-[8px] gradient-border-primary">
                  <div className="px-[16px] py-[10px] flex justify-center items-center gap-[8px]">
                    <div className="transition-all duration-300 ease-in-out group-hover:hidden">
                      <picture style={{ contentVisibility: 'auto' }}>
                        <img 
                          src="https://cdn.beebom.com/images/icons/beebom-b-icon-gray.png" 
                          alt="website-primary-logo" 
                          width="24" 
                          height="24" 
                          loading="eager" 
                          decoding="async" 
                        />
                      </picture>
                    </div>
                    <p className="opacity-50 transition-all duration-300 ease-in-out text-[14px] font-semibold text-[#151515] group-hover:hidden">
                      Your Site
                    </p>
                    <img 
                      src="https://cdn.beebom.com/images/icons/beebom-arrow.png" 
                      alt="website-right-arrow-logo" 
                      width="20" 
                      height="20" 
                      className="" 
                      loading="lazy" 
                      decoding="async" 
                    />
                  </div>
                </div>
              </a>
            </div>

            {/* Second Line - Navigation Links */}
            <div className="h-[40px] w-full py-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-[#E6E8ED50] flex justify-between items-center">
              <div className="flex items-center justify-center gap-[48px] w-full h-full">
                {/* Explore Dropdown */}
                <div 
                  className="relative h-full flex items-center justify-center group"
                  onMouseEnter={() => setIsExploreOpen(true)}
                  onMouseLeave={() => setIsExploreOpen(false)}
                >
                  <button className="text-[#494949] text-[16px] font-semibold font-figtree leading-[24px] hover:text-[#07184f] flex gap-[8px] items-center justify-center group-hover:text-[#07184f]">
                    Explore
                    <FaChevronDown className="text-[#07184f] transition-transform duration-200" />
                  </button>

                  {isExploreOpen && (
                    <div className="navbar-open-section absolute top-[calc(100%+8px)] left-[-21.5px] bg-white transition-all rounded-bl-[4px] overflow-hidden max-h-[304px] shadow-navbar-submenu w-[230px]">
                      <div className="py-[20px] overflow-x-visible">
                        {/* Best Phones by Price */}
                        <button 
                          className="py-[10px] px-[16px] justify-between items-center gap-[8px] w-full text-[16px] font-medium text-left hover:text-[#07184f] flex bg-[#F7F8FA] text-[#07184f]"
                          onMouseEnter={() => setIsPriceOpen(true)}
                          onMouseLeave={() => setIsPriceOpen(false)}
                        >
                          Best Phones by Price
                          <FaChevronRight />
                        </button>

                        {/* Price Submenu */}
                        {isPriceOpen && (
                          <div className="absolute top-0 left-full bg-[#f7f8fa] px-[16px] rounded-br-[4px] shadow-navbar-submenu-no-left w-[230px]">
                            <div className="flex flex-row gap-[4px]">
                              <div className="flex flex-col py-[20px]">
                                {['10,000', '15,000', '20,000', '25,000', '30,000', '40,000'].map((price) => (
                                  <a 
                                    key={price} 
                                    href={`/best-phones-under-${price}`} 
                                    className="block list-disc py-[8px] px-[12px] text-[#07184f] capitalize font-medium text-[14px] hover:text-[#0065c5] text-nowrap"
                                  >
                                    <li className="list-disc">Best Phones Under {price}</li>
                                  </a>
                                ))}
                              </div>
                              <div className="h-[220px] w-[1px] bg-[#E5E5E5] self-center"></div>
                              <div className="flex flex-col py-[20px]">
                                {['50,000', '60,000'].map((price) => (
                                  <a 
                                    key={price} 
                                    href={`/best-phones-under-${price}`} 
                                    className="block list-disc py-[8px] px-[12px] text-[#07184f] capitalize font-medium text-[14px] hover:text-[#0065c5] text-nowrap"
                                  >
                                    <li className="list-disc">Best Phones Under {price}</li>
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Browse by Feature */}
                        <button 
                          className="py-[10px] px-[16px] justify-between items-center gap-[8px] w-full text-[#636363] text-[16px] font-medium text-left hover:text-[#07184f] flex"
                          onMouseEnter={() => setIsFeatureOpen(true)}
                          onMouseLeave={() => setIsFeatureOpen(false)}
                        >
                          Browse by Feature
                          <FaChevronRight />
                        </button>

                        {/* Feature Submenu */}
                        {isFeatureOpen && (
                          <div className="absolute top-0 left-full bg-[#f7f8fa] px-[16px] rounded-br-[4px] shadow-navbar-submenu-no-left w-[230px]">
                            <div className="flex flex-col py-[20px]">
                              {[
                                { name: '5G mobiles', link: '/mobile-list/5g-phones' },
                                { name: 'Best Camera Phones', link: '/best-camera-phones' },
                                { name: 'Best Gaming Phones', link: '/best-gaming-phones' },
                                { name: 'Flip Phones', link: '/mobile-list/flip-phones' },
                                { name: '4G Phones', link: '/mobile-list/4g-phones' },
                                { name: 'Best Display Phones', link: '/best-display-phones' }
                              ].map((feature) => (
                                <a 
                                  key={feature.name} 
                                  href={feature.link} 
                                  className="block list-disc py-[8px] px-[12px] text-[#07184f] capitalize font-medium text-[14px] hover:text-[#0065c5] text-nowrap"
                                >
                                  <li className="list-disc">{feature.name}</li>
                                </a>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Other Categories */}
                        <a 
                          href="/popular-mobile-phones" 
                          className="py-[10px] px-[16px] text-[#636363] text-[16px] font-medium text-left hover:text-[#07184f] flex justify-between items-center gap-[8px] w-full"
                        >
                          Popular Mobiles
                        </a>
                        <a 
                          href="/latest-mobile-phones" 
                          className="py-[10px] px-[16px] text-[#636363] text-[16px] font-medium text-left hover:text-[#07184f] flex justify-between items-center gap-[8px] w-full"
                        >
                          Latest Phones
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Other Navigation Links */}
                <a 
                  href="/compare" 
                  className="text-[#494949] text-[16px] font-semibold font-figtree leading-[24px] hover:text-[#07184f]"
                >
                  Compare Mobiles
                </a>
                <a 
                  href="/mobile-list" 
                  className="text-[#494949] text-[16px] font-semibold font-figtree leading-[24px] hover:text-[#07184f]"
                >
                  Phone Finder
                </a>
                <a 
                  href="/mobile-brands" 
                  className="text-[#494949] text-[16px] font-semibold font-figtree leading-[24px] hover:text-[#07184f]"
                >
                  All Brands
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div data-aldebaran="bmF2YmFyLW1vYmlsZS0=">
            <div className="min-[900px]:hidden transition-all duration-900 max-h-fit h-[80vh]">
              <div className="min-[900px]:hidden flex justify-between flex-col gap-[8px] bg-white py-[8px] shadow-dropdown-shadow-mini">
                <div>
                  <div className="flex h-[40px] px-[16px] justify-between items-center group">
                    <div className="flex justify-between items-center gap-[8px] w-full overflow-hidden transition-all duration-300 ease-in-out">
                      {/* Mobile Logo */}
                      <a 
                        title="Beebom Logo" 
                        className="flex items-center h-full peer" 
                        href="/"
                      >
                        <picture style={{ contentVisibility: 'auto' }}>
                          <img 
                            src="https://cdn.beebom.com/images/logos/NavbarLogo.png" 
                            alt="gadget beebom logo" 
                            width="256" 
                            height="46" 
                            className="w-[128px] h-[23px]" 
                            loading="eager" 
                            decoding="async" 
                          />
                        </picture>
                      </a>

                      {/* Mobile Menu Button */}
                      <div className="flex items-center gap-[8px]">
                        <button 
                          className="p-[8px] pr-0" 
                          aria-label="menu-icon"
                          onClick={() => setIsMobileNavOpen(true)}
                        >
                          <picture style={{ contentVisibility: 'auto' }}>
                            <img 
                              src="https://cdn.beebom.com/images/icons/navbar-menu-icon.svg" 
                              alt="menu-icon" 
                              width="20" 
                              height="20" 
                              loading="lazy" 
                              decoding="async" 
                            />
                          </picture>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Search Bar */}
                <div className="flex-1 px-[16px] h-[45px]">
                  <div id="mobile-search" className="relative flex-1 w-full z-40">
                    <label htmlFor="mobile-search-input" className="hover:cursor-text py-[12px]">
                      <span className="justify-start items-center gap-2 flex bg-[#F5F5F5] px-[16px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] border border-[#E5E5E5]">
                        <FaSearch className="text-[#636363]" />
                        <input 
                          id="mobile-search-input"
                          className="placeholder:text-[#636363] text-[#46474A] text-[16px] font-medium font-figtree leading-[21px] py-3 border-none bg-transparent w-full outline-none" 
                          placeholder="Search for products..." 
                          autoComplete="off" 
                        />
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <MobileNavbar isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />

      {/* Spacer */}
      <div className="h-[112px] min-[900px]:h-[calc(72px+40px)]"></div>
    </nav>
  );
};

export default Navbar;
