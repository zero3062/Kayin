import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import * as WorkWritePageStyle from '../../assets/styles/WorkPage/WorkWrite';

import { connect } from 'react-redux';

import axios from 'axios';

const WorkWritePage = ({ title, description, image_file}) => {
    let history = useHistory();

    const [fileName, setFileName] = useState('file name...');

    const handleWrite = () => {
        axios.post(`http://10.156.145.178:8080/work/create`,{
            title: title,
            description: description,
            image_file: image_file
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }

    const handleCancel = () => {
        history.push('/work')
    }

    const handleFileChange = (e) => {
        console.log(e.target.files[0].name);
        setFileName(e.target.files[0].name);
    }
    
    return(
        <WorkWritePageStyle.Container>
            <WorkWritePageStyle.Contents>
                <WorkWritePageStyle.ListViewer>
                    <WorkWritePageStyle.WorkWriteHeader placeholder="제목" value={title}></WorkWritePageStyle.WorkWriteHeader>
                    <WorkWritePageStyle.WorkWriteCreate type="button" value="Write"></WorkWritePageStyle.WorkWriteCreate>
                    <WorkWritePageStyle.WorkWriteCancel type="button" value="Cancel" onClick={() => handleCancel()}/>
                    <WorkWritePageStyle.UnderBar/>
                    <WorkWritePageStyle.TextArea placeholder="내용"></WorkWritePageStyle.TextArea>
                    <WorkWritePageStyle.UnderBar/>
                    <WorkWritePageStyle.FileName value={fileName} disabled="disabled"></WorkWritePageStyle.FileName>
                    <WorkWritePageStyle.FileLabel for="upload_file">Upload</WorkWritePageStyle.FileLabel>
                    <WorkWritePageStyle.FileInput type="file" id="upload_file" onChange={(e) => handleFileChange(e)}></WorkWritePageStyle.FileInput>
                </WorkWritePageStyle.ListViewer>
            </WorkWritePageStyle.Contents>
        </WorkWritePageStyle.Container>
    )
}

let mapStateToProps = (state) => {
    return {
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

const WorkWritePageConnect = connect(mapStateToProps, mapDispatchToProps)(WorkWritePage);

export default WorkWritePageConnect;