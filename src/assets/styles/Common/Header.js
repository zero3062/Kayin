import styled from 'styled-components';

export const Container = styled.div`
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    user-select:none;
    
    color: white;
    height: 99px;
    background: black;
`;

export const Contents = styled.div`
`;

export const Logo = styled.div`
    font-size: 60px;
    float: left;
    margin-left: 8vw;
    cursor: pointer;
`;

export const Menu = styled.ul`
    list-style: none;
    float: right;
    margin-right: 8vw;
`;

export const MenuItem = styled.li`
    float: left;
    font-size: 40px;
    cursor: pointer;
    display: ${props => props.display && 'none' };

    &:nth-child(1) {
        margin-right: 4vw;
        color: ${props => props.option === 1 && "red"}
    }

    &:nth-child(2) {
        margin-right: 4vw;
        color: ${props => props.option === 2 && "red"}
    }

    @media screen and (max-width: 750px) {
        display: none;
    }
`;