import React, { useEffect, useState } from 'react';
import ExhibitionEntry from './ExhibitionEntry';
import axios from 'axios';

function Exhibitions() {
  const [exhibitions, setExhibitions] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3000/exhibitions')
      .then((data) => {
        setExhibitions(data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(exhibitions);

  return (
    <div>
      {exhibitions.map((exhibition) => {
        return <ExhibitionEntry exhibition={exhibition} />;
      })}
    </div>
  );
}

export default Exhibitions;
