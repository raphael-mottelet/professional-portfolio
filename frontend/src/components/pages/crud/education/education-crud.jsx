import axios from 'axios';
import React, { useEffect, useState } from 'react';

import '../../pages-style/crud-style.css';
import '../../pages-style/button-styling.css';
import '../../pages-style/edition-popup.css';

function EducationCrud() {
  const url = 'http://127.0.0.1:8000/';
  const [crudStyle, setCrudStyle] = useState([]);
  const [inputCrudStyleTitle, setInputCrudStyleTitle] = useState('');
  const [inputCrudStyleTitleDescription, setInputCrudStyleTitleDescription] = useState('');
  const [inputCrudStyleDate, setInputCrudStyleDate] = useState('');
  const [inputCrudStyleLevel, setInputCrudStyleLevel] = useState('');
  const [inputCrudStyleLocation, setInputCrudStyleLocation] = useState('');
  const [inputCrudStyleStatus, setInputCrudStyleStatus] = useState('ongoing');
  const [activeCrudStyle, setActiveCrudStyle] = useState(null);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);

  const getAllCrudStyle = () => {
    axios.get(url + 'get_education/education/list/')
      .then(res => {
        setCrudStyle(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const CrudStyleMarkStatus = task => {
    axios.put(url + `get_education/education/${task.id}/update/`, {
      'title': task.title,
      'status': task.status === 'ongoing' ? 'terminated' : 'ongoing'
    }).then(res => {
      getAllCrudStyle();
    }).catch(err => {
      console.error(err);
    });
  };

  const addCrudStyle = () => {
    axios.post(url + 'get_education/education/create/', {
      'title': inputCrudStyleTitle,
      'description': inputCrudStyleTitleDescription,
      'date': inputCrudStyleDate,
      'level': inputCrudStyleLevel,
      'location': inputCrudStyleLocation,
      'status': inputCrudStyleStatus
    }).then(res => {
      const newCrudStyle = res.data;
      setCrudStyle(prevCrudStyle => [...prevCrudStyle, newCrudStyle]);
      setInputCrudStyleTitle('');
      setInputCrudStyleTitleDescription('');
      setInputCrudStyleDate('');
      setInputCrudStyleLevel('');
      setInputCrudStyleLocation('');
      setInputCrudStyleStatus('ongoing'); 
    }).catch(err => {
      console.error(err);
    });
  };

  const updateCrudStyle = task => {
    setActiveCrudStyle(task);
    setInputCrudStyleTitle(task.title);
    setInputCrudStyleTitleDescription(task.description);
    setInputCrudStyleDate(task.date);
    setInputCrudStyleLevel(task.level);
    setInputCrudStyleLocation(task.location);
    setInputCrudStyleStatus(task.status);
    setIsEditPopupOpen(true); 
  };

  const saveEditedCrudStyle = () => {
    axios.put(url + `get_education/education/${activeCrudStyle.id}/update/`, {
      'title': inputCrudStyleTitle,
      'description': inputCrudStyleTitleDescription,
      'date': inputCrudStyleDate,
      'level': inputCrudStyleLevel,
      'location': inputCrudStyleLocation,
      'status': inputCrudStyleStatus
    }).then(res => {
      getAllCrudStyle();
      setIsEditPopupOpen(false); 
    }).catch(err => {
      console.error(err);
    });
  };

  const deleteCrudStyle = task => {
    axios.delete(url + `get_education/education/${task.id}/destroy/`)
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
    setInputCrudStyleTitleDescription(f.target.value);
  };

  const handleDateChange = e => {
    setInputCrudStyleDate(e.target.value);
  };

  const handleLevelChange = e => {
    setInputCrudStyleLevel(e.target.value);
  };

  const handleLocationChange = e => {
    setInputCrudStyleLocation(e.target.value);
  };

  const handleStatusChange = e => {
    setInputCrudStyleStatus(e.target.value);
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
            placeholder="Add a title"
            value={inputCrudStyleTitle}
            onChange={e => handleChange(e)}
          />
          <input 
            type="text" 
            placeholder="Add a description"
            value={inputCrudStyleTitleDescription}
            onChange={f => DescriptionChange(f)}
          />
          <input 
            type="date" 
            placeholder="Date"
            value={inputCrudStyleDate}
            onChange={e => handleDateChange(e)}
          />
          <input 
            type="text" 
            placeholder="Level"
            value={inputCrudStyleLevel}
            onChange={e => handleLevelChange(e)}
          />
          <input 
            type="text" 
            placeholder="Location"
            value={inputCrudStyleLocation}
            onChange={e => handleLocationChange(e)}
          />
          
          <select value={inputCrudStyleStatus} onChange={handleStatusChange}>
            <option value="ongoing">Ongoing</option>
            <option value="terminated">Terminated</option>
          </select>
          <button 
            onClick={addCrudStyle} 
            disabled={!inputCrudStyleTitle.trim()}
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
                    {task.title}
                  </div>
                  <div className='crud-style-status'>
                    {task.status === 'ongoing' ? 
                      <span className='ongoing-mission'>Ongoing</span> : 
                      <span className='terminated-mission'>Terminated</span>}
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
        <div className='popup-container'>
          <div className='popup-content education-popup'>
            <h2 className='popup-title'>Edit Task</h2>
            <input className='crud-popup-input' type='text' value={inputCrudStyleTitle} onChange={e => setInputCrudStyleTitle(e.target.value)} />
            <input className='crud-popup-input' type='text' value={inputCrudStyleTitleDescription} onChange={f => setInputCrudStyleTitleDescription(f.target.value)} />
            <input className='crud-popup-input' type='date' value={inputCrudStyleDate} onChange={e => setInputCrudStyleDate(e.target.value)} />
            <input className='crud-popup-input' type='text' value={inputCrudStyleLevel} onChange={e => setInputCrudStyleLevel(e.target.value)} />
            <input className='crud-popup-input' type='text' value={inputCrudStyleLocation} onChange={e => setInputCrudStyleLocation(e.target.value)} />
            <select className='crud-popup-input' value={inputCrudStyleStatus} onChange={e => setInputCrudStyleStatus(e.target.value)}>
              <option value='ongoing'>Ongoing</option>
              <option value='terminated'>Terminated</option>
            </select>
            <button className='popup-button' onClick={saveEditedCrudStyle}>Save</button>
            <button className='popup-button' onClick={() => setIsEditPopupOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EducationCrud;
