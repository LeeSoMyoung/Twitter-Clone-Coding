import { dbService } from 'firebaseInstance';
import React, { useEffect, useState } from 'react';

const Home = () => {

    const TWEETS_KEY = "tweets";

    const [tweet, setTweet] = useState("");
    const [tweets, setTweets] = useState([]);

    const getTweets = async () =>{
        const allTweets = await dbService.collection(TWEETS_KEY).get();
        allTweets.forEach((document) =>{
            const tweetObject = {
                ...document.data(),
                id: document.id,
            };

            setTweets((prev)=>[document.data(), ...prev]);
        });
    };

    useEffect(()=>{
        getTweets();
    },[]);

    const onSubmit = async (event) =>{
        event.preventDefault();
        await dbService.collection(TWEETS_KEY).add({
            tweet,
            createAt: Date.now(),
        });
        setTweet("");
    }

    const onChange = (event) =>{
        const {
            target:{value}
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
            {tweets.map((tweet)=>
            <div key = {tweet.id}>
                <h4>{tweet.tweet}</h4>
            </div>)}
        </div>
    </div>
    );
};
export default Home;