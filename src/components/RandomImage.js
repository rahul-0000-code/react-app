import React, { useState, useEffect } from 'react';
import './RandomImage.css';
import ShareButton from './ShareButton';

const RandomImage = ({ onImageLoad }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = async () => {
    try {
      const response = await fetch('https://source.unsplash.com/random');
      const imageUrl = response.url;
      setImage(imageUrl);
      onImageLoad(imageUrl);
    } catch (error) {
      console.error('Error fetching random image:', error);
    }
  };

  return (
    <div className="random-image-container">
        {/* Display the random image */}
      <img src={image} alt="Random" className="random-image" />

    </div>
  );
};

export default RandomImage;
