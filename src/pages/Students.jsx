import React from 'react';
import { User, Mail, Phone } from 'lucide-react';

const Students = () => {
  // Mock student data
  const students = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', phone: '123-456-7890', course: 'Introduction to React' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', phone: '234-567-8901', course: 'Advanced JavaScript' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', phone: '345-678-9012', course: 'Web Design Fundamentals' },
    { id: 4, name: 'Diana Ross', email: 'diana@example.com', phone: '456-789-0123', course: 'Data Structures and Algorithms' },
    { id: 5, name: 'Ethan Hunt', email: 'ethan@example.com', phone: '567-890-1234', course: 'Machine Learning Basics' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6">Students</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <ul className="divide-y divide-gray-200">
          {students.map((student) => (
            <li key={student.id} className="p-4 hover:bg-gray-50">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center mb-2 sm:mb-0">
                  <User className="h-8 w-8 rounded-full text-gray-500 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{student.name}</p>
                    <p className="text-sm text-gray-500">{student.course}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <div className="flex items-center mb-2 sm:mb-0 sm:mr-4">
                    <Mail className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-500">{student.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-500">{student.phone}</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Students;