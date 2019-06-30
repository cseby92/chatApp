import React from 'react';
import logo from './logo.svg';
import './App.css';

import RoomList from './components/RoomList'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import NewRoomForm from './components/NewRoomForm'

function App() {
  return (
    <div className="App">
      <MessageList />
    </div>
  );
}

export default App;
