import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import styles from "../styles/Theme.module.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/GitHubLink";
import Link from 'next/link' 
import { MantineProvider } from '@mantine/core';
import { Tabs ,
  NavLink , Group, Box, Text, Anchor, Button } from '@mantine/core';
  //import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
// This is the chainId your dApp will work on.
const activeChain = "mumbai";
const title = "thirdweb NFT Drop Minting Customizable Page"
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
       <MantineProvider withGlobalStyles withNormalizeCSS
       theme={{ colorScheme: 'dark' }}>
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
      {/* <Box sx={{  color:'purple', fontSize: 18, lineHeight: 1.4, paddingTop: 100, paddingDown:200, paddingLeft:200, paddingRight:200,}}>
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
          <li className={styles.li}>
            <Link className={styles.link} href="/MintPage">ContactUs</Link>
          </li>
       </ul>
       </Box> */}
       <Box sx={{  color:'purple', fontSize: 50, lineHeight: 1.4, paddingTop: 5, paddingDown:5, paddingLeft:200, paddingRight:200,}}>
        
            
        <Button variant="subtle" size="xl">
                <Link className={styles.link} href="/">Home</Link>
            </Button>
   
            <Button variant="subtle" size="xl">
                <Link className={styles.link} href="/MyCollections"> My Collections</Link>
            </Button>
      
            <Button variant="subtle" size="xl">
                <Link className={styles.link} href="/MintPage"> Mint NFT</Link>
            </Button>
            <Button variant="subtle" size="xl">
                <Link className={styles.link} href="/ContactUs"> Contact Us</Link>
            
            </Button>
        
  

       </Box>
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
      </MantineProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
