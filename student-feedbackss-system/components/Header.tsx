
import React from 'react';
import { User } from '../types';
import { BellIcon, LogoutIcon } from './icons';

interface HeaderProps {
  user: User;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Feedback System</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 dark:text-gray-300 hidden sm:block">
              Welcome, <span className="font-medium">{user.name}</span>
            </span>
            <button className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" />
            </button>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-red-100 dark:hover:bg-red-800 hover:text-red-600 dark:hover:text-red-300 focus:outline-none"
            >
              <LogoutIcon className="h-6 w-6" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
