import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState('week'); // 'day', 'week', 'month'

  // Generate days for the current week
  const getDaysInWeek = () => {
    const days = [];
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
    
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      days.push(day);
    }
    
    return days;
  };

  const weekDays = getDaysInWeek();
  
  // Format date for display
  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', { weekday: 'short', month: 'short', day: 'numeric' }).format(date);
  };
  
  // Check if date is today
  const isToday = (date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };

  // Navigate to previous/next week
  const navigatePrevious = () => {
    const newDate = new Date(currentDate);
    if (view === 'day') {
      newDate.setDate(currentDate.getDate() - 1);
    } else if (view === 'week') {
      newDate.setDate(currentDate.getDate() - 7);
    } else {
      newDate.setMonth(currentDate.getMonth() - 1);
    }
    setCurrentDate(newDate);
  };

  const navigateNext = () => {
    const newDate = new Date(currentDate);
    if (view === 'day') {
      newDate.setDate(currentDate.getDate() + 1);
    } else if (view === 'week') {
      newDate.setDate(currentDate.getDate() + 7);
    } else {
      newDate.setMonth(currentDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  // Sample schedule data
  const scheduleData = [
    {
      id: 1,
      title: 'Introduction to Data Science',
      instructor: 'Dr. Jane Smith',
      time: '10:00 AM - 11:30 AM',
      day: 1, // Monday (0 = Sunday, 1 = Monday, etc.)
      location: 'Room 101, Building A',
      course: 'Data Science',
      type: 'Lecture',
    },
    {
      id: 2,
      title: 'Web Development Workshop',
      instructor: 'Prof. (Dr.) Madhu Chitkara',
      time: '2:00 PM - 4:00 PM',
      day: 1, // Monday
      location: 'Computer Lab 3, Building B',
      course: 'Computer Science Engineering',
      type: 'Workshop',
    },
    {
      id: 3,
      title: 'Business Ethics',
      instructor: 'Prof. Sarah Williams',
      time: '9:00 AM - 10:30 AM',
      day: 2, // Tuesday
      location: 'Room 205, Building C',
      course: 'Business Administration',
      type: 'Lecture',
    },
    {
      id: 4,
      title: 'Machine Learning Lab',
      instructor: 'Dr. S.K. Dubey',
      time: '1:00 PM - 3:00 PM',
      day: 2, // Tuesday
      location: 'AI Lab, Building A',
      course: 'Artificial Intelligence',
      type: 'Lab',
    },
    {
      id: 5,
      title: 'Digital Marketing Strategies',
      instructor: 'Prof. R.K. Sharma',
      time: '11:00 AM - 12:30 PM',
      day: 3, // Wednesday
      location: 'Room 102, Building B',
      course: 'Digital Marketing',
      type: 'Lecture',
    },
    {
      id: 6,
      title: 'Electrical Circuits Lab',
      instructor: 'Dr. Neena Gupta',
      time: '2:00 PM - 4:00 PM',
      day: 3, // Wednesday
      location: 'Electronics Lab, Building D',
      course: 'Electrical Engineering',
      type: 'Lab',
    },
    {
      id: 7,
      title: 'Cognitive Psychology',
      instructor: 'Dr. Lisa Thompson',
      time: '10:00 AM - 11:30 AM',
      day: 4, // Thursday
      location: 'Room 301, Building C',
      course: 'Psychology',
      type: 'Lecture',
    },
    {
      id: 8,
      title: 'Biotechnology Seminar',
      instructor: 'Prof. James Anderson',
      time: '3:00 PM - 4:30 PM',
      day: 4, // Thursday
      location: 'Seminar Hall, Building E',
      course: 'Biotechnology',
      type: 'Seminar',
    },
    {
      id: 9,
      title: 'Software Engineering Project',
      instructor: 'Prof. (Dr.) Madhu Chitkara',
      time: '9:00 AM - 11:00 AM',
      day: 5, // Friday
      location: 'Project Room, Building A',
      course: 'Computer Science Engineering',
      type: 'Project',
    },
    {
      id: 10,
      title: 'Marketing Research Methods',
      instructor: 'Prof. Sarah Williams',
      time: '1:00 PM - 2:30 PM',
      day: 5, // Friday
      location: 'Room 204, Building B',
      course: 'Business Administration',
      type: 'Lecture',
    },
  ];

  // Get classes for a specific day
  const getClassesForDay = (dayIndex) => {
    return scheduleData.filter(item => item.day === dayIndex);
  };

  // Get background color based on class type
  const getClassTypeColor = (type) => {
    switch (type) {
      case 'Lecture':
        return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200';
      case 'Lab':
        return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
      case 'Workshop':
        return 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200';
      case 'Seminar':
        return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200';
      case 'Project':
        return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200';
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200';
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">Class Schedule</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              View your upcoming classes and live sessions
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 flex space-x-2">
            <button
              onClick={() => setView('day')}
              className={`btn ${
                view === 'day'
                  ? 'btn-primary'
                  : 'btn-outline text-gray-700 dark:text-gray-300'
              }`}
            >
              Day
            </button>
            <button
              onClick={() => setView('week')}
              className={`btn ${
                view === 'week'
                  ? 'btn-primary'
                  : 'btn-outline text-gray-700 dark:text-gray-300'
              }`}
            >
              Week
            </button>
            <button
              onClick={() => setView('month')}
              className={`btn ${
                view === 'month'
                  ? 'btn-primary'
                  : 'btn-outline text-gray-700 dark:text-gray-300'
              }`}
            >
              Month
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          {/* Calendar Header */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              {view === 'day' 
                ? formatDate(currentDate)
                : view === 'week'
                  ? `${formatDate(weekDays[0])} - ${formatDate(weekDays[6])}`
                  : new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(currentDate)
              }
            </h2>
            <div className="flex space-x-2">
              <button
                onClick={navigatePrevious}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => setCurrentDate(new Date())}
                className="px-3 py-1 rounded-md bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-sm font-medium"
              >
                Today
              </button>
              <button
                onClick={navigateNext}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Week View */}
          {view === 'week' && (
            <div className="grid grid-cols-7 border-b border-gray-200 dark:border-gray-700">
              {weekDays.map((day, index) => (
                <div
                  key={index}
                  className={`p-2 text-center border-r border-gray-200 dark:border-gray-700 last:border-r-0 ${
                    isToday(day)
                      ? 'bg-indigo-50 dark:bg-indigo-900/30'
                      : ''
                  }`}
                >
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {day.toLocaleDateString('en-US', { weekday: 'short' })}
                  </p>
                  <p className={`text-lg font-semibold ${
                    isToday(day)
                      ? 'text-indigo-600 dark:text-indigo-400'
                      : 'text-gray-900 dark:text-white'
                  }`}>
                    {day.getDate()}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Schedule Content */}
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {view === 'week' ? (
              <div className="grid grid-cols-7">
                {weekDays.map((day, dayIndex) => {
                  // Get day of week (0 = Sunday, 1 = Monday, etc.)
                  const dayOfWeek = day.getDay();
                  // Convert to 1 = Monday, 2 = Tuesday, etc. (0 = Sunday)
                  const adjustedDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
                  const classes = getClassesForDay(adjustedDayOfWeek);
                  
                  return (
                    <div
                      key={dayIndex}
                      className={`min-h-[300px] p-2 border-r border-gray-200 dark:border-gray-700 last:border-r-0 ${
                        isToday(day)
                          ? 'bg-indigo-50/50 dark:bg-indigo-900/10'
                          : ''
                      }`}
                    >
                      {classes.length > 0 ? (
                        <div className="space-y-2">
                          {classes.map((classItem) => (
                            <div
                              key={classItem.id}
                              className={`p-2 rounded-md ${getClassTypeColor(classItem.type)} hover:shadow-md transition-shadow duration-200`}
                            >
                              <div className="flex justify-between items-start">
                                <h3 className="font-medium text-sm">{classItem.title}</h3>
                                <span className="text-xs font-semibold px-1.5 py-0.5 rounded-full bg-white/60 dark:bg-gray-800/60">
                                  {classItem.type}
                                </span>
                              </div>
                              <div className="mt-1 text-xs flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {classItem.time}
                              </div>
                              <div className="mt-1 text-xs">{classItem.location}</div>
                              <div className="mt-2 flex justify-between items-center">
                                <span className="text-xs">{classItem.instructor}</span>
                                <Link
                                  to={`/live/${classItem.id}`}
                                  className="text-xs font-medium px-2 py-1 rounded bg-white/80 dark:bg-gray-800/80 text-indigo-600 dark:text-indigo-400 hover:bg-white dark:hover:bg-gray-800"
                                >
                                  Join
                                </Link>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="h-full flex items-center justify-center text-gray-400 dark:text-gray-600 text-sm">
                          No classes
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : view === 'day' ? (
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  {formatDate(currentDate)}
                </h3>
                
                {/* Get classes for the current day */}
                {(() => {
                  const dayOfWeek = currentDate.getDay();
                  const adjustedDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
                  const classes = getClassesForDay(adjustedDayOfWeek);
                  
                  return classes.length > 0 ? (
                    <div className="space-y-4">
                      {classes.map((classItem) => (
                        <div
                          key={classItem.id}
                          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200"
                        >
                          <div className="flex justify-between items-start">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{classItem.title}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getClassTypeColor(classItem.type)}`}>
                              {classItem.type}
                            </span>
                          </div>
                          <p className="mt-2 text-gray-600 dark:text-gray-300">{classItem.course}</p>
                          <div className="mt-4 grid grid-cols-2 gap-4">
                            <div className="flex items-center text-gray-500 dark:text-gray-400">
                              <Clock className="h-4 w-4 mr-2" />
                              <span>{classItem.time}</span>
                            </div>
                            <div className="flex items-center text-gray-500 dark:text-gray-400">
                              <Users className="h-4 w-4 mr-2" />
                              <span>{classItem.instructor}</span>
                            </div>
                          </div>
                          <div className="mt-2 text-gray-500 dark:text-gray-400">
                            <span>{classItem.location}</span>
                          </div>
                          <div className="mt-4">
                            <Link
                              to={`/live/${classItem.id}`}
                              className="btn btn-primary w-full flex justify-center items-center"
                            >
                              Join Class
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
                      <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">No classes scheduled</h3>
                      <p className="mt-1 text-gray-500 dark:text-gray-400">Enjoy your free time or catch up on your studies.</p>
                    </div>
                  );
                })()}
              </div>
            ) : (
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  {new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(currentDate)}
                </h3>
                <div className="text-center py-12">
                  <Calendar className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">Month view coming soon</h3>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">Please use day or week view for now.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;