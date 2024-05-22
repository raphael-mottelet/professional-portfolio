import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import LateralPanel from './lateral_panel';
import './pages-style/agent.css';

const Agent = () => {
  const url = 'http://127.0.0.1:8000';
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState([]);
  const [panelVisible, setPanelVisible] = useState(true);

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

  const handleTogglePanel = () => {
    setPanelVisible(!panelVisible);
  };

  return (
    <div className='content-container-main'>
      <Navbar togglePanel={handleTogglePanel} isVisible={panelVisible} />
      <LateralPanel isVisible={panelVisible} />
      <div className={`content-container ${panelVisible ? 'panel-visible' : 'panel-hidden'}`}>
        <div className="chat-container">
          <div className="chat-box">
            <div className="agent-title">Coming soon!</div>
            <div className="agent-description">
              Based on GPT 3.5 turbo model, this little agent will have to create a "virtual me", 
              so you can ask questions about myself and my career at any time!
              You can try the chat already, but it is working client side only.
              A smaller project called "AI Agent" is available in my portfolio "Projects" section.
            </div>
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
    </div>
  );
};

export default Agent;
