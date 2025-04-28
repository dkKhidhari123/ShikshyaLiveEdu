function handleMessageEvents(socket, io) {
    socket.on('sendMessage', ({ roomId, message }) => {
      console.log(`${socket.user.email} sent a message to ${roomId}`);
      
      io.to(roomId).emit('newMessage', {
        id: Date.now(),
        sender: socket.user.email,
        text: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isInstructor: socket.user.user_metadata?.role === 'instructor',
      });
    });
  }
  
  module.exports = { handleMessageEvents };
  