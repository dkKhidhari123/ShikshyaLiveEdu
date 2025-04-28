import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Mic, MicOff, Video, VideoOff, MessageSquare, Users, 
  Hand, Settings, Share2, X, Send, ChevronRight, ChevronLeft,
  BarChart2, PieChart, ThumbsUp, ThumbsDown, MoreVertical
} from 'lucide-react';
import socketService from '../utils/socketService';

const LiveClassroom = () => {
  const { classId } = useParams();
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [handRaised, setHandRaised] = useState(false);
  const [activeTab, setActiveTab] = useState('participants');
  const [chatMessage, setChatMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Prof. John Doe', text: 'Welcome to today\'s class on Data Structures!', time: '10:01 AM', isInstructor: true },
    { id: 2, sender: 'Sarah Johnson', text: 'Looking forward to learning about linked lists.', time: '10:02 AM', isInstructor: false },
    { id: 3, sender: 'Michael Chen', text: 'Will we be covering binary trees as well?', time: '10:03 AM', isInstructor: false },
    { id: 4, sender: 'Prof. John Doe', text: 'Yes, we\'ll cover binary trees in the second half of the class.', time: '10:04 AM', isInstructor: true },
  ]);
  const [participants, setParticipants] = useState([
    { id: 1, name: 'Prof. John Doe', isInstructor: true, isOnline: true, handRaised: false },
    { id: 2, name: 'Sarah Johnson', isInstructor: false, isOnline: true, handRaised: false },
    { id: 3, name: 'Michael Chen', isInstructor: false, isOnline: true, handRaised: true },
    { id: 4, name: 'Emily Rodriguez', isInstructor: false, isOnline: true, handRaised: false },
    { id: 5, name: 'David Wilson', isInstructor: false, isOnline: false, handRaised: false },
    { id: 6, name: 'Lisa Thompson', isInstructor: false, isOnline: true, handRaised: false },
    { id: 7, name: 'James Anderson', isInstructor: false, isOnline: true, handRaised: false },
  ]);
  const [showSidebar, setShowSidebar] = useState(true);
  const [currentPoll, setCurrentPoll] = useState({
    question: 'Which data structure would be most efficient for implementing a queue?',
    options: [
      { id: 1, text: 'Array', votes: 2 },
      { id: 2, text: 'Linked List', votes: 5 },
      { id: 3, text: 'Stack', votes: 1 },
      { id: 4, text: 'Binary Tree', votes: 0 },
    ],
    totalVotes: 8,
    userVoted: false,
  });
  const [showPoll, setShowPoll] = useState(false);
  const chatContainerRef = useRef(null);
  const localVideoRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom of chat when messages change
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, activeTab]);

  useEffect(() => {
    // Connect to socket server when component mounts
    const connectToSocket = async () => {
      try {
        await socketService.connect();
        console.log('Connected to socket server');
        
        // Join the classroom
        socketService.emit('joinRoom', { roomId: classId });
        
        // Listen for new messages
        socketService.on('newMessage', (message) => {
          setMessages(prev => [...prev, message]);
        });
        
        // Listen for participant updates
        socketService.on('participantUpdate', (updatedParticipants) => {
          setParticipants(updatedParticipants);
        });
        
        // Listen for poll updates
        socketService.on('pollUpdate', (poll) => {
          setCurrentPoll(poll);
          setShowPoll(true);
        });
      } catch (error) {
        console.error('Failed to connect to socket server:', error);
      }
    };
    
    // Mock socket connection for demo
    // In a real app, uncomment the connectToSocket function
    // connectToSocket();
    
    // Mock video stream
    const setupVideoStream = async () => {
      try {
        if (localVideoRef.current) {
          // In a real app, this would be:
          // const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
          // localVideoRef.current.srcObject = stream;
          
          // For demo, we'll just show a placeholder
          console.log('Video stream would be initialized here');
        }
      } catch (error) {
        console.error('Error accessing media devices:', error);
      }
    };
    
    setupVideoStream();
    
    // Cleanup function
    return () => {
      // Disconnect socket when component unmounts
      socketService.disconnect();
    };
  }, [classId]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    // In a real app, this would toggle the audio track
  };

  const toggleVideo = () => {
    setIsVideoOff(!isVideoOff);
    // In a real app, this would toggle the video track
  };

  const toggleHandRaise = () => {
    setHandRaised(!handRaised);
    // In a real app, this would emit an event to the server
    socketService.emit('raiseHand', { raised: !handRaised });
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (chatMessage.trim() === '') return;
    
    const newMessage = {
      id: messages.length + 1,
      sender: 'You',
      text: chatMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isInstructor: false,
    };
    
    setMessages([...messages, newMessage]);
    setChatMessage('');
    
    // In a real app, this would emit the message to the server
    socketService.emit('sendMessage', {
      roomId: classId,
      message: chatMessage,
    });
  };

  const voteOnPoll = (optionId) => {
    // Update local state for immediate feedback
    setCurrentPoll(prev => {
      const updatedOptions = prev.options.map(option => 
        option.id === optionId 
          ? { ...option, votes: option.votes + 1 }
          : option
      );
      
      return {
        ...prev,
        options: updatedOptions,
        totalVotes: prev.totalVotes + 1,
        userVoted: true,
      };
    });
    
    // In a real app, this would emit the vote to the server
    socketService.emit('votePoll', {
      roomId: classId,
      optionId,
    });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">Data Structures and Algorithms</h1>
          <span className="ml-2 px-2 py-1 bg-red-600 rounded text-xs">LIVE</span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-full hover:bg-gray-700">
            <Settings size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-700">
            <Share2 size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-700">
            <X size={20} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Video Area */}
        <div className={`flex-1 bg-black relative ${showSidebar ? 'md:mr-80' : ''}`}>
          {/* Main Video */}
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1544531585-9847b68c8c86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Instructor video" 
              className="max-w-full max-h-full object-contain"
            />
          </div>
          
          {/* Local Video */}
          <div className="absolute bottom-4 right-4 w-48 h-36 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <video 
              ref={localVideoRef}
              autoPlay 
              muted 
              className={`w-full h-full object-cover ${isVideoOff ? 'hidden' : ''}`}
            />
            {isVideoOff && (
              <div className="w-full h-full flex items-center justify-center bg-gray-700">
                <Users size={32} className="text-gray-400" />
              </div>
            )}
          </div>
          
          {/* Controls */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 bg-gray-800 rounded-full px-2 py-1">
            <button 
              onClick={toggleMute}
              className={`p-3 rounded-full ${
                isMuted ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              {isMuted ? <MicOff size={20} /> : <Mic size={20} />}
            </button>
            <button 
              onClick={toggleVideo}
              className={`p-3 rounded-full ${
                isVideoOff ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              {isVideoOff ? <VideoOff size={20} /> : <Video size={20} />}
            </button>
            <button 
              onClick={toggleHandRaise}
              className={`p-3 rounded-full ${
                handRaised ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              <Hand size={20} />
            </button>
            <button 
              onClick={() => setShowPoll(!showPoll)}
              className="p-3 rounded-full bg-gray-700 hover:bg-gray-600"
            >
              <BarChart2 size={20} />
            </button>
          </div>
          
          {/* Toggle Sidebar Button (Mobile) */}
          <button 
            onClick={() => setShowSidebar(!showSidebar)}
            className="absolute top-4 right-4 md:hidden p-2 rounded-full bg-gray-800 hover:bg-gray-700"
          >
            {showSidebar ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
          
          {/* Poll Overlay */}
          {showPoll && (
            <div className="absolute top-4 left-4 w-80 bg-gray-800 rounded-lg shadow-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">Poll</h3>
                <button 
                  onClick={() => setShowPoll(false)}
                  className="p-1 rounded-full hover:bg-gray-700"
                >
                  <X size={16} />
                </button>
              </div>
              <p className="mb-4">{currentPoll.question}</p>
              <div className="space-y-2">
                {currentPoll.options.map((option) => (
                  <div key={option.id} className="relative">
                    <button
                      onClick={() => !currentPoll.userVoted && voteOnPoll(option.id)}
                      disabled={currentPoll.userVoted}
                      className={`w-full text-left p-2 rounded ${
                        currentPoll.userVoted 
                          ? 'bg-gray-700 cursor-default' 
                          : 'bg-gray-700 hover:bg-gray-600 cursor-pointer'
                      }`}
                    >
                      {option.text}
                    </button>
                    {currentPoll.userVoted && (
                      <>
                        <div 
                          className="absolute top-0 left-0 h-full bg-indigo-600 opacity-30 rounded"
                          style={{ width: `${(option.votes / currentPoll.totalVotes) * 100}%` }}
                        ></div>
                        <span className="absolute top-2 right-2 text-sm">
                          {Math.round((option.votes / currentPoll.totalVotes) * 100)}%
                        </span>
                      </>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-2 text-sm text-gray-400">
                {currentPoll.totalVotes} votes • {currentPoll.userVoted ? 'You voted' : 'Vote to see results'}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div 
          className={`fixed md:static inset-y-0 right-0 w-80 bg-gray-800 border-l border-gray-700 flex flex-col transition-transform duration-300 ease-in-out z-30 ${
            showSidebar ? 'translate-x-0' : 'translate-x-full md:translate-x-0 md:w-0 md:border-l-0'
          }`}
        >
          {/* Tabs */}
          <div className="flex border-b border-gray-700">
            <button
              onClick={() => setActiveTab('participants')}
              className={`flex-1 py-3 text-sm font-medium ${
                activeTab === 'participants' 
                  ? 'border-b-2 border-indigo-500 text-indigo-400' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Users size={16} className="inline mr-1" />
              Participants ({participants.filter(p => p.isOnline).length})
            </button>
            <button
              onClick={() => setActiveTab('chat')}
              className={`flex-1 py-3 text-sm font-medium ${
                activeTab === 'chat' 
                  ? 'border-b-2 border-indigo-500 text-indigo-400' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <MessageSquare size={16} className="inline mr-1" />
              Chat ({messages.length})
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto">
            {activeTab === 'participants' && (
              <div className="p-4">
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase">Instructor</h3>
                  <div className="mt-2">
                    {participants.filter(p => p.isInstructor).map(participant => (
                      <div key={participant.id} className="flex items-center justify-between py-2">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center">
                            {participant.name.charAt(0)}
                          </div>
                          <span className="ml-2">{participant.name}</span>
                        </div>
                        <div className="flex items-center">
                          {participant.handRaised && (
                            <Hand size={16} className="text-yellow-500 mr-2" />
                          )}
                          <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase">Students</h3>
                  <div className="mt-2">
                    {participants.filter(p => !p.isInstructor).map(participant => (
                      <div key={participant.id} className="flex items-center justify-between py-2">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center">
                            {participant.name.charAt(0)}
                          </div>
                          <span className="ml-2">{participant.name}</span>
                        </div>
                        <div className="flex items-center">
                          {participant.handRaised && (
                            <Hand size={16} className="text-yellow-500 mr-2" />
                          )}
                          <div className={`h-2 w-2 rounded-full ${participant.isOnline ? 'bg-green-500' : 'bg-gray-500'}`}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'chat' && (
              <div className="flex flex-col h-full">
                <div 
                  ref={chatContainerRef}
                  className="flex-1 p-4 overflow-y-auto space-y-4"
                >
                  {messages.map(message => (
                    <div key={message.id} className="flex flex-col">
                      <div className="flex items-center">
                        <div className={`h-8 w-8 rounded-full ${message.isInstructor ? 'bg-indigo-600' : 'bg-gray-600'} flex items-center justify-center`}>
                          {message.sender.charAt(0)}
                        </div>
                        <div className="ml-2">
                          <div className="flex items-center">
                            <span className="font-medium">{message.sender}</span>
                            {message.isInstructor && (
                              <span className="ml-1 px-1 py-0.5 bg-indigo-900 text-indigo-300 rounded text-xs">Instructor</span>
                            )}
                          </div>
                          <span className="text-xs text-gray-400">{message.time}</span>
                        </div>
                      </div>
                      <div className="mt-1 ml-10">
                        <p className="text-gray-300">{message.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 border-t border-gray-700">
                  <form onSubmit={sendMessage} className="flex">
                    <input
                      type="text"
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-1 bg-gray-700 text-white rounded-l-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                    <button
                      type="submit"
                      className="bg-indigo-600 hover:bg-indigo-700 rounded-r-md px-4 py-2"
                    >
                      <Send size={16} />
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveClassroom;