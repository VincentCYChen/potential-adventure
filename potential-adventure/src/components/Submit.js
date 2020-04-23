import React, { useState } from 'react';
import axios from 'axios';

function Submit() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [opening, setOpening] = useState('');
  const [closing, setClosing] = useState('');
  const [venue, setVenue] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [addressState, setAddressState] = useState('');
  const [zip, setZip] = useState('');
  const [pressRelease, setPressRelease] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const data = {
      name,
      title,
      opening,
      closing,
      venue,
      address,
      city,
      state: addressState,
      zip,
      pressRelease,
      imageUrl: 'text',
    };
    console.log('fired');
    axios
      .post('http://localhost:3000/exhibitions', data, config)
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="title">Exhibition Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="opening-date">Opening Date</label>
        <input
          type="text"
          name="opening-date"
          id="opening-date"
          value={opening}
          onChange={(e) => setOpening(e.target.value)}
        />

        <label htmlFor="closing-date">Closing-date</label>
        <input
          type="text"
          name="closing-date"
          id="closing-date"
          value={closing}
          onChange={(e) => setClosing(e.target.value)}
        />

        <label htmlFor="venue">Venue</label>
        <input
          type="text"
          name="venue"
          id="venue"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
        />

        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <label htmlFor="state">State</label>
        <input
          type="text"
          name="state"
          id="state"
          value={addressState}
          onChange={(e) => setAddressState(e.target.value)}
        />

        <label htmlFor="zip">Zip Code</label>
        <input
          type="text"
          name="zip"
          id="zip"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />

        <label htmlFor="pr">Press Release</label>
        <textarea
          id="pr"
          value={pressRelease}
          onChange={(e) => setPressRelease(e.target.value)}
        />
        <input type="submit" value="submit" onClick={(e) => handleSubmit(e)} />
      </form>
    </div>
  );
}

export default Submit;
