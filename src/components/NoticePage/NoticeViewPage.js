import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import * as NoticeViewPageStyle from '../../assets/styles/NoticePage/NoticeView';

import { connect } from 'react-redux';
import { setNotice } from '../../actions/Contents';

import axios from 'axios';

const NoticeViewPage = ({ title, description, date, onChangeNotice}) => {
    let history = useHistory();
    let {id} = useParams();

    useEffect(() => {
        axios.get(`http://10.156.145.178:8080/notice/${id}`,{})
        .then(res => {
            console.log(res);
            onChangeNotice(res.data.title, res.data.description, res.data.date);
        })
        .catch(err => {
            console.log(err);
            history.push({
                pathname: '/notice'
            })
        })
    },[])

    return(
        <NoticeViewPageStyle.Container>
            <NoticeViewPageStyle.Contents>
                <NoticeViewPageStyle.ListViewer>
                    <NoticeViewPageStyle.NoticeHeader>{title}</NoticeViewPageStyle.NoticeHeader>
                    <NoticeViewPageStyle.DateView>{date}</NoticeViewPageStyle.DateView>
                    <NoticeViewPageStyle.UnderBar/>
                    <NoticeViewPageStyle.List>
                        {description}
                    </NoticeViewPageStyle.List>
                </NoticeViewPageStyle.ListViewer>
            </NoticeViewPageStyle.Contents>
        </NoticeViewPageStyle.Container>
    )
}

let mapStateToProps = (state) => {
    return {
        title: state.contents.title,
        description: state.contents.description,
        date: state.contents.date
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeNotice: (title, description, date) => dispatch(setNotice(title, description, date))
    }
}

const NoticeViewPageConnect = connect(mapStateToProps, mapDispatchToProps)(NoticeViewPage);

export default NoticeViewPageConnect;