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

export const WorkHeader = styled.div`
    color: white;
    flex-grow: 10;
    font-size: 35px;
    word-break: break-all;
`;

export const Information = styled.div`
    color: white;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    line-height: 30px;
    margin-right: 2vw;
`;

export const DateView = styled.div`
    width: 85px;
`;

export const UserId = styled.div`
`;

export const UnderBar = styled.div`
    width: 80vw;
    height: 3px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    background: white;
`;

export const MainContents = styled.div`
    position: relative;
    top: 6vh;
    left: 50%;
    transform: translateX(-50%);
    height: 61vh;
    width: 75vw;
    overflow-x: hidden;
    overflow-y: scroll;
`;

export const Description = styled.div`
    color: white;
`;

export const ImageFile = styled.img`
    width: 20vw;
    height: auto;
    position: relative;
    top: 10vh;
`;
