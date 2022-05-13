import Image from 'next/image';

import {ButtonCircleContainer} from './styles';

const ButtonCircle = (): JSX.Element => {
    const goToTopHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <ButtonCircleContainer onClick={goToTopHandler}>
            <Image
                src='/assets/circle_button.svg'
                alt='button image'
                width={300}
                height={300}
            />
        </ButtonCircleContainer>
    );
};

export default ButtonCircle;
