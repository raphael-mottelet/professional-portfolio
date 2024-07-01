import React, { useState } from 'react';
import Navbar from './navbar';
import LateralPanel from './lateral_panel';
import './pages-style/agent.css';

const Agent = () => {
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState([]);
  const [panelVisible, setPanelVisible] = useState(true);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim() === '') return;

    const newMessage = {
      role: 'user',
      content: userInput,
    };

    setConversation((prevConversation) => [...prevConversation, newMessage]);
    setUserInput('');
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
            <div className="agent-title">Bientôt disponible !</div>
            <div className="agent-description">
              Basé sur un modèle d'ia générative léger, et "open source" via le site "hugging face",
              ce petit agent IA aura pour rôle d'émuler ma personne pour que vous puissiez poser toutes les questions que vous souhaitez,
              à n'importe quel moment de la journée ! Il disposera d'un contexte strict, de manière à de pas sortir de son rôle. Vous pouvez dès maintenant tester 
              le chat, mais il n'est utilisable que coté client et est non persistent.
            </div>
            {conversation && conversation.map((msg, index) => (
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
              placeholder="Tapez votre message..." 
            />
            <button onClick={handleSendMessage}>Envoyer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agent;
