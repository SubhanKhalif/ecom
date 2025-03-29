import React, { useState } from 'react';
import { FaSearch, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import ExploreDropdown from './ExploreDropdown';

export default function DesktopNavbar() {
  return (
    <div className="hidden min-[900px]:block max-w-[1156px] mx-auto h-full px-[16px] min-w-fit">
      {/* First Line - Logo, Search, Profile */}
      <div className="flex gap-[32px] justify-between items-center h-[72px]">
        <a title="Gadgets Logo" className="flex items-center h-full" href="/">
          <picture style={{ contentVisibility: 'auto' }}>
            <img 
              src="https://cdn.beebom.com/images/logos/NavbarLogo.png" 
              alt="gadgets logo" 
              width="256" 
              height="46" 
              className="w-[128px] h-[23px]" 
              loading="eager" 
              decoding="async" 
            />
          </picture>
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

        <a href="https://www.yourwebsite.com" className="group transition-all duration-300 ease-in-out mix-blend-luminosity hover:mix-blend-normal">
          <div className="border rounded-[8px] gradient-border-primary">
            <div className="px-[16px] py-[10px] flex justify-center items-center gap-[8px]">
              <p className="opacity-50 transition-all duration-300 ease-in-out text-[14px] font-semibold text-[#151515] group-hover:hidden">
                Your Site
              </p>
              <img src="https://cdn.beebom.com/images/icons/beebom-arrow.png" alt="website-right-arrow-logo" width="20" height="20" />
            </div>
          </div>
        </a>
      </div>

      {/* Navigation Links */}
      <div className="h-[40px] w-full py-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-[#E6E8ED50] flex justify-between items-center">
        <div className="flex items-center justify-center gap-[48px] w-full h-full">
          <ExploreDropdown />
          <a href="/compare" className="text-[#494949] text-[16px] font-semibold font-figtree leading-[24px] hover:text-[#07184f]">
            Compare Mobiles
          </a>
          <a href="/mobile-list" className="text-[#494949] text-[16px] font-semibold font-figtree leading-[24px] hover:text-[#07184f]">
            Phone Finder
          </a>
          <a href="/mobile-brands" className="text-[#494949] text-[16px] font-semibold font-figtree leading-[24px] hover:text-[#07184f]">
            All Brands
          </a>
        </div>
      </div>
    </div>
  );
}
