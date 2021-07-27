import { authService } from 'firebaseInstance';
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
            setEmail(value)
        }
        else if (name === "password") {
            setPassword(value);
        }
    }

    const onSubmit = (event) => {
        event.preventDefault(); // SPA이므로 refresh되어 정보들이 사라지는 것을 방지

        try {

            if (newAccount) {
                // 새 계정 만들기
                const data = authService.createUserWithEmailAndPassword(email, password);
            }
            else {
                // 로그인 폼 submit
                const data = authService.signInWithEmailAndPassword(email, password);
            }

        } catch (error) {
            console.log(error);
            setError((prev)=>error.message);
        }
    }


    const toggleAccount = () => setNewAccount((prev) => !prev);

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
                <div>{error}</div>
            </form>
            <span onClick={toggleAccount}>
                {newAccount ? "로그인" : "계정 생성하기"}
            </span>
            <div>
                <button>Continue with Google</button>
                <button>Continue with Github</button>
            </div>
        </div>
    );
};

export default Auth;