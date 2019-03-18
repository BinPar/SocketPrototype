import io from 'socket.io-client';
import settings from '../config/setting.mjs';

const socket = io(settings.server);
socket.connect();
