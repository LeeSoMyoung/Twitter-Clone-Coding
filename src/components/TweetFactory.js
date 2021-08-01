import { v4 as uuidv4 } from 'uuid';
import { dbService, storageService } from 'firebaseInstance';
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

const TweetFactory = ({ userObj }) => {

    const TWEETS_KEY = "tweets";

    const [tweet, setTweet] = useState("");
    const [attachment, setAttachment] = useState("");

    const onSubmit = async (event) => {
        if (tweet === "") {
            // 빈 트윗 작성시, 아무런 조치를 취하지 않고 메소드를 종료시킨다.
            return;
        }
        event.preventDefault();
        let attachmentUrl = "";
        if (attachment !== "") {
            const attachmentRef = storageService
                .ref()
                .child(`${userObj.uid}/${uuidv4()}`);
            const response = await attachmentRef.putString(attachment, "data_url");
            attachmentUrl = await response.ref.getDownloadURL();
        }
        const nweetObj = {
            text: tweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
            attachmentUrl,
        };
        await dbService.collection(TWEETS_KEY).add(nweetObj);
        setTweet("");
        setAttachment("");
    };

    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setTweet(value);
    };
    const onFileChange = (event) => {
        const {
            target: { files },
        } = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {
                currentTarget: { result },
            } = finishedEvent;
            setAttachment(result);
        };
        reader.readAsDataURL(theFile);
    };

    const onClearAttachment = () => setAttachment(null);

    return (
        <form onSubmit={onSubmit} className="factoryForm">
            <div className="factoryInput__container">
                <input
                    value={tweet}
                    onChange={onChange}
                    type="text"
                    className="factoryInput__input"
                    placeholder="지금 무얼 하고 있나요?"
                    maxLength={120}
                />
                <input type="submit" value="&rarr;" className="factoryInput__arrow" />
            </div>

            <label for="attach-file" className="factoryInput__label">
                <span>이미지 추가하기</span>
                <FontAwesomeIcon icon={faPlus} />
            </label>

            <input
                id="attach-file"
                style={{
                    opacity: 0,
                }}
                type="file"
                accept="image/*"
                onChange={onFileChange} />
            <input type="submit" value="트윗하기" />
            {attachment && (
                <div className="factoryForm__attachment">
                    <img
                        src={attachment}
                        style={{
                            backgroundImage: attachment,
                        }}
                    />
                    <div className="factoryForm__clear" onClick={onClearAttachment}>
                        <span>Remove</span>
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
            )}
        </form>
    );
}

export default TweetFactory;