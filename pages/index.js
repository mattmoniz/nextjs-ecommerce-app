import React from "react";
import { client } from "@/lib/client";
import { Product, FooterBanner, HeroBanner } from "@/components";

// products and bannerdata from bottom gets passed down as props uphere
const Home = ({products, bannerData}) => {

  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    {console.log(bannerData)}
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Many types of speakers</p>
      </div>
      <div className="products-container">
        {products?.map((product) => product.name)}
      </div>
      <FooterBanner />
    </div>
  );
};

export const getServerSideProps = async () => {
  // grab all of products from sanity dashboard
  const productQuery = '*[_type == "product"]'
  const products = await client.fetch(productQuery);

  // grab all of products from sanity dashboard
  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };


}


export default Home;
