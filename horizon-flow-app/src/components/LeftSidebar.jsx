import React from 'react';
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
  const menuItems = [
    { name: 'Dashboard', path: '/' },
    { name: 'Boards / Teams', path: '/boards' },
    { name: 'Inbox', path: '/inbox' },
    { name: 'Calendar', path: '/calendar' },
    { name: 'Files', path: '/files' },
    { name: 'Settings', path: '/settings' },
    // 'Download App' might not be a route, handle separately if needed
  ];

  return (
    <aside className="bg-gray-100 w-60 h-full fixed top-[60px] left-0 p-5 border-r border-gray-300 overflow-y-auto font-sans">
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className="block p-2 hover:bg-gray-200 rounded text-sm text-gray-700"
            >
              {item.name}
            </Link>
          </li>
        ))}
        {/* Example for a non-route item */}
        <li className="p-2 hover:bg-gray-200 rounded cursor-pointer text-sm text-gray-700">
          Download App
        </li>
      </ul>
    </aside>
  );
};

export default LeftSidebar;
