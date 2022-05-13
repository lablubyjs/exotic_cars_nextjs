import styled from 'styled-components';

export const CarsListContainer = styled.section`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 3vh 10vh;
    align-items: center;
    justify-content: center;
    gap: 2rem 1.5rem;
    z-index: 1;

    @media (max-width: 1115px) {
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 1rem;
        padding: 0 10vh 5vh;
    }
    @media (max-width: 950px) {
        grid-template-columns: 1fr 1fr;
        margin-top: 1rem;
    }
    @media (max-width: 700px) {
        grid-template-columns: 1fr;
        margin-top: 1rem;
    }
    @media (max-width: 438px) {
        grid-template-columns: 100%;
        margin-top: 1rem;
    }
`;

export const CarItemContainer = styled.div`
    width: 17.9rem;
    height: 13.9rem;
    border-radius: 20px;
    background-color: ${({theme}) => theme.colors.white02};
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
        background: transparent
            linear-gradient(
                45deg,
                ${({theme}) => theme.colors.gradient01} 0%,
                ${({theme}) => theme.colors.gradient02} 90%
            )
            0% 0% no-repeat;

        & a {
            display: block;
        }
    }
`;

export const CarItemInfo = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 10fr 1fr;
`;

export const CarItemImage = styled.div`
    width: 100%;
    height: 40%;
`;

export const CarItemPriceAndPeriod = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    padding-top: 1rem;
    & a {
        width: 75%;
        display: none;
        font-weight: 600;
        color: ${({theme}) => theme.colors.white01};
        padding-top: 0.7rem;
    }
    & div {
        display: flex;
        align-items: baseline;
        position: relative;
        ::before {
            content: '$';
            position: static;
            transform: translate(-1px, -10px);
            color: ${({theme}) => theme.colors.grey08};
            font-size: 0.8rem;
            font-weight: 700;
            height: 100%;
        }
    }
`;
