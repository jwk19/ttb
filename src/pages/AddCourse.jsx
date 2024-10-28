import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCourse = () => {
  const navigate = useNavigate();
  const [course, setCourse] = useState({
    title: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the course data to your backend
    console.log('Course data:', course);
    // For now, we'll just navigate back to the course list
    navigate('/courses');
  };

  return (
    <div className="max-w-2xl mx-auto mobile-container">
      <h1 className="text-3xl font-bold mb-6 mobile-title">Add New Course</h1>
      <form onSubmit={handleSubmit} className="space-y-6 mobile-card">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Course Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={course.title}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Course Description</label>
          <textarea
            id="description"
            name="description"
            value={course.description}
            onChange={handleInputChange}
            required
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          ></textarea>
        </div>
        <div>
          <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition duration-300 mobile-button">
            Create Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;