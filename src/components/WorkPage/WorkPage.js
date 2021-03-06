import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import WorkList from './WorkList/WorkList';
import Pagination from '../Common/Pagination';
import * as WorkPageStyle from '../../assets/styles/WorkPage/WorkPage';

import { connect } from 'react-redux';
import { setPageNumLimit, setCurrentPage, setMaxPageNumLimit, setMinPageNumLimit, setPost } from '../../actions/Post';

import axios from 'axios';

const WorkPage = ({ currentPage, pageNumLimit, currentPosts, pageNumbers, maxPageNumLimit, minPageNumLimit, onChangePost, onChangeCurrentpage, onChangeMaxPageNumLimit, onChangeMinPageNumLimit, onChangePageNumLimit}) => {
    let history = useHistory();

    useEffect(() => {
        axios.get(`http://10.156.145.178:8080/work`, {})
        .then(res => {
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
        if(currentPage !== pageNumbers[0]) {
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
                    <WorkPageStyle.PageOptionBtn onClick={() => handlePrevBtn()}>
                        <WorkPageStyle.PageBtn>???</WorkPageStyle.PageBtn>
                    </WorkPageStyle.PageOptionBtn>
                    <Pagination
                        currentPage={currentPage}
                        paginate={(pageNumber) => onChangeCurrentpage(pageNumber)}
                        pageNumbers={pageNumbers}
                        maxPageNumLimit={maxPageNumLimit}
                        minPageNumLimit={minPageNumLimit}
                    />
                    <WorkPageStyle.PageOptionBtn num={num} onClick={() => handleNextBtn()}>
                        <WorkPageStyle.PageBtn>???</WorkPageStyle.PageBtn>
                    </WorkPageStyle.PageOptionBtn>
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
