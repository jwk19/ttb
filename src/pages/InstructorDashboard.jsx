import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Users, UserPlus, Layers } from 'lucide-react';

const InstructorDashboard = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', cohort: 'Cohort A' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', cohort: 'Cohort B' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', cohort: 'Cohort A' },
  ]);

  const [cohorts, setCohorts] = useState(['Cohort A', 'Cohort B', 'Cohort C']);

  const [newStudent, setNewStudent] = useState({ name: '', email: '', cohort: '' });

  const handleAddStudent = (e) => {
    e.preventDefault();
    setStudents([...students, { ...newStudent, id: students.length + 1 }]);
    setNewStudent({ name: '', email: '', cohort: '' });
  };

  const handleNewCohort = (e) => {
    e.preventDefault();
    const newCohortName = prompt('Enter new cohort name:');
    if (newCohortName) {
      setCohorts([...cohorts, newCohortName]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Instructor Dashboard</h1>
      <Tabs>
        <TabList>
          <Tab><div className="flex items-center"><Users className="mr-2" /> Student List</div></Tab>
          <Tab><div className="flex items-center"><UserPlus className="mr-2" /> Enroll Student</div></Tab>
          <Tab><div className="flex items-center"><Layers className="mr-2" /> Manage Cohorts</div></Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl font-semibold mb-4">Student List</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cohort</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map((student) => (
                <tr key={student.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{student.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{student.cohort}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TabPanel>

        <TabPanel>
          <h2 className="text-2xl font-semibold mb-4">Enroll New Student</h2>
          <form onSubmit={handleAddStudent} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                value={newStudent.name}
                onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={newStudent.email}
                onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="cohort" className="block text-sm font-medium text-gray-700">Cohort</label>
              <select
                id="cohort"
                value={newStudent.cohort}
                onChange={(e) => setNewStudent({ ...newStudent, cohort: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                required
              >
                <option value="">Select a cohort</option>
                {cohorts.map((cohort, index) => (
                  <option key={index} value={cohort}>{cohort}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition duration-300">
              Enroll Student
            </button>
          </form>
        </TabPanel>

        <TabPanel>
          <h2 className="text-2xl font-semibold mb-4">Manage Cohorts</h2>
          <ul className="space-y-2 mb-4">
            {cohorts.map((cohort, index) => (
              <li key={index} className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded">
                <span>{cohort}</span>
                <button className="text-red-500 hover:text-red-700" onClick={() => {
                  if (window.confirm(`Are you sure you want to delete ${cohort}?`)) {
                    setCohorts(cohorts.filter(c => c !== cohort));
                  }
                }}>Delete</button>
              </li>
            ))}
          </ul>
          <button onClick={handleNewCohort} className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary-dark transition duration-300">
            Add New Cohort
          </button>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default InstructorDashboard;