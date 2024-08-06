import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Head from "next/head";


const activeChain = Sepolia;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
    >
       <Head>
        <title>OQTOPUS</title>  
        <meta name="description" content="Descripción de mi aplicación Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="public/images/favicon.ico" />
        
      </Head>
      
    
      <Navbar />

      <Component {...pageProps} />
    </ThirdwebProvider>

    
  );
}

export default MyApp;
