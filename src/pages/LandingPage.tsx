import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="space-y-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Learning Management System</h1>
        <p className="text-xl mb-8">Empowering students and instructors to achieve more</p>
        <div className="flex justify-center space-x-4">
          <Link to="/courses" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition duration-300">
            Explore Courses
          </Link>
          <Link to="#" className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary-dark transition duration-300">
            Become an Instructor
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <BookOpen className="mx-auto text-primary w-16 h-16 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Diverse Courses</h2>
          <p>Explore a wide range of courses tailored to your interests and career goals.</p>
        </div>
        <div className="text-center">
          <Users className="mx-auto text-primary w-16 h-16 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Expert Instructors</h2>
          <p>Learn from industry professionals and experienced educators.</p>
        </div>
        <div className="text-center">
          <Award className="mx-auto text-primary w-16 h-16 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Recognized Certifications</h2>
          <p>Earn certificates to showcase your skills and knowledge.</p>
        </div>
      </section>

      <section className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Courses</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <img src={`https://source.unsplash.com/random/500x500?education,${i}`} alt="Course" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">Course Title {i}</h3>
              <p className="text-gray-600 mb-4">Brief description of the course and its benefits.</p>
              <Link to={`/courses/${i}`} className="text-primary hover:underline">Learn More</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;