import React from 'react';
import "../App.css"

const Saved = () => {
  const imageUrls = [
    'https://via.placeholder.com/150/0000FF',
    'https://via.placeholder.com/150/FF0000',
    'https://via.placeholder.com/150/00FF00',
    'https://via.placeholder.com/150/FFFF00',
    'https://via.placeholder.com/150/FF00FF',
    'https://via.placeholder.com/150/00FFFF',
    'https://via.placeholder.com/150/000000',
    'https://via.placeholder.com/150/FFFFFF',
    'https://via.placeholder.com/150/808080',
    'https://via.placeholder.com/150/800000'
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px',marginLeft:"20px",marginTop:"20px" }}>
      {imageUrls.map((url, index) => (
        <div key={index} style={{ border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', width: '150px' }}>
          <img src={url} alt={`Card ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
          <div style={{ padding: '10px', textAlign: 'center' }}>Card {index + 1}</div>
        </div>
      ))}
    </div>
  );
};

export default Saved;
