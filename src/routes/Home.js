import Tweet from 'components/Tweet';
import { v4 as uuidv4 } from 'uuid';
import { dbService, storageService } from 'firebaseInstance';
import React, { useEffect, useState } from 'react';

const Home = ({ userObj }) => {

    const TWEETS_KEY = "tweets";

    const [tweet, setTweet] = useState("");
    const [tweets, setTweets] = useState([]);
    const [attachment, setAttachment] = useState("");

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
        let attachmentURL = "";

        if (attachment !== "") {
            const attachmentRef = storageService.ref().child(`${userObj.id}/${uuidv4()}`) // 이미지 경로
            const response = await attachmentRef.putString(attachment, "data_url");
            attachmentURL = await response.ref.getDownloadURL();
        }

        const newTweet = {
            text: tweet,
            createAt: Date.now(),
            creatorId: userObj.uid,
            attachmentURL,
        }

        await dbService.collection(TWEETS_KEY).add(newTweet);
        setTweet("");
        setAttachment("");
    }

    const onChange = (event) => {
        const {
            target: { value }
        } = event;
        setTweet(value);
    }

    const onFileChange = (event) => {
        const {
            target: { files }
        } = event;

        const theFile = files[0];
        const reader = new FileReader();

        reader.onloadend = (finishedEvent) => {
            const {
                currentTarget: { result },
            } = finishedEvent;

            setAttachment(result);
        };

        if (attachment !== "") {
            reader.readAsDataURL(theFile);
        }
    }

    const onClearAttachmentClick = () => setAttachment(null);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    placeholder="지금 무얼 하고 있나요?"
                    type="text"
                    maxLength={120}
                    value={tweet}
                    onChange={onChange} />

                <input type="file"
                    accept="image/*"
                    onChange={onFileChange} />

                <input
                    type="submit"
                    value="트윗하기" />

                {attachment && (
                    <div>
                        <img src={attachment}
                            width="100px"
                            height="100px" />

                        <button
                            onClick={onClearAttachmentClick}>이미지 제거</button>
                    </div>
                )}

            </form>
            <div>
                {tweets.map((tweet) => (
                    <Tweet key={tweet.id} tweetObj={tweet} isOwner={tweet.creatorId === userObj.uid} />
                ))}
            </div>
        </div>
    );
};

export default Home;