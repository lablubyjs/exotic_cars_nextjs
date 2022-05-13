import ReactLoading from 'react-loading';

import {theme} from '@styles';

import {LoadingContainer} from './styles';

const Loading = () => {
    return (
        <LoadingContainer>
            <ReactLoading
                type="spin"
                color={theme.colors.purple01}
                height={25}
                width={50}
            />
        </LoadingContainer>
    );
};

export default Loading;
