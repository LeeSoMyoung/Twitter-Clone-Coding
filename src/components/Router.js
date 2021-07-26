import React, { useState } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';

const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return(
        <Router>
            <Switch>
                {isLoggedIn ? 
                // 로그인 되었을 때 : 홈 화면을 표시한다.
                <Route exact path="/">
                    <Home />
                </Route> 
                : 
                // 로그인이 안 되어 있을 때 : 로그인 화면을 표시한다.
                <Route exact path="/">
                    <Auth />
                    </Route>};
            </Switch>
        </Router>
    );
}

export default AppRouter;