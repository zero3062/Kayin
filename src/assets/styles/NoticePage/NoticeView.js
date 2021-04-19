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
    height: 78vh;
`;

export const NoticeHeader = styled.div`
    color: white;
    width: 70vw;
    font-size: 35px;
    position: relative;
    left: 2vw;
    top: 10px;
    margin-bottom: 15px;
    word-break: break-all;

    @media screen and (max-width: 850px) {
        width: 65vw;
    }
`;

export const DateView = styled.div`
    position: absolute;
    top: 30px;
    right: 2vw;
    color: white;
`;

export const UnderBar = styled.div`
    width: 80vw;
    height: 3px;
    position: relative;
    top: 2vh;
    left: 50%;
    transform: translateX(-50%);
    background: white;
`;

export const List = styled.div`
    width: 75vw;
    position: relative;
    top: 6vh;
    left: 50%;
    transform: translateX(-50%);
    color: white;
`;
