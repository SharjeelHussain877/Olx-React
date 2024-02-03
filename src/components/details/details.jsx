import "./details.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useEffect, useState } from "react";
import { mobileAddImg } from "../../assets";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";

async function getData(id) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const result = await response.json();
  return result;
}

const Details = () => {
  const [detail, setDetail] = useState(null);
  const param = useParams();
  const { id } = param;
  const productID = id && Number(parseInt(id));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData(productID);
        setDetail(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [productID]);

  if (!detail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container product-details mt-3">
      <div className="add-img">
        <img src={mobileAddImg} alt="Mobile" width="100%" />
      </div>
      <div className="product mt-5">
        <div className="row">
          {/* <div className="col-sm-12 col-md-6">
            <div className="box">
              <Carousel useKeyboardArrows={true}>
                {detail.images.map((URL, index) => (
                  <div className="slide" key={index}>
                    <img alt="Product" src={URL} />
                  </div>
                ))}
              </Carousel>
            </div>
          </div> */}
          <div className="right col-sm-12 col-md-6">
            <div className="details">
              <div>
                <h1>{detail.title}</h1>
                <p><span>Category:</span> {detail.category}</p>
                <p><div className="descrip">Description: </div>{detail.description}</p>
                <p className="price">Price: {detail.price}$</p>
              </div>
              <div className="cart-btn">
                <button>Add to Cart</button>
              </div>
            </div>
            <div className="add-img">
              <img src={mobileAddImg} alt="Mobile" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
