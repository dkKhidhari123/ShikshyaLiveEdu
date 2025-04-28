import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, Users, Clock, Award, Calendar, MessageSquare, Video, FileText, ChevronRight } from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock course data
  const course = {
    id: parseInt(id || '1'),
    title: 'Computer Science Engineering',
    category: 'Computer Science',
    instructor: {
      id: 1,
      name: 'Prof. John Doe',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    students: 128,
    duration: '4 years',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    overview: 'This comprehensive Computer Science Engineering program covers the fundamentals of computer science, programming, algorithms, and software development. Students will gain hands-on experience with various programming languages, databases, and software development methodologies. The course is designed to prepare students for careers in software engineering, web development, data science, and other technology-related fields.',
    whatYouWillLearn: [
      'Fundamentals of programming in multiple languages including Java, Python, and C++',
      'Data structures and algorithms for efficient problem-solving',
      'Database design and management using SQL and NoSQL technologies',
      'Web development with modern frameworks and libraries',
      'Software engineering principles and best practices',
      'Computer networks and security fundamentals',
      'Operating systems and computer architecture',
      'Artificial intelligence and machine learning basics',
    ],
    modules: [
      {
        id: 1,
        title: 'Introduction to Programming',
        description: 'Learn the basics of programming using Python, including variables, data types, control structures, and functions.',
        lessons: 12,
        duration: '4 weeks',
      },
      {
        id: 2,
        title: 'Data Structures and Algorithms',
        description: 'Explore fundamental data structures like arrays, linked lists, stacks, queues, trees, and graphs, along with common algorithms.',
        lessons: 15,
        duration: '5 weeks',
      },
      {
        id: 3,
        title: 'Object-Oriented Programming',
        description: 'Master object-oriented programming concepts including classes, objects, inheritance, polymorphism, and encapsulation.',
        lessons: 10,
        duration: '4 weeks',
      },
      {
        id: 4,
        title: 'Database Systems',
        description: 'Learn database design, SQL, normalization, transaction management, and database administration.',
        lessons: 8,
        duration: '3 weeks',
      },
      {
        id: 5,
        title: 'Web Development',
        description: 'Build responsive web applications using HTML, CSS, JavaScript, and modern frameworks.',
        lessons: 14,
        duration: '5 weeks',
      },
    ],
    upcomingClasses: [
      {
        id: 101,
        title: 'Introduction to Python Programming',
        date: 'Monday, June 10, 2025',
        time: '10:00 AM - 11:30 AM',
      },
      {
        id: 102,
        title: 'Data Structures: Arrays and Linked Lists',
        date: 'Wednesday, June 12, 2025',
        time: '2:00 PM - 3:30 PM',
      },
      {
        id: 103,
        title: 'Database Design Principles',
        date: 'Friday, June 14, 2025',
        time: '11:00 AM - 12:30 PM',
      },
    ],
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Course Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="h-64 w-full overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                    {course.category}
                  </span>
                </div>
                <h1 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{course.title}</h1>
                <div className="mt-2 flex items-center">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={course.instructor.image}
                    alt={course.instructor.name}
                  />
                  <div className="ml-2">
                    <Link to={`/teacher/${course.instructor.id}`} className="text-indigo-600 dark:text-indigo-400 hover:underline">
                      {course.instructor.name}
                    </Link>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Instructor</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <button className="btn btn-primary">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>

          {/* Course Tabs */}
          <div className="border-t border-gray-200 dark:border-gray-700">
            <nav className="flex overflow-x-auto">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-4 text-sm font-medium whitespace-nowrap ${
                  activeTab === 'overview'
                    ? 'border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('modules')}
                className={`px-4 py-4 text-sm font-medium whitespace-nowrap ${
                  activeTab === 'modules'
                    ? 'border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                }`}
              >
                Modules
              </button>
              <button
                onClick={() => setActiveTab('schedule')}
                className={`px-4 py-4 text-sm font-medium whitespace-nowrap ${
                  activeTab === 'schedule'
                    ? 'border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                }`}
              >
                Schedule
              </button>
              <button
                onClick={() => setActiveTab('discussions')}
                className={`px-4 py-4 text-sm font-medium whitespace-nowrap ${
                  activeTab === 'discussions'
                    ? 'border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                }`}
              >
                Discussions
              </button>
              <button
                onClick={() => setActiveTab('resources')}
                className={`px-4 py-4 text-sm font-medium whitespace-nowrap ${
                  activeTab === 'resources'
                    ? 'border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                }`}
              >
                Resources
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6 md:p-8">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Course Overview</h2>
                <p className="mt-4 text-gray-600 dark:text-gray-300">{course.overview}</p>
                
                <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-white">What You Will Learn</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {course.whatYouWillLearn.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-indigo-600 dark:text-indigo-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-3 text-gray-600 dark:text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Course Details</h3>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      <span className="ml-2 text-gray-600 dark:text-gray-300">Duration: {course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      <span className="ml-2 text-gray-600 dark:text-gray-300">Students: {course.students}</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      <span className="ml-2 text-gray-600 dark:text-gray-300">Category: {course.category}</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      <span className="ml-2 text-gray-600 dark:text-gray-300">Certificate: Yes</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Modules Tab */}
            {activeTab === 'modules' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Course Modules</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  This course is divided into {course.modules.length} comprehensive modules.
                </p>

                <div className="mt-6 space-y-4">
                  {course.modules.map((module) => (
                    <div key={module.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm overflow-hidden">
                      <div className="p-4 flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{module.title}</h3>
                          <p className="mt-1 text-gray-600 dark:text-gray-300">{module.description}</p>
                          <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <FileText className="h-4 w-4 mr-1" />
                            <span>{module.lessons} lessons</span>
                            <span className="mx-2">•</span>
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{module.duration}</span>
                          </div>
                        </div>
                        <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Schedule Tab */}
            {activeTab === 'schedule' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Upcoming Classes</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Join these live sessions to enhance your learning experience.
                </p>

                <div className="mt-6 space-y-4">
                  {course.upcomingClasses.map((classItem) => (
                    <div key={classItem.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm overflow-hidden">
                      <div className="p-4 md:p-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{classItem.title}</h3>
                        <div className="mt-2 flex flex-col md:flex-row md:items-center text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{classItem.date}</span>
                          </div>
                          <span className="hidden md:inline mx-2">•</span>
                          <div className="flex items-center mt-1 md:mt-0">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{classItem.time}</span>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Link
                            to={`/live/${classItem.id}`}
                            className="btn btn-primary inline-flex items-center"
                          >
                            <Video className="mr-2 h-4 w-4" />
                            Join Live Class
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Need a different schedule?</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    All live sessions are recorded and available for viewing at your convenience.
                  </p>
                  <button className="mt-4 btn btn-outline text-indigo-600 dark:text-indigo-400 border-indigo-600 dark:border-indigo-400">
                    View Recorded Sessions
                  </button>
                </div>
              </div>
            )}

            {/* Discussions Tab */}
            {activeTab === 'discussions' && (
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Course Discussions</h2>
                  <button className="btn btn-primary">New Topic</button>
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Engage with your instructors and peers in real-time discussions.
                </p>

                <div className="mt-6 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-6 text-center">
                  <MessageSquare className="h-12 w-12 mx-auto text-indigo-600 dark:text-indigo-400" />
                  <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">Join the conversation</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    This is where you can discuss course topics, ask questions, and collaborate with peers.
                  </p>
                  <button className="mt-4 btn btn-primary">Start Discussion</button>
                </div>
              </div>
            )}

            {/* Resources Tab */}
            {activeTab === 'resources' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Course Resources</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Access all course materials, readings, and additional resources.
                </p>

                <div className="mt-6 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-6 text-center">
                  <FileText className="h-12 w-12 mx-auto text-indigo-600 dark:text-indigo-400" />
                  <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">Course materials</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    All course materials will be available here once you're enrolled in the course.
                  </p>
                  <button className="mt-4 btn btn-primary">Enroll Now</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;