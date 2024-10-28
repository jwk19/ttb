import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { PlusCircle, Edit, Trash } from 'lucide-react';

const Courses = () => {
  const user = useSelector(state => state.auth.user);
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Introduction to React',
      instructor: 'John Doe',
      progress: 60,
      modules: [
        {
          id: 1,
          title: 'React Basics',
          subtopics: [
            { id: 1, title: 'What is React?', content: 'React is a JavaScript library for building user interfaces.' },
            { id: 2, title: 'JSX', content: 'JSX is a syntax extension for JavaScript.' },
          ],
          assignment: { title: 'Create a simple React component', instructions: 'Create a functional component that displays a list of items.' }
        },
      ]
    },
    // Add more courses here
  ]);

  const [editingCourse, setEditingCourse] = useState(null);
  const [showModuleForm, setShowModuleForm] = useState(false);
  const [newModule, setNewModule] = useState({ title: '', subtopics: [], assignment: { title: '', instructions: '' } });

  const handleEditCourse = (course) => {
    setEditingCourse(course);
  };

  const handleSaveCourse = () => {
    setCourses(courses.map(c => c.id === editingCourse.id ? editingCourse : c));
    setEditingCourse(null);
  };

  const handleAddModule = () => {
    if (editingCourse) {
      const updatedCourse = {
        ...editingCourse,
        modules: [...editingCourse.modules, { ...newModule, id: Date.now() }]
      };
      setEditingCourse(updatedCourse);
      setNewModule({ title: '', subtopics: [], assignment: { title: '', instructions: '' } });
      setShowModuleForm(false);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6">Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-4">Instructor: {course.instructor}</p>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary bg-primary-100">
                      Progress
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-primary">
                      {course.progress}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-200">
                  <div style={{ width: `${course.progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"></div>
                </div>
              </div>
              {user.role === 'instructor' ? (
                <button
                  onClick={() => handleEditCourse(course)}
                  className="mt-4 bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded flex items-center w-full justify-center"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Manage Course
                </button>
              ) : (
                <button className="mt-4 bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded w-full">
                  Continue Course
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {editingCourse && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-full max-w-md sm:max-w-xl md:max-w-2xl shadow-lg rounded-md bg-white">
            <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Edit Course: {editingCourse.title}</h3>
            <input
              type="text"
              value={editingCourse.title}
              onChange={(e) => setEditingCourse({ ...editingCourse, title: e.target.value })}
              className="w-full p-2 mb-4 border rounded"
            />
            <h4 className="font-medium mb-2">Modules:</h4>
            {editingCourse.modules.map((module, index) => (
              <div key={module.id} className="mb-4">
                <input
                  type="text"
                  value={module.title}
                  onChange={(e) => {
                    const updatedModules = [...editingCourse.modules];
                    updatedModules[index].title = e.target.value;
                    setEditingCourse({ ...editingCourse, modules: updatedModules });
                  }}
                  className="w-full p-2 mb-2 border rounded"
                />
                {/* Add UI for editing subtopics and assignments here */}
              </div>
            ))}
            <button
              onClick={() => setShowModuleForm(true)}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-4 flex items-center"
            >
              <PlusCircle className="w-4 h-4 mr-2" />
              Add Module
            </button>
            {showModuleForm && (
              <div className="mb-4">
                <input
                  type="text"
                  value={newModule.title}
                  onChange={(e) => setNewModule({ ...newModule, title: e.target.value })}
                  placeholder="New module title"
                  className="w-full p-2 mb-2 border rounded"
                />
                <button
                  onClick={handleAddModule}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Add
                </button>
              </div>
            )}
            <div className="flex justify-end">
              <button
                onClick={handleSaveCourse}
                className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded mr-2"
              >
                Save Changes
              </button>
              <button
                onClick={() => setEditingCourse(null)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;