import React from 'react';
import WorkItem from '../WorkItem/WorkItem';

const WorkList = ({ lists, handleWorkNum }) => {
    const workItem = lists.map(
        list => (
            <WorkItem
                id={list.post_id}
                title={list.title}
                description={list.description}
                sampleImg={list.img}
                handleWorkNum={handleWorkNum}
            />
        )
    )

    return workItem;
}

export default WorkList;