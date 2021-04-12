import React from 'react';
import NoticeItem from '../NoticeItem/NoticeItem';

const NoticeList = ({ lists }) => {
    const noticeItem = lists.map(
        list => (
            <NoticeItem
                id={list.id}
                title={list.title}
                date={list.date}
            />
        )
    )

    return noticeItem;
}

export default NoticeList;