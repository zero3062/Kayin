import React, { useState, useEffect } from 'react';
import NoticeList from './NoticeList/NoticeList';
import Pagination from '../Common/Pagination';
import * as NoticePageStyle from '../../assets/styles/NoticePage/NoticePage';

import { connect } from 'react-redux';
import { setCurrentPage, setPost } from '../../actions/Post';

const NoticePage = ({ everyPost, currentPage, currentPosts, onChangePost, onChangeCurrentpage}) => {
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
    ];

    const [pageNumLimit, setPageNumLimit] = useState(10),
          [maxPageNumLimit, setMaxPageNumLimit] = useState(10),
          [minPageNumLimit, setMinPageNumLimit] = useState(0);

    useEffect(() => {
        onChangePost(notice);
        onChangeCurrentpage(1);
    },[])

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(everyPost.length/10); i++) {
        pageNumbers.push(i);
    }

    let num = 0;
    pageNumbers.map(number => {
        if(number < maxPageNumLimit+1 && number > minPageNumLimit){
        num++;
        }
    })

    const handlePrevBtn = () => {
        if(currentPage != pageNumbers[0]) {
            onChangeCurrentpage(currentPage - 1);

            if((currentPage - 1)%pageNumLimit==0) {
                setMaxPageNumLimit(maxPageNumLimit - pageNumLimit);
                setMinPageNumLimit(minPageNumLimit - pageNumLimit);
            }
        }
    }

    const handleNextBtn = () => {
        if(currentPage != pageNumbers[pageNumbers.length - 1]) {
            onChangeCurrentpage(currentPage + 1);

            if(currentPage+1> maxPageNumLimit) {
                setMaxPageNumLimit(maxPageNumLimit + pageNumLimit);
                setMinPageNumLimit(minPageNumLimit + pageNumLimit);
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
        everyPost: state.post.everyPost,
        currentPage: state.post.currentPage,
        currentPosts: state.post.currentPosts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangePost: (post) => dispatch(setPost(post)),
        onChangeCurrentpage: (currentPage) => dispatch(setCurrentPage(currentPage))
    }
}

const NoticePageConnect = connect(mapStateToProps, mapDispatchToProps)(NoticePage);

export default NoticePageConnect;