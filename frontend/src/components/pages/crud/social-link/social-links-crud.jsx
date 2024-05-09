import axios from 'axios';
import React, { useEffect, useState } from 'react';

import '../../pages-style/crud-style.css';
import '../../pages-style/button-styling.css';

function SocialLinksCrud() {
  const url = 'http://127.0.0.1:8000/';
  const [crudStyle, setCrudStyle] = useState([]);
  const [inputCrudStyleTitle, setInputCrudStyleTitle] = useState('');
  const [inputCrudStyleDescription, setInputCrudStyleDescription] = useState('');
  const [activeCrudStyle, setActiveCrudStyle] = useState(null);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false); 

  const getAllCrudStyle = () => {
    axios.get(url + 'get_social-links/social-links/list/')
      .then(res => {
        setCrudStyle(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const addCrudStyle = () => {
    axios.post(url + 'get_social-links/social-links/create/', {
      'name': inputCrudStyleTitle,
      'link': inputCrudStyleDescription
    }).then(res => {
      const newCrudStyle = res.data;
      setCrudStyle(prevCrudStyle => [...prevCrudStyle, newCrudStyle]);
      setInputCrudStyleTitle('');
      setInputCrudStyleDescription('');
    }).catch(err => {
      console.error(err);
    });
  };

  const updateCrudStyle = task => {
    setActiveCrudStyle(task);
    setInputCrudStyleTitle(task.name);
    setInputCrudStyleDescription(task.link);
    setIsEditPopupOpen(true); 
  };

  const saveEditedCrudStyle = () => {
    axios.put(url + `get_social-links/social-links/${activeCrudStyle.id}/update/`, {
      'name': inputCrudStyleTitle,
      'link': inputCrudStyleDescription
    }).then(res => {
      getAllCrudStyle();
      setIsEditPopupOpen(false); 
    }).catch(err => {
      console.error(err);
    });
  };

  const deleteCrudStyle = task => {
    axios.delete(url + `get_social-links/social-links/${task.id}/destroy/`)
      .then(res => {
        getAllCrudStyle();
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleChange = e => {
    setInputCrudStyleTitle(e.target.value);
  };

  const DescriptionChange = f => {
    setInputCrudStyleDescription(f.target.value);
  };

  useEffect(() => {
    getAllCrudStyle();
  }, []);

  return (
    <div className='home-container'>
      <div className='form-container'>
        <div className='crud-style-input'>
          <input 
            type="text" 
            placeholder="Add a name"
            value={inputCrudStyleTitle}
            onChange={e => handleChange(e)}
          />
          <input 
            type="text" 
            placeholder="Add a link"
            value={inputCrudStyleDescription}
            onChange={f => DescriptionChange(f)}
          />
          <button 
            onClick={addCrudStyle} 
            disabled={!inputCrudStyleTitle.trim() || !inputCrudStyleDescription.trim()}
            className='crud-style-button'
          >
            Submit
          </button>
        </div>
      </div>
      <div className='crud-style-container'>
        <ul>
          {
            crudStyle.map(task => {
              return (
                <div className='crud-style-content' key={task.id}>
                  <div className='crud-style-title'>
                    {task.name}
                  </div>
                  <div className='crud-style-description'>
                    <a href={task.link} target="_blank" rel="noopener noreferrer">{task.link}</a>
                  </div>
                  <div className='home-button'>
                    <button onClick={() => updateCrudStyle(task)} className='crud-style-button'>Edit</button>
                    <button className="crud-style-button" onClick={() => deleteCrudStyle(task)}>
                      Delete
                    </button>
                  </div>
                </div>
              );
            })
          }
        </ul>
      </div>
      {isEditPopupOpen && activeCrudStyle && (
        <div className="popup-container">
          <div className="popup-content">
            <h2 className='edtion-popup-title'>Edit Task</h2>
            <input className="crud-popup-input" type="text" value={inputCrudStyleTitle} onChange={e => setInputCrudStyleTitle(e.target.value)} />
            <input className="crud-popup-input" type="text" value={inputCrudStyleDescription} onChange={f => setInputCrudStyleDescription(f.target.value)} />
            <button className="popup-button" onClick={saveEditedCrudStyle}>Save</button>
            <button className="popup-button" onClick={() => setIsEditPopupOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SocialLinksCrud;
