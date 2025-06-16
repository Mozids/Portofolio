import React, { useState } from 'react';
import { Menu } from 'lucide-react'; // jalankan: npm install lucide-react

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['Home', 'About', 'Project', 'Contact'];

  const handleScroll = (id) => {
    const section = document.getElementById(id)
    if(section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <header className="w-full flex justify-center mt-5 relative">
      <div className="hidden md:flex bg-Secondary rounded-full drop-shadow-lg px-6 h-14 items-center">
        <ul className="flex gap-6 font-semibold text-gray-700 text-sm">
          {navItems.map((item) => (
            <li key={item} className="relative group">
              <button
                onClick={() => handleScroll(item.toLowerCase())}
                className="group-hover:text-black transition duration-300"
              >
                {item}
              </button>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full rounded-full"></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden fixed top-5 left-5 z-50">
        <button
        
            onClick={() => setIsOpen(!isOpen)}
            className="bg-Secondary p-3 rounded-full shadow-md"
          
        >
            <Menu size={20} className="text-Primary" />
          </button>
      

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="mt-3 bg-Secondary rounded-xl shadow-lg p-4 flex flex-col gap-3 absolute left-0 top-full w-40 z-40">
            {navItems.map((item) => (
              <a
                key={item}
                onClick={() => handleScroll(item.toLowerCase())}
                className="text-gray-800 hover:text-Primary font-medium transition"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
