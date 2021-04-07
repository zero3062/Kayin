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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -30%);
    width: 310px;
    height: 290px;
    color: white;
`;

export const Head = styled.div`
    text-align: center;
    margin-bottom: 40px;
`;

export const Header = styled.div`
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 15px;
`;

export const UnderBar = styled.div`
    width: 295px;
    height: 5px;
    background: white;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`;

export const Input = styled.div`
    text-align: center;
    margin-bottom: 10px;
`;

export const ID = styled.input`
    outline: none;
    background: transparent;
    border: 2px solid white;
    color: white;
    width: 87%;
    height: 38px;
    margin-bottom: 25px;
    padding: 0px 10px;

    &::placeholder {
        color: #808080;
    }
`;

export const Pass = styled.input`
    outline: none;
    background: transparent;
    border: 2px solid white;
    color: white;
    width: 87%;
    height: 38px;
    margin-bottom: 25px;
    padding: 0px 10px;

    &::placeholder {
        color: #808080;
    }
`;

export const Submit = styled.input`
    outline: none;
    background: white;
    border: 2px solid white;
    color: black;
    width: 95%;
    height: 38px;
    cursor: pointer;
    font-weight: 600;
`;