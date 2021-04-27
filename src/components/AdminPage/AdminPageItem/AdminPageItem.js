import React from 'react';
import * as AdminItemStyle from '../../../assets/styles/AdminPage/AdminItem';

const AdminItem = ({ option, id, title, user, date, access, handleAdminNum, handleAdminPublish, handleAdminDelete}) => {

    return (    
        <AdminItemStyle.Container id={id}>
            <AdminItemStyle.Title onClick={() => handleAdminNum(id)}>{title}</AdminItemStyle.Title>
            { option == "work" &&
                <AdminItemStyle.User>{user}</AdminItemStyle.User>
            }
            <AdminItemStyle.Date>{date.slice(5)}</AdminItemStyle.Date>
            <AdminItemStyle.Option>
                { !access && 
                    <AdminItemStyle.Access onClick={() => handleAdminPublish(id)}>{option=="notice" ? "Edit" : "Publish"}</AdminItemStyle.Access>
                }
                <AdminItemStyle.Delete onClick={() => handleAdminDelete(id)}>Delete</AdminItemStyle.Delete>
            </AdminItemStyle.Option>
        </AdminItemStyle.Container>
    )
}

export default AdminItem;