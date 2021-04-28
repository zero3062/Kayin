import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import * as WorkWritePageStyle from '../../assets/styles/WorkPage/WorkWrite';

import { connect } from 'react-redux';

import axios from 'axios';
import { setImageInfo, setText } from '../../actions/Write';

const WorkWritePage = ({ option, title, description, image_info, onChangeText, onChangeImageInfo}) => {
    let history = useHistory();
    let {id} = useParams();

    const [fileName, setFileName] = useState('file name...');

    useEffect(() => {
        if(option==="edit") {
            axios.get(`http://10.156.145.178:8080/work/${id}`,{})
            .then(res => {
                onChangeText(res.data.title, res.data.description);
                onChangeImageInfo(res.data.image_file);
            })
            .catch(err => {
                console.log(err);
                history.push({
                    pathname: '/work'
                })
            })
        } else {
            onChangeText('','');
            onChangeImageInfo('');
        }
    }, [])

    const handleWrite = () => {
        var formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("photo", image_info);

        const local = localStorage.getItem('Authentication');

        const writeUrl = `http://10.156.145.178:8080/work/create`;
        const editUrl = `http://10.156.145.178:8080/work/edit/${id}`;

        axios.post(option==="edit" ? editUrl : writeUrl, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authentication' : JSON.parse(local).accessToken
            }
        })
        .then(res => {
            history.push('/work')
        })
        .catch(err => {
            console.log(err);
        })
    }

    const handleCancel = () => {
        history.push({
            pathname: option==="edit" ? `/work/${id}` : '/work'
        });
    }

    const handleFileChange = (e) => {
        console.log(e.target.files);
        onChangeImageInfo(e.target.files[0]);
        setFileName(e.target.files[0].name);
    }

    return(
        <WorkWritePageStyle.Container>
            <WorkWritePageStyle.Contents>
                <WorkWritePageStyle.ListViewer>
                    <WorkWritePageStyle.WorkWriteHeader placeholder="Title" onChange={(e) => onChangeText(e.target.value, description)} value={title}/>
                    <WorkWritePageStyle.WorkWriteCreate type="button" value="Write" onClick={() => handleWrite()}/>
                    <WorkWritePageStyle.WorkWriteCancel type="button" value="Cancel" onClick={() => handleCancel()}/>
                    <WorkWritePageStyle.UnderBar/>
                    <WorkWritePageStyle.TextArea placeholder="Description" onChange={(e) => onChangeText(title, e.target.value)} value={description}/>
                    <WorkWritePageStyle.UnderBar/>
                    <WorkWritePageStyle.FileName value={fileName} disabled="disabled"></WorkWritePageStyle.FileName>
                    <WorkWritePageStyle.FileLabel for="upload_file">Upload</WorkWritePageStyle.FileLabel>
                    <WorkWritePageStyle.FileInput type="file" id="upload_file" accept="image/*" onChange={(e) => handleFileChange(e)}></WorkWritePageStyle.FileInput>
                </WorkWritePageStyle.ListViewer>
            </WorkWritePageStyle.Contents>
        </WorkWritePageStyle.Container>
    )
}

let mapStateToProps = (state) => {
    return {
        title: state.write.title,
        description: state.write.description,
        image_info: state.write.image_info
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeText: (title, description) => dispatch(setText(title, description)),
        onChangeImageInfo: (image_info) => dispatch(setImageInfo(image_info))
    }
}

const WorkWritePageConnect = connect(mapStateToProps, mapDispatchToProps)(WorkWritePage);

export default WorkWritePageConnect;
