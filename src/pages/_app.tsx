import { AppProps } from "next/app";
import { Providers } from "../Providers/";

import "../styles/global.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
};

export default MyApp;
