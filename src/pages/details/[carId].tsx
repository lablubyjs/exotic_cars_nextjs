import {useEffect} from 'react';

import {NextPage} from 'next';

import {Loading, CarDetails} from '@components';

import {useAppDispatch, useAppSelector} from '@hooks';

import {
    asyncSetCurrentModel,
    currentColorIndex,
    pending,
    setCurrentColorIndex,
} from '@store/cars-slice';

import {carsServices} from '@shared/services';

const CarDetailsPage: NextPage = ({car, carId}: any) => {
    const dispatch = useAppDispatch();
    const colorIndex = useAppSelector(currentColorIndex);
    const isPending = useAppSelector(pending);

    useEffect(() => {
        dispatch(asyncSetCurrentModel(carId));
    }, [carId, dispatch]);

    const setColorIndex = (index: number) => {
        dispatch(setCurrentColorIndex(index));
    };

    if (isPending) {
        return <Loading />;
    }

    return (
        <>
            <CarDetails
                car={car}
                currentColorIndex={colorIndex}
                setCurrentColorIndex={setColorIndex}
            />
        </>
    );
};

export async function getStaticProps({params}: any) {
    const {getCar} = carsServices();

    const carId = params.carId;

    try {
        const car = await getCar(carId);

        return {
            props: {car: car, carId: carId},
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking',
    };
}

export default CarDetailsPage;
