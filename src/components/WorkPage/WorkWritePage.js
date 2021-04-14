import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import * as WorkWritePageStyle from '../../assets/styles/WorkPage/WorkWrite';

import { connect } from 'react-redux';

import axios from 'axios';

const WorkWritePage = ({ title, description, image_file, onChangeWrite}) => {
    let history = useHistory();

    const handleWrite = () => {
        axios.post(`http://10.156.145.178:8080/work/create`,{
            title: title,
            description: description,
            image_file: image_file
        })
        .then(res => {
            console.log(res);
            onChangeNotice(res.data.title, res.data.description, res.data.date);
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    return(
        <WorkWritePageStyle.Container>
            <WorkWritePageStyle.Contents>
                <WorkWritePageStyle.ListViewer>
                    <WorkWritePageStyle.NoticeHeader>{title}</WorkWritePageStyle.NoticeHeader>
                    <WorkWritePageStyle.DateView>{date}</WorkWritePageStyle.DateView>
                    <WorkWritePageStyle.UnderBar/>
                    <WorkWritePageStyle.TextArea></WorkWritePageStyle.TextArea>
                    <WorkWritePageStyle.UnderBar/>
                    <WorkWritePageStyle.FileInput></WorkWritePageStyle.FileInput>
                </WorkWritePageStyle.ListViewer>
            </WorkWritePageStyle.Contents>
        </WorkWritePageStyle.Container>
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

const WorkWritePageConnect = connect(mapStateToProps, mapDispatchToProps)(WorkWritePage);

export default WorkWritePageConnect;