import React from 'react';
import { Globe, MapPin, ChevronDown } from 'lucide-react';
import netflixLogo from '../assets/netflix-logo.png';

const Footer: React.FC = () => {
  const exploreLinks = ["Help Center", "Account", "Only on Netflix"];
  const legalLinks = ["Cookie Preferences", "Privacy Policy", "Terms of Use"];
  const supportLinks = ["FAQ", "Legal Notices", "Contact Us"];

  return (
    <footer className="bg-black text-[#b3b3b3] py-16 border-t border-[#333]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Flex Container for Logo/Loc vs Links */}
        <div className="flex flex-col md:flex-row justify-between mb-12">
          
          {/* Left Column: Logo, Location, Language */}
          <div className="flex flex-col items-start mb-12 md:mb-0">
            {/* Logo */}
            <img 
              src={netflixLogo} 
              alt="Netflix Logo" 
              className="w-32 h-auto object-contain mb-4" 
            />

            {/* Location Indicator */}
            <div className="flex items-center gap-2 mb-6 text-sm text-white font-medium">
              <MapPin className="w-4 h-4 text-red-600" />
              <span>Netflix India</span>
            </div>

            {/* Modern Dropdown */}
            <div className="relative inline-block">
              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999] pointer-events-none" />
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999] pointer-events-none" />
              
              <select 
                className="appearance-none bg-[#121212] border border-[#5e5e5e] hover:border-white text-white text-sm rounded py-2 pl-10 pr-10 cursor-pointer focus:outline-none focus:ring-1 focus:ring-white transition-colors duration-200"
                defaultValue="en"
              >
                <option value="en">English</option>
                <option value="hi">Hindi</option>
              </select>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-x-12 gap-y-8 text-sm w-full md:w-auto">
            {/* EXPLORE */}
            <div>
              <h3 className="text-[#666] text-[13px] font-medium uppercase tracking-wider mb-4">EXPLORE</h3>
              <ul className="space-y-3">
                {exploreLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-white transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* LEGAL */}
            <div>
              <h3 className="text-[#666] text-[13px] font-medium uppercase tracking-wider mb-4">LEGAL</h3>
              <ul className="space-y-3">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-white transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* SUPPORT */}
            <div>
              <h3 className="text-[#666] text-[13px] font-medium uppercase tracking-wider mb-4">SUPPORT</h3>
              <ul className="space-y-3">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-white transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Centered Credits */}
        <div className="w-full text-center mt-8 pt-8 border-t border-[#333]">
          <p className="text-xs text-[#b3b3b3]">
            Netflix by Karun ❤️
          </p>
          <p className="text-xs text-[#b3b3b3] mt-2">
            &copy; 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
