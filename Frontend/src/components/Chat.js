import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from "../store/slices/userSlice.js";
import './Chat.css';

const socket = io('http://localhost:5000'); // Replace with your backend URL

const Chat = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user || {});

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [isDetailsSet, setIsDetailsSet] = useState(false);
  const [recipient, setRecipient] = useState('');

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    // Register the user when they enter their username
    if (username) {
      socket.emit('registerUser', username);
    }

    // Listen for incoming private messages
    socket.on('receiveMessage', (data) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { from: recipient, message: data.message },
      ]);
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, [isDetailsSet, recipient]);

  const handleSendMessage = () => {
    if (message.trim() && recipient.trim()) {
      // Send a private message to the selected recipient
      socket.emit('privateMessage', { to: recipient, message });
      setMessages((prevMessages) => [
        ...prevMessages,
        { from: username, message: message },
      ]);
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        {isDetailsSet && (
<>
          <h2>{username}</h2>
          <h2>Chat with {recipient}</h2>
</>
        )
        }
      </div>

      <div className="messages-container">
        <div className="messages-box">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.from === username ? 'sent' : 'received'}`}>
              <div className="message-bubble">
                {msg.message}
              </div>
            </div>
          ))}
        </div>
      </div>

      {!isDetailsSet && (
        <div className="details-form">
          <input
            type="text"
            className="input-field"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            className="input-field"
            placeholder="Recipient's username"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
          <button className="submit-button" onClick={() => setIsDetailsSet(true)}>
            Submit
          </button>
        </div>
      )}

      {isDetailsSet && (
        <div className="message-input-container">
          <textarea
            className="message-input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message"
          />
          <button className="send-button" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      )}
    </div>
  );
};

export default Chat;
