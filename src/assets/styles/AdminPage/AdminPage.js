import styled from 'styled-components';
import SubImg from '../../images/sub.png';

export const Container = styled.div`
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    user-select:none;

    background: url(${SubImg}) no-repeat center center fixed;
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

export const Viewer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(54, 54, 54, 0.26);
    width: 84vw;
    height: 70vh;
`;

export const Header = styled.div`
    color: white;
    font-weight: bold;
    background: rgb(60, 60, 60);
    margin-top: 10px;
    padding: 10px 20px;
    width: 80vw;
    height: 25px;
    display: flex;
    align-items: center;
`;

export const HeaderTitle = styled.div`
    flex-grow: 9;
`;

export const HeaderID = styled.div`
    text-align: center;
    flex-grow: 1;
`;

export const HeaderDate = styled.div`
    text-align: center;
    flex-grow: 1;
`;

export const HeaderOption = styled.div`
    text-align: center;
    flex-grow: 1;
`;

export const List = styled.div`
    padding: 10px 20px;
    width: 80vw;
    height: 58vh;
    background: red;
`;