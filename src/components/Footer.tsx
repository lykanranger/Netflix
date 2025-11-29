import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-neutral-400 py-5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="mt-8 text-xs text-center">Netflix by Karun ❤️</p>
        <p className="mt-2 text-xs text-center">
          &copy; 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;