import styled from 'styled-components';

export const SliderItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 7rem;
    border-radius: 10px;
    background: linear-gradient(
        45deg,
        ${({theme}) => theme.colors.box_shadow_color},
        ${({theme}) => theme.colors.box_shadow_color}
    );
    & div {
        max-width: 80%;
        transform: translateX(1rem) scale(1.1);
    }
`;

export const CarSliderContainer = styled.div`
    height: 30%;
    width: 100%;
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    justify-items: center;
    align-items: center;
    .swiper {
        max-width: 100%;
        padding-top: 1rem;
    }
    .swiper-wrapper {
        display: flex;
        align-items: flex-end;
        height: auto;
    }
    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        &.swiper-slide-active {
            ${SliderItem} {
                width: 12rem;
                height: 8rem;
                background: linear-gradient(
                    45deg,
                    ${({theme}) => theme.colors.primary_car_slider_gradient} 0%,
                    ${({theme}) => theme.colors.second_car_slider_gradient} 90%
                );
                transform: translateY(-0.8rem);
                & div {
                    transform: translate(2rem, 0.5rem) scale(1.35);
                }
            }
        }
    }
    @media (max-width: 1115px) {
        grid-template-columns: 85px 1fr 85px;
    }
    @media (max-width: 1025px) {
        grid-template-columns: 75px 1fr 75px;
    }
    @media (max-width: 910px) {
        grid-template-columns: 65px 1fr 65px;
    }
    @media (max-width: 835px) {
        grid-template-columns: 55px 1fr 55px;
    }
    @media (max-width: 785px) {
        grid-template-columns: 50px 1fr 50px;
        ${SliderItem} {
            width: 9rem;
            height: 5rem;
        }
        button {
            width: 20px;
            height: 20px;
            & img {
                width: 50%;
            }
        }
        .swiper-slide {
            &.swiper-slide-active {
                ${SliderItem} {
                    width: 10rem;
                    height: 7rem;
                    & div {
                        width: 100%;
                        transform: translate(1rem, 0.2rem) scale(1.35);
                    }
                }
            }
            & div {
                max-width: 60%;
            }
        }
    }
    @media (max-width: 715px) {
        grid-template-columns: 45px 1fr 45px;
    }
    @media (max-width: 650px) {
        ${SliderItem} {
            width: 5rem;
            height: 3rem;
        }
        button {
            width: 20px;
            height: 20px;
            & img {
                width: 50%;
            }
        }
        .swiper-slide {
            &.swiper-slide-active {
                ${SliderItem} {
                    width: 7rem;
                    height: 5rem;
                    & div {
                        width: 100%;
                        transform: translate(1rem, 0.2rem) scale(1.35);
                    }
                }
            }
            & div {
                max-width: 60%;
            }
        }
    }
    @media (max-width: 460px) {
        grid-template-columns: 40px 1fr 40px;
    }
    @media (max-width: 425px) {
        grid-template-columns: 20px 1fr 20px;
    }
    @media (max-width: 350px) {
        grid-template-columns: 5px 1fr 5px;
    }
    @media (max-width: 330px) {
        ${SliderItem} {
            width: 5rem;
            height: 2rem;
        }
        .swiper-slide {
            &.swiper-slide-active {
                ${SliderItem} {
                    width: 7rem;
                    height: 3rem;
                    & div {
                        transform: translate(0.5rem, 0.2rem) scale(1.35);
                    }
                }
            }
            & div {
                max-width: 60%;
            }
        }
    }
`;
