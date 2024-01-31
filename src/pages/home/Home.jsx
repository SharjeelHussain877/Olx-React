import React, { useEffect, useState } from "react";
import Categories from "../../components/categories/category.jsx";
import OlxCarousel from "../../components/carousel/carousel.jsx";
import ProductCard from "../../components/card/card.jsx";
import Details from "../../components/details/details.jsx";

async function getData() {
  const response = await fetch("https://dummyjson.com/products");
  const result = await response.json();
  return result;
}

function Home() {
  const [data, setData] = useState("");
  const [smartphones, setSmartphones] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const [groceries, setGroceries] = useState([]);
  const [skincare, setSkincare] = useState([]);
  const [fragrances, setFragrances] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        setData(result);

        if (Array.isArray(result.products)) {
          const smartphonesData = result.products.filter(
            (product) => product.category === "smartphones"
          );
          smartphonesData.pop();
          setSmartphones(smartphonesData);

          const laptopData = result.products.filter(
            (product) => product.category === "laptops"
          );
          laptopData.pop();
          setLaptops(laptopData);

          const groceriesData = result.products.filter(
            (product) => product.category === "groceries"
          );
          groceriesData.pop();
          setGroceries(groceriesData);

          const skincareData = result.products.filter(
            (product) => product.category === "skincare"
          );
          skincareData.pop();
          setSkincare(skincareData);

          const fragrancesData = result.products.filter(
            (product) => product.category === "fragrances"
          );
          fragrancesData.pop();
          setFragrances(fragrancesData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <OlxCarousel />
      <Categories />
      <ProductCard prop={smartphones} />
      <ProductCard prop={laptops} />
      <ProductCard prop={groceries} />
      <ProductCard prop={skincare} />
      <ProductCard prop={fragrances} />
    </>
  );
}

export default Home;
