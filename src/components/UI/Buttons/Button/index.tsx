import {ButtonProps} from '@shared/types';

import {ButtonContainer} from './styles';

const Button = ({
    width,
    height,
    backgroundColor,
    children,
    ...rest
}: ButtonProps): JSX.Element => {
    return (
        <ButtonContainer
            backgroundColor={backgroundColor}
            height={height}
            width={width}
            {...rest}
        >
            {children}
        </ButtonContainer>
    );
};

export default Button;
