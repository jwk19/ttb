import React, { useState } from 'react';
import { ClipboardList, CheckCircle, XCircle, MessageCircle } from 'lucide-react';

const InstructorAssignments = () => {
  const [assignments, setAssignments] = useState([
    { id: 1, title: 'React Components Quiz', course: 'Introduction to React', student: 'Alice Johnson', status: 'submitted', githubLink: 'https://github.com/alice/react-quiz' },
    { id: 2, title: 'JavaScript Algorithms', course: 'Advanced JavaScript', student: 'Bob Smith', status: 'graded', grade: 85, feedback: 'Good work, but could improve time complexity.' },
    { id: 3, title: 'Responsive Layout Project', course: 'Web Design Fundamentals', student: 'Charlie Brown', status: 'submitted', githubLink: 'https://github.com/charlie/responsive-layout' },
    { id: 4, title: 'State Management Exercise', course: 'Introduction to React', student: 'Diana Ross', status: 'submitted', githubLink: 'https://github.com/diana/state-management' },
    { id: 5, title: 'API Integration Project', course: 'Advanced JavaScript', student: 'Ethan Hunt', status: 'graded', grade: 92, feedback: 'Excellent work! Very clean code.' },
  ]);

  const [selectedCourse, setSelectedCourse] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [currentAssignment, setCurrentAssignment] = useState(null);
  const [grade, setGrade] = useState('');
  const [feedback, setFeedback] = useState('');

  const courses = ['All', ...new Set(assignments.map(a => a.course))];

  const filteredAssignments = selectedCourse === 'All' 
    ? assignments 
    : assignments.filter(a => a.course === selectedCourse);

  const handleGrade = (assignment) => {
    setCurrentAssignment(assignment);
    setGrade('');
    setFeedback('');
    setModalOpen(true);
  };

  const submitGrade = () => {
    if (grade !== '' && !isNaN(grade) && grade >= 0 && grade <= 100) {
      setAssignments(assignments.map(a => 
        a.id === currentAssignment.id ? { ...a, status: 'graded', grade: parseInt(grade), feedback } : a
      ));
      setModalOpen(false);
    } else {
      alert('Please enter a valid grade between 0 and 100.');
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6">Instructor Assignments</h1>
      
      <div className="mb-4">
        <label htmlFor="course-filter" className="mr-2">Filter by Course:</label>
        <select
          id="course-filter"
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          className="border rounded-md p-2"
        >
          {courses.map(course => (
            <option key={course} value={course}>{course}</option>
          ))}
        </select>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <ul className="divide-y divide-gray-200">
          {filteredAssignments.map((assignment) => (
            <li key={assignment.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{assignment.title}</h3>
                  <p className="text-sm text-gray-500">{assignment.course} - {assignment.student}</p>
                </div>
                <div className="flex items-center">
                  {assignment.status === 'submitted' && (
                    <>
                      <a href={assignment.githubLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark mr-4">
                        View Submission
                      </a>
                      <button
                        onClick={() => handleGrade(assignment)}
                        className="px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                      >
                        Grade
                      </button>
                    </>
                  )}
                  {assignment.status === 'graded' && (
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-sm font-medium text-gray-900 mr-4">Grade: {assignment.grade}%</span>
                      <MessageCircle className="w-5 h-5 text-blue-500 cursor-pointer" title={assignment.feedback} />
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {modalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                  Grade Assignment: {currentAssignment?.title}
                </h3>
                <div className="mt-2">
                  <input
                    type="number"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    placeholder="Enter grade (0-100)"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                  <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Enter feedback"
                    rows="3"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  ></textarea>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={submitGrade}
                >
                  Submit Grade
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstructorAssignments;