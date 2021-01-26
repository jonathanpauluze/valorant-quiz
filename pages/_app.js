import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: ${({ theme }) => theme.colors.contrastText};
  }

  html, body {
    min-height: 100vh;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <meta property="og:title" content="Valorant Quiz" />
        <meta property="og:description" content="Você sabe tudo sobre Valorant? Descubra no Valorant Quiz!" />
        <meta property="og:image" content="/images/valorant-bg.jpg" />
        <meta property="og:image:type" content="image/jpg" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
