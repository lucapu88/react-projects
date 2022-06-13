import React from 'react';

const titleStyle = {
  width: 'fit-content',
  fontVariant: 'small-caps',
  position: 'relative',
  display: 'grid',
  placeItems: 'center',
};

const Title = ({ text }) => {
  return (
    <div style={titleStyle}>
      <h1>{text || 'Titolo'}</h1>
    </div>
  );
};

export default Title;
