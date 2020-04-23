import React from 'react';

function ExhibitionEntry({ exhibition }) {
  return (
    <div>
      <p>{exhibition.title}</p>
      <p>Through {exhibition.closing}</p>
      <p>{exhibition.venue}</p>
      <p>
        {exhibition.address}, {exhibition.city}, {exhibition.state},{' '}
        {exhibition.zip}
      </p>
      <p>{exhibition.pressRelease}</p>
    </div>
  );
}

export default ExhibitionEntry;
