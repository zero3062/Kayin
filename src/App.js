import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import * as AppStyle from './assets/styles/App';
import Header from './components/Common/Header';
import { Main, SignIn, SignUp, Forgot } from './pages/index';

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
                </Switch>
            </AppStyle.Container>
        </BrowserRouter>
    )
}

export default App;