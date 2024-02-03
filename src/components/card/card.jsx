import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./card.scss";
import { FaRegHeart, FaHeart } from "react-icons/fa";

function ProductCard({ prop }) {
  console.log(prop)
  const [likedStates, setLikedStates] = useState(
    Array(prop.length).fill(false)
  );

  const handleLikeToggle = (index) => {
    const newLikedStates = [...likedStates];
    newLikedStates[index] = !newLikedStates[index];
    setLikedStates(newLikedStates);
  };

  return (
    <div className="container smartphones mt-5">
      {/* <h1>
        {prop.length > 0
          ? prop[0].category
            ? prop[0].category.charAt(0).toUpperCase() +
              prop[0].category.slice(1)
            : "Default Category"
          : "Default Category"}
      </h1> */}
      <div>
        {Array.isArray(prop) &&
          prop.map((v, i) => (
            <div className="cards" key={v.id}>
              <Link
                to={`/details/${v.id}`}
                className="card-link"
                style={{ textDecoration: "none" }}
              >
                <div>
                  <img src={v.imgUrl} alt="" />
                </div>
              </Link>
              <div className="card-details-sec">
                <div>
                  <p className="title">Rs: {v.price}$</p>
                  {likedStates[i] ? (
                    <FaHeart
                      className="like-icon liked"
                      onClick={() => handleLikeToggle(i)}
                    />
                  ) : (
                    <FaRegHeart
                      className="like-icon"
                      onClick={() => handleLikeToggle(i)}
                    />
                  )}
                </div>
                <h6>{v.title}</h6>
                <p className="description">{v.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductCard;
