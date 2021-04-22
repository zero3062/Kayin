import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

import * as AdminPageStyle from '../../assets/styles/AdminPage/AdminPage';
import AdminPageList from './AdminPageList/AdminPageList';
import Pagination from '../Common/Pagination';

import { connect } from 'react-redux';
import { setAuth } from '../../actions/Auth';
import { setCurrentPage, setMaxPageNumLimit, setMinPageNumLimit, setPageNumLimit, setPost } from '../../actions/Post';

import axios from 'axios';

const AdminPage = ({onChangeAuth, currentPage, pageNumLimit, currentPosts, pageNumbers, maxPageNumLimit, minPageNumLimit, onChangePost, onChangeCurrentpage, onChangeMaxPageNumLimit, onChangeMinPageNumLimit, onChangePageNumLimit}) => {
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
        axios.get(`http://10.156.145.178:8080/admin/`,{})
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

    return (
        <AdminPageStyle.Container>
            <AdminPageStyle.Contents>
                <AdminPageStyle.Viewer>
                    <AdminPageStyle.Header>
                        <AdminPageStyle.HeaderTitle>제목</AdminPageStyle.HeaderTitle>
                        <AdminPageStyle.HeaderID>ID</AdminPageStyle.HeaderID>
                        <AdminPageStyle.HeaderDate>날짜</AdminPageStyle.HeaderDate>
                        <AdminPageStyle.HeaderOption>옵션</AdminPageStyle.HeaderOption>
                    </AdminPageStyle.Header>
                    <AdminPageStyle.List>
                        <AdminPageList lists={currentPosts}></AdminPageList>
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
