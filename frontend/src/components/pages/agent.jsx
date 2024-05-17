import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import LateralPanel from './lateral_panel';
import './agent.css';

const Agent = () => {
  const url = 'http://127.0.0.1:8000';
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const response = await axios.get(url + '/api/user_conversations/');
        setConversation(response.data);
      } catch (error) {
        console.error('Error fetching conversations:', error);
      }
    };

    fetchConversations();
  }, [url]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (userInput.trim() === '') return;

    const newMessage = {
      role: 'user',
      content: userInput,
    };

    setConversation((prevConversation) => [...prevConversation, newMessage]);
    setUserInput('');

    try {
      const response = await axios.post(url + '/api/interact/', { input_text: userInput });
      const responseMessage = {
        role: 'agent',
        content: response.data.response_text,
      };
      setConversation((prevConversation) => [...prevConversation, newMessage, responseMessage]);
    } catch (error) {
      console.error('Error interacting with the agent:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <LateralPanel />
      <div className="chat-container">
        <div className="chat-box">
          {conversation.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.role}`}>
              {msg.content}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input 
            type="text" 
            value={userInput} 
            onChange={handleInputChange} 
            placeholder="Type your message here..." 
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Agent;
