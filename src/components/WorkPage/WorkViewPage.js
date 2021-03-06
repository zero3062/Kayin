import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import * as WorkViewPageStyle from '../../assets/styles/WorkPage/WorkView';

import { connect } from 'react-redux';
import { setWork, setMine } from '../../actions/Contents';

import axios from 'axios';

const WorkViewPage = ({ title, description, date, user, image_file, mine, onChangeWork, onChangeMine}) => {
    let history = useHistory();
    let {id} = useParams();

    useEffect(() => {
        axios.get(`http://10.156.145.178:8080/work/${id}`,{})
        .then(res => {
            onChangeWork(res.data.title, res.data.description, res.data.date, res.data.user_id, res.data.image_file);
        })
        .catch(err => {
            console.log(err);
            history.push({
                pathname: '/work'
            })
        })
    },[])

    useEffect(() => {
        const local = localStorage.getItem('Authentication');

        axios.get(`http://10.156.145.178:8080/user/myName`, {
            headers : {
                'Authentication': JSON.parse(local).refreshToken
            }
        })
        .then(res => {
            onChangeMine(res.data.id);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    const handleContentEdit = () => {
        history.push({
            pathname: `/work/edit/${id}`
        })
    }

    const handleContentDelete = () => {

        const local = localStorage.getItem('Authentication');

        axios.post(`http://10.156.145.178:8080/work/delete/${id}`, {}, {
            headers : {
                'Authentication': JSON.parse(local).accessToken
            }
        })
        .then(res => {
            console.log(res);
            history.push('/work');
        })
        .then(err => {
            console.log(err);
        })
    }

    return(
        <WorkViewPageStyle.Container>
            <WorkViewPageStyle.Contents>
                <WorkViewPageStyle.ListViewer>
                    <WorkViewPageStyle.Header>
                        <WorkViewPageStyle.WorkHeader>{title}</WorkViewPageStyle.WorkHeader>
                        <WorkViewPageStyle.Information>
                            <WorkViewPageStyle.DateView>{date}</WorkViewPageStyle.DateView>
                            <WorkViewPageStyle.UserId>{user}</WorkViewPageStyle.UserId>
                        </WorkViewPageStyle.Information>
                    </WorkViewPageStyle.Header>
                    <WorkViewPageStyle.UnderBar/>
                    <WorkViewPageStyle.MainContents>
                        <WorkViewPageStyle.Description>{description}</WorkViewPageStyle.Description>
                        <WorkViewPageStyle.MainBottom>
                            <WorkViewPageStyle.ImageFile src={image_file}/>
                            { mine &&
                                <WorkViewPageStyle.BtnBottom>
                                    <WorkViewPageStyle.EditButton onClick={() => handleContentEdit()}>Edit</WorkViewPageStyle.EditButton>
                                    <WorkViewPageStyle.DeleteButton onClick={() => handleContentDelete()}>Delete</WorkViewPageStyle.DeleteButton>
                                </WorkViewPageStyle.BtnBottom>
                            }
                        </WorkViewPageStyle.MainBottom>
                    </WorkViewPageStyle.MainContents>
                </WorkViewPageStyle.ListViewer>
            </WorkViewPageStyle.Contents>
        </WorkViewPageStyle.Container>
    )
}

let mapStateToProps = (state) => {
    return {
        title: state.contents.title,
        description: state.contents.description,
        date: state.contents.date,
        user: state.contents.user,
        image_file: state.contents.image_file,
        mine: state.contents.mine
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeWork: (title, description, date, user, image_file) => dispatch(setWork(title, description, date, user, image_file)),
        onChangeMine: (id) => dispatch(setMine(id))
    }
}

const WorkViewPageConnect = connect(mapStateToProps, mapDispatchToProps)(WorkViewPage);

export default WorkViewPageConnect;
