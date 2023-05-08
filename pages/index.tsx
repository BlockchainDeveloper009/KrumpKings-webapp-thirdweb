import {
  MediaRenderer,
  useActiveClaimConditionForWallet,
  useAddress,
  useClaimConditions,
  useClaimedNFTSupply,
  useClaimerProofs,
  useClaimIneligibilityReasons,
  useContract,
  useContractMetadata,
  useUnclaimedNFTSupply,
  Web3Button,
} from "@thirdweb-dev/react";
import { BigNumber, utils } from "ethers";
import type { NextPage } from "next";
import Image from "next/image";
import { useMemo, useState } from "react";
import Timer from "../components/Timer";
import styles from "../styles/Theme.module.css";
import { parseIneligibility } from "../utils/parseIneligibility";
import data  from "../components/data";
import Head from "next/head";


const contracts = ["0x4470634F80f498348c234FA8f9D14a88C61785e3", "0x54Fc85180C1E2E081d0Bd3A242d11981Ac9C5A4b"]
// Put Your NFT Drop Contract address from the dashboard here
const myNftDropContractAddress = contracts[1]; 
//"0xbC044bc063F4F88e9d52D833c200aE05Ea65FAF9";
const title = "Display Krump Kings page"
const Home: NextPage = () => {
 
  return (
  <>

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
      <body>
        <h1>Krump Images  coming soon</h1>
      </body>
  </>)
};

export default Home;
