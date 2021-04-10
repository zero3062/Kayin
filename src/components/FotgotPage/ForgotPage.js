import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import * as ForgotPageStyle from '../../assets/styles/FotgotPage/ForgotPage';

import { connect } from 'react-redux';
import { setSign } from '../../actions/Sign';

import axios from 'axios';

const ForgotPage = ({ userId, userPw, onChangeSign }) => {
    let history = useHistory();

    useEffect(() => {
        onChangeSign('', '');
    }, [onChangeSign])

    const handleForgot = () => {
        axios.post(`http://192.168.25.50:8080/user/forgot`, {
            id: userId,
            pw: userPw
        })
        .then(res => {
            console.log(res);

            history.push({
                pathname: '/signin'
            });
        })
        .catch(err => {
            console.log(err);
        })
    }

    const handleKeyDown = (e) => {
        if(e.keyCode === 13) {
            handleForgot();
        }
    }

    return (
        <ForgotPageStyle.Container>
            <ForgotPageStyle.Contents>
                <ForgotPageStyle.Head>
                    <ForgotPageStyle.Header>Reset Password</ForgotPageStyle.Header>
                    <ForgotPageStyle.UnderBar/>
                </ForgotPageStyle.Head>
                <ForgotPageStyle.Input>
                    <ForgotPageStyle.ID type="text" onChange={(e) => onChangeSign(e.target.value, userPw)} value={userId} placeholder="ID"/>
                    <ForgotPageStyle.Pass type="password" onChange={(e) => onChangeSign(userId, e.target.value)} onKeyUp={(e) => handleKeyDown(e)} value={userPw} placeholder="Password"/>
                    <ForgotPageStyle.Submit type="button" onClick={() => handleForgot()} value="Reset Password"/>
                </ForgotPageStyle.Input>
            </ForgotPageStyle.Contents>
        </ForgotPageStyle.Container>
    )
}

let mapStateToProps = (state) => {
    return {
        userId: state.sign.userId,
        userPw: state.sign.userPw
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeSign: (userId, userPw) => dispatch(setSign(userId, userPw))
    }
}

const ForgotPageConnect = connect(mapStateToProps, mapDispatchToProps)(ForgotPage);

export default ForgotPageConnect;