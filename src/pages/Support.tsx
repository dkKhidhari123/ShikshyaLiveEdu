import React, { useState } from 'react';
import { HelpCircle, Mail, Phone, MessageSquare, ChevronDown, ChevronUp, Search } from 'lucide-react';

const Support = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (id) => {
    if (expandedFaq === id) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(id);
    }
  };

  const faqs = [
    {
      id: 1,
      question: 'How do I join a live classroom session?',
      answer: 'To join a live classroom session, navigate to your Schedule page and click on the "Join" button next to the class you want to attend. Alternatively, you can also join from the Courses page by selecting your course and clicking on the "Join Live Session" button if a session is currently active.',
      category: 'Live Sessions',
    },
    {
      id: 2,
      question: 'What should I do if my audio or video isn\'t working during a live session?',
      answer: 'First, check your browser permissions to ensure that you\'ve allowed access to your microphone and camera. If that doesn\'t work, try refreshing the page. If issues persist, try using a different browser or device. You can also check our troubleshooting guide in the Help Center for more detailed steps.',
      category: 'Technical Issues',
    },
    {
      id: 3,
      question: 'How do I submit assignments on the platform?',
      answer: 'To submit an assignment, go to your course page, find the assignment section, and click on the specific assignment. You\'ll see a "Submit" button where you can upload your files or type your answers. Make sure to click "Submit" after you\'ve completed your work to ensure it\'s received by your instructor.',
      category: 'Assignments',
    },
    {
      id: 4,
      question: 'Can I access recorded sessions if I miss a live class?',
      answer: 'Yes, all live sessions are recorded and made available in the course materials section. You can access these recordings at any time by going to your course page and navigating to the "Recordings" tab. The recordings are typically available within 2 hours after the live session ends.',
      category: 'Live Sessions',
    },
    {
      id: 5,
      question: 'How do I change my account password?',
      answer: 'To change your password, go to your Profile settings by clicking on your profile picture in the top right corner and selecting "Settings". In the Security tab, you\'ll find the option to change your password. You\'ll need to enter your current password and then your new password twice to confirm.',
      category: 'Account',
    },
    {
      id: 6,
      question: 'What devices and browsers are supported by the platform?',
      answer: 'Our platform works best on Chrome, Firefox, Safari, and Edge browsers (latest versions). We support desktop computers (Windows, Mac, Linux) and mobile devices (iOS and Android). For the best experience during live sessions, we recommend using a desktop or laptop computer with a stable internet connection.',
      category: 'Technical Issues',
    },
    {
      id: 7,
      question: 'How do I collaborate with other students on group projects?',
      answer: 'For group projects, you can use our collaborative tools by creating or joining a project workspace. In your course, navigate to the "Projects" section and select your group project. Here, you\'ll find real-time document editing, chat, and video conferencing tools specifically for your group.',
      category: 'Collaboration',
    },
    {
      id: 8,
      question: 'How do I switch between light and dark mode?',
      answer: 'You can switch between light and dark mode by clicking on the sun/moon icon in the top right corner of the screen. Your preference will be saved for future sessions. You can also set it to automatically switch based on your device\'s system settings in your profile preferences.',
      category: 'User Interface',
    },
  ];

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Support',
      description: 'Get help via email',
      contact: 'dk5757khidhari@gmail.com',
      action: 'Email us',
      link: 'mailto:dk5757khidhari@gmail.com',
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone Support',
      description: 'Speak to our support team',
      contact: '+91 9263978607',
      action: 'Call us',
      link: 'tel:9263978607',
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: 'Live Chat',
      description: 'Chat with our support agents',
      contact: 'Available 24/7',
      action: 'Start chat',
      link: '#chat',
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Support & Help Center
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Find answers to common questions or get in touch with our support team.
          </p>
        </div>

        {/* Search */}
        <div className="mt-10 max-w-xl mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="input pl-10"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Contact Methods */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                {method.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{method.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{method.description}</p>
              <p className="mt-2 text-lg font-medium text-indigo-600 dark:text-indigo-400">{method.contact}</p>
              <a
                href={method.link}
                className="mt-4 btn btn-primary"
              >
                {method.action}
              </a>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 max-w-3xl mx-auto">
            {filteredFaqs.length > 0 ? (
              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <div
                    key={faq.id}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                  >
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                      onClick={() => toggleFaq(faq.id)}
                    >
                      <span className="text-lg font-medium text-gray-900 dark:text-white">{faq.question}</span>
                      <span className="ml-6 flex-shrink-0 text-gray-500 dark:text-gray-400">
                        {expandedFaq === faq.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </span>
                    </button>
                    {expandedFaq === faq.id && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                        <div className="mt-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                            {faq.category}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <HelpCircle className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">No results found</h3>
                <p className="mt-1 text-gray-500 dark:text-gray-400">Try adjusting your search terms or browse all FAQs.</p>
              </div>
            )}
          </div>
        </div>

        {/* Still Need Help */}
        <div className="mt-16 bg-indigo-600 dark:bg-indigo-800 rounded-lg shadow-xl overflow-hidden">
          <div className="p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-white">Still Need Help?</h2>
            <p className="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto">
              If you couldn't find the answer you were looking for, our support team is ready to assist you.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:dk5757khidhari@gmail.com"
                className="btn bg-white text-indigo-600 hover:bg-gray-100"
              >
                Contact Support
              </a>
              <a
                href="#"
                className="btn bg-indigo-700 text-white hover:bg-indigo-800"
              >
                Visit Help Center
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;