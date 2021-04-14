import React from 'react';
import * as NoticeItemStyle from '../../../assets/styles/NoticePage/NoticeItem';

const NoticeItem = ({id, title, date, handleNoticeNum}) => {
    return (    
        <NoticeItemStyle.Container id={id}>
            <NoticeItemStyle.Title onClick={() => handleNoticeNum(id)}>{title}</NoticeItemStyle.Title>
            <NoticeItemStyle.Date>{date}</NoticeItemStyle.Date>
        </NoticeItemStyle.Container>
    )
}

export default NoticeItem;