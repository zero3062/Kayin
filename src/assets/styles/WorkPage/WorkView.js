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

export const WorkHeader = styled.div`
    color: white;
    width: 80vw;
    font-size: 35px;
    position: relative;
    left: 2vw;
    top: 10px;
    margin-bottom: 15px;
    word-break: break-all;
`;

export const Information = styled.div`
    position: absolute;
    top: 5px;
    right: 2vw;
    color: white;
    line-height: 40px;

`;

export const DateView = styled.div`
`;

export const UserId = styled.div`
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

export const MainContents = styled.div`
    position: relative;
    top: 6vh;
    left: 50%;
    transform: translateX(-50%);
    height: 500px;
    width: 75vw;
    overflow-x: hidden;
    overflow-y: scroll;
`;

export const Description = styled.div`
    color: white;
`;

export const ImageFile = styled.img`
    width: 50vw;
    height: auto;
    position: relative;
    top: 10vh;
`;
