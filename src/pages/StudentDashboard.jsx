import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Clock, CheckCircle, XCircle } from 'lucide-react';

const StudentDashboard = () => {
  const enrolledCourses = [
    { id: 1, title: 'Introduction to React', progress: 60, nextLesson: 'Components and Props' },
    { id: 2, title: 'Advanced JavaScript', progress: 30, nextLesson: 'Closures and Scope' },
    { id: 3, title: 'Data Structures and Algorithms', progress: 45, nextLesson: 'Binary Search Trees' },
  ];

  const upcomingAssignments = [
    { id: 1, title: 'React Project', dueDate: '2023-04-15', course: 'Introduction to React' },
    { id: 2, title: 'JavaScript Quiz', dueDate: '2023-04-20', course: 'Advanced JavaScript' },
    { id: 3, title: 'Algorithm Implementation', dueDate: '2023-04-25', course: 'Data Structures and Algorithms' },
  ];

  const recentGrades = [
    { id: 1, assignment: 'HTML/CSS Project', grade: 'A', course: 'Web Development Basics' },
    { id: 2, assignment: 'JavaScript Fundamentals Quiz', grade: 'B+', course: 'Advanced JavaScript' },
    { id: 3, assignment: 'Linked List Implementation', grade: 'A-', course: 'Data Structures and Algorithms' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Enrolled Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
              <div className="flex items-center mb-2">
                <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
                </div>
                <span className="text-sm font-medium text-gray-500">{course.progress}%</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">Next lesson: {course.nextLesson}</p>
              <Link to={`/courses/${course.id}`} className="text-primary hover:underline">Continue Learning</Link>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Upcoming Assignments</h2>
        <div className="bg-white overflow-hidden shadow-md rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {upcomingAssignments.map((assignment) => (
                <tr key={assignment.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{assignment.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{assignment.course}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{assignment.dueDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Recent Grades</h2>
        <div className="bg-white overflow-hidden shadow-md rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentGrades.map((grade) => (
                <tr key={grade.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{grade.assignment}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{grade.course}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{grade.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default StudentDashboard;