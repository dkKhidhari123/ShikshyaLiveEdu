import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Clock, MessageSquare, BarChart, Bell } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      title: 'Live Classroom Sessions',
      description: 'Engage in real-time video, audio, and text interactions with teachers and peers.',
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      title: 'Instant Messaging',
      description: 'Ask questions and get immediate answers through our real-time messaging system.',
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      title: 'Collaborative Tools',
      description: 'Work together on documents and assignments in real-time with classmates.',
    },
    {
      icon: <BarChart className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      title: 'Real-time Polling',
      description: 'Participate in live quizzes and polls to enhance engagement and learning.',
    },
    {
      icon: <Bell className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      title: 'Instant Notifications',
      description: 'Receive immediate updates on class schedules, grades, and assignments.',
    },
    {
      icon: <Clock className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      title: 'Flexible Learning',
      description: 'Access recorded sessions and materials anytime, anywhere at your convenience.',
    },
  ];

  const upcomingClasses = [
    {
      id: 1,
      title: 'Introduction to Data Science',
      instructor: 'Dr. Jane Smith',
      time: 'Today, 2:00 PM',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Advanced Web Development',
      instructor: 'Prof. John Doe',
      time: 'Tomorrow, 10:00 AM',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Business Management Fundamentals',
      instructor: 'Prof. Robert Johnson',
      time: 'Wednesday, 1:00 PM',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            SikshayLive
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-indigo-100">
              Experience the future of online learning with real-time interactions, collaborative tools, and engaging features.
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                to="/courses"
                className="btn btn-primary text-lg px-8 py-3 shadow-lg hover:shadow-xl transform transition hover:-translate-y-0.5"
              >
                Explore Courses
              </Link>
              <Link
                to="/schedule"
                className="ml-4 btn btn-outline text-lg px-8 py-3 bg-white/10 text-white border-white/30 hover:bg-white/20"
              >
                View Schedule
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent"></div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Revolutionizing Online Education
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              Our platform bridges the gap between online and in-person learning with these powerful features.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-200"
              >
                <div className="absolute -top-4 -left-4 bg-indigo-100 dark:bg-indigo-900 rounded-lg p-3">
                  {feature.icon}
                </div>
                <h3 className="mt-8 text-xl font-medium text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Classes Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Upcoming Live Classes
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              Join these interactive sessions to enhance your learning experience.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {upcomingClasses.map((classItem) => (
              <div
                key={classItem.id}
                className="card overflow-hidden hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={classItem.image}
                    alt={classItem.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{classItem.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">Instructor: {classItem.instructor}</p>
                  <div className="mt-4 flex items-center text-gray-500 dark:text-gray-400">
                    <Clock size={16} className="mr-1" />
                    <span>{classItem.time}</span>
                  </div>
                  <div className="mt-6">
                    <Link
                      to={`/live/${classItem.id}`}
                      className="btn btn-primary w-full flex justify-center items-center"
                    >
                      Join Class
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/schedule"
              className="btn btn-outline inline-flex items-center text-indigo-600 dark:text-indigo-400 border-indigo-600 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30"
            >
              View All Classes
              <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              What Our Students Say
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              Hear from students who have transformed their learning experience with our platform.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Student"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Sarah Johnson</h4>
                  <p className="text-gray-600 dark:text-gray-300">Computer Science Student</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                "The real-time interaction has completely changed how I learn online. Being able to ask questions and get immediate answers makes me feel like I'm in a physical classroom."
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Student"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Michael Chen</h4>
                  <p className="text-gray-600 dark:text-gray-300">Business Administration Student</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                "The collaborative tools have made group projects so much easier. We can work together in real-time, share ideas, and get immediate feedback from our professors."
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Student"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Emily Rodriguez</h4>
                  <p className="text-gray-600 dark:text-gray-300">Psychology Student</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                "I love the dark mode feature! As someone who studies late at night, it's much easier on my eyes. The real-time polling during lectures also keeps me engaged and focused."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600 dark:bg-indigo-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to transform your learning experience?</span>
            <span className="block text-indigo-200">Join our platform today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/courses"
                className="btn bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 text-base font-medium"
              >
                Get Started
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                to="/about"
                className="btn bg-indigo-700 text-white hover:bg-indigo-800 px-6 py-3 text-base font-medium"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;