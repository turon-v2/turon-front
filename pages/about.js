import Head from "next/head";

// import Components
import Layout from "../src/Components/layout/layout";
import AboutComp from "../src/Components/about/aboutComp";
import AboutIntro from "../src/Components/aboutIntro/aboutIntro";

export default function Product() {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <AboutIntro/>
        <AboutComp/>
      </Layout>
    </>

  );
}
