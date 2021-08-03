import AuthFrom from 'components/AuthForm';
import { authService, fbInstance } from 'firebaseInstance';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faGoogle,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Auth = () => {

    const onSocialClick = async (event) => {

        const {
            target: {
                name
            },
        } = event;

        let provider;

        if (name === "google") {
            // 구글로 로그인하기가 클릭 되었을 때
            provider = new fbInstance.auth.GoogleAuthProvider();

        }
        else if (name === "github") {
            // 깃허브로 로그인하기가 클릭되었을 때
            provider = new fbInstance.auth.GithubAuthProvider();
        }

        await authService.signInWithPopup(provider);

    };

    return (
        <div className="authContainer">
            <FontAwesomeIcon
                icon={faTwitter}
                color={"#04AAFF"}
                size="3x"
                style={{ marginBottom: 30 }}
            />
            <AuthFrom />
            <div className="authBtns">
                <button onClick={onSocialClick} name="google" className="authBtn">
                    Continue with Google
                    <FontAwesomeIcon icon={faGoogle} />
                </button>
                <button onClick={onSocialClick} name="github" className="authBtn">
                    Continue with Github
                    <FontAwesomeIcon icon={faGithub} />
                </button>
            </div>
        </div>
    );
};

export default Auth;