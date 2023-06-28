import type { AppProps } from 'next/app';
import { ModalProvider } from '@k-xo/pass-lib';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  );
}
