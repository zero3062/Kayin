import React from 'react';
import * as AdminItemStyle from '../../../assets/styles/AdminPage/AdminItem';

const AdminItem = ({id, title, user, date, option}) => {
    return (    
        <AdminItemStyle.Container id={id}>
            <AdminItemStyle.Title>{title}</AdminItemStyle.Title>
            <AdminItemStyle.User>{user}</AdminItemStyle.User>
            <AdminItemStyle.Date>{date}</AdminItemStyle.Date>
            <AdminItemStyle.Option>
                <AdminItemStyle.Access>발행</AdminItemStyle.Access>
                <AdminItemStyle.Delete>삭제</AdminItemStyle.Delete>
            </AdminItemStyle.Option>
        </AdminItemStyle.Container>
    )
}

export default AdminItem;