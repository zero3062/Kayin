import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import * as AppStyle from './assets/styles/App';
import Header from './components/Common/Header';
import { Main, SignIn, SignUp, Forgot, AdminNotice, AdminWork, AdminDelete, AdminView, Notice, NoticeView, Work, WorkWrite, WorkView } from './pages/index';

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
                    <Route path="/admin" exact component={AdminNotice}/>
                    <Route path="/admin/notice" exact component={AdminNotice}/>
                    <Route path="/admin/work" exact component={AdminWork}/>
                    <Route path="/admin/work/:id" component={AdminView}/>
                    <Route path="/admin/delete/:id" component={AdminDelete}/>
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
