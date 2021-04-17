import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import * as WorkViewPageStyle from '../../assets/styles/WorkPage/WorkView';
import imgFile from '../../assets/images/main.png';

import { connect } from 'react-redux';

const WorkViewPage = ({ }) => {
    let history = useHistory();
    let {id} = useParams();

    const title = "제목입니다.";
    const date = "2021-04-17";
    const description = "설명입니다."
    const userId = "12******89";

    return(
        <WorkViewPageStyle.Container>
            <WorkViewPageStyle.Contents>
                <WorkViewPageStyle.ListViewer>
                    <WorkViewPageStyle.WorkHeader>{title}</WorkViewPageStyle.WorkHeader>
                    <WorkViewPageStyle.Information>
                        <WorkViewPageStyle.DateView>{date}</WorkViewPageStyle.DateView>
                        <WorkViewPageStyle.UserId>{userId}</WorkViewPageStyle.UserId>
                    </WorkViewPageStyle.Information>
                    <WorkViewPageStyle.UnderBar/>
                    <WorkViewPageStyle.MainContents>
                        <WorkViewPageStyle.Description>{description}</WorkViewPageStyle.Description>
                        <WorkViewPageStyle.ImageFile src={imgFile}/>
                    </WorkViewPageStyle.MainContents>
                </WorkViewPageStyle.ListViewer>
            </WorkViewPageStyle.Contents>
        </WorkViewPageStyle.Container>
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

const WorkViewPageConnect = connect(mapStateToProps, mapDispatchToProps)(WorkViewPage);

export default WorkViewPageConnect;
