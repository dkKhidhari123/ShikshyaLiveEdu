const { Server } = require('socket.io');
const http = require('http');
const supabase = require('./utils/supabaseClient');
const { handleMessageEvents } = require('./controllers/messageController');
const { handlePollEvents } = require('./controllers/pollController');
const { handleParticipantEvents } = require('./controllers/participantController');
require('dotenv').config();

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: '*',  // Allow your frontend origin
  }
});

// Authenticate every connection
io.use(async (socket, next) => {
  const token = socket.handshake.auth.token;
  if (!token) return next(new Error('Authentication error: Token missing'));

  const { data, error } = await supabase.auth.getUser(token);

  if (error || !data?.user) {
    console.error('Authentication failed', error);
    return next(new Error('Authentication error'));
  }

  socket.user = data.user; // attach user info
  next();
});

// Handle events
io.on('connection', (socket) => {
  console.log(`✅ User connected: ${socket.user.email}`);

  handleMessageEvents(socket, io);
  handlePollEvents(socket, io);
  handleParticipantEvents(socket, io);
});

// Start server
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`🚀 Socket server running on port ${PORT}`);
});
