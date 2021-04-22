import React from 'react';
import * as WorkItemStyle from '../../../assets/styles/WorkPage/WorkItem';

const WorkItem = ({id, title, description, sampleImg, handleWorkNum}) => {
    return (
        <WorkItemStyle.Container id={id}>
            <WorkItemStyle.Contents>
                <WorkItemStyle.Title onClick={() => handleWorkNum(id)}>{title}</WorkItemStyle.Title>
                <WorkItemStyle.Description>{description}</WorkItemStyle.Description>
            </WorkItemStyle.Contents>
            <WorkItemStyle.Image src={sampleImg}/>
        </WorkItemStyle.Container>
    )
}

export default WorkItem;