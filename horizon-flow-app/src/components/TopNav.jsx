import React from 'react';

const TopNav = () => {
  return (
    <nav className="bg-deep-horizon-blue text-white p-4 flex items-center shadow-md fixed top-0 left-0 right-0 h-[60px] z-50">
      <div className="font-sans font-bold text-xl mr-auto"> {/* Changed from logo to font-sans */}
        Horizon Flow
      </div>
      <div className="mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1.5 rounded bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-soft-coral"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-soft-coral text-white rounded-full w-8 h-8 flex items-center justify-center text-lg hover:bg-opacity-90">
          +
        </button>
        <div className="cursor-pointer hover:text-gray-300">
          N {/* Placeholder for Notifications Icon */}
        </div>
        <div className="cursor-pointer hover:text-gray-300">
          P {/* Placeholder for Profile Icon */}
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
