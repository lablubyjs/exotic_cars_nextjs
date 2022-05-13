import React, {useState} from 'react';

import Button from '../Buttons/Button';
import Logo from '../Logo';
import SearchBar from '../../SearchBar';

import {Text, theme} from '@styles';

import {AuthContainer, HeaderContainer, Menu} from './styles';

const Header = (): JSX.Element => {
    const [menuIsActive, setMenuIsActive] = useState(false);

    const toggleMenuHandler = () => {
        setMenuIsActive(!menuIsActive);
    };

    return (
        <HeaderContainer menuIsActive={menuIsActive}>
            <Logo />

            <SearchBar />

            <AuthContainer>
                <Button
                    width={5}
                    height={2}
                    backgroundColor={theme.colors.screen_background}
                >
                    <Text
                        fontSize={1}
                        fontWeight="700"
                        color={theme.colors.button_auth}
                    >
                        Sign up
                    </Text>
                </Button>
                <Button
                    width={5}
                    height={2}
                    borderColor={theme.colors.button_auth}
                    borderWidth={2}
                    backgroundColor={theme.colors.screen_background}
                    borderRadius={13}
                >
                    <Text
                        fontSize={1}
                        fontWeight="700"
                        color={theme.colors.button_auth}
                    >
                        Sign in
                    </Text>
                </Button>
            </AuthContainer>

            <Menu menuIsActive={menuIsActive} onClick={toggleMenuHandler} />
        </HeaderContainer>
    );
};

export default Header;
