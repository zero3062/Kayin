import styled from 'styled-components';
import MainImg from '../../images/main.png';

export const Container = styled.div`
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    user-select:none;

    background: url(${MainImg}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    height: 100vh;
`;

export const Contents = styled.div`
    position: absolute;
    left: 8vw;
    top: 50%;
    transform: translate(0%,-40%);
    width: 84vw;
    height: 82vh;
`;

export const ListViewer = styled.div`
    background: rgba(54, 54, 54, 0.26);
    width: 84vw;
    height: 70vh;
`;

export const WorkHeader = styled.div`
    color: white;
    font-size: 35px;
    position: relative;
    left: 2vw;
    top: 10px;
`;

export const Create = styled.input`
    position: absolute;
    top: 10px;
    right: 2vw;
    background: rgba(0,0,0,0.5);
    border: none;
    color: white;
    font-size: 25px;
    padding: 13px 25px;
    cursor: pointer;
    outline: none;

`;

export const UnderBar = styled.div`
    width: 80vw;
    height: 3px;
    position: relative;
    top: 4vh;
    left: 50%;
    transform: translateX(-50%);
    background: white;
`;

export const List = styled.div`
    width: 80vw;
    height: 55vh;
    position: relative;
    top: 6vh;
    left: 50%;
    transform: translateX(-50%);
`;

export const PaginationStyle = styled.div`
    position: absolute;
    left: 50%;
    bottom: 15px;
    transform: translateX(-50%);
    height: 8vh;
`;

export const PageOptionBtn = styled.div`
    padding:5px;
    width:25px;
    color: white;
    position: absolute;
    top: 0px;
    cursor: pointer;

    &:first-child{
        margin-left: -60px;
    }

    &:last-child{
        margin-left: ${props => props.num * 28 + 23 }px;
    }
`;

export const PageBtn = styled.div`
    font-weight: bold;
    font-size: 15px;
    text-align: center;
`;