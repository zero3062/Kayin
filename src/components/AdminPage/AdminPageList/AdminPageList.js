import React from 'react';
import AdminItem from '../AdminPageItem/AdminPageItem';

const AdminList = ({ lists }) => {
    const adminItem = lists.map(
        list => (
            <AdminItem
                id={list.work_id}
                title={list.title}
                user={list.user_id}
                date={list.date}
            />
        )
    )

    return adminItem;
}

export default AdminList;