import Tweet from 'components/Tweet';
import { dbService } from 'firebaseInstance';
import React, { useEffect, useState } from 'react';

const Home = ({ userObj }) => {

    const TWEETS_KEY = "tweets";

    const [tweet, setTweet] = useState("");
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

const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection(TWEETS_KEY).add({
        text: tweet,
        createAt: Date.now(),
        creatorId: userObj.uid,
    });
    setTweet("");
}

const onChange = (event) => {
    const {
        target: { value }
    } = event;
    setTweet(value);
}

return (
    <div>
        <form onSubmit={onSubmit}>
            <input
                placeholder="지금 무얼 하고 있나요?"
                type="text"
                maxLength={120}
                value={tweet}
                onChange={onChange} />

            <input
                type="submit"
                value="Tweet" />

        </form>
        <div>
            {tweets.map((tweet) =>(
                <Tweet key={tweet.id} tweetObj={tweet} isOwner={tweet.creatorId===userObj.uid} />
            ))};
        </div>
    </div>
);
};
export default Home;