import React, { useState, useEffect } from 'react';
import './typingtext.css';

const TypingText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const newDisplayText = text.slice(0, displayText.length + 1);
      setDisplayText(newDisplayText);
      if (newDisplayText === text) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, [text, displayText]);

  return (
    <div className="TypingText">
      {displayText}
    </div>
  );
};

export default TypingText;
