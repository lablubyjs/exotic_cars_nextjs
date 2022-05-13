import {useMemo} from 'react';
import {useRouter} from 'next/router';
import Image from 'next/image';

import Button from '../UI/Buttons/Button';
import CarSlider from '../CarSlider';

import {CarDetailsProps} from '@shared/types';

import {formatValueToCurrency} from '@shared/utils';

import {Text, theme} from '@styles';

import {
    CarDetailsContainer,
    CarDetailsModelCarImage,
    CarDetailsModelColor,
    CarDetailsModelContainer,
    CarDetailsModelInfo,
} from './styles';

const CarDetails = ({
    car,
    currentColorIndex,
    setCurrentColorIndex,
}: CarDetailsProps) => {
    const router = useRouter();

    const models = useMemo(
        () =>
            car.photos.map((car, index) => {
                return {id: index, photo: car.photo};
            }),
        [car.photos]
    );

    const goToCatalogHandler = () => {
        router.replace('/');
    };

    return (
        <CarDetailsContainer>
            <CarDetailsModelContainer>
                <CarDetailsModelInfo>
                    <div>
                        <Image
                            src={car.brand_logo}
                            alt={car.brand}
                            width="100%"
                            height="100%"
                            layout="responsive"
                            objectFit="contain"
                            loading="eager"
                        />
                    </div>
                    <Text fontSize={2} fontWeight="700">
                        {car.brand} {car.model}
                    </Text>
                    <Text fontSize={1.5} fontWeight="300">
                        {formatValueToCurrency(car.price)}/{car.period}
                    </Text>
                    <CarDetailsModelColor>
                        <Text fontSize={3} fontWeight="700">
                            0{currentColorIndex + 1}
                        </Text>
                        <Text fontSize={1.8} fontWeight="300">
                            {car.photos[currentColorIndex].color}
                        </Text>
                    </CarDetailsModelColor>
                </CarDetailsModelInfo>

                <CarDetailsModelCarImage>
                    <Button
                        width={9}
                        height={2.3}
                        backgroundColor={theme.colors.white01}
                        borderRadius={25}
                        borderColor={theme.colors.grey08}
                        borderWidth={1}
                        onClick={goToCatalogHandler}
                        className="button-left"
                    >
                        <Image
                            src="/assets/arrow_left_black.svg"
                            alt=""
                            height={15}
                            width={15}
                            layout="fixed"
                        />
                        <Text fontSize={0.8} fontWeight="300">
                            Back to catalog
                        </Text>
                    </Button>

                    <div>
                        <Image
                            src={car.photos[currentColorIndex].photo}
                            alt={car.model}
                            width={548}
                            height={285}
                            loading="eager"
                        />
                        <Button
                            width={9}
                            height={2.3}
                            backgroundColor={theme.colors.grey08}
                            borderRadius={25}
                        >
                            <Text
                                fontSize={0.8}
                                fontWeight="300"
                                color={theme.colors.white01}
                            >
                                Book now
                            </Text>
                            <Image
                                src="/assets/arrow_right.svg"
                                alt=""
                                height={15}
                                width={15}
                                layout="fixed"
                            />
                        </Button>
                    </div>
                </CarDetailsModelCarImage>
            </CarDetailsModelContainer>

            <CarSlider
                models={models}
                onChangeModelColor={setCurrentColorIndex}
                currentIndex={currentColorIndex}
            />
        </CarDetailsContainer>
    );
};

export default CarDetails;
