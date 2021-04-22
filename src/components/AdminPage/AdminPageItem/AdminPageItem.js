import React from 'react';
import * as AdminItemStyle from '../../../assets/styles/AdminPage/AdminItem';

const AdminItem = ({id, title, user, date, option}) => {
    return (    
        <AdminItemStyle.Container id={id}>
            <AdminItemStyle.Title>{title}</AdminItemStyle.Title>
            <AdminItemStyle.User>{user}</AdminItemStyle.User>
            <AdminItemStyle.Date>{date}</AdminItemStyle.Date>
            <AdminItemStyle.Option>
                { !option && 
                    <AdminItemStyle.Access>Publish</AdminItemStyle.Access>
                }
                <AdminItemStyle.Delete>Delete</AdminItemStyle.Delete>
            </AdminItemStyle.Option>
        </AdminItemStyle.Container>
    )
}

export default AdminItem;