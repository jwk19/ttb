import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Users } from 'lucide-react';

const EnrolledCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Introduction to React",
      description: "Learn the basics of React and build your first application.",
      instructor: "Jane Doe",
      duration: "6 weeks",
      progress: 60,
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      description: "Deep dive into advanced JavaScript concepts and patterns.",
      instructor: "John Smith",
      duration: "8 weeks",
      progress: 30,
    },
    {
      id: 3,
      title: "Web Design Fundamentals",
      description: "Master the principles of effective web design and user experience.",
      instructor: "Alice Johnson",
      duration: "4 weeks",
      progress: 80,
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Enrolled Courses</h1>
      <div className="space-y-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">{course.title}</h2>
                <Link to={`/student/courses/${course.id}`} className="text-primary hover:underline">View Course</Link>
              </div>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <BookOpen className="w-4 h-4 mr-2" />
                <span className="mr-4">{course.instructor}</span>
                <Clock className="w-4 h-4 mr-2" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center">
                <div className="flex-1 bg-gray-200 rounded-full h-2.5 mr-2">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
                </div>
                <span className="text-sm font-medium text-gray-700">{course.progress}% Complete</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrolledCourses;