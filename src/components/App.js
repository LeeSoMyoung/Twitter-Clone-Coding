import React, { useEffect, useState } from 'react';
import AppRouter from 'components/Router';
import { authService } from 'firebaseInstance';

function App() {

  const [init, setInit] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        // 로그인 됐을 때 메인 화면을 띄우기 위해
        setIsLoggedIn(true);
        setUserObj({
          displayName: user.displayName,
          uid:user.uid,
          updateProfile: (args) =>user.updateProfile(args),
        });
      }
      else {
        // 로그아웃 시 로그인 화면을 띄우기 위해
        setIsLoggedIn(false);
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {

    const user = authService.currentUser;

    setUserObj({
      displayName: user.displayName,
      uid:user.uid,
      updateProfile: (args) =>user.updateProfile(args),
    });
  };

  return (
    <>
      {init ? <AppRouter
        refreshUser={refreshUser}
        isLoggedIn={isLoggedIn}
        userObj={userObj} /> : "Initializing..."}
      <footer>&copy; Twitter Clone Coding {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
