import type {NextPage} from 'next';
import Head from 'next/head';

import {ButtonCircle, CarsList} from '@components';

import {carsServices} from '@shared/services';

const Home: NextPage = ({cars}: any) => {
    return (
        <>
            <Head>
                <title>Exotic Cars</title>
            </Head>
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
