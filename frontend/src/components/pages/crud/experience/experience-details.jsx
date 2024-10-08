import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ExperienceDetail(props) {
  const { id } = props;

  const [experience, setExperience] = useState({});

  const url = 'http://127.0.0.1:8000/';

  useEffect(() => {

    axios.get(url + `experience/${id}/details/`)
      .then(res => {
        setExperience(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, [id]);

  return (
    <div>
      <h2>Experience Details</h2>
      <p>Title: {experience.title}</p>
      <p>Description: {experience.description}</p>

    </div>
  );
}

export default ExperienceDetail;
