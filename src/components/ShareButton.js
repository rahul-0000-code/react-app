import React from 'react';
import './ShareButton.css';

const ShareButton = ({ imageUrl }) => {
  const shareOnFacebook = () => {
    // Construct the Facebook share URL with the current page's URL
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };

  const shareOnTwitter = () => {
    // Construct the Twitter share URL with the current page's URL
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };

  const shareOnWhatsApp = () => {
    // Construct the WhatsApp share URL with the current page's URL
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };

  return (
    
    <div className="share-button-container">
       {/* Button to share on Facebook */}
      <button className="share-button facebook" onClick={shareOnFacebook}>
        Share on Facebook
      </button>
      {/* Button to share on Twitter */}
      <button className="share-button twitter" onClick={shareOnTwitter}>
        Share on Twitter
      </button>
      {/* Button to share on WhatsApp */}
      <button className="share-button whatsapp" onClick={shareOnWhatsApp}>
        Share on WhatsApp
      </button>
    </div>
  );
};

export default ShareButton;
