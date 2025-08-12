import React from 'react';
import { BookOpen, Users, Clock, MessageSquare, BarChart, Bell, Award } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Dr. Jane Smith',
      role: 'Lead Instructor',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      bio: 'Ph.D. in Computer Science with over 10 years of teaching experience. Specializes in Data Science and Machine Learning.',
    },
    {
      name: 'Prof. (Dr.) Madhu Chitkara',
      role: 'Senior Instructor',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      bio: 'Expert in Web Development and Software Engineering with industry experience at leading tech companies.',
    },
    {
      name: 'Prof. Sarah Williams',
      role: 'Business Faculty',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      bio: 'MBA with specialization in Marketing and Business Strategy. Former consultant for Fortune 500 companies.',
    },
    {
      name: 'Dr. S.K. Dubey',
      role: 'AI Specialist',
      image: 'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      bio: 'Researcher in Artificial Intelligence and Deep Learning with multiple publications in top journals.',
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            About SikshayLive
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Revolutionizing online education with real-time interactions and collaborative learning.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                At SikshayLive, we're committed to bridging the gap between online and in-person learning by creating a dynamic, interactive educational platform that fosters real-time collaboration and engagement.
              </p>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                We believe that quality education should be accessible to all, regardless of physical location, which is why we've built a platform that prioritizes real-time interactions, instant feedback, and collaborative tools.
              </p>
              <div className="mt-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
                  <Award className="h-5 w-5 mr-2" />
                  <span>Supporting UN SDG 4: Quality Education</span>
                </div>
              </div>
            </div>
            <div className="bg-indigo-700 p-8 md:p-12 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-6 rounded-lg text-white text-center">
                  <BookOpen className="h-8 w-8 mx-auto mb-2" />
                  <h3 className="text-xl font-semibold">20+</h3>
                  <p>Courses</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg text-white text-center">
                  <Users className="h-8 w-8 mx-auto mb-2" />
                  <h3 className="text-xl font-semibold">20+</h3>
                  <p>Instructors</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg text-white text-center">
                  <Clock className="h-8 w-8 mx-auto mb-2" />
                  <h3 className="text-xl font-semibold">24/7</h3>
                  <p>Support</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg text-white text-center">
                  <MessageSquare className="h-8 w-8 mx-auto mb-2" />
                  <h3 className="text-xl font-semibold">Real-time</h3>
                  <p>Interaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
            What Makes Us Different
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Real-time Communication</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Our platform enables instant messaging and live video interactions between students and teachers, making online learning feel more like an in-person experience.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Collaborative Learning</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Students can work together on documents, assignments, and projects in real-time, fostering collaboration and teamwork skills.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Interactive Assessments</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Live quizzes, polls, and assessments provide immediate feedback to both students and teachers, enhancing the learning experience.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                <Bell className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Instant Notifications</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Stay updated with real-time notifications about class schedules, assignments, grades, and announcements.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Diverse Course Offerings</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Access a wide range of courses across various disciplines, from Computer Science to Business Administration and beyond.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Flexible Learning</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Attend live sessions or access recorded materials at your convenience, allowing you to learn at your own pace.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
            Meet Our Team
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-center text-gray-600 dark:text-gray-300">
            Our platform is powered by experienced educators and industry experts.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-indigo-600 dark:text-indigo-400">{member.role}</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SDG Section */}
        <div className="mt-16 bg-indigo-600 dark:bg-indigo-800 rounded-lg shadow-xl overflow-hidden">
          <div className="p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold">Supporting Sustainable Development</h2>
            <p className="mt-4 text-lg text-indigo-100">
              Our platform aligns with the United Nations Sustainable Development Goal 4: Quality Education, which aims to "ensure inclusive and equitable quality education and promote lifelong learning opportunities for all."
            </p>
            <p className="mt-4 text-lg text-indigo-100">
              By providing real-time interactions, instant feedback, collaborative tools, and user-friendly features like dark and night mode, we're enhancing the quality of education and making it more accessible and engaging for students worldwide.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="font-semibold">Accessibility</h3>
                <p className="text-sm mt-1">Making education accessible regardless of location</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="font-semibold">Inclusivity</h3>
                <p className="text-sm mt-1">Creating an inclusive learning environment for all</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="font-semibold">Quality</h3>
                <p className="text-sm mt-1">Enhancing the quality of online education</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="font-semibold">Lifelong Learning</h3>
                <p className="text-sm mt-1">Promoting continuous education and skill development</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
              Get in Touch
            </h2>
            <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
              Have questions or feedback? We'd love to hear from you.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email Us</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    <a href="mailto:dk5757khidhari@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                      dk5757khidhari@gmail.com
                    </a>
                  </p>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                    <Bell className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Call Us</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    <a href="tel:9263978607" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                      +91 9263978607
                    </a>
                  </p>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    Monday-Friday, 9AM-5PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;