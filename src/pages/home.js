import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import TweetInput from '../components/tweetinput';
import TweetList from '../components/tweetlist';
import { getTweets, postTweet } from '../api/tweets';

const Home = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    getTweets().then(setTweets);
  }, []);

  const handlePost = async (text) => {
    const newTweet = await postTweet(text);
    setTweets([newTweet, ...tweets]);
  };

  return (
    <Layout>
      <div className="main-feed">
        <TweetInput onPost={handlePost} />
        <TweetList tweets={tweets} />
      </div>
    </Layout>
  );
};

export default Home;
