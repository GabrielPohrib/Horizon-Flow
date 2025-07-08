import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import TopNav from './components/TopNav';
import LeftSidebar from './components/LeftSidebar';
import MainView from './components/MainView';
import RightPanel from './components/RightPanel';

// Placeholder components for routes
const Dashboard = () => <div className="p-4"><h2 className="text-2xl font-sans">Dashboard</h2><p className="font-body">Welcome to your dashboard!</p></div>;
const Boards = () => <div className="p-4"><h2 className="text-2xl font-sans">Boards / Teams</h2><p className="font-body">Your boards and teams will be listed here.</p></div>;
const Inbox = () => <div className="p-4"><h2 className="text-2xl font-sans">Inbox</h2><p className="font-body">Your messages and notifications.</p></div>;
const CalendarView = () => <div className="p-4"><h2 className="text-2xl font-sans">Calendar</h2><p className="font-body">Your events and tasks on a calendar.</p></div>;
const FilesView = () => <div className="p-4"><h2 className="text-2xl font-sans">Files</h2><p className="font-body">Your file library.</p></div>;
const SettingsView = () => <div className="p-4"><h2 className="text-2xl font-sans">Settings</h2><p className="font-body">Application and user settings.</p></div>;

function App() {
  return (
    <div className="h-screen flex flex-col bg-mist-gray">
      <TopNav />
      <div className="flex flex-1 overflow-hidden">
        <LeftSidebar /> {/* Update LeftSidebar to use Link components */}
        <div className="flex-1 flex flex-col pt-[60px] pl-[240px] pr-[320px] overflow-y-auto">
          <MainView>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/boards" element={<Boards />} />
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/calendar" element={<CalendarView />} />
              <Route path="/files" element={<FilesView />} />
              <Route path="/settings" element={<SettingsView />} />
              {/* Add other routes as needed */}
            </Routes>
          </MainView>
        </div>
        <RightPanel />
      </div>
    </div>
  );
}

export default App;
