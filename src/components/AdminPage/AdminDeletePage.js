import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import * as AdminDeletePageStyle from '../../assets/styles/AdminPage/AdminDelete';

import { connect } from 'react-redux';

import axios from 'axios';
import { setText } from '../../actions/Write';

const AdminDeletePage = ({ title, description, onChangeText }) => {
    let history = useHistory();
    let {id} = useParams();

    const [fileName, setFileName] = useState('file name...');

    useEffect(() => {
        onChangeText('','');
    }, [])

    const handleWrite = () => {

        const local = localStorage.getItem('Authentication');

        axios.post(`http://10.156.145.178:8080/admin/delete/write`,
        {
            title: title,
            description: description
        }, 
        {
            headers: {
                'Authentication': JSON.parse(local).accessToken
            }
        })
        .then(res => {
            axios.post(`http://10.156.145.178:8080/admin/work/delete/${id}`, {},
            {
                headers: {
                    'Authentication': JSON.parse(local).accessToken
                }
            })
            .then(res => {
                history.push('/admin/work')
            })
            .catch(err => {
                console.log(err);
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    const handleCancel = () => {
        history.push('/admin/work')
    }

    return(
        <AdminDeletePageStyle.Container>
            <AdminDeletePageStyle.Contents>
                <AdminDeletePageStyle.ListViewer>
                    <AdminDeletePageStyle.WorkWriteHeader placeholder="Title" onChange={(e) => onChangeText(e.target.value, description)} value={title}/>
                    <AdminDeletePageStyle.WorkWriteCreate type="button" value="Write" onClick={() => handleWrite()}/>
                    <AdminDeletePageStyle.WorkWriteCancel type="button" value="Cancel" onClick={() => handleCancel()}/>
                    <AdminDeletePageStyle.UnderBar/>
                    <AdminDeletePageStyle.TextArea placeholder="Description" onChange={(e) => onChangeText(title, e.target.value)} value={description}/>
                </AdminDeletePageStyle.ListViewer>
            </AdminDeletePageStyle.Contents>
        </AdminDeletePageStyle.Container>
    )
}

let mapStateToProps = (state) => {
    return {
        title: state.write.title,
        description: state.write.description,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeText: (title, description) => dispatch(setText(title, description)),
    }
}

const AdminDeletePageConnect = connect(mapStateToProps, mapDispatchToProps)(AdminDeletePage);

export default AdminDeletePageConnect;