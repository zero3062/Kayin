import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import * as AdminViewPageStyle from '../../assets/styles/AdminPage/AdminView';

import { connect } from 'react-redux';
import { setNotice, setWork } from '../../actions/Contents';

import axios from 'axios';

const AdminViewPage = ({ option, title, description, date, user, image_file, onChangeNotice, onChangeWork}) => {
    let history = useHistory();
    let {id} = useParams();

    useEffect(() => {
        axios.get(`http://10.156.145.178:8080/admin/${option}/${id}`,{})
        .then(res => {
            if(option == "notice") 
                onChangeNotice(res.data.title, res.data.description, res.data.date);
            else 
                onChangeWork(res.data.title, res.data.description, res.data.date, res.data.user_id, res.data.image_file);
        })
        .catch(err => {
            console.log(err);
            history.push({
                pathname: '/admin'
            })
        })
    },[])

    return(
        <AdminViewPageStyle.Container>
            <AdminViewPageStyle.Contents>
                <AdminViewPageStyle.ListViewer>
                    <AdminViewPageStyle.WorkHeader>{title}</AdminViewPageStyle.WorkHeader>
                    <AdminViewPageStyle.Information>
                        <AdminViewPageStyle.DateView>{date}</AdminViewPageStyle.DateView>
                        { option != "notice" &&
                            <AdminViewPageStyle.UserId>{user}</AdminViewPageStyle.UserId>
                        }
                    </AdminViewPageStyle.Information>
                    <AdminViewPageStyle.UnderBar/>
                    <AdminViewPageStyle.MainContents>
                        <AdminViewPageStyle.Description>{description}</AdminViewPageStyle.Description>
                        { option != "notice" &&
                            <AdminViewPageStyle.ImageFile src={image_file}/>
                        }
                    </AdminViewPageStyle.MainContents>
                </AdminViewPageStyle.ListViewer>
            </AdminViewPageStyle.Contents>
        </AdminViewPageStyle.Container>
    )
}

let mapStateToProps = (state) => {
    return {
        title: state.contents.title,
        description: state.contents.description,
        date: state.contents.date,
        user: state.contents.user,
        image_file: state.contents.image_file
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeNotice: (title, description, date) => dispatch(setNotice(title, description, date)),
        onChangeWork: (title, description, date, user, image_file) => dispatch(setWork(title, description, date, user, image_file))
    }
}

const AdminViewPageConnect = connect(mapStateToProps, mapDispatchToProps)(AdminViewPage);

export default AdminViewPageConnect;
