import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Search } from 'lucide-react';

const Assignments = () => {
  const user = useSelector(state => state.auth.user);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for assignments
  const assignments = [
    { id: 1, title: 'React Components Quiz', course: 'Introduction to React', dueDate: '2023-04-15', status: 'Submitted', grade: 92 },
    { id: 2, title: 'Async Programming', course: 'Advanced JavaScript', dueDate: '2023-04-20', status: 'Pending', grade: null },
    { id: 3, title: 'Responsive Layout Project', course: 'Web Design Fundamentals', dueDate: '2023-04-25', status: 'Graded', grade: 95 },
    { id: 4, title: 'Binary Search Trees', course: 'Data Structures', dueDate: '2023-04-30', status: 'Submitted', grade: null },
    { id: 5, title: 'Linear Regression Model', course: 'Machine Learning Basics', dueDate: '2023-05-05', status: 'Pending', grade: null },
  ];

  const filteredAssignments = assignments.filter(assignment =>
    assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    assignment.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderInstructorView = () => (
    <div>
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search assignments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-primary"
          />
          <div className="absolute left-3 top-2 text-gray-400">
            <Search size={20} />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredAssignments.map((assignment) => (
              <tr key={assignment.id}>
                <td className="px-6 py-4 whitespace-nowrap">{assignment.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{assignment.course}</td>
                <td className="px-6 py-4 whitespace-nowrap">{assignment.dueDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">{assignment.status}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-primary hover:text-primary-dark">
                    {assignment.status === 'Submitted' ? 'Grade' : 'View'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderStudentView = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {assignments.map((assignment) => (
            <tr key={assignment.id}>
              <td className="px-6 py-4 whitespace-nowrap">{assignment.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">{assignment.course}</td>
              <td className="px-6 py-4 whitespace-nowrap">{assignment.dueDate}</td>
              <td className="px-6 py-4 whitespace-nowrap">{assignment.status}</td>
              <td className="px-6 py-4 whitespace-nowrap">{assignment.grade !== null ? assignment.grade : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6">Assignments</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg p-4">
        {user.role === 'instructor' ? renderInstructorView() : renderStudentView()}
      </div>
    </div>
  );
};

export default Assignments;