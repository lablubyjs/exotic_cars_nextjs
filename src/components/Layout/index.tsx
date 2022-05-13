import Head from 'next/head';

import Header from '../UI/Header';

import {ChildrenProp} from '@shared/types';

import {Container} from '@styles';

const Layout = ({children}: ChildrenProp): JSX.Element => {
    return (
        <>
            <Head>
                <title>Exotic Cars</title>
            </Head>
            <Header />
            <Container>{children}</Container>
        </>
    );
};

export default Layout;
