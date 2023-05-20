import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  //let the wallet to grab user's wallet address
  const address = useAddress()
  console.log(address)
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ConnectWallet theme="dark" btnTitle="Login SplashX" className={styles.customWallet}/>
      </main>
    </div>
  );
};

export default Home;
