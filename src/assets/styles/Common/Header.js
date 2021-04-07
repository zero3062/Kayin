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
    padding: 0px 65px;
`;

export const Logo = styled.div`
    font-size: 60px;
    float: left;
    cursor: pointer;
`;

export const Menu = styled.ul`
    list-style: none;
    float: right;
`;

export const MenuItem = styled.li`
    float: left;
    font-size: 40px;
    margin-right: 45px;
    cursor: pointer;
    display: ${props => props.display && 'none' };

    &:nth-child(1) {
        color: ${props => props.option === 1 && "red"}
    }

    &:nth-child(2) {
        color: ${props => props.option === 2 && "red"}
    }
`;