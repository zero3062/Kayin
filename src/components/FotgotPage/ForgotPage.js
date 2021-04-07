import React, { useEffect } from 'react';

import * as ForgotPageStyle from '../../assets/styles/FotgotPage/ForgotPage';

import { connect } from 'react-redux';
import { setSign } from '../../actions/Sign';

const ForgotPage = ({ userId, userPw, onChangeSign }) => {

    useEffect(() => {
        onChangeSign('', '');
    }, [onChangeSign])

    return (
        <ForgotPageStyle.Container>
            <ForgotPageStyle.Contents>
                <ForgotPageStyle.Head>
                    <ForgotPageStyle.Header>Reset Password</ForgotPageStyle.Header>
                    <ForgotPageStyle.UnderBar/>
                </ForgotPageStyle.Head>
                <ForgotPageStyle.Input>
                <ForgotPageStyle.ID type="text" onChange={(e) => onChangeSign(e.target.value, userPw)} value={userId} placeholder="ID"/>
                    <ForgotPageStyle.Pass type="password" onChange={(e) => onChangeSign(userId, e.target.value)} value={userPw} placeholder="Password"/>
                    <ForgotPageStyle.Submit type="button" value="Reset Password"/>
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