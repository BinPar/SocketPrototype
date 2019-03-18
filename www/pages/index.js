import React from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3003');
socket.connect();

const Home = () => <h1>Hola mundo</h1>;

export default Home;
