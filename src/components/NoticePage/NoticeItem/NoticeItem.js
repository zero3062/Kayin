import React from 'react';
import * as NoticeItemStyle from '../../../assets/styles/NoticePage/NoticeItem';

const NoticeItem = ({id, title, date}) => {
    return (
        <NoticeItemStyle.Container id={id}>
            <NoticeItemStyle.Title>{title}</NoticeItemStyle.Title>
            <NoticeItemStyle.Date>{date}</NoticeItemStyle.Date>
        </NoticeItemStyle.Container>
    )
}

export default NoticeItem;