import React, { useState } from 'react';

const TweetInput = ({ onPost }) => {
  const [text, setText] = useState('');

  const handlePost = () => {
    if (text.trim()) {
      onPost(text);
      setText('');
    }
  };

  return (
    <div className="tweet-input">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's happening?"
         style={{ resize: 'none' }}
      />
      <button onClick={handlePost}>Tweet</button>
    </div>
  );
};

export default TweetInput;