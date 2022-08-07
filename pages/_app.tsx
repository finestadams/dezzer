import "styles/globals.css";
import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "app/store";
import Head from "next/head";

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType;
    children?: React.ReactNode;
  };
};

function MyApp({ Component, pageProps }: ComponentWithPageLayout) {
  const Layout =
    Component.PageLayout ||
    (({ children }: { children: React.ReactNode }) => <>{children}</>);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <title>Lenkie Arstist</title>
            <link rel="shortcut icon" href="/" />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
