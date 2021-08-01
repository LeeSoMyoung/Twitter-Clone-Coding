import Tweet from 'components/Tweet';
import { dbService } from 'firebaseInstance';
import React, { useEffect, useState } from 'react';
import TweetFactory from 'components/TweetFactory';

const Home = ({ userObj }) => {

    const TWEETS_KEY = "tweets";

    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        dbService.collection(TWEETS_KEY).onSnapshot((snapshot) => {
            const tweetsArray = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            setTweets(tweetsArray);
        });
    }, []);

    return (
        <div className="container">
            <TweetFactory userObj={userObj} />
            <div style={{ marginTop: 30 }}>
                {tweets.map((tweet) => (
                    <Tweet key={tweet.id} tweetObj={tweet} isOwner={tweet.creatorId === userObj.uid} />
                ))}
            </div>
        </div>
    );
};

export default Home;