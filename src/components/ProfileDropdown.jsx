import React from 'react';
import { Link } from 'react-router-dom';
import { User, Settings, LogOut } from 'lucide-react';

const ProfileDropdown = ({ onLogout }) => {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
      <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
        <User className="mr-2 h-4 w-4" />
        Profile
      </Link>
      <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
        <Settings className="mr-2 h-4 w-4" />
        Settings
      </Link>
      <button onClick={onLogout} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
        <LogOut className="mr-2 h-4 w-4" />
        Logout
      </button>
    </div>
  );
};

export default ProfileDropdown;