import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('calendar');

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-8">Doctor Panel</h2>
        <nav className="space-y-4">
          <button className="block text-left w-full px-4 py-2 hover:bg-gray-100 rounded">Dashboard</button>
          <button className="block text-left w-full px-4 py-2 hover:bg-gray-100 rounded">Appointments</button>
          <button className="block text-left w-full px-4 py-2 hover:bg-gray-100 rounded">Messages</button>
          <button className="block text-left w-full px-4 py-2 hover:bg-gray-100 rounded">Patients</button>
          <button
            onClick={handleLogout}
            className="mt-10 w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Welcome, Doctor</h1>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-300">
  <img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr7zsbdjfLwEH7iVXkLiv-v7yxbhKuc3q7Nw&s"
  alt="Profile"
  style={{ width: '40px', height: '40px', borderRadius: '9999px', objectFit: 'cover', border: '1px solid gray' }}
/>
</div>
            <div className="text-sm text-gray-600 hidden md:block">
              {currentUser?.email}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6 flex gap-4 border-b">
          <button
            className={`pb-2 px-4 border-b-2 ${activeTab === 'calendar' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-600'}`}
            onClick={() => setActiveTab('calendar')}
          >
            Calendar
          </button>
          <button
            className={`pb-2 px-4 border-b-2 ${activeTab === 'notes' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-600'}`}
            onClick={() => setActiveTab('notes')}
          >
            Consultation Notes
          </button>
        </div>

        {/* Tab Panels */}
        {activeTab === 'calendar' && (
          <div className="bg-white p-6 rounded-xl shadow mb-6">
            <h2 className="text-xl font-semibold mb-2">Consultation Calendar</h2>
            <p className="text-gray-600">Calendar integration coming soon.</p>
          </div>
        )}

        {activeTab === 'notes' && (
          <div className="bg-white p-6 rounded-xl shadow mb-6">
            <h2 className="text-xl font-semibold mb-2">Consultation Notes</h2>
            <textarea
              rows="6"
              placeholder="Enter notes here..."
              className="w-full border rounded px-4 py-2 mt-2 focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-lg font-semibold mb-1">Today's Appointments</h2>
            <p className="text-2xl font-bold text-blue-600">3</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-lg font-semibold mb-1">Total Patients</h2>
            <p className="text-2xl font-bold text-green-600">47</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-lg font-semibold mb-1">Unread Messages</h2>
            <p className="text-2xl font-bold text-red-500">5</p>
          </div>
        </div>

        {/* Appointment Preview */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
          <ul className="divide-y divide-gray-200">
            <li className="py-3 flex justify-between">
              <span>John Doe – 10:30 AM</span>
              <button className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">View</button>
            </li>
            <li className="py-3 flex justify-between">
              <span>Mary Smith – 12:00 PM</span>
              <button className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">View</button>
            </li>
            <li className="py-3 flex justify-between">
              <span>David Lee – 2:45 PM</span>
              <button className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">View</button>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

