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

export const Header = styled.div`
    display: flex;
    padding: 10px 0px;
    margin-left: 2vw;
`;

export const NoticeHeader = styled.div`
    color: white;
    font-size: 35px;
    word-break: break-all;
    flex-grow: 10;
`;

export const DateView = styled.div`
    width: 32vw;
    color: white;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    margin-right: 2vw;
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
