import {useRouter} from 'next/router';
import Image from 'next/image';

import ButtonMore from '../UI/Buttons/ButtonMore';

import {CarListProps} from '@shared/types';

import {Text} from '@styles';

import {
    CarItemContainer,
    CarItemImage,
    CarItemInfo,
    CarItemPriceAndPeriod,
    CarsListContainer,
} from './styles';

const CarsList = ({cars}: CarListProps): JSX.Element => {
    const router = useRouter();

    async function carOnClickHandler(id: string) {
        router.replace(`/details/${id}`);
    }

    return (
        <CarsListContainer>
            {cars.map((car) => (
                <CarItemContainer
                    key={car._id}
                    onClick={carOnClickHandler.bind(this, car._id)}
                >
                    <CarItemInfo>
                        <Text fontSize={1.06} fontWeight="700">
                            {car.brand}
                        </Text>
                        <ButtonMore />
                        <Text fontSize={1.06} fontWeight="400">
                            {car.model.toUpperCase()}
                        </Text>
                    </CarItemInfo>
                    <CarItemImage>
                        <Image
                            src={car.cover_photo}
                            alt={car.model}
                            width={250}
                            height={100}
                        />
                    </CarItemImage>
                    <CarItemPriceAndPeriod>
                        <a>Book Now</a>
                        <div>
                            <Text fontSize={1.5} fontWeight="700">
                                {car.price}
                            </Text>
                            /
                            <Text fontSize={0.8} fontWeight="500">
                                {car.period}
                            </Text>
                        </div>
                    </CarItemPriceAndPeriod>
                </CarItemContainer>
            ))}
        </CarsListContainer>
    );
};

export default CarsList;
