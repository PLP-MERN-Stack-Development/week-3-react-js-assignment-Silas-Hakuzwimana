import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo / Brand */}
                <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white">
                    TaskManager
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-6">
                    <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition">
                        Home
                    </Link>
                    <Link to="/tasks" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition">
                        Tasks
                    </Link>
                    <Link to="/api" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition">
                        API Data
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"
                        viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2">
                    <Link to="/" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500">
                        Home
                    </Link>
                    <Link to="/tasks" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500">
                        Tasks
                    </Link>
                    <Link to="/api" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500">
                        API Data
                    </Link>
                </div>
            )}
        </nav>
    );
}
