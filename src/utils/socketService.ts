import { io, Socket } from 'socket.io-client';

class SocketService {
  private socket: Socket | null = null;
  private listeners: Map<string, Function[]> = new Map();

  // Initialize socket connection
  connect(url: string = 'http://localhost:3001'): Promise<Socket> {
    return new Promise((resolve, reject) => {
      this.socket = io(url, {
        transports: ['websocket'],
        autoConnect: true,
      });

      this.socket.on('connect', () => {
        console.log('Socket connected');
        resolve(this.socket as Socket);
      });

      this.socket.on('connect_error', (error) => {
        console.error('Socket connection error:', error);
        reject(error);
      });

      // Re-register all event listeners when reconnecting
      this.socket.on('reconnect', () => {
        console.log('Socket reconnected');
        this.listeners.forEach((callbacks, event) => {
          callbacks.forEach(callback => {
            this.socket?.on(event, callback as any);
          });
        });
      });
    });
  }

  // Disconnect socket
  disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  // Check if socket is connected
  isConnected(): boolean {
    return this.socket?.connected || false;
  }

  // Add event listener
  on(event: string, callback: Function): void {
    if (!this.socket) {
      console.error('Socket not initialized');
      return;
    }

    this.socket.on(event, callback as any);

    // Store the callback for potential reconnection
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event)?.push(callback);
  }

  // Remove event listener
  off(event: string, callback?: Function): void {
    if (!this.socket) {
      console.error('Socket not initialized');
      return;
    }

    if (callback) {
      this.socket.off(event, callback as any);
      
      // Remove the specific callback from our listeners map
      const callbacks = this.listeners.get(event);
      if (callbacks) {
        const index = callbacks.indexOf(callback);
        if (index !== -1) {
          callbacks.splice(index, 1);
        }
        if (callbacks.length === 0) {
          this.listeners.delete(event);
        } else {
          this.listeners.set(event, callbacks);
        }
      }
    } else {
      this.socket.off(event);
      this.listeners.delete(event);
    }
  }

  // Emit event
  emit(event: string, data?: any): void {
    if (!this.socket) {
      console.error('Socket not initialized');
      return;
    }

    this.socket.emit(event, data);
  }

  // Get socket ID
  getSocketId(): string | undefined {
    return this.socket?.id;
  }
}

// Create a singleton instance
const socketService = new SocketService();

export default socketService;