import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../pages-style/crud-style.css';
import '../../pages-style/button-styling.css';

function PresentationCrud() {
  const url = 'http://127.0.0.1:8000/';
  const [presentations, setPresentations] = useState([]);
  const [inputPresentationTitle, setInputPresentationTitle] = useState('');
  const [inputPresentationDescription, setInputPresentationDescription] = useState('');
  const [inputImage, setInputImage] = useState(null);
  const [activePresentation, setActivePresentation] = useState(null);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);

  const getAllPresentations = () => {
    const token = localStorage.getItem('access_token');
    axios.get(url + 'get_presentation/presentation/list/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      setPresentations(res.data);
    }).catch(err => {
      console.error('Error fetching presentation data:', err);
    });
  };

  const addPresentation = () => {
    const token = localStorage.getItem('access_token');
    const formData = new FormData();
    formData.append('title', inputPresentationTitle);
    formData.append('description', inputPresentationDescription);
    if (inputImage) {
      formData.append('image', inputImage);
    }

    axios.post(url + 'get_presentation/presentation/create/', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => {
      const newPresentation = res.data;
      setPresentations(prevPresentations => [...prevPresentations, newPresentation]);
      setInputPresentationTitle('');
      setInputPresentationDescription('');
      setInputImage(null);
    }).catch(err => {
      console.error(err);
    });
  };

  const updatePresentation = presentation => {
    setActivePresentation(presentation);
    setInputPresentationTitle(presentation.title);
    setInputPresentationDescription(presentation.description);
    setIsEditPopupOpen(true);
  };

  const saveEditedPresentation = () => {
    const token = localStorage.getItem('access_token');
    const formData = new FormData();
    formData.append('title', inputPresentationTitle);
    formData.append('description', inputPresentationDescription);
    if (inputImage) {
      formData.append('image', inputImage);
    }

    axios.put(url + `get_presentation/presentation/${activePresentation.id}/update/`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => {
      getAllPresentations();
      setIsEditPopupOpen(false);
    }).catch(err => {
      console.error(err);
    });
  };

  const deletePresentation = presentation => {
    axios.delete(url + `get_presentation/presentation/${presentation.id}/destroy/`)
      .then(res => {
        getAllPresentations();
      }).catch(err => {
        console.error(err);
      });
  };

  const handleChangeTitle = e => setInputPresentationTitle(e.target.value);
  const handleChangeDescription = e => setInputPresentationDescription(e.target.value);
  const handleImageChange = e => setInputImage(e.target.files[0]);

  useEffect(() => {
    getAllPresentations();
  }, []);

  return (
    <div className='home-container'>
      <div className='form-container'>
        <div className='crud-style-input'>
          <input type="text" placeholder="Add a title" value={inputPresentationTitle} onChange={handleChangeTitle} />
          <input type="text" placeholder="Add a description" value={inputPresentationDescription} onChange={handleChangeDescription} />
          <input type="file" onChange={handleImageChange} />
          <button onClick={addPresentation} disabled={!inputPresentationTitle || !inputPresentationDescription || !inputPresentationTitle.trim() || !inputPresentationDescription.trim()} className='crud-style-button'>Add</button>
        </div>
      </div>
      <div className='crud-style-container'>
        {presentations.map(presentation => (
          <div className='crud-style-content' key={presentation.id}>
            <div className='crud-style-title'>{presentation.title}</div>
            <div className='crud-style-description'>{presentation.description}</div>
            <img src={presentation.image} alt="Presentation" className='crud-style-image' />
            <div className='crud-style-actions'>
              <button onClick={() => updatePresentation(presentation)} className='crud-style-button'>Edit</button>
              <button onClick={() => deletePresentation(presentation)} className='crud-style-button'>Delete</button>
            </div>
          </div>
        ))}
      </div>
      {isEditPopupOpen && activePresentation && (
        <div className='popup-container'>
          <div className='popup-content'>
            <h2 className='popup-title'>Edit Presentation</h2>
            <input type='text' value={inputPresentationTitle} onChange={handleChangeTitle} />
            <input type='text' value={inputPresentationDescription} onChange={handleChangeDescription} />
            <input type='file' onChange={handleImageChange} />
            <button onClick={saveEditedPresentation} className='popup-button'>Save</button>
            <button onClick={() => setIsEditPopupOpen(false)} className='popup-button'>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PresentationCrud;
