import {Provider} from 'react-redux';
import NextNProgress from 'nextjs-progressbar';
import type {AppProps} from 'next/app';

import {ThemeProvider} from 'styled-components';

import {Layout} from '@components';

import store from '@store/index';

import {GlobalStyle, theme} from '@styles';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Layout>
                    <GlobalStyle />
                    <NextNProgress
                        color={theme.colors.button_auth}
                        stopDelayMs={200}
                        height={5}
                    />
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </Provider>
    );
}

export default MyApp;
