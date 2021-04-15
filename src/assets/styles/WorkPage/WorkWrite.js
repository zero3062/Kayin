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

export const WorkWriteHeader = styled.input`
    background: transparent;
    color: white;
    width: 60vw;
    font-size: 35px;
    position: relative;
    left: 2vw;
    top: 10px;
    word-break: break-all;
    outline: none;
    border: none;
    
    @media screen and (max-width: 760px) {
        width: 58vw;
    }
    @media screen and (max-width: 675px) {
        width: 54vw;
    }
    @media screen and (max-width: 580px) {
        width: 50vw;
    }
`;

export const WorkWriteCreate = styled.input`
    position: absolute;
    top: 8px;
    right: 2vw;
    background: rgba(0,0,0,0.5);
    border: none;
    color: white;
    font-size: 25px;
    padding: 13px 25px;
    cursor: pointer;
    outline: none;

    @media screen and (max-width: 1340px) {
        padding: 13px 20px;
    }
    @media screen and (max-width: 1270px) {
        font-size: 20px;
    }
    @media screen and (max-width: 1040px) {
        padding: 13px 18px;
    }
    @media screen and (max-width: 970px) {
        padding: 10px 15px;
        top: 12px;
        font-size: 18px;
    }
    @media screen and (max-width: 870px) {
        padding: 10px 15px;
        top: 14px;
        font-size: 15px;
    }
`;

export const WorkWriteCancel = styled.input`
    position: absolute;
    top: 8px;
    right: 2vw;
    background: rgba(0,0,0,0.5);
    border: none;
    color: white;
    font-size: 25px;
    padding: 13px 25px;
    cursor: pointer;
    outline: none;
    margin-right: 130px;

    @media screen and (max-width: 1340px) {
        padding: 13px 20px;
        margin-right: 120px;

    }
    @media screen and (max-width: 1270px) {
        font-size: 20px;
        margin-right: 100px;
    }
    @media screen and (max-width: 1040px) {
        padding: 13px 18px;
        margin-right: 90px;
    }
    @media screen and (max-width: 970px) {
        padding: 10px 15px;
        top: 12px;
        font-size: 18px;
        margin-right: 80px;
    }
    @media screen and (max-width: 870px) {
        padding: 10px 15px;
        top: 14px;
        font-size: 15px;
        margin-right: 70px;
    }
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

export const TextArea = styled.textarea`
    background: transparent;
    resize: none;
    width: 75vw;
    height: 380px;
    position: relative;
    top: 6vh;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    margin-bottom: 25px;
    outline: none;
    border: none;
    font-size: 20px;
    font-family: 'Noto Sans KR', sans-serif;
`;

export const FileName = styled.input`
    display: inline-block; 
    padding: 7.5px 12px;
    font-size: 20px; 
    line-height: normal; 
    vertical-align: middle; 
    background: transparent; 
    -webkit-appearance: none;
    -moz-appearance: none; 
    appearance: none;
    position: relative;
    top: 40px;
    left: 2vw;
    border: 2px solid rgb(50, 50, 50);
    margin-right: 10px;
`;

export const FileLabel = styled.label`
    padding: 5px 15px;
    color: white;
    background: rgba(0,0,0,0.5);
    font-size: 25px;
    position: relative;
    top: 45px;
    left: 2vw;
    cursor: pointer;
`;

export const FileInput = styled.input`
    position: absolute; 
    width: 1px; 
    height: 1px;
    padding: 0; 
    margin: -1px; 
    overflow: hidden; 
    clip:rect(0,0,0,0); 
    border: 0;
`;