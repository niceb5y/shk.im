import Document, { Html, Head, Main, NextScript } from "next/document";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="stylesheet" href="https://cdn.shk.im/webcore/v18.css" />
          <script src="https://cdn.shk.im/webcore/v18.js" />
        </Head>
        <body>
          <div className="container">
            <Header />
            <Main />
            <Footer />
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
