import axios from 'axios'
import { active } from 'd3';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';


import './pages-style/homepage.css';
import './pages-style/button-styling.css';

function Homepage() {

  const url = 'http://127.0.0.1:8000/';
  const [Experience, setExperience] = useState([]);

  const [inputExperienceTitle, setInputExperienceTitle] = useState('');
  const [inputExperienceTitleDescription, setInputExperienceTitleDescription] = useState('');
  const [activeExperience, setactiveExperience] = useState(null);

  const getAllExperience = () => {
    axios.get(url + 'experience/list/')
      .then(res => {
        console.log("Response data:", res.data);
        setExperience(res.data)
        console.log(res.data)
      })
      .catch (err => {
        console.error(err);
      })
  }

  const ExperienceMarkStatus = task => {
    axios.put(url+ `experience/${task.id}/update/`,{
      'title': task.title,
      'status': !task.status
    }).then(res => {
      getAllExperience()
    }).then(err => {
      console.error(err)
    })
  }


  const addExperience= () => {

    if(activeExperience == null) {

    axios.post(url+ 'experience/create/',{
      'title': inputExperienceTitle,
      'description': inputExperienceTitleDescription,
      'status': false
    }).then(res => {
      getAllExperience()
    }).then(err => {
      console.error(err)
    })

  }else{

    axios.put(url+ `experience/${activeExperience.id}/update/`,{
      'title': inputExperienceTitle,
      'description': inputExperienceTitleDescription,
      'status': activeExperience.status
    }).then(res => {
      setInputExperienceTitle()
      setInputExperienceTitleDescription()
      getAllExperience()
    }).then(err => {
      console.error(err)
    })
  }}

  const updateExperience = task => {
    setactiveExperience(task)
    setInputExperienceTitle(task.title)
    setInputExperienceTitleDescription(task.description)
  }

  const deleteExperience = task => {
    axios.delete(url+`experience/${task.id}/destroy/`)
    .then(res => {
      getAllExperience()
    })
    .catch(err => {
      console.error(err)
    })
  }

  const handleChange = (e) => {
    setInputExperienceTitle(e.target.value);
    console.log(inputExperienceTitle);
  }
  
  const DescriptionChange = (f) => {
    setInputExperienceTitleDescription(f.target.value);
    console.log(inputExperienceTitleDescription);
  }

  useEffect(() => {
    getAllExperience()
  },[])


/*     

Link supposed to send the user to the view 

<Link to={`/Experience/${task.id}`}>                   
  <button className="Experience-delete"></button>
</Link>
  */
  
  return (
    <div className='home-container'>

        <div className='form-container'>
          <div className='Experience-input'>
            <input 
              type="text" 
              placeholder="Ajoutez un titre"
              value={inputExperienceTitle}
              onChange={e => handleChange(e)}
              />
            
            <input 
              type="text" 
              placeholder="Ajoutez une description"
              value={inputExperienceTitleDescription}
              onChange={f => DescriptionChange(f)}
              />


            <button 
                onClick={addExperience} 
                disabled={!inputExperienceTitle.trim()}
                className='Experience-field'>

              Valider
            </button>
          </div>
        </div>

      <div className='Experience-container'>
        <ul>
          {
            Experience.map(task => {

              return (
                <div className='Experience-content'>
                  <input type="checkbox" onChange={e => {ExperienceMarkStatus(task)}} className='Experience-checkbox'/>
                      {
                        task.status ?
                          <strike>{task.title}</strike>
                          :task.title
                      }

                  <div className='home-button'>
                    <button 
                      onClick={e => updateExperience(task)} 
                      className='Experience-edit'>Edit</button>
                    <button className="Experience-delete" onClick={e => {deleteExperience(task)}}>
                      Delete
                    </button>

                  </div>
                </div>
              )
              
            })
          }
          
        </ul>
      </div>
    </div>
  )
}

export default Homepage