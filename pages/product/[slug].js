import React, { useState } from "react";
import { client, urlFor } from "../../lib/client";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

import { Product } from "@/components";

// nextjs uses filebased routing, automatically creates a route for clickable item using the slug.
// There is no need to create a routing system.
const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;

  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              className="product-detail-image"
              src={urlFor(image && image[index])}
            />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => {
              <img
                key={i}
                src={urlFor(item)}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />;
            })}
          </div>
          </div>
          <div className="product-detail-desc">
            <h1>{name}</h1>
            <div className="reviews">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <p>(20)</p>
            </div>

            <h4>Details: </h4>
            <p>{details}</p>
            <p className="price">${price}</p>
            <div className="quantity">
              <h3>Quantity:</h3>
              <p className="quantity-desc">
                <span className="minus" onClick="">
                  <AiOutlineMinus />
                </span>

                <span className="num" onClick="">
                  {" "}
                  0
                </span>

                <span className="plus" onClick="">
                  <AiOutlinePlus />
                </span>
              </p>
            </div>
            <div className="buttons">
              <button type="button" className="add-to-cart" onClick="">
                {" "}
                Add to Cart
              </button>
              <button type="button" className="buy-now" onClick="">
                {" "}
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="maylike-products-wrapper ">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

// queries sanity for all the products but only wants the slug property returned.
// getstaticpaths is needed in nextjs when using dynamic paths and implementing getStaticProps
export const getStaticPaths = async () => {
  const query = `*[_type == "product"]{
        slug {
            current
        }
    }
    `;
  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  // grabs all of the product details from the product page we are on
  const query = `*[_type == "product" && slug.current =='${slug}'][0]`;

  //fetches all of the products that has the same product type as our product
  const productsQuery = '*[_type=="product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { product, products },
  };
};

export default ProductDetails;
