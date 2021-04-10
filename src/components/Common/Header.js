import React from 'react';
import { useHistory } from "react-router-dom";
import * as HeaderStyle from '../../assets/styles/Common/Header';

import { connect } from 'react-redux';
import { setAuth } from '../../actions/Auth';
import { setHeader } from '../../actions/Header';

const Header = ({ auth, admin, option, onChangeAuth, onChangeOption }) => {
    let history = useHistory();

    const local = localStorage.getItem('userItem');

    if(local) {
        onChangeAuth(true, JSON.parse(local).admin);
    }

    const handleSignOut = () => {
        localStorage.removeItem('userItem');
        onChangeOption(0);
        onChangeAuth(false, false);
        history.push({
            pathname: '/'
        })
    }

    return (
        <HeaderStyle.Container>
            <HeaderStyle.Contents>
                <HeaderStyle.Logo onClick={() => {onChangeOption(0);history.push('/');}}>Kayin{admin && " Admin"}</HeaderStyle.Logo>
                <HeaderStyle.Menu>
                    <HeaderStyle.MenuItem display={admin} option={option} onClick={() => auth ? onChangeOption(1) : alert("메뉴 접근 관한이 없습니다")}>Notice</HeaderStyle.MenuItem>
                    <HeaderStyle.MenuItem display={admin} option={option} onClick={() => auth ? onChangeOption(2) : alert("메뉴 접근 관한이 없습니다")}>Work</HeaderStyle.MenuItem>
                    { auth ?
                        <HeaderStyle.MenuItem onClick={() => handleSignOut()}>Sign Out</HeaderStyle.MenuItem>
                    :
                        <HeaderStyle.MenuItem onClick={() => {onChangeOption(0);history.push('/signin')}}>Sign In</HeaderStyle.MenuItem>
                    }
                </HeaderStyle.Menu>
            </HeaderStyle.Contents>
        </HeaderStyle.Container>
    )
}

let mapStateToProps = (state) => {
    return {
        auth: state.auth.auth,
        admin: state.auth.admin,
        option: state.header.option
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeAuth: (auth, admin) => dispatch(setAuth(auth, admin)),
        onChangeOption: (option) => dispatch(setHeader(option))
    }
}

const HeaderConnect = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderConnect;