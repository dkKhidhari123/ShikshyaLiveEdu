import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, BookOpen, Users, Clock } from 'lucide-react';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Computer Science',
    'Business',
    'Engineering',
    'Arts',
    'Science',
    'Health',
  ];

  const courses = [
    {
      id: 1,
      title: 'Computer Science Engineering',
      category: 'Computer Science',
      instructor: 'Prof. (Dr.) Madhu Chitkara',
      students: 128,
      duration: '4 years',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Learn the fundamentals of computer science, programming, algorithms, and software development.',
    },
    {
      id: 2,
      title: 'Mechanical Engineering',
      category: 'Engineering',
      instructor: 'Dr. Robert Johnson',
      students: 95,
      duration: '4 years',
      image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Study the principles of mechanics, thermodynamics, and materials science for designing mechanical systems.',
    },
    {
      id: 3,
      title: 'Business Administration',
      category: 'Business',
      instructor: 'Prof. Sarah Williams',
      students: 142,
      duration: '3 years',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Develop skills in management, marketing, finance, and entrepreneurship for business leadership.',
    },
    {
      id: 4,
      title: 'Data Science',
      category: 'Computer Science',
      instructor: 'Dr. Jane Smith',
      students: 110,
      duration: '4 years',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Master the techniques of data analysis, machine learning, and statistical modeling for insights extraction.',
    },
    {
      id: 5,
      title: 'Artificial Intelligence',
      category: 'Computer Science',
      instructor: 'Prof. S.K. Dubey',
      students: 85,
      duration: '4 years',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Explore the cutting-edge field of AI, including neural networks, natural language processing, and computer vision.',
    },
    {
      id: 6,
      title: 'Digital Marketing',
      category: 'Business',
      instructor: 'Prof. R.K. Sharma',
      students: 120,
      duration: '3 years',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Learn strategies for online marketing, social media management, SEO, and digital advertising campaigns.',
    },
    {
      id: 7,
      title: 'Electrical Engineering',
      category: 'Engineering',
      instructor: 'Dr. Neena Gupta',
      students: 88,
      duration: '4 years',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Study electrical systems, electronics, power generation, and telecommunications engineering principles.',
    },
    {
      id: 8,
      title: 'Psychology',
      category: 'Arts',
      instructor: 'Dr. Lisa Thompson',
      students: 135,
      duration: '3 years',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Explore human behavior, cognitive processes, and psychological theories for understanding the mind.',
    },
    {
      id: 9,
      title: 'Biotechnology',
      category: 'Science',
      instructor: 'Prof. James Anderson',
      students: 75,
      duration: '4 years',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Study the application of biological systems and organisms to develop technologies and products.',
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Explore Our Courses
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Discover a wide range of courses designed to help you achieve your academic and career goals.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mt-10 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="input pl-10"
              placeholder="Search courses, instructors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter className="h-5 w-5 text-gray-400" />
            </div>
            <select
              className="input pl-10 appearance-none"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Course List */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div key={course.id} className="card hover:shadow-xl transition-all duration-200">
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{course.title}</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                      {course.category}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{course.description}</p>
                  <div className="mt-4 flex items-center text-gray-500 dark:text-gray-400">
                    <Users size={16} className="mr-1" />
                    <span className="mr-4">{course.students} students</span>
                    <Clock size={16} className="mr-1" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="mt-4 flex items-center">
                    <img
                      className="h-8 w-8 rounded-full"
                      src={`https://images.unsplash.com/photo-${1500000000000 + course.id}?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                      alt={course.instructor}
                    />
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">{course.instructor}</span>
                  </div>
                  <div className="mt-6">
                    <Link
                      to={`/courses/${course.id}`}
                      className="btn btn-primary w-full flex justify-center items-center"
                    >
                      <BookOpen size={16} className="mr-2" />
                      View Course
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">No courses found</h3>
              <p className="mt-1 text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;