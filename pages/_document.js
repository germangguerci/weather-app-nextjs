import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta name="description" content="Simple weather" />
          <meta name="keywords" content="weather" />
          <meta name="author" content="German Gerardo Guerci" />
          <meta name="copyright" content="German Gerardo Guerci" />
          <meta property="og:locale" content="en" />
          <meta property="og:title" content="Simple Weather" />
          <meta property="og:url" content="https://wwww.weather-app-nextjs-ten.vercel.app" />
          <meta property="og:image" content="https://wwww.weather-app-nextjs-ten.vercel.app/logo.jpg" />
          <meta property="og:description" content="Small weather application" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Montserrat:wght@400;500;700&family=Open+Sans:wght@400;500;700&family=Roboto:wght@700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}