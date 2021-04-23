import React from 'react';
import * as AdminItemStyle from '../../../assets/styles/AdminPage/AdminItem';

const AdminItem = ({id, title, user, date, option, handleAdminNum, handleAdminPublish, handleAdminDelete}) => {
    return (    
        <AdminItemStyle.Container id={id}>
            <AdminItemStyle.Title onClick={() => handleAdminNum(id)}>{title}</AdminItemStyle.Title>
            <AdminItemStyle.User>{user}</AdminItemStyle.User>
            <AdminItemStyle.Date>{date}</AdminItemStyle.Date>
            <AdminItemStyle.Option>
                { !option && 
                    <AdminItemStyle.Access onClick={() => handleAdminPublish(id)}>Publish</AdminItemStyle.Access>
                }
                <AdminItemStyle.Delete onClick={() => handleAdminDelete(id)}>Delete</AdminItemStyle.Delete>
            </AdminItemStyle.Option>
        </AdminItemStyle.Container>
    )
}

export default AdminItem;