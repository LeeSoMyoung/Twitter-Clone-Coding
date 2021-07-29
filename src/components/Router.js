import React, { useState } from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Auth from 'routes/Auth';
import Home from 'routes/Home';
import Navigation from 'components/Navigation';
import Profile from 'routes/Profile';

const AppRouter = ({ isLoggedIn, userObj }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Switch>
                {isLoggedIn ?
                    // 로그인 되었을 때 : 홈 화면을 표시한다.
                    <>
                        <Route exact path="/">
                            <Home userObj={userObj} />
                        </Route>
                        <Route exact path="/profile">
                            <Profile />
                        </Route>
                    </>
                    :
                    // 로그인이 안 되어 있을 때 : 로그인 화면을 표시한다.
                    <>
                        <Route exact path="/">
                            <Auth />
                        </Route>
                    </ >
                };
            </Switch>
        </Router>
    );
}

export default AppRouter;