import React from 'react';
import { Plus } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function Header() {
  const location = useLocation();
  
  return (
    <header className="bg-pink-310 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 rounded-xl">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="AluraFlix Logo" className="h-12" />
          </Link>
          
          <nav className="flex space-x-6">
            <Link
              to="/"
              className={`px-6 py-3 text-lg font-semibold rounded-md transition-colors ${
                location.pathname === '/'
                  ? 'bg-pink-600 text-white'
                  : 'text-pink-700 hover:bg-pink-400'
              }`}
            >
              HOME
            </Link>
            <Link
              to="/new-video"
              className={`px-6 py-3 rounded-md transition-colors flex items-center space-x-2 ${
                location.pathname === '/new-video'
                  ? 'bg-pink-600 text-white'
                  : 'text-pink-700 hover:bg-pink-400'
              }`}
            >
              <Plus className="h-5 w-5" />
              <span className="text-lg font-semibold">NUEVO VIDEO</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
