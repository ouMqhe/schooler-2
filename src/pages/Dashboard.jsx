// pages/Dashboard.jsx
import React from 'react';
import { useAuth } from '../components/AuthContext';
import { Link } from 'react-router-dom';
import StudentDashboard from '../components/StudentDashboard';
const Dashboard = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };


  const user2 = {
    id: "123e4567-e89b-12d3-a456-426614174080",
    email: "jane@example.com",
    name: "Mqhelisi Sibindi",
    avatar: "https://example.com/avatars/ou-mqhe.jpg",
    role: "admin",
    isEmailVerified: true,
    createdAt: "2023-03-10T08:15:002",
    XP: 1250,
    lastLogin: "2023-10-25T09:45:002"
  };


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {user?.name}</span>
              <Link
                to="/profile"
                className="text-blue-600 hover:text-blue-500"
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-6">
            {/* <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Dashboard Content
            </h2>
            <p className="text-gray-600">
              This is a protected route that only authenticated users can access.
            </p> */}

                  <StudentDashboard user={user2}/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;