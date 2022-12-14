import Head from "next/head";

// import Components
import Layout from "../src/Components/layout/layout";
import ProductIntro from "../src/Components/productIntro/productIntro";
import Products from "../src/Components/products/products";

export default function Product() {
  return (
    <>
      <Head>
        <title>Product Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout bgPathLay="product">
        <ProductIntro/> 
        <Products/>
      </Layout>
    </>

  );
}
