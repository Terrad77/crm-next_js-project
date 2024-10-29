import Document, { Html, Head, Main, NextScript } from 'next/document';
// расширяем класс Document компонентами, которые используются для структурирования документа, чтобы настраивать HTML-документ.

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="CRM " />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
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

export default MyDocument;
