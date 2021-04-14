import React from 'react';
import NoticeItem from '../NoticeItem/NoticeItem';

const NoticeList = ({ lists, handleNoticeNum }) => {
    const noticeItem = lists.map(
        list => (
            <NoticeItem
                id={list.notice_id}
                title={list.title}
                date={list.date}
                handleNoticeNum={handleNoticeNum}
            />
        )
    )

    return noticeItem;
}

export default NoticeList;