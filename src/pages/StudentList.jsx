import React from 'react';
import { User, Mail, Phone } from 'lucide-react';

const StudentList = () => {
  const students = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', phone: '123-456-7890', course: 'Math 101' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', phone: '234-567-8901', course: 'Math 102' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', phone: '345-678-9012', course: 'Math 103' },
    { id: 4, name: 'Diana Ross', email: 'diana@example.com', phone: '456-789-0123', course: 'Math 104' },
    { id: 5, name: 'Ethan Hunt', email: 'ethan@example.com', phone: '567-890-1234', course: 'Math 101' },
  ];

  return (
    <div className="space-y-6 mobile-container">
      <h1 className="text-3xl font-bold mb-6 mobile-title">Student List</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg mobile-card">
        <ul className="divide-y divide-gray-200">
          {students.map((student) => (
            <li key={student.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <User className="h-10 w-10 rounded-full text-gray-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{student.name}</p>
                  <p className="text-sm text-gray-500 truncate">{student.course}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-500 hidden sm:inline">{student.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-500 hidden sm:inline">{student.phone}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentList;