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
        <div className="container">
            <form onSubmit={onSubmit} className="profileForm">
                <input type="text"
                    onChange={onChange}
                    autoFocus
                    value={newDisplayName}
                    className="formInput"
                    placeholder="바꾸실 이름을 입력하세요." />
                <input type="submit"
                    value="프로필 업데이트하기"
                    className="formBtn"
                    style={{
                        marginTop: 10,
                    }} />
            </form>
            <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
                로그아웃
            </span>
        </div>
    );
};

export default Profile;