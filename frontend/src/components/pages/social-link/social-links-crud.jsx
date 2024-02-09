import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importer Link pour la navigation

import '../pages-style/crud-style.css';
import '../pages-style/button-styling.css';

function SocialLinksCrudPage() {
  const url = 'http://127.0.0.1:8000/';
  const [socialLinks, setSocialLinks] = useState([]);
  const [inputSocialLinksTitle, setInputSocialLinksTitle] = useState('');
  const [inputSocialLinksTitleDescription, setInputSocialLinksTitleDescription] = useState('');
  const [inputSocialLinksStatus, setInputSocialLinksStatus] = useState('ongoing');
  const [activeSocialLinks, setActiveSocialLinks] = useState(null);

  const getAllSocialLinks = () => {
    axios.get(url + 'get_social-links/list/')
      .then(res => {
        setSocialLinks(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const SocialLinksMarkStatus = task => {
    axios.put(url + `get_social-links/social-links/${task.id}/update/`, {
      'title': task.title,
      'status': task.status === 'ongoing' ? 'terminated' : 'ongoing'
    }).then(res => {
      getAllSocialLinks();
    }).catch(err => {
      console.error(err);
    });
  };

  const addSocialLinks = () => {
    axios.post(url + 'get_social-links/create/', {
      'title': inputSocialLinksTitle,
      'description': inputSocialLinksTitleDescription,
      'status': inputSocialLinksStatus
    }).then(res => {
      const newSocialLinks = res.data;
      setSocialLinks(prevSocialLinks => [...prevSocialLinks, newSocialLinks]);
      setInputSocialLinksTitle('');
      setInputSocialLinksTitleDescription('');
      setInputSocialLinksStatus('ongoing'); // Réinitialiser le statut après l'ajout
    }).catch(err => {
      console.error(err);
    });
  };

  const updateSocialLinks = task => {
    setActiveSocialLinks(task);
    setInputSocialLinksTitle(task.title);
    setInputSocialLinksTitleDescription(task.description);
    setInputSocialLinksStatus(task.status);
  };

  const deleteSocialLinks = task => {
    axios.delete(url + `get_social-links/social-links/${task.id}/destroy/`)
      .then(res => {
        getAllSocialLinks();
      })
      .catch(ederr => {
        console.error(ederr);
      });
  };

  const handleChange = ed => {
    setInputSocialLinksTitle(ed.target.value);
  };

  const DescriptionChange = fed => {
    setInputSocialLinksTitleDescription(fed.target.value);
  };

  const handleStatusChange = ed => {
    setInputSocialLinksStatus(ed.target.value);
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
          <select value={inputSocialLinksStatus} onChange={handleStatusChange}>
            <option value="ongoing">Ongoing</option>
            <option value="terminated">Terminated</option>
          </select>
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
                    <button onClick={e => updateSocialLinks(task)} className='crud-style-button SocialLinks-edit'>Edit</button>
                    <button className="crud-style-button SocialLinks-delete" onClick={e => {deleteSocialLinks(task)}}>
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
