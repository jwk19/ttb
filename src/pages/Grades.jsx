import React from 'react';
import { useSelector } from 'react-redux';

const Grades = () => {
  const user = useSelector(state => state.auth.user);

  // Mock data for grades
  const grades = [
    { id: 1, student: 'Alice Johnson', course: 'Introduction to React', assignment: 'React Components Quiz', grade: 92 },
    { id: 2, student: 'Bob Smith', course: 'Advanced JavaScript', assignment: 'Async Programming', grade: 88 },
    { id: 3, student: 'Charlie Brown', course: 'Web Design Fundamentals', assignment: 'Responsive Layout Project', grade: 95 },
    { id: 4, student: 'Diana Ross', course: 'Data Structures', assignment: 'Binary Search Trees', grade: 90 },
    { id: 5, student: 'Ethan Hunt', course: 'Machine Learning Basics', assignment: 'Linear Regression Model', grade: 87 },
  ];

  const studentGrades = grades.filter(grade => grade.student === user.name);

  const renderInstructorView = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignment</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {grades.map((grade) => (
            <tr key={grade.id}>
              <td className="px-6 py-4 whitespace-nowrap">{grade.student}</td>
              <td className="px-6 py-4 whitespace-nowrap">{grade.course}</td>
              <td className="px-6 py-4 whitespace-nowrap">{grade.assignment}</td>
              <td className="px-6 py-4 whitespace-nowrap">{grade.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderStudentView = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignment</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {studentGrades.map((grade) => (
            <tr key={grade.id}>
              <td className="px-6 py-4 whitespace-nowrap">{grade.course}</td>
              <td className="px-6 py-4 whitespace-nowrap">{grade.assignment}</td>
              <td className="px-6 py-4 whitespace-nowrap">{grade.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6">Grades</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg p-4">
        {user.role === 'instructor' ? renderInstructorView() : renderStudentView()}
      </div>
    </div>
  );
};

export default Grades;