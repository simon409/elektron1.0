// _app.js
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { store } from "@/store/store"; // Ensure this path is correct
import Header from "./components/headerFooter/Header"; // Ensure this path is correct
import Footer from "./components/headerFooter/Footer"; // Ensure this path is correct
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import CartInitializer from "@/components/CartInitializer"; // Ensure this path is correct

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const { pathname } = router;

  const isLoginOrSignup = pathname === '/auth/login-signup' || pathname === '/404';

  return (
    <Provider store={store}>
      <CartInitializer />
      {!isLoginOrSignup && <Header />}
      <Component {...pageProps} />
      {!isLoginOrSignup && <Footer />}
    </Provider>
  );
};

export default MyApp;
