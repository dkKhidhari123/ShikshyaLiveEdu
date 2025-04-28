function handlePollEvents(socket, io) {
    socket.on('votePoll', ({ roomId, optionId }) => {
      console.log(`${socket.user.email} voted on poll in ${roomId}`);
  
      io.to(roomId).emit('pollUpdate', {
        optionId,
        voter: socket.user.email,
      });
    });
  }
  
  module.exports = { handlePollEvents };
  