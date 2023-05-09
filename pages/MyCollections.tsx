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
    useNFT,
    ThirdwebNftMedia,
    useOwnedNFTs
  } from "@thirdweb-dev/react";
  import { BigNumber, utils } from "ethers";
  import type { NextPage } from "next";
  
  import { useMemo, useState } from "react";
  import Timer from "../components/Timer";
  import styles from "../styles/Theme.module.css";
  import { parseIneligibility } from "../utils/parseIneligibility";
  import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
  import { Image } from '@mantine/core';
  // Put Your NFT Drop Contract address from the dashboard here
  const myNftDropContractAddress = "0x4470634F80f498348c234FA8f9D14a88C61785e3"; 
  //"0xbC044bc063F4F88e9d52D833c200aE05Ea65FAF9";
  
  const MyCollections: NextPage = () => {
    const { contract: nftDrop } = useContract(myNftDropContractAddress);
    
    // Load the NFT metadata from the contract using a hook
  const { data: nft, isLoading, error } = useNFT(nftDrop, "0");  

const sdk = new ThirdwebSDK("mumbai");

    const claimedNFTCount = (async () => {
      const contract = await sdk.getContract(myNftDropContractAddress);
      
      const claimedNFTCount = await contract.erc721.totalClaimedSupply();
    console.log(`NFTs claimed: ${claimedNFTCount}`);

    });
    const address = useAddress();
    const [quantity, setQuantity] = useState(1);
  
    const { data: contractMetadata } = useContractMetadata(nftDrop);
    const { data:ownedNftContractMetadata, isLoading:ownedNftLoading, error:ownedNftError } = useOwnedNFTs(nftDrop, address);
    const claimConditions = useClaimConditions(nftDrop);
  
    const activeClaimCondition = useActiveClaimConditionForWallet(
      nftDrop,
      address || ""
    );
    const claimerProofs = useClaimerProofs(nftDrop, address || "");
    const claimIneligibilityReasons = useClaimIneligibilityReasons(nftDrop, {
      quantity,
      walletAddress: address || "",
    });
    const unclaimedSupply = useUnclaimedNFTSupply(nftDrop);
    const claimedSupply = useClaimedNFTSupply(nftDrop);
  
    console.log(`address-->${address}`)
    const loadNft = () => {
       // Render the NFT onto the UI
        if (isLoading) {
          console.log('nft data loading')
          return <div>Loading...</div>;
        }
        if (error || !nft) {
          console.log('nft error or not nft')
          return <div>NFT not found</div>;
        }

        return <ThirdwebNftMedia metadata={nft.metadata} />;
    }

    const myNftCollections = () => {
      // Render the NFT onto the UI
       if (ownedNftLoading) {
         console.log('nft data loading')
         return <div>Loading...</div>;
       }
       if (ownedNftError || !ownedNftContractMetadata) {
         console.log('nft error or not nft')
         return <div>NFT not found</div>;
       }
       console.log(`sds`)
       console.log(ownedNftContractMetadata)

      // return <ThirdwebNftMedia metadata={ownedNftContractMetadata[0].metadata} />;
      // Loop through the ownedNftContractMetadata array and render ThirdwebNftMedia components for each item
  return (
    <div className="nft-collection">
      {ownedNftContractMetadata.map((ownedNftContractMetadata, index) => (
        <div key={index} className="nft-item">
          <ThirdwebNftMedia metadata={ownedNftContractMetadata.metadata} />
        </div>
      ))}
    </div>
  );
   }

    return (
      <div className={styles.container}>
        <div className={styles.mintInfoContainer}>
          {  (
            <>
              <div className={styles.infoSide}>
                {/* Title of your NFT Collection */}
                <h1>{contractMetadata?.name}</h1>
                {/* Description of your NFT Collection */}
                <p className={styles.description}>
                  {contractMetadata?.description}
                </p>
              </div>

              <div>
                    <Image
              src="/Krump Kings logo.jpg"
              alt="Krump Kings Logo1"
              width={205}
              height={202}
              className={styles.buttonGapTop}
              style={{
                objectFit: "contain",
              }}
            />

              </div>
       
              <div>
                {myNftCollections()}
              </div>
            </>
          )}
        </div>
        {/* Powered by thirdweb */}{" "}
        {/* <Image
          src="/logo.png"
          alt="thirdweb Logo"
          width={135}
          height={22}
          className={styles.buttonGapTop}
          style={{
            objectFit: "contain",
          }}
        /> */}
      </div>
    );
  };
  
  export default MyCollections;
  