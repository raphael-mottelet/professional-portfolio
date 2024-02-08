import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ExperienceDetail(props) {
  const { id } = props; // L'identifiant de l'expérience est passé en tant que props

  const [experience, setExperience] = useState({});

  const url = 'http://127.0.0.1:8000/';

  useEffect(() => {
    // Fonction pour charger les détails de l'expérience lorsque le composant est monté
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
      {/* Ajoutez ici d'autres détails de l'expérience si nécessaire */}
    </div>
  );
}

export default ExperienceDetail;
