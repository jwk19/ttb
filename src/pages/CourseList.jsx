import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Book, Clock, Users, ChevronDown, ChevronUp, PlusCircle } from 'lucide-react';

const CourseList = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Introduction to React",
      description: "Learn the basics of React and build your first application.",
      instructor: "Jane Doe",
      duration: "6 weeks",
      students: 1200,
      modules: [
        {
          id: 1,
          title: "React Fundamentals",
          topics: [
            { id: 1, title: "Introduction to React", subtopics: ["What is React?", "Virtual DOM", "JSX"] },
            { id: 2, title: "Components", subtopics: ["Functional Components", "Class Components", "Props and State"] }
          ],
          assignment: "Build a simple React component",
          assignmentInstructions: "Create a functional component that displays a list of items passed as props."
        },
        {
          id: 2,
          title: "State Management",
          topics: [
            { id: 3, title: "React Hooks", subtopics: ["useState", "useEffect", "Custom Hooks"] },
            { id: 4, title: "Context API", subtopics: ["Creating Context", "Provider and Consumer", "useContext Hook"] }
          ],
          assignment: "Implement state management in a React application",
          assignmentInstructions: "Build a simple todo list application using useState and useEffect hooks."
        }
      ]
    },
    // Add more courses as needed
  ]);

  const [expandedCourse, setExpandedCourse] = useState(null);
  const [expandedModule, setExpandedModule] = useState(null);
  const [showAddModule, setShowAddModule] = useState(false);
  const [newModule, setNewModule] = useState({ title: '', assignment: '', assignmentInstructions: '' });

  const toggleCourse = (courseId) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
    setExpandedModule(null);
  };

  const toggleModule = (moduleId) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const handleAddModule = (courseId) => {
    const updatedCourses = courses.map(course => {
      if (course.id === courseId) {
        return {
          ...course,
          modules: [...course.modules, { ...newModule, id: course.modules.length + 1, topics: [] }]
        };
      }
      return course;
    });
    setCourses(updatedCourses);
    setShowAddModule(false);
    setNewModule({ title: '', assignment: '', assignmentInstructions: '' });
  };

  return (
    <div className="space-y-6 mobile-container">
      <h1 className="text-3xl font-bold mb-6 mobile-title">Course List</h1>
      <div className="space-y-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden mobile-card">
            <div className="p-6">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleCourse(course.id)}>
                <h2 className="text-xl font-semibold">{course.title}</h2>
                {expandedCourse === course.id ? <ChevronUp /> : <ChevronDown />}
              </div>
              <p className="text-gray-600 mt-2 mobile-text">{course.description}</p>
              <div className="flex flex-wrap items-center text-sm text-gray-500 mt-4">
                <Book className="w-4 h-4 mr-2" />
                <span className="mr-4">{course.instructor}</span>
                <Clock className="w-4 h-4 mr-2" />
                <span className="mr-4">{course.duration}</span>
                <Users className="w-4 h-4 mr-2" />
                <span>{course.students} students</span>
              </div>
              {expandedCourse === course.id && (
                <div className="mt-4 space-y-4">
                  {course.modules.map((module) => (
                    <div key={module.id} className="border rounded-md p-4">
                      <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleModule(module.id)}>
                        <h3 className="text-lg font-medium">{module.title}</h3>
                        {expandedModule === module.id ? <ChevronUp /> : <ChevronDown />}
                      </div>
                      {expandedModule === module.id && (
                        <div className="mt-2 space-y-2">
                          {module.topics.map((topic) => (
                            <div key={topic.id} className="ml-4">
                              <h4 className="font-medium">{topic.title}</h4>
                              <ul className="list-disc list-inside ml-4">
                                {topic.subtopics.map((subtopic, index) => (
                                  <li key={index} className="text-sm text-gray-600">{subtopic}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                          <div className="mt-2 p-2 bg-gray-100 rounded">
                            <p className="font-medium">Assignment:</p>
                            <p className="text-sm">{module.assignment}</p>
                            <p className="font-medium mt-2">Instructions:</p>
                            <p className="text-sm">{module.assignmentInstructions}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={() => setShowAddModule(true)}
                    className="flex items-center text-primary hover:text-primary-dark"
                  >
                    <PlusCircle className="w-5 h-5 mr-1" /> Add Module
                  </button>
                  {showAddModule && (
                    <div className="mt-4 p-4 border rounded-md">
                      <h3 className="text-lg font-medium mb-2">Add New Module</h3>
                      <input
                        type="text"
                        placeholder="Module Title"
                        value={newModule.title}
                        onChange={(e) => setNewModule({ ...newModule, title: e.target.value })}
                        className="w-full p-2 border rounded mb-2"
                      />
                      <textarea
                        placeholder="Assignment"
                        value={newModule.assignment}
                        onChange={(e) => setNewModule({ ...newModule, assignment: e.target.value })}
                        className="w-full p-2 border rounded mb-2"
                      ></textarea>
                      <textarea
                        placeholder="Assignment Instructions"
                        value={newModule.assignmentInstructions}
                        onChange={(e) => setNewModule({ ...newModule, assignmentInstructions: e.target.value })}
                        className="w-full p-2 border rounded mb-2"
                      ></textarea>
                      <button
                        onClick={() => handleAddModule(course.id)}
                        className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark mobile-button"
                      >
                        Add Module
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;