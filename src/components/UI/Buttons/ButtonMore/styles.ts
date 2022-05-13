import styled from 'styled-components';

export const ButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: transparent;
    border: none;
`;

export const Circle = styled.div`
    width: 0.35rem;
    height: 0.35rem;
    border-radius: 50%;
    background-color: ${({theme}) => theme.colors.button_more};
`;
