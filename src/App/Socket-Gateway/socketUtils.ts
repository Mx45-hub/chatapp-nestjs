import { Socket } from "socket.io";

const userSockets: Record<string, Socket> = {};

export function setUserSocket(username: string, socket: Socket): void {
  userSockets[username] = socket;
}

export function getUserSocket(username: string): Socket | undefined {
  return userSockets[username];
}