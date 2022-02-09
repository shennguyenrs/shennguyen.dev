// Styles
import '../styles/core/_reset.scss';
import '../styles/core/_global.scss';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
