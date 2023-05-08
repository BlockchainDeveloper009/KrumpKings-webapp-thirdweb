import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import styles from "../styles/Theme.module.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/GitHubLink";
import Link from 'next/link' 
import { MantineProvider } from '@mantine/core';
// This is the chainId your dApp will work on.
const activeChain = "mumbai";
const title = "thirdweb NFT Drop Minting Customizable Page"
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
       <MantineProvider withGlobalStyles withNormalizeCSS>
      <Head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="NFT Drop minting page"
        />
        <meta
          name="keywords"
          content="Krump Kings minting"
        />
      </Head>
      <ul className={styles.ul}>
          <li className={styles.li}>
            <Link className={styles.link} href="/">Home</Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.link} href="/MyCollections">My Collections</Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.link} href="/MintPage">Minting Page</Link>
          </li>
       </ul>
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
      </MantineProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
