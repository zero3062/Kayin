import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import WorkList from './WorkList/WorkList';
import Pagination from '../Common/Pagination';
import * as WorkPageStyle from '../../assets/styles/WorkPage/WorkPage';
import sampleImg from '../../assets/images/main.png'

import { connect } from 'react-redux';
import { setPageNumLimit, setCurrentPage, setMaxPageNumLimit, setMinPageNumLimit, setPost } from '../../actions/Post';

import axios from 'axios';

const WorkPage = ({ currentPage, pageNumLimit, currentPosts, pageNumbers, maxPageNumLimit, minPageNumLimit, onChangePost, onChangeCurrentpage, onChangeMaxPageNumLimit, onChangeMinPageNumLimit, onChangePageNumLimit}) => {
    let history = useHistory();

    // const post = [
    //     {post_id: 1, title: '뭘까요?', description: '가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하', img: sampleImg},
    //     {post_id: 1, title: '뭘까요?', description: '가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하', img: sampleImg},
    //     {post_id: 1, title: '뭘까요?', description: '가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하', img: sampleImg},
    //     {post_id: 1, title: '뭘까요?', description: '가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하', img: sampleImg},
    //     {post_id: 1, title: '뭘까요?', description: '가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하', img: sampleImg},
    //     {post_id: 1, title: '뭘까요?', description: '가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하', img: sampleImg},
    // ]

    useEffect(() => {
        axios.get(`http://10.156.145.178:8080/work`, {})
        .then(res => {
            console.log(res);
            onChangePageNumLimit(4);
            onChangePost(res.data.rows);
            onChangeCurrentpage(1);
        })
        .catch(err => console.log(err))
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

    const handleWorkNum = (num) => {
        history.push({
            pathname: `/work/${num}`
        })
    }

    return(
        <WorkPageStyle.Container>
            <WorkPageStyle.Contents>
                <WorkPageStyle.ListViewer>
                    <WorkPageStyle.WorkHeader>Work</WorkPageStyle.WorkHeader>
                    <WorkPageStyle.Create type="button" value="Write" onClick={() => history.push('/work/write')}></WorkPageStyle.Create>
                    <WorkPageStyle.UnderBar/>
                    <WorkPageStyle.List>
                        <WorkList lists={currentPosts} handleWorkNum={handleWorkNum}/>
                    </WorkPageStyle.List>
                </WorkPageStyle.ListViewer>
                <WorkPageStyle.PaginationStyle>
                    <WorkPageStyle.pageOptionBtn onClick={handlePrevBtn}>
                        <WorkPageStyle.pageBtn>◁</WorkPageStyle.pageBtn>
                    </WorkPageStyle.pageOptionBtn>
                    <Pagination
                        currentPage={currentPage}
                        paginate={(pageNumber) => onChangeCurrentpage(pageNumber)}    
                        pageNumbers={pageNumbers}
                        maxPageNumLimit={maxPageNumLimit}
                        minPageNumLimit={minPageNumLimit}
                    />
                    <WorkPageStyle.pageOptionBtn num={num} onClick={handleNextBtn}>
                        <WorkPageStyle.pageBtn>▷</WorkPageStyle.pageBtn>
                    </WorkPageStyle.pageOptionBtn>
                </WorkPageStyle.PaginationStyle>
            </WorkPageStyle.Contents>
        </WorkPageStyle.Container>
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

const WorkPageConnect = connect(mapStateToProps, mapDispatchToProps)(WorkPage);

export default WorkPageConnect;