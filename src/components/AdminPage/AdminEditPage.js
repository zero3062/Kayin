import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import * as AdminEditPageStyle from '../../assets/styles/AdminPage/AdminEdit';

import { connect } from 'react-redux';

import axios from 'axios';
import { setText } from '../../actions/Write';

const AdminEditPage = ({ option, title, description, onChangeText }) => {
    let history = useHistory();
    let {id} = useParams();

    useEffect(() => {
        if(option==="notice") {
            axios.get(`http://10.156.145.178:8080/admin/${option}/${id}`, {})
            .then(res => {
                console.log(res);
                onChangeText(res.data.title, res.data.description);
            })
            .catch(err => {
                console.log(err);
            })
        } else {
            onChangeText('','');
        }
    }, [])

    const handleWrite = () => {

        const local = localStorage.getItem('Authentication');

        if(option==="notice") {
            axios.post(`http://10.156.145.178:8080/admin/edit/${id}`, {
                title, description
            },
            {
                headers: {
                    'Authentication': JSON.parse(local).accessToken
                }
            })
            .then(res => {
                console.log(res);
                history.push(`/admin/${option}`);
            })
            .catch(err => {
                console.log(err);
            })
        } else {
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

    }

    const handleCancel = () => {
        history.push(`/admin/${option}`)
    }

    return(
        <AdminEditPageStyle.Container>
            <AdminEditPageStyle.Contents>
                <AdminEditPageStyle.ListViewer>
                    <AdminEditPageStyle.WorkWriteHeader placeholder="Title" onChange={(e) => onChangeText(e.target.value, description)} value={title}/>
                    <AdminEditPageStyle.WorkWriteCreate type="button" value="Write" onClick={() => handleWrite()}/>
                    <AdminEditPageStyle.WorkWriteCancel type="button" value="Cancel" onClick={() => handleCancel()}/>
                    <AdminEditPageStyle.UnderBar/>
                    <AdminEditPageStyle.TextArea placeholder="Description" onChange={(e) => onChangeText(title, e.target.value)} value={description}/>
                </AdminEditPageStyle.ListViewer>
            </AdminEditPageStyle.Contents>
        </AdminEditPageStyle.Container>
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

const AdminEditPageConnect = connect(mapStateToProps, mapDispatchToProps)(AdminEditPage);

export default AdminEditPageConnect;
