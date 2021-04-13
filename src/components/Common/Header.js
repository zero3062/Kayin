import React, { useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import * as HeaderStyle from '../../assets/styles/Common/Header';
import menubarImg from '../../assets/images/menubar.png';
import crossImg from '../../assets/images/cross.png';

import { connect } from 'react-redux';
import { setAuth } from '../../actions/Auth';
import { setHeader, setMenubar } from '../../actions/Header';

const Header = ({ auth, admin, option, menubar, onChangeAuth, onChangeOption, onChangeMenuBar }) => {
    let history = useHistory();
    let location = useLocation();

    useEffect(() => {
        console.log(location.pathname);
        if(location.pathname.indexOf("notice") != -1) {
            onChangeOption(1);
        } else {
            onChangeOption(0);
        }
    }, [location.pathname, onChangeOption])

    const local = localStorage.getItem('userItem');

    if(local) {
        onChangeAuth(true, JSON.parse(local).admin);
    }

    const handleMain = () => {
        onChangeOption(0);
        onChangeMenuBar(false);
        history.push({
            pathname: auth ? '/admin' : '/'
        });
    }

    const handleNotice = () => {
        if(auth) {
            onChangeOption(1);
            onChangeMenuBar(false);
            history.push('/notice');
        } else {
            alert("메뉴 접근 관한이 없습니다");
            onChangeMenuBar(false);
            history.push({pathname: '/'})
        }
    }

    const handleMenuSelect = (num) => {
        if(auth) {
            onChangeOption(num);
            onChangeMenuBar(false);
        } else {
            alert("메뉴 접근 관한이 없습니다");
            onChangeMenuBar(false);
            history.push({
                pathname: '/'
            })
        }
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
        <HeaderStyle.Container menubar={menubar}>
            <HeaderStyle.Contents>
                <HeaderStyle.Logo onClick={() => handleMain()}>Kayin{admin && " Admin"}</HeaderStyle.Logo>
                <HeaderStyle.Menu>
                    <HeaderStyle.MenuItem display={admin} option={option} onClick={() => handleNotice()}>Notice</HeaderStyle.MenuItem>
                    <HeaderStyle.MenuItem display={admin} option={option} onClick={() => handleMenuSelect(2)}>Work</HeaderStyle.MenuItem>
                    { auth ?
                        <HeaderStyle.MenuItem onClick={() => handleSignOut()}>Sign Out</HeaderStyle.MenuItem>
                    :
                        <HeaderStyle.MenuItem onClick={() => {onChangeOption(0);history.push('/signin')}}>Sign In</HeaderStyle.MenuItem>
                    }
                    {   menubar ?
                        <HeaderStyle.MenuBarIcon  onClick={() => onChangeMenuBar(false)} src={crossImg}/>
                        :
                        <HeaderStyle.MenuBarIcon  onClick={() => onChangeMenuBar(true)} src={menubarImg}/>
                    }
                </HeaderStyle.Menu>
                <HeaderStyle.SubMenu menubar={menubar}>
                    <HeaderStyle.SubMenuItem display={admin} option={option} onClick={() => handleNotice()}>Notice</HeaderStyle.SubMenuItem>
                    <HeaderStyle.SubMenuItem display={admin} option={option} onClick={() => handleMenuSelect(2)}>Work</HeaderStyle.SubMenuItem>
                    { auth ?
                        <HeaderStyle.SubMenuItem onClick={() => {onChangeMenuBar(false);handleSignOut()}}>Sign Out</HeaderStyle.SubMenuItem>
                    :
                        <HeaderStyle.SubMenuItem onClick={() => {onChangeOption(0);onChangeMenuBar(false);history.push('/signin')}}>Sign In</HeaderStyle.SubMenuItem>
                    }
                </HeaderStyle.SubMenu>
            </HeaderStyle.Contents>
        </HeaderStyle.Container>
    )
}

let mapStateToProps = (state) => {
    return {
        auth: state.auth.auth,
        admin: state.auth.admin,
        option: state.header.option,
        menubar: state.header.menubar
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeAuth: (auth, admin) => dispatch(setAuth(auth, admin)),
        onChangeOption: (option) => dispatch(setHeader(option)),
        onChangeMenuBar: (menubar) => dispatch(setMenubar(menubar))
    }
}

const HeaderConnect = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderConnect;