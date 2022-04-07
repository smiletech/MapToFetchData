import React, { useState, useEffect } from "react";
import axios from "axios";

const BaseUrl = "https://fakestoreapi.com/products";

function Card({ index }) {
  const [Product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(BaseUrl).then((response) => {
      if (response.status === 200) setProduct(response);
    });
  }, []);

  return (
    <div className="card">
      <img
        src={Product !== null && Product.data[index].image}
        className="card-img-top"
        alt="Not Found"
      />
      <div className="card-body">
        <h5 className="card-title">
          {Product !== null && Product.data[index].title.slice(0, 40)}
        </h5>
        <p className="card-text">
          {Product !== null && Product.data[index].description.slice(0, 50)}
        </p>
        <p className="card-text">
          {Product !== null && Product.data[index].rating["rate"] + "   "}
          <i className="bi bi-star-fill"></i>
        </p>

        <p className="card-text">
          {Product !== null && Product.data[index].price + "   $"}
        </p>
        <button onClick={greetUser} href="/" className="btn btn-primary">
          Buy Now
        </button>
      </div>
      {/* } */}
    </div>
  );
}

function greetUser() {
  console.log("Navin Kumar");
}

export default Card;

// {Product !== null &&
//   Product.map((pro) => {
//     console.log(pro);
//   })}
