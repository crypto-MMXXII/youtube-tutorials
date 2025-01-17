import Image from "next/image";
import styles from "../styles/Home.module.css";

import Logo from "../public/assets/surge-black.png";

export default function Header() {
  return (
    <section className={styles.header}>
      <Image src={Logo} alt="Logo image" width="102" height="82" />
      <h3 className={styles.title}>Check your Wallet's SRG / SRG20 Token Balance</h3>
    </section>
  );
}
