import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import MobileHeader from "./MobileHeader ";

const Layout = ({ children, pagina, guitarra}) => {
  return (
    <div>
      <Head>
        <title> {pagina} - Jordan Store </title>
        <meta name="description" content={`Learn more about ${pagina}`} />
        <meta property="og:title" content={`${pagina} - My Clothing Store`} />
        <meta
          property="og:description"
          content={`Learn more about ${pagina}`}
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/myfavicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        
      </Head>
      <Header />
      <MobileHeader />
      {children}
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  guitarra : null
}

export default Layout;
