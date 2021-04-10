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
    color: white;
    width: 60vw;
    position: absolute;
    left: 8vw;
    top: 50%;
    transform: translateY(-50%);
`;

export const HeadContent = styled.div`
    font-size: 40px;
`;

export const SubContent = styled.div`
    font-size: 30px;
`;