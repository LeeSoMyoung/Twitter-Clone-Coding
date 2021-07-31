import { authService, dbService } from 'firebaseInstance';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Profile = ({ refreshUser, userObj }) => {
    const history = useHistory();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    const TWEETS_KEY = "tweets";

    const onLogOutClick = ({ userObj }) => {
        authService.signOut();
        history.push("/");
    };

    /*const getMyTweets = async () => {
        const tweets = await dbService.collection(TWEETS_KEY)
            .where("creatorId", "==", userObj.uid)
            .orderBy("createAt", "desc")
            .get();

        console.log(tweets.docs.map((doc) => doc.data()));
    }

    useEffect(() => {
        getMyTweets();

    }, []);
*/
    const onChange = async (event) => {
        const {
            target: { value },
        } = event;
        setNewDisplayName(value);
    }

    const onSubmit = async (event) => {

        event.preventDefault();

        if (userObj.displayName !== newDisplayName) {
            // 바꿀 이름이 기존 이름과 다르면 업데이트 시킨다.
            await userObj.updateProfile({
                displayName: newDisplayName,
            });

            refreshUser();
        }
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text"
                    onChange={onChange}
                    placeholder="바꾸실 이름을 입력하세요." />
                <input type="submit"
                    value="프로필 업데이트하기" />
            </form>

            <button
                onClick={onLogOutClick}>로그아웃</button>
        </>
    );
};

export default Profile;