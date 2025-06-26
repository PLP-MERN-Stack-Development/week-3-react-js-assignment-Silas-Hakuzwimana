import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TaskManager from './pages/TaskManager';
import APIList from './components/data';
import ThemeProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
          <Routes>
            <Route
              path="/"
              element={
                <div className="max-w-4xl mx-auto p-6 text-center">
                  <h1 className="text-4xl font-bold mb-4">Welcome to Task Manager</h1>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    A modern React app demonstrating component architecture, hooks, theme switching, and API integration.
                  </p>
                  <div className="space-x-4">
                    <a
                      href="/tasks"
                      className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
                    >
                      Manage Tasks
                    </a>
                    <a
                      href="/api"
                      className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition"
                    >
                      View API Posts
                    </a>
                  </div>
                </div>
              }
            />
            <Route path="/tasks" element={<TaskManager />} />
            <Route path="/api" element={<APIList />} />
            <Route
              path="*"
              element={
                <div className="max-w-3xl mx-auto p-6 text-center">
                  <h2 className="text-2xl font-bold text-red-600">404 - Page Not Found</h2>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    The page you’re looking for doesn’t exist.
                  </p>
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
