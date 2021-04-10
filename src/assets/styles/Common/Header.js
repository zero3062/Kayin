import styled from 'styled-components';

export const Container = styled.div`
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    user-select:none;

    height: 99px;
    color: white;
    background: black;

    @media screen and (max-width: 750px) {
        height: ${props => props.menubar ? '100vh' : '99px'};
    }
`;

export const Contents = styled.div`
`;

export const Logo = styled.div`
    font-size: 55px;
    float: left;
    margin-top: 5px;
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

export const MenuBarIcon = styled.img`
    display: none;
    margin-top: 5px;
    width: 60px;
    height: auto;
    cursor: pointer;

    @media screen and (max-width: 750px) {
        display: block;
    }
`;

export const SubMenu = styled.ul`
    list-style-type: none;
    padding: 0px;
    margin: 0px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    line-height: 80px;
    display: none;

    @media screen and (max-width: 750px) {
        display: ${props => props.menubar && 'block'};
    }
`;

export const SubMenuItem = styled.li`
    font-size: 40px;
    cursor: pointer;
    display: ${props => props.display && 'none' };

    &:nth-child(1) {
        color: ${props => props.option === 1 && "red"}
    }

    &:nth-child(2) {
        color: ${props => props.option === 2 && "red"}
    }
`;