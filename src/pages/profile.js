import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import TweetList from '../components/tweetlist';

const dummyUser = {
  username: 'kyle_nilo',
  name: 'Kyle Nilo',
  bio: 'Web Dev & Student | React Enthusiast',
  location: 'Binangonan, PH',
};

const Profile = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const mockTweets = [
      { id: 1, content: 'Just finished setting up my React project!' },
      { id: 2, content: 'Learning fetch API in React is fun 🔥' },
    ];
    setTweets(mockTweets);
  }, []);

  return (
    <Layout>
      <div className="profile-header">
        <h2>{dummyUser.name}</h2>
        <p>@{dummyUser.username}</p>
        <p>{dummyUser.bio}</p>
        <p>📍 {dummyUser.location}</p>
      </div>
      <h3 className="section-title">Tweets</h3>
      <TweetList tweets={tweets} />
    </Layout>
  );
};

export default Profile;