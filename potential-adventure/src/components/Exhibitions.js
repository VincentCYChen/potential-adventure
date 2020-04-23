import React, { useEffect, useState } from 'react';
import ExhibitionEntry from './ExhibitionEntry';
import axios from 'axios';

function Exhibitions() {
  const [exhibitions, setExhibitions] = useState({});
  useEffect(() => {
    axios
      .get('http://localhost:3000/exhibitions')
      .then((data) => {
        setExhibitions(data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <p>Current Exhibitions</p>
      <ExhibitionEntry />
    </div>
  );
}

export default Exhibitions;
