import {useRouter} from 'next/router';

import {Text} from '@styles';

import {LogoContainer} from './styles';

const Logo = (): JSX.Element => {
    const router = useRouter();

    const goToHomeHandler = () => {
        router.replace('/');
    };

    return (
        <LogoContainer onClick={goToHomeHandler}>
            <Text fontSize={1.5} fontWeight="600">
                EXOTIC
            </Text>
            <Text fontSize={1} fontWeight="400">
                CARS
            </Text>
        </LogoContainer>
    );
};

export default Logo;
