import Image from 'next/image';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';

import Button from '../UI/Buttons/Button';

import {CarSliderProps} from '@shared/types';

import {theme} from '@styles';

import {CarSliderContainer, SliderItem} from './styles';

import 'swiper/css';
import 'swiper/css/navigation';

const CarSlider = ({models, onChangeModelColor}: CarSliderProps) => {
    return (
        <CarSliderContainer>
            <Button
                width={2}
                height={2}
                backgroundColor={theme.colors.primary_text}
                borderRadius={30}
                className="button-previous"
            >
                <Image
                    src="/assets/arrow_left.svg"
                    alt=""
                    height={15}
                    width={15}
                    layout="fixed"
                />
            </Button>

            <Swiper
                modules={[Navigation]}
                slidesPerView={3}
                loop={true}
                centeredSlides={true}
                centeredSlidesBounds={true}
                onSlideChange={({realIndex}) => onChangeModelColor(realIndex)}
                navigation={{
                    prevEl: '.button-previous',
                    nextEl: '.button-next',
                }}
            >
                {models.map(({id, photo}) => (
                    <SwiperSlide key={id}>
                        <SliderItem>
                            <div>
                                <Image
                                    src={photo}
                                    alt={photo}
                                    width={200}
                                    height={100}
                                    loading="eager"
                                />
                            </div>
                        </SliderItem>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Button
                width={2}
                height={2}
                backgroundColor={theme.colors.primary_text}
                borderRadius={30}
                className="button-next"
            >
                <Image
                    src="/assets/arrow_right.svg"
                    alt=""
                    height={15}
                    width={15}
                    layout="fixed"
                />
            </Button>
        </CarSliderContainer>
    );
};

export default CarSlider;
