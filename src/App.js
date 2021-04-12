import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import * as AppStyle from './assets/styles/App';
import Header from './components/Common/Header';
import { Main, SignIn, SignUp, Forgot, Admin, Notice } from './pages/index';

const App = () => {
    return (
        <BrowserRouter>
            <AppStyle.Container>
                <AppStyle.Header>
                    <Header/>
                </AppStyle.Header>
                <Switch>
                    <Route path="/" exact component={Main}/>
                    <Route path="/signin" component={SignIn}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/forgot" component={Forgot}/> 
                    <Route path="/admin" component={Admin}/>
                    <Route path="/notice" component={Notice}/>
                </Switch>
            </AppStyle.Container>
        </BrowserRouter>
    )
}

export default App;