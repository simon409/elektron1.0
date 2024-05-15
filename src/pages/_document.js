import Document, { Html, Head, Main, NextScript } from 'next/document';
import Header from './components/headerFooter/Header';
import Footer from './components/headerFooter/Footer';

export default class MyDocument extends Document {
  render() {
    const pathname = this.props.__NEXT_DATA__.page;

    // Determine if the current page is login or signup
    const isLoginOrSignup = pathname === '/auth/login-signup' || pathname === '/404';

    return (
      <Html lang="en">
        <Head />
        <body>
          {!isLoginOrSignup && <Header />}
          <Main />
          <NextScript />
          {!isLoginOrSignup && <Footer />}
        </body>
      </Html>
    );
  }
}
