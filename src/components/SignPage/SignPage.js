import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import * as SignPageStyle from '../../assets/styles/Sign/Sign';

import { connect } from 'react-redux';
import { setAuth } from '../../actions/Auth';
import { setSign } from '../../actions/Sign';

const axios = require('axios');

const SignPage = ({ signOption, userId, userPw, onChangeSign }) => {
    let history = useHistory();

    useEffect(() => {
        onChangeSign('', '');
    }, [onChangeSign])

    const handleSign = () => {
        if(signOption === "Up") {
            axios.post(`http://10.156.145.178:8080/user/signup`, {
                id: userId,
                pw: userPw
            })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }

    return (
        <SignPageStyle.Container>
            <SignPageStyle.Contents>
                <SignPageStyle.Head>
                    <SignPageStyle.Header>Sign {signOption}</SignPageStyle.Header>
                    <SignPageStyle.UnderBar/>
                </SignPageStyle.Head>
                <SignPageStyle.Input>
                    <SignPageStyle.ID type="text" onChange={(e) => onChangeSign(e.target.value, userPw)} value={userId} placeholder="ID"/>
                    <SignPageStyle.Pass type="password" onChange={(e) => onChangeSign(userId, e.target.value)} value={userPw} placeholder="Password"/>
                    <SignPageStyle.Submit type="button" onClick={() => handleSign()} value={"Sign "+signOption}/>
                </SignPageStyle.Input>
                { signOption === "In" &&
                    <SignPageStyle.Bottom>
                        <SignPageStyle.SignUp onClick={() => history.push('/signup')}>Sign Up</SignPageStyle.SignUp>
                        <SignPageStyle.Forgot onClick={() => history.push('/forgot')}>Forgot</SignPageStyle.Forgot>
                    </SignPageStyle.Bottom>
                }
            </SignPageStyle.Contents>
        </SignPageStyle.Container>
    )
}

let mapStateToProps = (state) => {
    return {
        auth: state.auth.auth,
        admin: state.auth.admin,
        userId: state.sign.userId,
        userPw: state.sign.userPw
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeAuth: (auth, admin) => dispatch(setAuth(auth, admin)),
        onChangeSign: (userId, userPw) => dispatch(setSign(userId, userPw))
    }
}

const SignPageConnect = connect(mapStateToProps, mapDispatchToProps)(SignPage);

export default SignPageConnect;