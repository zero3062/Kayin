import React from 'react';
import AdminItem from '../AdminPageItem/AdminPageItem';

const AdminList = ({ option, lists, handleAdminNum, handleAdminSubmit, handleAdminDelete }) => {
    const adminItem = option=="notice" ? lists.map(
        list => (
            <AdminItem
                option={option}
                id={list.notice_id}
                title={list.title}
                date={list.date}
                handleAdminNum={handleAdminNum}
                handleAdminSubmit={handleAdminSubmit}
                handleAdminDelete={handleAdminDelete}
            />
        )
    )
    : lists.map(
        list => (
            <AdminItem
                option={option}
                id={list.work_id}
                title={list.title}
                user={list.user_id}
                date={list.date}
                access={list.access}
                handleAdminNum={handleAdminNum}
                handleAdminSubmit={handleAdminSubmit}
                handleAdminDelete={handleAdminDelete}
            />
        )
    )

    return adminItem;
}

export default AdminList;