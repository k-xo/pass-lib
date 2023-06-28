# Pass-lib

## Installation

```bash
yarn install @k-xo/pass-lib
```

## Usage

In your top level component, wrap your app with the `ModalProvider` component.

```js
import '../styles/globals.css';
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
```

Then, in any component, you can use the Modal and ModalTrigger Components.

```js
import { Modal, ModalTrigger } from '@k-xo/pass-lib';

export default function Home() {
  return (
    <>
      <ModalTrigger
        triggerText="Open Modal"
        modal={
          <Modal>
            <>
              <h1 style={{ color: 'black' }}>Modal Content</h1>
              <p>More content...</p>
            </>
          </Modal>
        }
      />
    </>
  );
}
```

You can also find a full running example in the `example` folder. With a Next.js app, you can run it with `yarn dev` after running `yarn install` and navigate to `http://localhost:3000`.

You can also see the components on story book by running `yarn run storybook` and navigating to `http://localhost:6006`.
