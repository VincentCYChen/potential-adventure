import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import firebaseConfig from '../../src/firebase.js';

firebase.initializeApp(firebaseConfig);

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
  const [selectedImage, setSelectedImage] = useState(undefined);
  const [imgUrl, setImgUrl] = useState('');

  useEffect(() => {
    const handleUploadImage = () => {
      const storageRef = firebase.storage().ref();
      const fileName = selectedImage.name;
      const imageRef = storageRef.child(`images/${fileName}`);
      imageRef.put(selectedImage).then((snapshot) => {
        if (snapshot.state === 'success') {
          snapshot.ref.getDownloadURL().then((url) => setImgUrl(url));
          setSelectedImage(undefined);
        }
      });
    };
    if (selectedImage !== undefined) {
      handleUploadImage();
    }
  }, [selectedImage, imgUrl]);

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
      imageUrl: imgUrl,
    };
    console.log('fired');
    axios
      .post('http://localhost:3000/exhibitions', data, config)
      .then(() => {
        setName('');
        setTitle('');
        setOpening('');
        setClosing('');
        setVenue('');
        setAddress('');
        setCity('');
        setPressRelease('');
        setImgUrl('');
      })
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

        <label htmlFor="upload">Upload Image</label>
        <input
          type="file"
          name="upload"
          id="upload"
          onChange={(e) => setSelectedImage(e.target.files[0])}
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
