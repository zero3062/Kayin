import React from 'react';
import AdminItem from '../AdminPageItem/AdminPageItem';

const AdminList = ({ lists, handleAdminNum, handleAdminPublish }) => {
    const adminItem = lists.map(
        list => (
            <AdminItem
                id={list.work_id}
                title={list.title}
                user={list.user_id}
                date={list.date}
                option={list.access}
                handleAdminNum={handleAdminNum}
                handleAdminPublish={handleAdminPublish}
            />
        )
    )

    return adminItem;
}

export default AdminList;