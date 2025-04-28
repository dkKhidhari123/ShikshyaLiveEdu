import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Mail, BookOpen, Users, Star, Award, Calendar, Clock } from 'lucide-react';

const TeacherProfile = () => {
  const { id } = useParams();

  // Mock teacher data
  const teacher = {
    id: parseInt(id),
    name: 'Prof. John Doe',
    title: 'Professor of Computer Science',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    email: 'john.doe@example.com',
    bio: 'Professor John Doe is a renowned expert in Computer Science with over 15 years of teaching experience. He specializes in software engineering, algorithms, and data structures. Prior to joining academia, he worked as a senior software engineer at several leading tech companies.',
    education: [
      { degree: 'Ph.D. in Computer Science', institution: 'Stanford University', year: '2008' },
      { degree: 'M.S. in Computer Science', institution: 'MIT', year: '2005' },
      { degree: 'B.S. in Computer Engineering', institution: 'University of California, Berkeley', year: '2003' },
    ],
    expertise: ['Software Engineering', 'Algorithms', 'Data Structures', 'Web Development', 'Artificial Intelligence'],
    courses: [
      {
        id: 1,
        title: 'Computer Science Engineering',
        students: 128,
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 5,
        title: 'Advanced Web Development',
        students: 95,
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 9,
        title: 'Data Structures and Algorithms',
        students: 112,
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      },
    ],
    upcomingClasses: [
      {
        id: 101,
        title: 'Introduction to Python Programming',
        course: 'Computer Science Engineering',
        date: 'Monday, June 10, 2025',
        time: '10:00 AM - 11:30 AM',
      },
      {
        id: 102,
        title: 'Web Development with React',
        course: 'Advanced Web Development',
        date: 'Wednesday, June 12, 2025',
        time: '2:00 PM - 3:30 PM',
      },
      {
        id: 103,
        title: 'Advanced Algorithms',
        course: 'Data Structures and Algorithms',
        date: 'Friday, June 14, 2025',
        time: '11:00 AM - 12:30 PM',
      },
    ],
    achievements: [
      'Best Teacher Award, 2023',
      'Published 25+ research papers in top-tier conferences',
      'Author of "Modern Algorithms: A Practical Approach"',
      'Developed open-source libraries used by thousands of developers',
    ],
  };

  if (!teacher) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Teacher not found</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">The teacher profile you're looking for doesn't exist or has been removed.</p>
          <Link to="/about" className="mt-4 btn btn-primary inline-block">
            Back to About
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 p-6 md:p-8 flex flex-col items-center md:items-start">
              <img
                className="h-48 w-48 rounded-full object-cover border-4 border-indigo-100 dark:border-indigo-900"
                src={teacher.image}
                alt={teacher.name}
              />
              <h1 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white text-center md:text-left">{teacher.name}</h1>
              <p className="text-indigo-600 dark:text-indigo-400 text-center md:text-left">{teacher.title}</p>
              <div className="mt-4 flex items-center">
                <Mail className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <a href={`mailto:${teacher.email}`} className="ml-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  {teacher.email}
                </a>
              </div>
              <div className="mt-6 w-full">
                <button className="btn btn-primary w-full">
                  Contact Instructor
                </button>
              </div>
            </div>
            <div className="border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-700 p-6 md:p-8 flex-1">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">About</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{teacher.bio}</p>
              
              <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Education</h2>
              <ul className="mt-2 space-y-2">
                {teacher.education.map((edu, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-300">
                    <div className="font-medium">{edu.degree}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{edu.institution}, {edu.year}</div>
                  </li>
                ))}
              </ul>
              
              <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Areas of Expertise</h2>
              <div className="mt-2 flex flex-wrap gap-2">
                {teacher.expertise.map((area, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
              
              <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Achievements</h2>
              <ul className="mt-2 space-y-2">
                {teacher.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <Award className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mt-0.5 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Courses Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Courses Taught</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teacher.courses.map((course) => (
              <Link
                key={course.id}
                to={`/courses/${course.id}`}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                <div className="h-40 w-full overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{course.title}</h3>
                  <div className="mt-2 flex justify-between items-center">
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Users size={16} className="mr-1" />
                      <span>{course.students} students</span>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <Star size={16} className="mr-1" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Upcoming Classes Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Upcoming Classes</h2>
          <div className="mt-6 space-y-4">
            {teacher.upcomingClasses.map((classItem) => (
              <div
                key={classItem.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-4 md:p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{classItem.title}</h3>
                      <p className="text-indigo-600 dark:text-indigo-400">{classItem.course}</p>
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
                    </div>
                    <div className="mt-4 md:mt-0">
                      <Link
                        to={`/live/${classItem.id}`}
                        className="btn btn-primary"
                      >
                        Join Class
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;