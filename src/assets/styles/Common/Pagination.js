import styled from 'styled-components';

export const Container = styled.div`
    font-size: 13px;
    color: white;
`;

export const Contents = styled.div`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: ${props => props.num * 28}px;
    height: 30px;
`;

export const Numbering = styled.div`
    float: left;
    cursor: pointer;
    width: ${props => 50 / props.num}%;
    padding: 6px 7px;
    text-align: center;
    
    &:nth-child(${props => props.currentPage%10===0 ? 10 : props.currentPage%10}) {
        background: rgba(54, 54, 54, 0.26);
    }

    &:hover {
        background: rgba(54, 54, 54, 0.26);
    }
`;