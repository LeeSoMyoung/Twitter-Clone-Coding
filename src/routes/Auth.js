import { authService, fbInstance } from 'firebaseInstance';
import React, { useState } from 'react';

const Auth = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");

    const onChange = (event) => {
        const {
            target: { name, value }
        } = event;

        if (name === "email") {
            setEmail(value);
        }
        else if (name === "password") {
            setPassword(value);
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault(); // SPA이므로 refresh되어 정보들이 사라지는 것을 방지

        try {

            let data;

            if (newAccount) {
                // 새 계정 만들기
                data = await authService.createUserWithEmailAndPassword(email, password);
            }
            else {
                // 로그인 폼 submit
                data = await authService.signInWithEmailAndPassword(email, password);
            }
            console.log(data);

        }
        catch (error) {
            setError(error.message);
        }
    }


    const toggleAccount = () => setNewAccount((prev) => !prev);

    const onSocialClick= async (event)=>{

        const {
            target:{
                name
            },
        }=event;

        let provider;
        if(name==="google"){
            // 구글로 로그인하기가 클릭 되었을 때
            provider = new fbInstance.auth.GoogleAuthProvider();

        }
        else if(name==="github"){
            // 깃허브로 로그인하기가 클릭되었을 때
            provider = new fbInstance.auth.GithubAuthProvider();
        }

        const data = await authService.signInWithPopup(provider);

    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    name="email"
                    type="email" placeholder="email" required
                    value={email}
                    onChange={onChange} />
                <input
                    name="password"
                    type="password" placeholder="password" required
                    value={password}
                    onChange={onChange} />
                <input type="submit" value={newAccount ? "회원가입" : "로그인"} />
                {error}
            </form>
            <span onClick={toggleAccount}>
                {newAccount ? "로그인" : "계정 생성하기"}
            </span>
            <div>
                <button name="google"
                onClick={onSocialClick}>Continue with Google</button>
                <button name="github"
                onClick={onSocialClick}>Continue with Github</button>
            </div>
        </div>
    );
};

export default Auth;