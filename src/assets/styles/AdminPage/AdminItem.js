import styled from 'styled-components';

export const Container = styled.div`
    color: white;
    display: flex;
    margin-bottom: 20px;
`;

export const Title = styled.div`
    cursor: pointer;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    flex-grow: 1;
    width: 35vw;
`;

export const User = styled.div`
    text-align: center;
    flex-grow: 1;
`;

export const Date = styled.div`
    text-align: center;
    flex-grow: 1;
`;

export const Option = styled.div`
    text-align: center;
    flex-grow: 1;
    width: 70px;
    display: flex;
    justify-content: space-around;
`;

export const Access = styled.div`
    cursor: pointer;
    font-weight: bold;
`;

export const Delete = styled.div`
    cursor: pointer;
    font-weight: bold;
    color: #FF3636;
`;