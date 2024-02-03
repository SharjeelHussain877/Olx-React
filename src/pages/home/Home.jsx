import React, { useEffect, useState } from "react";
import Categories from "../../components/categories/category.jsx";
import OlxCarousel from "../../components/carousel/carousel.jsx";
import ProductCard from "../../components/card/card.jsx";
import allProducts from "../../firebase/getData.js";

// async function getData() {
//   const response = await fetch("https://dummyjson.com/products");
//   const result = await response.json();
//   return result.products;
// }




function Home() {
  // const [smartphones, setSmartphones] = useState([]);
  // const [laptops, setLaptops] = useState([]);
  // const [groceries, setGroceries] = useState([]);
  // const [skincare, setSkincare] = useState([]);
  // const [fragrances, setFragrances] = useState([]);
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await getData();

  //       if (Array.isArray(result)) {
  //         const smartphonesData = result.filter(
  //           (product) => product.category === "smartphones"
  //         );
  //         smartphonesData.pop();
  //         setSmartphones(smartphonesData);

  //         const laptopData = result.filter(
  //           (product) => product.category === "laptops"
  //         );
  //         laptopData.pop();
  //         setLaptops(laptopData);

  //         const groceriesData = result.filter(
  //           (product) => product.category === "groceries"
  //         );
  //         groceriesData.pop();
  //         setGroceries(groceriesData);

  //         const skincareData = result.filter(
  //           (product) => product.category === "skincare"
  //         );
  //         skincareData.pop();
  //         setSkincare(skincareData);

  //         const fragrancesData = result.filter(
  //           (product) => product.category === "fragrances"
  //         );
  //         fragrancesData.pop();
  //         setFragrances(fragrancesData);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const fetchedProducts = await allProducts();
      console.log(fetchedProducts)
      setProducts(fetchedProducts)
    } catch (error) {
      console.error('error fetch products: ', error)
    }
  }
  fetchProducts()
}, [])

  return (
    <>
      <OlxCarousel />
      <Categories />
      <ProductCard prop={products}/>
      {/* <ProductCard prop={laptops} />
      <ProductCard prop={groceries} />
      <ProductCard prop={skincare} />
      <ProductCard prop={fragrances} /> */}
    </>
  );
}

export default Home;
