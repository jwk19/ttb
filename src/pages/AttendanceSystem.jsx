import React, { useState } from 'react';
import { Calendar, CheckCircle, XCircle } from 'lucide-react';

const AttendanceSystem = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [attendanceData, setAttendanceData] = useState({});

  const students = [
    { id: 1, name: 'Alice Johnson' },
    { id: 2, name: 'Bob Smith' },
    { id: 3, name: 'Charlie Brown' },
    { id: 4, name: 'Diana Ross' },
    { id: 5, name: 'Ethan Hunt' },
    { id: 6, name: 'Fiona Gallagher' },
    { id: 7, name: 'George Lucas' },
    { id: 8, name: 'Hannah Montana' },
    { id: 9, name: 'Ian Malcolm' },
    { id: 10, name: 'Julia Roberts' },
  ];

  const handleDateChange = (e) => {
    setSelectedDate(new Date(e.target.value));
  };

  const toggleAttendance = (studentId) => {
    const dateKey = selectedDate.toISOString().split('T')[0];
    setAttendanceData(prev => ({
      ...prev,
      [dateKey]: {
        ...prev[dateKey],
        [studentId]: !prev[dateKey]?.[studentId]
      }
    }));
  };

  const getAttendanceStatus = (studentId) => {
    const dateKey = selectedDate.toISOString().split('T')[0];
    return attendanceData[dateKey]?.[studentId] || false;
  };

  const updateAttendance = (studentId, status) => {
    const dateKey = selectedDate.toISOString().split('T')[0];
    setAttendanceData(prev => ({
      ...prev,
      [dateKey]: {
        ...prev[dateKey],
        [studentId]: status
      }
    }));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6">Attendance System</h1>
      
      <div className="flex items-center space-x-4">
        <Calendar className="text-primary" />
        <input
          type="date"
          value={selectedDate.toISOString().split('T')[0]}
          onChange={handleDateChange}
          className="border rounded-md p-2"
        />
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Student Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Attendance
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{student.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`flex items-center ${
                      getAttendanceStatus(student.id) ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {getAttendanceStatus(student.id) ? (
                      <>
                        <CheckCircle className="h-5 w-5 mr-2" />
                        Present
                      </>
                    ) : (
                      <>
                        <XCircle className="h-5 w-5 mr-2" />
                        Absent
                      </>
                    )}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => updateAttendance(student.id, true)}
                    className="text-green-600 hover:text-green-900 mr-2"
                  >
                    Mark Present
                  </button>
                  <button
                    onClick={() => updateAttendance(student.id, false)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Mark Absent
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceSystem;