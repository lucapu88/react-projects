import React from 'react';

const SingleColor = ({ rgb, type, weight }) => {
  const rgbToHex = (r, g, b) =>
    '#' +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('');
  return (
    <article
      className={`${type}`}
      style={{ backgroundColor: rgbToHex(...rgb), margin: '20px' }}
    >
      Single Color
    </article>
  );
};

export default SingleColor;
