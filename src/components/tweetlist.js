import React from 'react';
import Tweet from './tweet';

const TweetList = ({ tweets }) => {
  return (
    <div className="tweet-list">
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} content={tweet.content} />
      ))}
    </div>
  );
};

export default TweetList;