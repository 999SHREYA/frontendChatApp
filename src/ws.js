import { io } from 'socket.io-client';

export function connectWS() {
    return io('https://backend-chat-app-ten.vercel.app/');
}
