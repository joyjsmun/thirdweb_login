import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { BaseGoerli,PolygonZkevmTestnet } from "@thirdweb-dev/chains";

import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
//const activeChain = "ethereum";
const activeChain = "polygon"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={BaseGoerli} supportedChains={[BaseGoerli,PolygonZkevmTestnet]}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
