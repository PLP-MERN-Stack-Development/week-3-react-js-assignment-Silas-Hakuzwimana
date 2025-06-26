import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-center md:text-left mb-2 md:mb-0">
          © {new Date().getFullYear()} Task Manager. All rights reserved.
        </p>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-blue-500 transition">
            Home
          </Link>
          <Link to="/tasks" className="hover:text-blue-500 transition">
            Tasks
          </Link>
          <Link to="/api" className="hover:text-blue-500 transition">
            API Data
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-center">
          <Link to="/" className="block hover:text-blue-500">
            Home
          </Link>
          <Link to="/tasks" className="block hover:text-blue-500">
            Tasks
          </Link>
          <Link to="/api" className="block hover:text-blue-500">
            API Data
          </Link>
        </div>
      )}
    </footer>
  );
}
