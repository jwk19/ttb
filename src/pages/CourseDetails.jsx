import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Book, Clock, Users, CheckSquare, X } from 'lucide-react';

const CourseDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [submissionLink, setSubmissionLink] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentAssignment, setCurrentAssignment] = useState(null);

  // Mock data for the course
  const course = {
    id: Number(id),
    title: "Introduction to React",
    description: "Learn the basics of React and build your first application. This course covers fundamental concepts, component-based architecture, state management, and more.",
    instructor: "Jane Doe",
    duration: "6 weeks",
    students: 1200,
    modules: [
      {
        title: "React Fundamentals",
        topics: [
          {
            title: "Introduction to React",
            content: "What is React? Virtual DOM, JSX"
          },
          {
            title: "Components",
            content: "Functional Components, Class Components, Props and State"
          }
        ],
        assignment: {
          title: "Build a simple React component",
          instructions: "Create a functional component that displays a list of items passed as props.",
          submissionLink: "",
          status: "pending" // Can be 'pending', 'submitted', or 'graded'
        }
      },
      {
        title: "State Management",
        topics: [
          {
            title: "React Hooks",
            content: "useState, useEffect, Custom Hooks"
          },
          {
            title: "Context API",
            content: "Creating Context, Provider and Consumer, useContext Hook"
          }
        ],
        assignment: {
          title: "Implement state management in a React application",
          instructions: "Build a todo list application using useState and useContext for global state management.",
          submissionLink: "",
          status: "pending"
        }
      }
    ]
  };

  const handleSubmit = () => {
    if (submissionLink && currentAssignment) {
      currentAssignment.assignment.submissionLink = submissionLink;
      currentAssignment.assignment.status = 'submitted';
      setSubmissionLink('');
      setShowModal(false);
      // Here you would typically update this in your backend
      console.log(`Assignment submitted for module ${currentAssignment.title}:`, submissionLink);
    }
  };

  const openSubmissionModal = (module) => {
    setCurrentAssignment(module);
    setShowModal(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={`https://source.unsplash.com/random/1000x500?coding,${id}`} alt={course.title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center text-gray-600">
            <Book className="w-5 h-5 mr-2" />
            <span>{course.instructor}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-5 h-5 mr-2" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-5 h-5 mr-2" />
            <span>{course.students} students</span>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex border-b">
            <button
              className={`py-2 px-4 ${activeTab === 'overview' ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`py-2 px-4 ${activeTab === 'modules' ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
              onClick={() => setActiveTab('modules')}
            >
              Modules
            </button>
          </div>
        </div>

        {activeTab === 'overview' && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Course Description</h2>
            <p className="text-gray-700 mb-6">{course.description}</p>
            <h3 className="text-xl font-semibold mb-3">What you'll learn</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Understand React fundamentals and component-based architecture</li>
              <li>Learn state management techniques and hooks</li>
              <li>Build interactive user interfaces with React</li>
              <li>Implement routing in React applications</li>
              <li>Work with APIs and handle data in React</li>
            </ul>
          </div>
        )}

        {activeTab === 'modules' && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Course Modules</h2>
            {course.modules.map((module, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                <ul className="list-disc list-inside ml-4 mb-4">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="mb-2">
                      <span className="font-medium">{topic.title}</span>
                      <p className="ml-4 text-sm text-gray-600">{topic.content}</p>
                    </li>
                  ))}
                </ul>
                <div className="bg-gray-100 p-4 rounded-md">
                  <h4 className="font-semibold mb-2">Module Assignment: {module.assignment.title}</h4>
                  <p className="text-sm text-gray-700 mb-2">{module.assignment.instructions}</p>
                  {module.assignment.status === 'pending' ? (
                    <button
                      onClick={() => openSubmissionModal(module)}
                      className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
                    >
                      Submit Assignment
                    </button>
                  ) : (
                    <div className="flex items-center text-green-600">
                      <CheckSquare className="w-5 h-5 mr-2" />
                      <span>{module.assignment.status === 'submitted' ? 'Submitted - Awaiting Grading' : 'Graded'}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      Submit Assignment
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Please enter the URL of your GitHub repository or other relevant link for your assignment submission.
                      </p>
                      <input
                        type="text"
                        value={submissionLink}
                        onChange={(e) => setSubmissionLink(e.target.value)}
                        placeholder="https://github.com/yourusername/your-repo"
                        className="mt-2 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setShowModal(false)}
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

export default CourseDetails;