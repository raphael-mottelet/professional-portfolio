import axios from 'axios'
import { active } from 'd3';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';


import './pages-style/homepage.css';
import './pages-style/button-styling.css';

function Homepage() {

  const url = 'http://127.0.0.1:8000/';
  const [experience, setExperience] = useState([]);

  const [inputExperience, setInputExperience] = useState('');
  const [inputExperienceDescription, setInputExperienceDescription] = useState('');
  const [activeExperience, setactiveExperience] = useState(null);

  const getAllExperiences = () => {
    axios.get(url + 'experience/list/')
      .then(res => {
        setExperiences(res.data)
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
      getAllExperiences()
    }).then(err => {
      console.error(err)
    })
  }


  const addExperience= () => {

    if(activeExperience == null) {

    axios.post(url+ 'experience/add/',{
      'title': inputExperience,
      'description': inputExperienceDescription,
      'status': false
    }).then(res => {
      getAllExperiences()
    }).then(err => {
      console.error(err)
    })

  }else{

    axios.put(url+ `experience/${activeExperience.id}/update/`,{
      'title': inputExperience,
      'description': inputExperienceDescription,
      'status': activeExperience.status
    }).then(res => {
      setInputExperience()
      setInputExperienceDescription()
      getAllExperiences()
    }).then(err => {
      console.error(err)
    })
  }}

  const updateExperience = task => {
    setactiveExperience(task)
    setInputExperience(task.title)
    setInputExperienceDescription(task.description)
  }

  const deleteExperience = task => {
    axios.delete(url+`Experience/${task.id}/destroy/`)
    .then(res => {
      getAllExperiences()
    })
    .catch(err => {
      console.error(err)
    })
  }

  const handleChange =(e) => {
    setInputExperience(e.target.value)
    console.log(inputExperience)
  }

  const DescriptionChange =(f) => {
    setInputExperienceDescription(f.target.value)
    console.log(inputExperienceDescription)
  }

  useEffect(() => {
    getAllExperiences()
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
              placeholder="Ajoutez un Experience"
              value={inputExperience}
              onChange={e => handleChange(e)}
              />

            <input 
              type="text" 
              placeholder="Ajoutez une description"
              value={inputExperienceDescription}
              onChange={f => DescriptionChange(f)}
              />

            <button 
                onClick={addExperience} 
                diseabled={!inputExperience.trim()}
                className='Experience-field'>

              Valider
            </button>
          </div>
        </div>

      <div className='Experience-container'>
        <ul>
          {
            Experiences.map(task => {

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