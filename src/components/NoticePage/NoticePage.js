import React, { useState, useEffect } from 'react';
import NoticeList from './NoticeList/NoticeList';
import Pagination from '../Common/Pagination';
import * as NoticePageStyle from '../../assets/styles/NoticePage/NoticePage';

import { connect } from 'react-redux';
import { setCurrentPage, setMaxPageNumLimit, setMinPageNumLimit, setPost } from '../../actions/Post';

const NoticePage = ({ currentPage, currentPosts, pageNumbers, maxPageNumLimit, minPageNumLimit, onChangePost, onChangeCurrentpage, onChangeMaxPageNumLimit, onChangeMinPageNumLimit}) => {
    const notice = [
        {id: 1, title: 'asdf', date: '2020-04-02'},
        {id: 2, title: 'asdf', date: '2020-04-02'},
        {id: 3, title: 'asdf', date: '2020-04-02'},
        {id: 4, title: 'asdf', date: '2020-04-02'},
        {id: 5, title: 'asdf', date: '2020-04-02'},
        {id: 6, title: 'asdf', date: '2020-04-02'},
        {id: 7, title: 'asdf', date: '2020-04-02'},
        {id: 8, title: 'asdf', date: '2020-04-02'},
        {id: 9, title: 'asdf', date: '2020-04-02'},
        {id: 10, title: 'asdf', date: '2020-04-02'},
        {id: 11, title: 'zxcv', date: '2020-04-02'},
        {id: 12, title: 'zxcv', date: '2020-04-02'},
        {id: 13, title: 'zxcv', date: '2020-04-02'},
        {id: 14, title: 'zxcv', date: '2020-04-02'},
        {id: 15, title: 'zxcv', date: '2020-04-02'},
        {id: 16, title: 'zxcv', date: '2020-04-02'},
        {id: 17, title: 'zxcv', date: '2020-04-02'},
        {id: 18, title: 'zxcv', date: '2020-04-02'},
        {id: 19, title: 'zxcv', date: '2020-04-02'},
        {id: 20, title: 'zxcv', date: '2020-04-02'},
        {id: 21, title: 'qwer', date: '2020-04-02'},

    ];

    useEffect(() => {
        onChangePost(notice);
        onChangeCurrentpage(1);
    },[])

    let num = 0;
    pageNumbers.map(number => {
        if(number < maxPageNumLimit+1 && number > minPageNumLimit){
            num++;
        }
    })

    const handlePrevBtn = () => {
        if(currentPage != pageNumbers[0]) {
            onChangeCurrentpage(currentPage - 1);

            if((currentPage - 1)%10==0) {
                onChangeMaxPageNumLimit(maxPageNumLimit - 10);
                onChangeMinPageNumLimit(minPageNumLimit - 10);
            }
        }
    }

    const handleNextBtn = () => {
        if(currentPage != pageNumbers[pageNumbers.length - 1]) {
            onChangeCurrentpage(currentPage + 1);

            if(currentPage+1> maxPageNumLimit) {
                onChangeMaxPageNumLimit(maxPageNumLimit + 10);
                onChangeMinPageNumLimit(minPageNumLimit + 10);
            }
        }
    }

    return(
        <NoticePageStyle.Container>
            <NoticePageStyle.Contents>
                <NoticePageStyle.ListViewer>
                    <NoticePageStyle.NoticeHeader>Notice</NoticePageStyle.NoticeHeader>
                    <NoticePageStyle.UnderBar/>
                    <NoticePageStyle.List>
                        <NoticeList lists={currentPosts}/>
                    </NoticePageStyle.List>
                </NoticePageStyle.ListViewer>
                <NoticePageStyle.PaginationStyle>
                    <NoticePageStyle.pageOptionBtn onClick={handlePrevBtn}>
                        <NoticePageStyle.pageBtn>◁</NoticePageStyle.pageBtn>
                    </NoticePageStyle.pageOptionBtn>
                    <Pagination
                        currentPage={currentPage}
                        paginate={(pageNumber) => onChangeCurrentpage(pageNumber)}    
                        pageNumbers={pageNumbers}
                        maxPageNumLimit={maxPageNumLimit}
                        minPageNumLimit={minPageNumLimit}
                    />
                    <NoticePageStyle.pageOptionBtn num={num} onClick={handleNextBtn}>
                        <NoticePageStyle.pageBtn>▷</NoticePageStyle.pageBtn>
                    </NoticePageStyle.pageOptionBtn>
                </NoticePageStyle.PaginationStyle>
            </NoticePageStyle.Contents>
        </NoticePageStyle.Container>
    )
}

let mapStateToProps = (state) => {
    return {
        pageNumbers: state.post.pageNumbers,
        currentPage: state.post.currentPage,
        currentPosts: state.post.currentPosts,
        maxPageNumLimit: state.post.maxPageNumLimit,
        minPageNumLimit: state.post.minPageNumLimit
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangePost: (post) => dispatch(setPost(post)),
        onChangeCurrentpage: (currentPage) => dispatch(setCurrentPage(currentPage)),
        onChangeMaxPageNumLimit: (maxPageNumLimit) => dispatch(setMaxPageNumLimit(maxPageNumLimit)),
        onChangeMinPageNumLimit: (minPageNumLimit) => dispatch(setMinPageNumLimit(minPageNumLimit))
    }
}

const NoticePageConnect = connect(mapStateToProps, mapDispatchToProps)(NoticePage);

export default NoticePageConnect;