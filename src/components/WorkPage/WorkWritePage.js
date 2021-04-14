import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import * as WorkWritePageStyle from '../../assets/styles/WorkPage/WorkWrite';

import { connect } from 'react-redux';

import axios from 'axios';
import { setImageInfo, setText } from '../../actions/Write';

const WorkWritePage = ({ title, description, onChangeText, onChangeImageInfo}) => {
    let history = useHistory();

    const [fileName, setFileName] = useState('file name...');

    const handleWrite = () => {
        axios.post(`http://10.156.145.178:8080/work/create`,{
            title: title,
            description: description,
            image_file: title
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
        console.log(e.target.files);
        onChangeImageInfo(e.target);
        setFileName(e.target.files[0].name);
    }
    
    return(
        <WorkWritePageStyle.Container>
            <WorkWritePageStyle.Contents>
                <WorkWritePageStyle.ListViewer>
                    <WorkWritePageStyle.WorkWriteHeader placeholder="제목" onChange={(e) => onChangeText(e.target.value, description)} value={title}/>
                    <WorkWritePageStyle.WorkWriteCreate type="button" value="Write" onClick={() => handleWrite()}/>
                    <WorkWritePageStyle.WorkWriteCancel type="button" value="Cancel" onClick={() => handleCancel()}/>
                    <WorkWritePageStyle.UnderBar/>
                    <WorkWritePageStyle.TextArea placeholder="내용" onChange={(e) => onChangeText(title, e.target.value)} value={description}/>
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
        title: state.write.title,
        description: state.write.description,
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