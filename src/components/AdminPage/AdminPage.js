import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

import * as AdminPageStyle from '../../assets/styles/AdminPage/AdminPage';
import AdminPageList from './AdminPageList/AdminPageList';
import Pagination from '../Common/Pagination';

import { connect } from 'react-redux';
import { setAuth } from '../../actions/Auth';
import { setCurrentPage, setMaxPageNumLimit, setMinPageNumLimit, setPageNumLimit, setPost } from '../../actions/Post';

import axios from 'axios';

const AdminPage = ({option, onChangeAuth, currentPage, pageNumLimit, currentPosts, pageNumbers, maxPageNumLimit, minPageNumLimit, onChangePost, onChangeCurrentpage, onChangeMaxPageNumLimit, onChangeMinPageNumLimit, onChangePageNumLimit}) => {
    let history = useHistory();

    const local = localStorage.getItem('userItem');

    if(local && JSON.parse(local).admin) {
        onChangeAuth(true, JSON.parse(local).admin);
    } else {
        onChangeAuth(false, false);
        history.push({
            pathname: '/'
        })
    }

    useEffect(() => {
        console.log(option);
        axios.get(`http://10.156.145.178:8080/admin/${option}`,{})
        .then(res => {
            console.log(res);
            onChangePageNumLimit(10);
            onChangePost(res.data.rows);
            onChangeCurrentpage(1);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    let num = 0;
    pageNumbers.map(number => {
        if(number < maxPageNumLimit+1 && number > minPageNumLimit){
            num++;
        }
    })

    const handlePrevBtn = () => {
        if(currentPage != pageNumbers[0]) {
            onChangeCurrentpage(currentPage - 1);

            if((currentPage - 1)%10===0) {
                onChangeMaxPageNumLimit(maxPageNumLimit - pageNumLimit);
                onChangeMinPageNumLimit(minPageNumLimit - pageNumLimit);
            }
        }
    }

    const handleNextBtn = () => {
        if(currentPage !== pageNumbers[pageNumbers.length - 1]) {
            onChangeCurrentpage(currentPage + 1);

            if(currentPage+1> maxPageNumLimit) {
                onChangeMaxPageNumLimit(maxPageNumLimit + pageNumLimit);
                onChangeMinPageNumLimit(minPageNumLimit + pageNumLimit);
            }
        }
    }

    const handleAdminNum = (num) => {
        history.push({
            pathname: `/admin/${option}/${num}`
        })
    }

    const handleAdminSubmit = (num) => {
        if(option=='notice') {
            history.push({
                pathname: `/admin/edit/${num}`
            })
        } else {
            axios.post(`http://10.156.145.178:8080/admin/publish/${num}`, {})
            .then(res => {
                axios.get(`http://10.156.145.178:8080/admin/work`,{})
                .then(res => {
                    onChangePageNumLimit(10);
                    onChangePost(res.data.rows);
                    onChangeCurrentpage(1);
                })
                .catch(err => {
                    console.log(err);
                })
            })
            .catch(err => {
                console.log(err);
            })
        }

    }

    const handleAdminDelete = (num) => {

        if(option=='notice') {
            const local = localStorage.getItem('Authentication');

            axios.post(`http://10.156.145.178:8080/admin/notice/delete/${num}`, {},
            {
                headers: {
                'Authentication': JSON.parse(local).accessToken
                }
            })
            .then(res => {
                axios.get(`http://10.156.145.178:8080/admin/${option}`,{})
                .then(res => {
                    onChangePageNumLimit(10);
                    onChangePost(res.data.rows);
                    onChangeCurrentpage(1);
                })
                .catch(err => {
                    console.log(err);
                })
            })
            .catch(err => {
                console.log(err);
            })
        } else {
            history.push({
                pathname: `/admin/delete/${num}`
            })
        }
    }

    return (
        <AdminPageStyle.Container>
            <AdminPageStyle.Contents>
                <AdminPageStyle.Viewer>
                    <AdminPageStyle.Header>
                        <AdminPageStyle.HeaderTitle>Title</AdminPageStyle.HeaderTitle>
                        { option == "work" &&
                            <AdminPageStyle.HeaderID>ID</AdminPageStyle.HeaderID>
                        }
                        <AdminPageStyle.HeaderDate>Date</AdminPageStyle.HeaderDate>
                        <AdminPageStyle.HeaderOption>Option</AdminPageStyle.HeaderOption>
                    </AdminPageStyle.Header>
                    <AdminPageStyle.List>
                        <AdminPageList 
                            option={option}
                            lists={currentPosts} 
                            handleAdminNum={handleAdminNum} 
                            handleAdminSubmit={handleAdminSubmit}
                            handleAdminDelete={handleAdminDelete}
                        />
                    </AdminPageStyle.List>
                </AdminPageStyle.Viewer>
                <AdminPageStyle.PaginationStyle>
                    <AdminPageStyle.pageOptionBtn onClick={handlePrevBtn}>
                        <AdminPageStyle.pageBtn>◁</AdminPageStyle.pageBtn>
                    </AdminPageStyle.pageOptionBtn>
                    <Pagination
                        currentPage={currentPage}
                        paginate={(pageNumber) => onChangeCurrentpage(pageNumber)}
                        pageNumbers={pageNumbers}
                        maxPageNumLimit={maxPageNumLimit}
                        minPageNumLimit={minPageNumLimit}
                    />
                    <AdminPageStyle.pageOptionBtn num={num} onClick={handleNextBtn}>
                        <AdminPageStyle.pageBtn>▷</AdminPageStyle.pageBtn>
                    </AdminPageStyle.pageOptionBtn>
                </AdminPageStyle.PaginationStyle>
            </AdminPageStyle.Contents>
        </AdminPageStyle.Container>
    )
}

let mapStateToProps = (state) => {
    return {
        pageNumbers: state.post.pageNumbers,
        pageNumLimit: state.post.pageNumLimit,
        currentPage: state.post.currentPage,
        currentPosts: state.post.currentPosts,
        maxPageNumLimit: state.post.maxPageNumLimit,
        minPageNumLimit: state.post.minPageNumLimit
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeAuth: (auth, admin) => dispatch(setAuth(auth, admin)),
        onChangePageNumLimit: (pageNumLimit) => dispatch(setPageNumLimit(pageNumLimit)),
        onChangePost: (post) => dispatch(setPost(post)),
        onChangeCurrentpage: (currentPage) => dispatch(setCurrentPage(currentPage)),
        onChangeMaxPageNumLimit: (maxPageNumLimit) => dispatch(setMaxPageNumLimit(maxPageNumLimit)),
        onChangeMinPageNumLimit: (minPageNumLimit) => dispatch(setMinPageNumLimit(minPageNumLimit))
    }
}

const AdminPageConnect = connect(mapStateToProps, mapDispatchToProps)(AdminPage);

export default AdminPageConnect;
