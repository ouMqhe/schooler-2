// Navi.jsx
import React, { useState } from "react";

const Navi = ({ navItems = [] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Default items if none provided
  const defaultItems = [
    { name: "Work", url: "#work" },
    { name: "About", url: "#about" },
    { name: "Playground", url: "#playground" },
    { name: "Resource", url: "#resource" },
  ];

  const items = navItems.length > 0 ? navItems : defaultItems;

  return (
    <nav className="bg-gray-900 border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side with hexagon logo */}
          <div className="flex-shrink-0 flex items-center">
            <button className="hexagon-button bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 flex items-center justify-center focus:outline-none">
              <span className="text-white font-bold text-lg">H</span>
            </button>
            <span className="ml-3 text-white font-semibold text-lg hidden md:block">
              HiYact
            </span>
          </div>

          {/* Center navigation items (desktop) */}
          <div className="hidden md:flex md:items-center md:justify-center flex-1">
            <div className="flex space-x-8">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right side with email */}
          <div className="flex items-center">
            <a
              href="mailto:hiyact@gmail.com"
              className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 hidden md:block"
            >
              hiyact@gmail.com
            </a>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-400 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href="mailto:hiyact@gmail.com"
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
            >
              hiyact@gmail.com
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navi;