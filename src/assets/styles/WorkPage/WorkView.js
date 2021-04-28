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
    height: 76vh;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
    margin-left: 2vw;
    width: 80vw;
    overflow-x: hidden;
    overflow-y: scroll;
`;

export const Description = styled.div`
    color: white;
`;

export const MainBottom = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    width: 80vw;
    align-items: space-between;
`;

export const ImageFile = styled.img`
    width: 300px;
    height: auto;
`;

export const BtnBottom = styled.div`
    display: flex;
    margin-top: 20px;
    font-size: 20px;
`;

export const EditButton = styled.div`
    color: white;
    margin-right: 20px;
    background: rgba(10,10,10,0.5);
    padding: 7px 20px;
    cursor: pointer;

    &:hover {
        color: #FF3636;
    }
`;

export const DeleteButton = styled.div`
    color: white;
    background: rgba(10,10,10,0.5);
    padding: 7px 20px;
    cursor: pointer;

    &:hover {
        color: #FF3636;
    }
`;