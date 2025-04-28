function handleParticipantEvents(socket, io) {
    socket.on('raiseHand', ({ raised }) => {
      console.log(`${socket.user.email} raised hand: ${raised}`);
      // Broadcast hand raise to all in the same room
      io.emit('participantUpdate', { userId: socket.user.id, handRaised: raised });
    });
  
    socket.on('joinRoom', ({ roomId }) => {
      console.log(`${socket.user.email} joined room: ${roomId}`);
      socket.join(roomId);
    });
  
    socket.on('disconnect', () => {
      console.log(`${socket.user.email} disconnected`);
    });
  }
  
  module.exports = { handleParticipantEvents };
  