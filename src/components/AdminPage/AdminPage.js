import React from 'react';
import { useHistory } from "react-router-dom";

import * as AdminPageStyle from '../../assets/styles/AdminPage/AdminPage';
import AdminPageList from './AdminPageList/AdminPageList';

import { connect } from 'react-redux';
import { setAuth } from '../../actions/Auth';

const AdminPage = ({onChangeAuth}) => {
    let history = useHistory();

    const local = localStorage.getItem('userItem');

    if(local && JSON.parse(local).admin) {
        onChangeAuth(true, JSON.parse(local).admin);
    } else {
        onChangeAuth(false, false);
        history.push({
            pathname: '/'
        })
    }

    const lists = [
        {work_id : 1, title: "aasdfasdfasdfasdfasdfasdfasdfsdf", user_id: "1234", date: '2021-04-22', option: true},
        {work_id : 1, title: "asdf", user_id: "1234", date: '2021-04-22', option: true},
        {work_id : 1, title: "asdf", user_id: "1234", date: '2021-04-22', option: true},
        {work_id : 1, title: "asdf", user_id: "1234", date: '2021-04-22', option: true},
        {work_id : 1, title: "asdf", user_id: "1234", date: '2021-04-22', option: true},
        {work_id : 1, title: "asdf", user_id: "1234", date: '2021-04-22', option: true},
        {work_id : 1, title: "asdf", user_id: "1234", date: '2021-04-22', option: true},
        {work_id : 1, title: "asdf", user_id: "1234", date: '2021-04-22', option: true},
        {work_id : 1, title: "asdf", user_id: "1234", date: '2021-04-22', option: true},
        {work_id : 1, title: "asdf", user_id: "1234", date: '2021-04-22', option: true},
    ]

    return (
        <AdminPageStyle.Container>
            <AdminPageStyle.Contents>
                <AdminPageStyle.Viewer>
                    <AdminPageStyle.Header>
                        <AdminPageStyle.HeaderTitle>제목</AdminPageStyle.HeaderTitle>
                        <AdminPageStyle.HeaderID>ID</AdminPageStyle.HeaderID>
                        <AdminPageStyle.HeaderDate>날짜</AdminPageStyle.HeaderDate>
                        <AdminPageStyle.HeaderOption>옵션</AdminPageStyle.HeaderOption>
                    </AdminPageStyle.Header>
                    <AdminPageStyle.List>
                        <AdminPageList lists={lists}></AdminPageList>
                    </AdminPageStyle.List>
                </AdminPageStyle.Viewer>
            </AdminPageStyle.Contents>
        </AdminPageStyle.Container>
    )
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeAuth: (auth, admin) => dispatch(setAuth(auth, admin)),
    }
}

const AdminPageConnect = connect(null, mapDispatchToProps)(AdminPage);

export default AdminPageConnect;
