import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ExperienceDetail(props) {

  const { id } = props.match.params; // get the id parameter from the URL
  const [experience, setExperience] = useState({});

  const url = 'http://127.0.0.1:8000/';


  useEffect = task => {
    axios.get(url+ `experience/${task.id}/details/`)
      .then(res => {
        setExperience(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }


  return (
    <div>
      <h1>{experience.title}</h1>
      <p>{experience.description}</p>
    </div>
  )
}

export default ExperienceDetail;