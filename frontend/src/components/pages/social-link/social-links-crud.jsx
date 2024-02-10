import axios from 'axios';
import React, { useEffect, useState } from 'react';

import '../pages-style/crud-style.css';
import '../pages-style/button-styling.css';

function SocialLinksCrudPage() {
  const url = 'http://127.0.0.1:8000/';
  const [socialLinks, setSocialLinks] = useState([]);
  const [inputSocialLinksTitle, setInputSocialLinksTitle] = useState('');
  const [inputSocialLinksTitleDescription, setInputSocialLinksTitleDescription] = useState('');
  const [inputIconSrc, setInputIconSrc] = useState(''); // Added state for icon source

  const getAllSocialLinks = () => {
    axios.get(url + 'get_social-links/social-links/list/')
      .then(res => {
        setSocialLinks(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const addSocialLinks = () => {
    axios.post(url + 'get_social-links/social-links/create/', {
      'name': inputSocialLinksTitle,
      'link': inputSocialLinksTitleDescription,
      'iconSrc': inputIconSrc, // Added iconSrc to the POST request
    }).then(res => {
      const newSocialLinks = res.data;
      setSocialLinks(prevSocialLinks => [...prevSocialLinks, newSocialLinks]);
      setInputSocialLinksTitle('');
      setInputSocialLinksTitleDescription('');
      setInputIconSrc(''); // Reset iconSrc after adding
    }).catch(err => {
      console.error(err);
    });
  };

  const handleChange = ed => {
    setInputSocialLinksTitle(ed.target.value);
  };

  const DescriptionChange = fed => {
    setInputSocialLinksTitleDescription(fed.target.value);
  };

  const handleIconSrcChange = ed => { // Added handler for icon source
    setInputIconSrc(ed.target.value);
  };

  useEffect(() => {
    getAllSocialLinks();
  }, []);

  return (
    <div className='crud-hub'>
      <h1 className='crud-manager-title'>Social Links CRUD</h1>
      <div className='form-container'>
        <div className='crud-style-input'>
          <input 
            type="text" 
            placeholder="Icon Source" // Changed placeholder to Icon Source
            value={inputIconSrc} // Updated value to inputIconSrc
            onChange={ed => handleIconSrcChange(ed)} // Updated onChange handler
          />
          <input 
            type="text" 
            placeholder="Ajoutez un titre"
            value={inputSocialLinksTitle}
            onChange={ed => handleChange(ed)}
          />
          <input 
            type="text" 
            placeholder="Ajoutez une description"
            value={inputSocialLinksTitleDescription}
            onChange={fed => DescriptionChange(fed)}
          />
          <button 
            onClick={addSocialLinks} 
            disabled={!inputSocialLinksTitle.trim()}
            className='crud-style-field'
          >
            Valider
          </button>
        </div>
      </div>
      <div className='crud-style-container'>
        <ul>
          {
            socialLinks.map(task => {
              return (
                <div className='crud-style-content'>
                  <div className='crud-style-title'>
                    {task.title}
                  </div>
                  <div className='crud-style-status'>
                    {task.status === 'ongoing' ? 
                      <span className='ongoing-mission'>Formation en cours</span> : 
                      <span className='terminated-mission'>Formation terminée</span>}
                  </div>
                  <div className='crud-style-button-container'>
                    <button className='crud-style-button SocialLinks-edit'>Edit</button>
                    <button className="crud-style-button SocialLinks-delete">
                      Delete
                    </button>
                  </div>

                  <div>

                  </div>
                </div>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default SocialLinksCrudPage;
