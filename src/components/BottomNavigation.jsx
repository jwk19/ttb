import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, BookOpenCheck, ClipboardList, GraduationCap, Users } from 'lucide-react';

const BottomNavigation = ({ userRole }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-primary' : 'text-gray-400';
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
      <div className="flex justify-around items-center h-16">
        <Link to="/" className={`flex flex-col items-center ${isActive('/')}`}>
          <LayoutDashboard className="h-6 w-6" />
          <span className="text-xs mt-1">Dashboard</span>
        </Link>
        {userRole === 'student' ? (
          <>
            <Link to="/enrolled-courses" className={`flex flex-col items-center ${isActive('/enrolled-courses')}`}>
              <BookOpenCheck className="h-6 w-6" />
              <span className="text-xs mt-1">Courses</span>
            </Link>
            <Link to="/assignments" className={`flex flex-col items-center ${isActive('/assignments')}`}>
              <ClipboardList className="h-6 w-6" />
              <span className="text-xs mt-1">Assignments</span>
            </Link>
            <Link to="/grades" className={`flex flex-col items-center ${isActive('/grades')}`}>
              <GraduationCap className="h-6 w-6" />
              <span className="text-xs mt-1">Grades</span>
            </Link>
          </>
        ) : (
          <>
            <Link to="/courses" className={`flex flex-col items-center ${isActive('/courses')}`}>
              <BookOpenCheck className="h-6 w-6" />
              <span className="text-xs mt-1">Courses</span>
            </Link>
            <Link to="/students" className={`flex flex-col items-center ${isActive('/students')}`}>
              <Users className="h-6 w-6" />
              <span className="text-xs mt-1">Students</span>
            </Link>
            <Link to="/instructor-assignments" className={`flex flex-col items-center ${isActive('/instructor-assignments')}`}>
              <ClipboardList className="h-6 w-6" />
              <span className="text-xs mt-1">Assignments</span>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default BottomNavigation;