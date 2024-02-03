import React from "react";
import "./category.scss";
import { arr } from "../../assets/index.js";

function Categories() {
  return (
    <div className="container-fluid category mt-3">
      <h1>All Categories</h1>
      <img src="" alt="" />
      <div className="d-flex flex-wrap">
        {arr.map((v, i) => (
          
            <img src={v} key={i} />
          
        ))}
      </div>
    </div>
  );
}

export default Categories;
