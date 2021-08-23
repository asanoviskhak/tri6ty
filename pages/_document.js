import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/Script'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />

          <link
            rel="shortcut icon"
            href="assets/images/favicon.png"
            type="image/png"
          />
        </Head>

        <Main />

        <NextScript />
      </Html>
    );
  }
}

export default MyDocument;
