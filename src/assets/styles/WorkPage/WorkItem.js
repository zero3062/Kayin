import styled from 'styled-components';

export const Container = styled.div`
    padding: 8.7px 30px;
    color: white;
    position: relative;
    background: rgba(0, 0, 0, 0.5);
    height: 70px;
    margin-bottom: 14px;
`;

export const Contents = styled.div`
`;

export const Title = styled.div`
    width: 68vw;
    cursor: pointer;
    font-weight:bold;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
`;

export const Description = styled.div`
    width: 68vw;
    font-size: 15px;
    margin-top: 10px;
    height: 35px;
    white-space: normal;
    line-height: 1.2; 
    overflow:hidden;
    word-wrap: break-word; 
    display: -webkit-box; 
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;

    @media screen and (max-width: 1360px) {
        width: 65vw;
    }
    @media screen and (max-width: 1100px) {
        width: 63vw;
    }
    @media screen and (max-width: 940px) {
        width: 61vw;
    }
    @media screen and (max-width: 800px) {
        width: 59vw;
    }
    @media screen and (max-width: 740px) {
        width: 55vw;
    }
    @media screen and (max-width: 600px) {
        width: 52vw;
    }
    @media screen and (max-width: 540px) {
        width: 50vw;
    }
`;

export const ImageTag = styled.img`
    width: 110px;
    height: auto;
    position: absolute;
    top: 10px;
    right: 2vw;
`;