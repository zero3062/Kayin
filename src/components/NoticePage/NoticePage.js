import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import NoticeList from './NoticeList/NoticeList';
import Pagination from '../Common/Pagination';
import * as NoticePageStyle from '../../assets/styles/NoticePage/NoticePage';

import { connect } from 'react-redux';
import { setCurrentPage, setMaxPageNumLimit, setMinPageNumLimit, setPageNumLimit, setPost } from '../../actions/Post';

import axios from 'axios';

const NoticePage = ({ currentPage, pageNumLimit, currentPosts, pageNumbers, maxPageNumLimit, minPageNumLimit, onChangePost, onChangeCurrentpage, onChangeMaxPageNumLimit, onChangeMinPageNumLimit, onChangePageNumLimit}) => {
    let history = useHistory();

    useEffect(() => {
        axios.get(`http://10.156.145.178:8080/notice/`,{})
        .then(res => {
            console.log(res);
            onChangePageNumLimit(10);
            onChangePost(res.data);
            onChangeCurrentpage(1);
        })
        .catch(err => {
            console.log(err);
        })
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

    const handleNoticeNum = (num) => {
        history.push({
            pathname: `/notice/${num}`
        })
    }

    return(
        <NoticePageStyle.Container>
            <NoticePageStyle.Contents>
                <NoticePageStyle.ListViewer>
                    <NoticePageStyle.NoticeHeader>Notice</NoticePageStyle.NoticeHeader>
                    <NoticePageStyle.UnderBar/>
                    <NoticePageStyle.List>
                        <NoticeList lists={currentPosts} handleNoticeNum={handleNoticeNum}/>
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
        pageNumLimit: state.post.pageNumLimit,
        currentPage: state.post.currentPage,
        currentPosts: state.post.currentPosts,
        maxPageNumLimit: state.post.maxPageNumLimit,
        minPageNumLimit: state.post.minPageNumLimit
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangePageNumLimit: (pageNumLimit) => dispatch(setPageNumLimit(pageNumLimit)),
        onChangePost: (post) => dispatch(setPost(post)),
        onChangeCurrentpage: (currentPage) => dispatch(setCurrentPage(currentPage)),
        onChangeMaxPageNumLimit: (maxPageNumLimit) => dispatch(setMaxPageNumLimit(maxPageNumLimit)),
        onChangeMinPageNumLimit: (minPageNumLimit) => dispatch(setMinPageNumLimit(minPageNumLimit))
    }
}

const NoticePageConnect = connect(mapStateToProps, mapDispatchToProps)(NoticePage);

export default NoticePageConnect;