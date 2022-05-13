import type {NextPage} from 'next';

import {ButtonCircle, CarsList} from '@components';

import {carsServices} from '@shared/services';

const Home: NextPage = ({cars}: any) => {
    return (
        <>
            <CarsList cars={cars} />
            <ButtonCircle />
        </>
    );
};

export async function getStaticProps() {
    const {getCars} = carsServices();

    const response = await getCars();

    return {
        props: {cars: response.cars},
    };
}

export default Home;
