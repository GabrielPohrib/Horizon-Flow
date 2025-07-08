import React from 'react';

const MainView = ({ children }) => {
  return (
    // This component is now a direct child of a flex container that manages padding for sidebars.
    // It should take up available space and provide its own internal padding.
    <main className="flex-1 p-5 bg-mist-gray"> {/* Removed overflow-y-auto, parent handles it */}
      {children ? children : (
        <div>
          <h1 className="text-3xl font-bold text-deep-horizon-blue mb-4 font-sans">
            Welcome to Horizon Flow
          </h1>
          <p className="text-gray-700 font-body">
            This is the main content area. It will be dynamically updated based on your navigation.
          </p>
        </div>
      )}
    </main>
  );
};

export default MainView;
