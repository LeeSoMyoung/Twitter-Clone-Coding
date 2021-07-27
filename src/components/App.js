import React, { useEffect, useState } from 'react';
import AppRouter from 'components/Router';
import { authService } from 'firebaseInstance';

function App() {

  const [init, setInit] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        // 로그인 됐을 때 메인 화면을 띄우기 위해
        setIsLoggedIn(true);
      }
      else {
        // 로그아웃 시 로그인 화면을 띄우기 위해
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
    {init? <AppRouter isLoggedIn={isLoggedIn} />:"Initializing..."}
      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
