import React from 'react';

const RightPanel = () => {
  // For now, a simple placeholder. Later this will be collapsible and contextual.
  return (
    <aside className="bg-white w-80 h-full fixed top-[60px] right-0 p-5 border-l border-gray-300 overflow-y-auto font-body"> {/* Changed font to font-body */}
      <h3 className="font-sans text-lg font-semibold text-gray-800 mb-3">Contextual Panel</h3> {/* Changed font to font-sans */}
      <p className="text-sm text-gray-600">
        Contextual chat, comments, or task details will appear here.
      </p>
      {/* Add more placeholder content or structure as needed */}
    </aside>
  );
};

export default RightPanel;
