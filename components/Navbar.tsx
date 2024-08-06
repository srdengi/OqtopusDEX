import { ConnectWallet } from "@thirdweb-dev/react";

export default function Navbar() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "10px",
    }}>
      <h1>
        OQTOPUS DEX <span style={{ fontSize: "0.5em" }}>
        beta by <a href="https://mylinks-sr-dengi.vercel.app/" target="_blank" rel="noopener noreferrer">Marc Aliaga</a>
      </span>
      </h1>
      <ConnectWallet />
    </div>
  );
}