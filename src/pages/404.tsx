import type {NextPage} from 'next';
import {useRouter} from 'next/router';
import Head from 'next/head';
import Image from 'next/image';

import {Button} from '@components';

import {Content, Text, theme} from '@styles';

const NotFound: NextPage = () => {
    const router = useRouter();

    const goToHome = () => {
        router.replace('/');
    };

    return (
        <>
            <Head>
                <title>Page not found</title>
            </Head>

            <Content>
                <Text
                    fontSize={2}
                    fontWeight="bold"
                    color={theme.colors.purple01}
                >
                    Page Not Found
                </Text>
                <Text fontSize={1} fontWeight="regular">
                    You can check the desired page here or return to the home
                    page.
                </Text>
                <Button
                    width={7}
                    height={2.5}
                    backgroundColor={theme.colors.purple01}
                    borderRadius={20}
                    onClick={goToHome}
                >
                    <Text
                        fontSize={1}
                        fontWeight="700"
                        color={theme.colors.purple02}
                    >
                        Go Home
                    </Text>
                </Button>
                <Image
                    src="/assets/404.png"
                    alt="not found image"
                    width={500}
                    height={400}
                />
            </Content>
        </>
    );
};

export default NotFound;
