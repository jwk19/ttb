import React from 'react';
import { User, Mail, Phone, Briefcase, GraduationCap, Calendar } from 'lucide-react';

const ProfilePage = ({ userRole }) => {
  const userInfo = {
    name: userRole === 'instructor' ? 'Dr. Jane Smith' : 'John Doe',
    email: userRole === 'instructor' ? 'jane.smith@university.edu' : 'john.doe@student.edu',
    phone: '+1 (555) 123-4567',
    role: userRole === 'instructor' ? 'Professor of Computer Science' : 'Undergraduate Student',
    department: 'Computer Science',
    joinDate: 'September 1, 2020',
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex items-center">
          <img
            className="h-24 w-24 rounded-full mr-6"
            src={`https://ui-avatars.com/api/?name=${userInfo.name.replace(' ', '+')}&background=0D8ABC&color=fff`}
            alt={userInfo.name}
          />
          <div>
            <h3 className="text-2xl leading-6 font-medium text-gray-900">{userInfo.name}</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">{userInfo.role}</p>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <Mail className="w-5 h-5 mr-2" /> Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userInfo.email}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <Phone className="w-5 h-5 mr-2" /> Phone number
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userInfo.phone}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                {userRole === 'instructor' ? (
                  <Briefcase className="w-5 h-5 mr-2" />
                ) : (
                  <GraduationCap className="w-5 h-5 mr-2" />
                )}
                {userRole === 'instructor' ? 'Department' : 'Major'}
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userInfo.department}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <Calendar className="w-5 h-5 mr-2" /> Join date
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userInfo.joinDate}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;