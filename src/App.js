import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import * as AppStyle from './assets/styles/App';
import Header from './components/Common/Header';
import { Main, SignIn, SignUp, Forgot, Admin, Notice, NoticeView, Work, WorkWrite, WorkView } from './pages/index';

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
                    <Route path="/notice" exact component={Notice}/>
                    <Route path="/notice/:id" component={NoticeView}/>
                    <Route path="/work" exact component={Work}/>
                    <Route path="/work/write"  component={WorkWrite}/>
                    <Route path="/work/:id" component={WorkView}/>  
                </Switch>
            </AppStyle.Container>
        </BrowserRouter>
    )
}

export default App;
