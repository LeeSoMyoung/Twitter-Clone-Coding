import React, { useState } from 'react';
import { authService } from 'firebaseInstance';

const inputStyles = {};

const AuthFrom = () => {

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

    return (
        <>
            <form onSubmit={onSubmit} className="container">
                <input
                    name="email"
                    type="email" placeholder="email" 
                    required
                    value={email}
                    onChange={onChange}
                    className="authInput" />
                <input
                    name="password"
                    type="password" placeholder="password" required
                    value={password}
                    onChange={onChange}
                    className="authInput" />
                
                <input
                type="submit" 
                className="authInput authSubmit"
                value={newAccount ? "회원가입" : "로그인"} />
                {error && <span className="authError">{error}</span>}
            </form>
            <span onClick={toggleAccount} className="authSwitch">
                {newAccount ? "로그인" : "계정 생성하기"}
            </span>
        </>
    );
}

export default AuthFrom;