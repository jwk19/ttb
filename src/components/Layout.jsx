import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/actions/authActions';
import { BookOpen, LayoutDashboard, BookOpenCheck, ClipboardList, GraduationCap, Users, Menu, X } from 'lucide-react';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Courses', path: '/courses', icon: BookOpenCheck },
    { name: 'Assignments', path: '/assignments', icon: ClipboardList },
    { name: 'Grades', path: '/grades', icon: GraduationCap },
  ];

  if (user?.role === 'instructor') {
    navItems.push({ name: 'Students', path: '/students', icon: Users });
  }

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-primary mr-2" />
            <span className="text-xl font-bold text-gray-900">SACDMJA</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-700 mr-4 hidden sm:inline">Welcome, {user?.name}</span>
            <button
              onClick={handleLogout}
              className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
            <button
              className="ml-4 sm:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar for larger screens */}
        <nav className="hidden sm:block w-64 bg-white shadow-md">
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          </div>
          <ul className="mt-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`${
                    isActive(item.path)
                      ? 'bg-primary text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  } flex items-center px-6 py-3 text-sm font-medium`}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 sm:hidden">
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setIsMobileMenuOpen(false)}></div>
            <nav className="relative flex flex-col bg-white w-64 h-full">
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
              </div>
              <ul className="mt-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className={`${
                        isActive(item.path)
                          ? 'bg-primary text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      } flex items-center px-6 py-3 text-sm font-medium`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon className="h-5 w-5 mr-3" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>

      <footer className="bg-white shadow-sm mt-auto">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
          Created with ❤️ by Seth, Abdalla, Christopher, Denis, Mitchelle, James & Arnold
        </div>
      </footer>
    </div>
  );
};

export default Layout;