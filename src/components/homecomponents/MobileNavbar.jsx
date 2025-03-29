import { useState } from 'react';
import { FiX, FiChevronDown } from 'react-icons/fi';
import { BiUserCircle } from 'react-icons/bi';

export default function MobileNavbar({ isOpen, onClose }) {
  const [dropdowns, setDropdowns] = useState({
    price: false,
    feature: false,
    brand: false,
  });

  const toggleDropdown = (key) => {
    setDropdowns({ ...dropdowns, [key]: !dropdowns[key] });
  };

  return (
    <div
      className={`fixed top-0 right-0 w-72 h-full bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      {/* Close Button */}
      <div className="p-4 flex justify-end">
        <button onClick={onClose}>
          <FiX size={24} className="text-gray-700" />
        </button>
      </div>

      {/* Menu Items */}
      <ul className="px-4 space-y-4">
        <li className="text-lg font-medium text-gray-900">Popular Mobiles</li>
        <li className="text-lg font-medium text-gray-900">Latest Phones</li>

        {/* Best Phones by Price Dropdown */}
        <li>
          <button
            className="flex justify-between w-full text-lg font-medium text-gray-900"
            onClick={() => toggleDropdown("price")}
          >
            Best Phones by Price <FiChevronDown />
          </button>
          {dropdowns.price && (
            <ul className="mt-2 ml-4 space-y-2 text-gray-700">
              <li className="text-sm">Under ₹10,000</li>
              <li className="text-sm">Under ₹15,000</li>
              <li className="text-sm">Under ₹20,000</li>
            </ul>
          )}
        </li>

        {/* Browse by Feature Dropdown */}
        <li>
          <button
            className="flex justify-between w-full text-lg font-medium text-gray-900"
            onClick={() => toggleDropdown("feature")}
          >
            Browse by Feature <FiChevronDown />
          </button>
          {dropdowns.feature && (
            <ul className="mt-2 ml-4 space-y-2 text-gray-700">
              <li className="text-sm">5G Phones</li>
              <li className="text-sm">Gaming Phones</li>
              <li className="text-sm">Best Camera Phones</li>
            </ul>
          )}
        </li>

        {/* Browse by Brand Dropdown */}
        <li>
          <button
            className="flex justify-between w-full text-lg font-medium text-gray-900"
            onClick={() => toggleDropdown("brand")}
          >
            Browse By Brand <FiChevronDown />
          </button>
          {dropdowns.brand && (
            <ul className="mt-2 ml-4 space-y-2 text-gray-700">
              <li className="text-sm">Samsung</li>
              <li className="text-sm">Apple</li>
              <li className="text-sm">OnePlus</li>
            </ul>
          )}
        </li>

        <li className="text-lg font-medium text-gray-900">Compare Mobiles</li>
        <li className="text-lg font-medium text-gray-900">Phone Finder</li>
      </ul>

      {/* Profile Button */}
      <div className="absolute bottom-6 left-4 right-4 border rounded-lg p-3 flex items-center justify-center space-x-2 text-gray-800 shadow-md">
        <BiUserCircle size={24} />
        <span className="font-medium">Beebom</span>
      </div>
    </div>
  );
}
